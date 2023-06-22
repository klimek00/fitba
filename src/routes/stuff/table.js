import React from 'react';

export default function Table ({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Ilość cukru</th>
          <th>Ilość produktu</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.sugar} g</td>
            <td>{product.quantity} g</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}