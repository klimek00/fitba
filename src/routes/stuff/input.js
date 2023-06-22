import React from 'react';

export default function Input ({ label, value, onChange}) {
  return (
    <div className="mb-4">
      <label>{label}</label>
      <input className="w-full px-4 py-2 border border-gray-300 rounded-md" type="text" value={value} onChange={onChange} />
    </div>
  )
}
