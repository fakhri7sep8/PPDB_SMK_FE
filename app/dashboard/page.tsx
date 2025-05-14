import Button from "@/components/button";
import Calendar from "@/components/calender";
import React from "react";
import Image from "next/image";
import LessonRow from "@/components/lesson";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <aside className="w-60 bg-white p-6 border-r gap-20 flex flex-col">
        <Image src="/assets/MQ.png" alt="Logo MQ" width={300} height={300} />
        <nav className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <a href="/dashboard" className="flex items-center gap-2">
              <span>📊</span>
              <span>Dashboard</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <a href="/profile" className="flex items-center gap-2">
              <span>👤</span>
              <span>Profile</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <a href="/teachers" className="flex items-center gap-2">
              <span>👩‍🏫</span>
              <span>Teachers</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <a href="/students" className="flex items-center gap-2">
              <span>👨‍🎓</span>
              <span>Students</span>
            </a>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto flex gap-7 flex-col">
        <div className="w-full bg-white shadow justify-between flex h-[40%] rounded-3xl px-6 items-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Welcome Back Admin</h1>
            <p className="w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              possimus illo aut consequuntur sed est, quasi laboriosam.
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
              width={350}
              height={350}
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Lessons</h3>
          <table className="w-full bg-white rounded-xl shadow-md">
            <thead className="text-center bg-gray-100">
              <tr>
                <th className="p-2">Class</th>
                <th className="p-2">Teacher Name</th>
                <th className="p-2">Members</th>
                <th className="p-2">Starting</th>
                <th className="p-2">Material</th>
                <th className="p-2">Payment</th>
              </tr>
            </thead>
            <tbody>
              <LessonRow
                className="A1"
                teacher="Bernard Carr"
                members="3"
                starting="12.07.2022"
                material="Download"
                payment="Done"
              />
              <LessonRow
                className="A1"
                teacher="Henry Poole"
                members="4"
                starting="17.07.2022"
                material="Download"
                payment="Pending"
              />
              <LessonRow
                className="A1"
                teacher="Helena Lowe"
                members="5"
                starting="22.07.2022"
                material="Download"
                payment="Done"
              />
            </tbody>
          </table>
        </div>
      </main>
      <aside className="w-80 bg-white p-6 border-l">
        <div className="flex flex-col items-center mb-6 gap-1">
          <Image
            src="/assets/profile.png"
            alt="profile"
            width={200}
            height={200}
          ></Image>
          <h3 className="text-lg font-semibold">Stella Walton</h3>
          <p className="text-sm text-gray-500">Teacher</p>
        </div>
        <Calendar />
      </aside>
    </div>
  );
}
