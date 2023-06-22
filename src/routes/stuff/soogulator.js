import React, { useState, useEffect } from 'react'
import '../../App.css'
import Select from './select'
import Input from './input'
import Table from './table'
import data from './productList.json'

const Soogulator = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState('')
  const [productName, setProductName] = useState('')
  const [productQuantity, setProductQuantity] = useState('')
  const [sugarPer100g, setSugarPer100g] = useState('')
  const [tableData, setTableData] = useState([])

  // useEffect(() => {
  //   fetch("./routes/stuff/productList.json")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.log(error))
  // }, [])

  useEffect(() => {
    if (data)
      setProducts(data)
  }, [])

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
    <div>
      <div className="form">
        <Select
          options={products.map((product) => product.name)}
          value={selectedProduct}
          onChange={handleProductChange}
        />
        <Input label="Nazwa składnika" value={productName} onChange={handleProductNameChange} />
        <Input label="Ilość produktu" value={productQuantity} onChange={handleProductQuantityChange} />
        <Input label="Ilość produktu na 100g" value={sugarPer100g} onChange={handleProductSugarChange} />
        <button onClick={handleAddClick}>DODAJ</button>
      </div>
      <Table data={tableData} />
    </div>
  )
}

export default Soogulator