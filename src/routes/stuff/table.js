import React from 'react';

export default function Table ({ data }) {
  return (
    <table className="w-full border border-gray-300">
      <thead className="">
        <tr>
          <th className="px-4 py-2 font-bold bg-gray-200">Nazwa</th>
          <th className="px-4 py-2 font-bold bg-gray-200">Ilość cukru</th>
          <th className="px-4 py-2 font-bold bg-gray-200">Ilość produktu</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border-b border-gray-300">{product.name}</td>
            <td className="px-4 py-2 border-b border-gray-300">{product.sugar} g</td>
            <td className="px-4 py-2 border-b border-gray-300">{product.quantity} g</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}