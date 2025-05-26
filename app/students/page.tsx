"use client";

import Sidebar from "@/components/sidebar";
import useStudents from "@/hook/useUpdatePeserta";


export default function StudentsPage() {
  const { students, updateStatus } = useStudents();

  const studentsPending = students.filter((s) => s.status === "Pending");
  const studentsCompleted = students.filter(
    (s) => s.status === "Lulus" || s.status === "Gagal"
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <main className="pl-64 p-10 w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Students</h1>

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
                  <td className="p-4">{student.nama_lengkap}</td>
                  <td className="p-4">{student.email}</td>
                  <td
                    className={`p-4 font-semibold ${
                      student.status === "Lulus"
                        ? "text-green-600"
                        : student.status === "Gagal"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {student.status}
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => updateStatus(student.id, "Lulus")}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                      Lulus
                    </button>
                    <button
                      onClick={() => updateStatus(student.id, "Gagal")}
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
                  <td className="p-4">{student.nama_lengkap}</td>
                  <td className="p-4">{student.email}</td>
                  <td
                    className={`p-4 font-semibold ${
                      student.status === "Lulus"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
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
