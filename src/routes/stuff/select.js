import React from 'react';

export default function Select ({ options, value, onChange }) {
  return (
    <select className="h-10 py-2 px-4 border border-gray-300 w-full" value={value} onChange={onChange}>
      <option value="">Wybierz składnik</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}