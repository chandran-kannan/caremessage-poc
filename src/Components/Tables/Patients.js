import React from "react";
import "./style.css";
import { Space, Table, Tag } from "antd";
function Patients() {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Mrn no",
      dataIndex: "mrnno",
      key: "mrnno"
    },
    {
      title: "Firstname",
      dataIndex: "firstName",
      key: "firstName"
    },
    {
      title: "Lastname",
      dataIndex: "lastName",
      key: "lastName"
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob"
    }
  ];
  const data = [
    {
      id: 1,
      mrnno: "4545454",
      firstName: "Sam",
      lastName: "Moses",
      dob: "14/09/1999"
    },
    {
      id: 2,
      mrnno: "2142",
      firstName: "Vincent",
      lastName: "Ben",
      dob: "24/05/1998"
    },
    {
      id: 3,
      mrnno: "4545454",
      firstName: "Mark",
      lastName: "Ben",
      dob: "11/09/2000"
    },
    {
      id: 4,
      mrnno: "16584",
      firstName: "Thomas",
      lastName: "Joe",
      dob: "04/10/2011"
    },
    {
      id: 5,
      mrnno: "652",
      firstName: "Daniel",
      lastName: "Rull",
      dob: "14/09/1999"
    }
  ];
  return (
    <div className=" " style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Patients;
