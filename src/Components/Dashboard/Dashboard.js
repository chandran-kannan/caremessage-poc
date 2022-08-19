import React, { useState } from "react";
import Appointments from "../Tables/Appointments";
import Department from "../Tables/Department";
import Location from "../Tables/Location";
import Patients from "../Tables/Patients";
import Providers from "../Tables/Providers";
import Users from "../Tables/Users";
import "./Dashboard.css";
import patients from "../../assets/patients.png";
import vis from "../../assets/vis.png";
import op from "../../assets/op.png";
import nw from "../../assets/nw.png";
function Dashboard() {
  const [activeMenu, setactiveMenu] = useState("Appointments");
  const navMenu = [
    {
      name: "Users",
      icon: <i className="fa fa-regular fa-house"></i>
    },
    {
      name: "Patients",
      icon: <i className="fa fa-regular fa-hospital-user"></i>
    },
    {
      name: "Location",
      icon: <i className="fa fa-map-marker" aria-hidden="true"></i>
    },
    {
      name: "Department",
      icon: <i className="fa fa-solid fa-file-chart-column"></i>
    },
    {
      name: "Providers",
      icon: <i className="fa fa-solid fa-chalkboard-user"></i>
    },
    { name: "Appointments", icon: <i className="fa fa-solid fa-bars"></i> }
  ];
  return (
    <>
      <section id="sideMenu">
        <nav className="dashboard-nav">
          <div className=" dashboard-logo">Care message</div>
          {navMenu.map((data) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <span
              key={data.name}
              onClick={() => {
                setactiveMenu(data.name);
              }}
              //   href="/home"
              className={`${activeMenu === data.name ? "active" : ""} `}
            >
              {data.icon}
              {data.name}
            </span>
          ))}
        </nav>
      </section>

      <section
        className=""
        style={{
          marginLeft: "240px",
          height: "100%",
          overflowY: "auto",
          backgroundColor: "#e7eaf4"
        }}
      >
        <header className=" dashboard-header">
          <div className="search-area">
            {/* <i className="fa fa-search" aria-hidden="true"></i> */}
            <input type="text" placeholder="search" />
          </div>
          <div className="user-area">
            <span href="/home">+ Add</span>
            <a href="/home" className="notification">
              <i className="fa fa-bell-o" aria-hidden="true"></i>
              <span className="circle">3</span>
            </a>
            <a href="/home">
              <div className="user-img"></div>
              {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
            </a>
          </div>
        </header>
        <section
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "24px"
          }}
        >
          <PatientsCard val={5} src={patients} />
          <PatientsCard val={5} src={vis} />
          <PatientsCard val={5} src={op} />
          <PatientsCard val={5} src={nw} />
        </section>
        <section>
          {/* <CChart
            type="doughnut"
            data={{
              labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
              datasets: [
                {
                  backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                  data: [40, 20, 80, 10]
                }
              ]
            }}
          /> */}
        </section>
        <section
          className=""
          style={{ padding: "24px", height: "calc(100% - 58px)" }}
        >
          <ConditionalRender condition={activeMenu === "Users"}>
            <Users />
          </ConditionalRender>
          <ConditionalRender condition={activeMenu === "Patients"}>
            <Patients />
          </ConditionalRender>
          <ConditionalRender condition={activeMenu === "Location"}>
            <Location />
          </ConditionalRender>
          <ConditionalRender condition={activeMenu === "Department"}>
            <Department />
          </ConditionalRender>
          <ConditionalRender condition={activeMenu === "Providers"}>
            <Providers />
          </ConditionalRender>
          <ConditionalRender condition={activeMenu === "Appointments"}>
            <Appointments />
          </ConditionalRender>
        </section>
      </section>
    </>
  );
}

export default Dashboard;
const ConditionalRender = ({ condition, children }) => {
  return condition ? children : "";
};
const PatientsCard = ({ val, src }) => {
  return (
    <div
      className=""
      style={{ position: "relative", height: "169px", width: "263px" }}
    >
      <img alt="hehe" src={src} height="100%" width="100%" />
      <span
        className=""
        style={{
          position: "absolute",
          fontSize: "24px",
          color: "white",
          left: "20px",
          bottom: "45px"
        }}
      >
        {val}
      </span>
    </div>
  );
};
