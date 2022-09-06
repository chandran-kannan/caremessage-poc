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
import {
  FaUserAlt,
  FaHospitalUser,
  FaLocationArrow,
  FaUserMd,
  FaBuilding
} from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { Area } from "../Charts/Area";
import { PieChart } from "../Charts/Pie";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  Filler,
  Legend,
  LineElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom"
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart"
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};
function Dashboard() {
  const [activeMenu, setactiveMenu] = useState("Appointments");
  const navMenu = [
    {
      name: "Users",
      icon: <FaUserAlt className="fa " />
    },
    {
      name: "Patients",
      icon: <FaHospitalUser className="fa " />
    },
    {
      name: "Location",
      icon: <FaLocationArrow className="fa " />
    },
    {
      name: "Department",
      icon: <FaBuilding className="fa " />
    },
    {
      name: "Providers",
      icon: <FaUserMd className="fa" />
    },
    { name: "Appointments", icon: <i className="fa fa-solid fa-bars"></i> }
  ];

  const pieChartData = {
    labels: ["Open", "Close", "Pending"],
    datasets: [
      {
        label: "Appointment Status",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(82, 196, 26, 0.24)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(82, 196, 26, 0.24)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderWidth: 2
      }
    ]
  };
  return (
    <>
      <section id="sideMenu">
        <nav className="dashboard-nav">
          <div
            className=" dashboard-logo"
            onClick={(e) => {
              console.log(e);
            }}
          >
            Care message
          </div>
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
              {activeMenu === data.name ? (
                <span className="clip-top"></span>
              ) : (
                ""
              )}
              {data.icon}
              {data.name}
              {activeMenu === data.name ? (
                <span className="clip-bottom"></span>
              ) : (
                ""
              )}
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
        <section>{/* <Doughnut data={[]} /> */}</section>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "24px"
          }}
          className="w-100 d-flex flex-space-between "
        >
          <div className="w-30 d-flex align-items-center">
            <Bar options={options} data={data} height="" />
          </div>
          <div className="w-30 d-flex align-items-center">
            <Area />
          </div>
          <div className="w-30  ">
            {/* <Bar options={options} data={data} height="" /> */}
            <PieChart data={pieChartData} />
          </div>
        </section>
        <section
          className=""
          style={{
            padding: "24px",
            height: "calc(100% - 58px)",
            borderRadius: "16px"
          }}
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
