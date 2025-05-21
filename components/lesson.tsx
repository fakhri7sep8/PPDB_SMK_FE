// components/LessonRow.tsx

import React from 'react';

interface LessonRowProps {
  className: string;
  teacher: string;
  subject: string;
  starting: string;
  email: string;
}

export default function LessonRow({
  className,
  teacher,
  subject,
  starting,
  email,
}: LessonRowProps) {
  return (
    <tr className="text-sm text-gray-700 text-center">
      <td className="p-2">{className}</td>
      <td className="p-2">{teacher}</td>
      <td className="p-2">{subject}</td>
      <td className="p-2">{starting}</td>
      <td className="p-2">
        <a className="text-blue-600 hover:underline" href="#">
          {email}
        </a>
      </td>
    </tr>
  );
}
