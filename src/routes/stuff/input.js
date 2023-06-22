import React from 'react';

export default function Input ({ label, value, onChange}) {
  return (
    <div>
      <label>{label}</label>
      <input className="border-2 border-black" type="text" value={value} onChange={onChange} />
    </div>
  )
}
