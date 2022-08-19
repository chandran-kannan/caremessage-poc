import React from "react";
import "./style.css";
import { Table } from "antd";
function Providers() {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
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
      title: "Provider credential",
      dataIndex: "providerCredential",
      key: "providerCredential"
    }
  ];
  const data = [
    {
      id: 1,
      mrnno: "4545454",
      firstName: "Sam",
      lastName: "Moses",
      providerCredential: "Dr"
    },
    {
      id: 2,
      mrnno: "2142",
      firstName: "Vincent",
      lastName: "Ben",
      providerCredential: "Dr"
    },
    {
      id: 3,
      mrnno: "4545454",
      firstName: "Mark",
      lastName: "Ben",
      providerCredential: "MD"
    },
    {
      id: 4,
      mrnno: "16584",
      firstName: "Thomas",
      lastName: "Joe",
      providerCredential: "Dr"
    },
    {
      id: 5,
      mrnno: "652",
      firstName: "Daniel",
      lastName: "Rull",
      providerCredential: "Dr"
    }
  ];
  return (
        <div className=" " style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Providers;
