import React from "react";
import "./style.css";
import { Table } from "antd";
function Department() {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Department name",
      dataIndex: "departmentName",
      key: "departmentName"
    }
  ];
  const data = [
    {
      departmentName: "Orthopedia",
      id: "1"
    },
    {
      departmentName: "Xray",
      id: "2"
    },
    {
      departmentName: "Radiology",
      id: "3"
    }
  ];
  return (
    <div className=" " style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Department;
