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
import Card from "@/components/card";
import usePesertaModule from "@/hook/useGetPeserta";

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

  const {useGetPeserta} = usePesertaModule()
  const {data} = useGetPeserta()
  console.log(data)
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar />

      <main className="ml-60 p-6 overflow-auto flex-1 flex flex-col gap-7">
        <div className="flex flex-col md:flex-row gap-6">
          <Card  variant="outline" padding="lg" width="responsive">
            <h3 className="text-lg font-semibold mb-2">{data?.count}</h3>
            <p className="text-sm text-gray-600">
              Data Peserta
            </p>
          </Card>
          <Card variant="outline" padding="lg" width="responsive">
            <h3 className="text-lg font-semibold mb-2">10</h3>
            <p className="text-sm text-gray-600">
              Peserta Menunggu
            </p>
          </Card>
          <Card variant="outline" padding="lg" width="responsive">
            <h3 className="text-lg font-semibold mb-2">10</h3>
            <p className="text-sm text-gray-600">
              Peserta Diterima
            </p>
          </Card>
          <Card variant="outline" padding="lg" width="responsive">
            <h3 className="text-lg font-semibold mb-2">10</h3>
            <p className="text-sm text-gray-600">
              Peserta Ditolak
            </p>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Hasil Tes Siswa Baru</h2>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
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
        
      </main>

      {/* <aside className="w-80 bg-white p-6 border-l h-screen overflow-auto">
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
      </aside> */}
    </div>
  );
}
