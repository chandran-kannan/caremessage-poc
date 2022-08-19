import React from "react";
import "./style.css";
import { Table } from "antd";
function Location() {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Location name",
      dataIndex: "locationName",
      key: "locationName"
    }
  ];
  const data = [
    {
      locationName: "Doctor room",
      id: "1"
    },
    {
      locationName: "Xray room",
      id: "2"
    },
    {
      locationName: "Pharma counter",
      id: "3"
    }
  ];
  return (
    <div className=" " style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Location;
