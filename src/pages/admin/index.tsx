import { useState } from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

import Layout from "../../components/Layout";
import Cards from "../../components/Cards";

const AdminDashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend,
    Title
  );

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Okt",
    "Nov",
    "Des",
  ];

  const [data] = useState({
    labels,
    datasets: [
      {
        label: "Jumlah Pengunjung",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const words = [
    {
      title: "Title 1",
      desc: faker.lorem.lines(),
    },
    {
      title: "Title 2",
      desc: faker.lorem.lines(),
    },
    {
      title: "Title 3",
      desc: faker.lorem.lines(),
    },
  ];

  return (
    <Layout subTitle="Admin Dashboard">
      <Cards>
        <Line options={options} data={data} />
      </Cards>
      <div className="flex lg:flex-row my-10 flex-col">
        {words.map((item) => {
          return (
            <Cards className="w-full lg:mx-5">
              <div className="flex flex-col space-y-4">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </Cards>
          );
        })}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
