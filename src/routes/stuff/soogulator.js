import React, { useState, useEffect } from 'react'
import '../../App.css'
import Select from './select'
import Input from './input'
import Table from './table'
import data from './productList.json'
import { DrawChart, prepareChartData, splitData } from './prepareChart'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
// import { Pie } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)

// const chartOld = {
//   labels: ["Miód"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [80],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)"
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)"
//       ],
//       borderWidth: 1
//     }
//   ]
// }

const Soogulator = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState('')
  const [productName, setProductName] = useState('')
  const [productQuantity, setProductQuantity] = useState('')
  const [sugarPer100g, setSugarPer100g] = useState('')
  const [tableData, setTableData] = useState([])
  const [chartData, setChartData] = useState()

  useEffect(() => {
    if (data)
      setProducts(data)
  }, [])

  useEffect(() => {
    //prevent first render
    if (tableData.length) {
      //split tableData so it contains only names and sugar amount
      let prepare = splitData(tableData)
      
      //create data used in Chart.JS
      prepare = prepareChartData(prepare[0], prepare[1])
  
      setChartData(prepare)
    }
  }, [tableData])

    //update input on product chosen 
  const handleProductChange = (e) => {
    const selectedProduct = e.target.value
    setSelectedProduct(selectedProduct)

    const product = products.find((item) => item.name === selectedProduct)
    if (product) {
      setProductName(product.name)
      setProductQuantity(100)
      setSugarPer100g(product.sugarPer100g)
    }
  }

  const handleProductNameChange = (e) => {
    setProductName(e.target.value)
  }
  const handleProductQuantityChange = (e) => {
    setProductQuantity(e.target.value)
  }
  const handleProductSugarChange = (e) => {
    setSugarPer100g(e.target.value)
  }

  //TODO: fix empty inputs
  const handleAddClick = () => {
    // calculate sugar based on given quantity
    const sugar = (productQuantity * sugarPer100g) / 100

    // add product to table
    const newProduct = {
      name: productName,
      sugar: sugar.toFixed(2),
      quantity: productQuantity,
    }
    setTableData([...tableData, newProduct])

    // clear inputs
    setSelectedProduct('')
    setProductName('')
    setProductQuantity('')
    setSugarPer100g('')
  }

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="w-1/4 p-6">
            <div className="form">
              <Select
                options={products.map((product) => product.name)}
                value={selectedProduct}
                onChange={handleProductChange}
              />
              <Input label="Nazwa składnika" value={productName} onChange={handleProductNameChange} />
              <Input label="Ilość produktu [g]" value={productQuantity} onChange={handleProductQuantityChange} />
              <Input label="Ilość cukru na 100g [g]" value={sugarPer100g} onChange={handleProductSugarChange} />
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleAddClick}>DODAJ</button>
            </div>
          </div>
          <div className="w-1/4 p-6">
            <Table data={tableData} />
          </div>
        </div>
        <div className="h-1/4 p-8 w-full flex justify-center">
          <div className="w-1/4">
            {chartData && <DrawChart chartData={chartData}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Soogulator