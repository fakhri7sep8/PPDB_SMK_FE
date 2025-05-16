"use client";

import Sidebar from "@/components/sidebar";

export default function TeacherPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <main className="pl-64 p-10 w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Teacher</h1>
          <button className="bg-green-500 hover:bg-white hover:border-green-500 border-transparent hover:text-green-500 text-white px-5 py-2 rounded shadow-md transition border">
            Add Teacher
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t hover:bg-gray-50">
                <td className="p-4">Mr. John Doe</td>
                <td className="p-4">john@school.com</td>
                <td className="p-4">Guru</td>
              </tr>
              <tr className="border-t hover:bg-gray-50">
                <td className="p-4">Ms. Sarah Smith</td>
                <td className="p-4">sarah@school.com</td>
                <td className="p-4">Guru</td>
              </tr>
              <tr className="border-t hover:bg-gray-50">
                <td className="p-4">Mr. Alex Brown</td>
                <td className="p-4">alex@school.com</td>
                <td className="p-4">Guru</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
