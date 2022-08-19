import React from "react";
import "./style.css";
import { Space, Table, Tag } from "antd";
function Users() {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username"
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password"
    }
  ];
  const data = [
    {
      username: "John Brown",
      password: 32464654,
      id: "1"
    },
    {
      username: "Mac Brown",
      password: 1542232,
      id: "2"
    },
    {
      username: "Sam Brown",
      password: 3874142,
      id: "3"
    }
  ];
  return (
    <div className=" " style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Users;
