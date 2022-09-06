import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import {
  deleteAppointment,
  fetchAppointments,
  updateAppointment
} from "../../Services/Api";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Appointment = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const [deleteKey, setDeleteKey] = useState("");

  async function fetchAppointmentsHandler() {
    let res = { response: [] };
    res = await fetchAppointments();
    if (res.response.length > 0) {
      res.response = res.response.map((data) => ({
        ...data,
        key: data.appointmentid
      }));
    }
    setData(res?.response);
  }

  useEffect(() => {
    (async () => {
      await fetchAppointmentsHandler();
    })();
  }, []);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
    setDeleteKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        console.log({ ...item, ...row });
        await updateAppointment({ ...item, ...row });
        await fetchAppointmentsHandler();
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Appointment ID",
      dataIndex: "appointmentid",
      key: "appointmentid"
      // width: "25%",
      //   editable: true
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      // width: "15%",
      editable: true
    },
    {
      title: "Patient location ID",
      dataIndex: "patientlocationid",
      key: "patientlocationid",
      // width: "40%",
      editable: true
    },
    {
      title: "Start time",
      dataIndex: "starttime",
      key: "starttime",
      // width: "40%",
      editable: true
    },
    {
      title: "Department ID",
      dataIndex: "departmentid",
      key: "departmentid",
      // width: "40%",
      editable: true
    },
    {
      title: "Encounter State",
      dataIndex: "encounterstate",
      key: "encounterstate",
      // width: "40%",
      editable: true
    },
    {
      title: "Appointment status",
      dataIndex: "appointmentstatus",
      key: "appointmentstatus",
      // width: "40%",
      editable: true
    },
    {
      title: "Patient ID",
      dataIndex: "patientid",
      key: "patientid",
      // width: "40%",
      editable: true
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      // width: "40%",
      editable: true
    },
    {
      title: "Encounter ID",
      dataIndex: "encounterid",
      key: "encounterid",
      // width: "40%",
      editable: true
    },
    {
      title: "Start check in",
      dataIndex: "startcheckin",
      key: "startcheckin",
      // width: "40%",
      editable: true
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={async () => {
                save(record.key);
              }}
              style={{
                marginRight: 8
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <span>Cancel</span>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            <FaPencilAlt />
          </Typography.Link>
        );
      }
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      render: (_, record) => {
        const deletable = record.key === deleteKey;
        return deletable ? (
          <span>
            <Typography.Link
              onClick={async () => {
                // save(record.key);
                await deleteAppointment(record.appointmentid);
                await fetchAppointmentsHandler();
                setDeleteKey("");
              }}
              style={{
                marginRight: 8
              }}
            >
              Confirm
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <span>Cancel</span>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={deleteKey !== ""}
            onClick={() => setDeleteKey(record.key)}
          >
            <FaTrashAlt style={{ color: "red" }} />
          </Typography.Link>
        );
      }
    }
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        key: col.key,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });
  return (
    <>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell
            }
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel
          }}
        />
      </Form>
    </>
  );
};

export default Appointment;
