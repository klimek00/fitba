import React from 'react';

export default function Select ({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Wybierz składnik</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}