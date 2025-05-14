// components/LessonRow.tsx

import React from 'react';

interface LessonRowProps {
  className: string;
  teacher: string;
  members: string;
  starting: string;
  material: string;
  payment: 'Done' | 'Pending';
}

export default function LessonRow({
  className,
  teacher,
  members,
  starting,
  material,
  payment,
}: LessonRowProps) {
  return (
    <tr className="text-sm text-gray-700 text-center">
      <td className="p-2">{className}</td>
      <td className="p-2">{teacher}</td>
      <td className="p-2">{members}</td>
      <td className="p-2">{starting}</td>
      <td className="p-2">
        <a className="text-blue-600 hover:underline" href="#">
          {material}
        </a>
      </td>
      <td className="p-2">
        <span
          className={payment === 'Done' ? 'text-green-600' : 'text-orange-600'}
        >
          {payment}
        </span>
      </td>
    </tr>
  );
}
