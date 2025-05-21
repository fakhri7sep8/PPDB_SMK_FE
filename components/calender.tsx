"use client"

import React, { useState } from 'react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date()); // Menyimpan tanggal saat ini
  const [selectedDate, setSelectedDate] = useState<number | null>(null); // Menyimpan tanggal yang dipilih

  // Menghitung bulan dan tahun saat ini
  const month = currentDate.getMonth(); // Mengambil bulan dari currentDate (0 = Januari, 1 = Februari, dst.)
  const year = currentDate.getFullYear();

  // Menghitung hari pertama bulan ini dan total hari dalam bulan
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Hari pertama bulan
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate(); // Total hari dalam bulan

  // Menghitung hari untuk menampilkan tanggal yang sebelumnya dan berikutnya
  const dates = Array.from({ length: 35 }, (_, i) => {
    const day = i + 1 - firstDayOfMonth;
    return day > 0 && day <= totalDaysInMonth ? day : null;
  });

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Nama bulan
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Nama hari
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <button onClick={handlePrevMonth} className="text-gray-700 hover:text-blue-500">
          Previous
        </button>
        <div className="text-center text-lg font-semibold">
          {`${monthNames[month]} ${year}`} 
        </div>
        <button onClick={handleNextMonth} className="text-gray-700 hover:text-blue-500">
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm text-gray-500 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`text-center py-1 rounded-full cursor-pointer ${
              date === selectedDate
                ? 'bg-blue-600 text-white'
                : date !== null
                ? 'text-gray-700 hover:bg-blue-100'
                : 'text-transparent' // Hide invalid dates (null)
            }`}
            onClick={() => date && handleDateClick(date)}
          >
            {date || ''}
          </div>
        ))}
      </div>
    </div>
  );
}
