"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/card";
import useStudents from "@/hook/useUpdatePeserta";

interface Peserta {
  id: number;
  nama_lengkap: string;
  email: string;
  status: string;
}

export default function DashboardPage() {
  const { students, updateStatus } = useStudents();
  const countMenunggu = students.filter(
    (s) => s.status.toLowerCase() === "pending"
  ).length;
  const countDiterima = students.filter((s) => {
    const status = s.status.toLowerCase();
    return status === "lulus" || status === "diterima";
  }).length;
  const countDitolak = students.filter((s) => {
    const status = s.status.toLowerCase();
    return status === "ditolak" || status === "gagal";
  }).length;

  const total = students.length || 0

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar />

      <main className="ml-60 p-6 overflow-auto flex-1 flex flex-col gap-7">
        <div className="flex flex-col md:flex-row gap-6">
          <Card variant="outline" padding="lg" width="responsive">
            <h3 className="text-lg font-semibold mb-2">{students.length}</h3>
            <p className="text-sm text-gray-600">Data Peserta</p>
          </Card>
          <Card variant="outline" padding="lg" width="responsive">
            <h3 className="text-lg font-semibold mb-2">{countMenunggu}</h3>
            <p className="text-sm text-gray-600">Peserta Menunggu</p>
          </Card>
          <Card variant="outline" padding="lg" width="responsive">
            <h3 className="text-lg font-semibold mb-2">{countDiterima}</h3>
            <p className="text-sm text-gray-600">Peserta Diterima</p>
          </Card>
          <Card variant="outline" padding="lg" width="responsive">
            <h3 className="text-lg font-semibold mb-2">{countDitolak}</h3>
            <p className="text-sm text-gray-600">Peserta Ditolak</p>
          </Card>
        </div>
        <div className="mt-10 w-full h-80 flex justify-start items-center relative">
          <div className="shadow-lg rounded-lg p-4 bg-white flex flex-col items-center justify-center">
            <ResponsiveContainer width={300} height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Lulus", value: countDiterima },
                    { name: "Gagal", value: countDitolak },
                    { name: "Menunggu", value: countMenunggu },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  innerRadius={70}
                  paddingAngle={0}
                  labelLine={false}
                  stroke="#fff"
                  strokeWidth={2}
                >
                  <Cell fill="#4CAF50" />
                  <Cell fill="#F44336" />
                  <Cell fill="#FFC107" />
                </Pie>
                <Tooltip
                  formatter={(value: number, name: string) => [
                    `${value}`,
                    name,
                  ]}
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 text-center text-base font-semibold text-gray-700">
              <span className="inline-flex items-center gap-2 text-[#4CAF50]">
                <span className="w-3 h-3 rounded-full bg-[#4CAF50] inline-block"></span>
                Lulus = {((countDiterima / total) * 100).toFixed(1)}%
              </span>
              <span className="mx-4"></span>
              <span className="inline-flex items-center gap-2 text-[#F44336]">
                <span className="w-3 h-3 rounded-full bg-[#F44336] inline-block"></span>
                Gagal = {((countDitolak / total) * 100).toFixed(1)}%
              </span>
              <span className="mx-4"></span>
              <span className="inline-flex items-center gap-2 text-[#FFC107]">
                <span className="w-3 h-3 rounded-full bg-[#FFC107] inline-block"></span>
                Menunggu = {((countMenunggu / total) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
