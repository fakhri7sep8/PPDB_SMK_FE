"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";

export default function StudentsPage() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aulia Rahmawati", email: "aulia@student.com", status: "Pending" },
    { id: 2, name: "Fajar Prasetyo", email: "fajar@student.com", status: "Pending" },
    { id: 3, name: "Nadya Kusuma", email: "nadya@student.com", status: "Pending" },
    { id: 4, name: "Dinda Sari", email: "dinda@student.com", status: "Lulus" },
    { id: 5, name: "Rendi Anwar", email: "rendi@student.com", status: "Gagal" },
  ]);

  const handleStatusChange = (id: number, status: string) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  // Pisahkan siswa berdasarkan status
  const studentsPending = students.filter((student) => student.status === "Pending");
  const studentsCompleted = students.filter(
    (student) => student.status === "Lulus" || student.status === "Gagal"
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <main className="pl-64 p-10 w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Students</h1>
        </div>

        {/* Siswa yang belum dicap */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <h2 className="text-xl font-semibold p-4">Siswa Belum Dicap</h2>
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {studentsPending.map((student) => (
                <tr key={student.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.email}</td>
                  <td className={`p-4 font-semibold ${student.status === "Lulus" ? "text-green-600" : student.status === "Gagal" ? "text-red-600" : "text-gray-600"}`}>
                    {student.status}
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => handleStatusChange(student.id, "Lulus")}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                      Lulus
                    </button>
                    <button
                      onClick={() => handleStatusChange(student.id, "Gagal")}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Gagal
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Siswa yang sudah dicap */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold p-4">Siswa Sudah Dicap</h2>
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {studentsCompleted.map((student) => (
                <tr key={student.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.email}</td>
                  <td className={`p-4 font-semibold ${student.status === "Lulus" ? "text-green-600" : student.status === "Gagal" ? "text-red-600" : "text-gray-600"}`}>
                    {student.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
