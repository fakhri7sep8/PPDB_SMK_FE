"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import Calendar from "@/components/calender";
import LessonRow from "@/components/lesson";
import Sidebar from "@/components/sidebar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const lineData = [
  { name: "Week1", Earning: 45, Absent: 60, Present: 50 },
  { name: "Week2", Earning: 40, Absent: 50, Present: 65 },
  { name: "Week3", Earning: 80, Absent: 40, Present: 90 },
  { name: "Week4", Earning: 60, Absent: 70, Present: 55 },
  { name: "Week5", Earning: 55, Absent: 65, Present: 70 },
  { name: "Week6", Earning: 50, Absent: 50, Present: 60 },
];

const pieData = [
  { name: "LULUS", value: 60 },
  { name: "GAGAL", value: 30 },
  { name: "Belum Tes", value: 10 },
];

const COLORS = ["#4CAF50", "#F44336", "#FFEB3B"]; // Hijau, Merah, Kuning terang

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar />

      <main className="ml-60 p-6 overflow-auto flex-1 flex flex-col gap-7">
        <div className="w-full bg-white shadow justify-between flex h-[40%] rounded-3xl px-6 items-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Welcome Back Admin</h1>
            <p className="w-[70%]">
              A new day, a new chance to learn and grow.{" "}
              <span className="text-[#D24E4E]">Learn more</span>
            </p>
            <Button
              title="Buy Lesson"
              colorSchema="blue"
              width="Large"
              className="mt-4 shadow-2xl rounded-full"
            />
          </div>
          <div>
            <Image
              src={"/assets/buku2.png"}
              alt="Book"
              width={280}
              height={280}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Management Value</h2>
              <div className="flex gap-2 text-sm">
                <span className="bg-[#FF9F43]/20 text-[#FF9F43] px-3 py-1 rounded-full">
                  Earning
                </span>
                <span className="bg-[#00CFE8]/20 text-[#00CFE8] px-3 py-1 rounded-full">
                  Absent
                </span>
                <span className="bg-orange-400/20 text-orange-400 px-3 py-1 rounded-full">
                  Present
                </span>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }} // Ukuran font label
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Earning"
                  stroke="#FF9F43"
                  fill="#FF9F43"
                  fillOpacity={0.2}
                />
                <Area
                  type="monotone"
                  dataKey="Absent"
                  stroke="#00CFE8"
                  fill="#00CFE8"
                  fillOpacity={0.2}
                />
                <Area
                  type="monotone"
                  dataKey="Present"
                  stroke="#FF8C00"
                  fill="#FF8C00"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Hasil Tes Siswa Baru</h2>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  formatter={(value, entry, index) => {
                    const percentage = pieData[index].value;
                    return (
                      <span className="text-sm">
                        <span style={{ color: COLORS[index] }}>{value}</span>{" "}
                        {percentage}%
                      </span>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Lessons</h3>
          <table className="w-full bg-white rounded-xl shadow-md">
            <thead className="text-center bg-gray-100">
              <tr>
                <th className="p-2">Class</th>
                <th className="p-2">Teacher Name</th>
                <th className="p-2">Subject</th>
                <th className="p-2">Starting</th>
                <th className="p-2">email</th>
              </tr>
            </thead>
            <tbody>
              <LessonRow
                className="A1"
                teacher="Bernard Carr"
                subject="MTK"
                starting="12.07.2022"
                email="hamz@gmail.com"
              />
              <LessonRow
                className="A2"
                teacher="Bernard Carr"
                subject="B.INDO"
                starting="12.07.2022"
                email="hamz@gmail.com"
              />
              <LessonRow
                className="A3"
                teacher="Bernard Carr"
                subject="INGGRIS"
                starting="12.07.2022"
                email="hamz@gmail.com"
              />
            </tbody>
          </table>
        </div>
      </main>

      <aside className="w-80 bg-white p-6 border-l h-screen overflow-auto">
        <div className="flex flex-col items-center mb-6 gap-1">
          <Image
            src="/assets/profile.png"
            alt="profile"
            width={200}
            height={200}
          />
          <h3 className="text-lg font-semibold">Stella Walton</h3>
          <p className="text-sm text-gray-500">Teacher</p>
        </div>
        <Calendar />
      </aside>
    </div>
  );
}

// baru nih 
// jnjnjj