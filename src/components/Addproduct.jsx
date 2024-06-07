import React from 'react'
import Navbar from './Navbar'

const Addproduct = () => {
  return (
    <div>

<Navbar/>

<div className="container">
    <div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
<label htmlFor="" className="form-label">Product ID</label>
<input type="Product ID" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
            <label htmlFor="" className="form-label">ProductName</label>
            <input type="ProductName" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
            <label htmlFor="" className="form-label">Category</label>
            <input type="Category" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
            <label htmlFor="" className="form-label">Brand</label>
            <select name="" id="" className="form-control">
                <option value="Mothercare">Mothercare</option>
                <option value="Gini & Jony">Gini & Jony</option>
                <option value="Babyhug">Babyhug</option>
                <option value="Nino Bambino">Nino Bambino</option>
            </select>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Description</label>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
            <label htmlFor="" className="form-label">Manufacturing Date</label>
            <input type="date" name="" id="" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
            <label htmlFor="" className="form-label">Expiry Date</label>
            <input type="date" name="" id="" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
            <label htmlFor="" className="form-label">Price</label>
            <input type="Price" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
            <button className="btn btn-primary">Submit</button>
        </div>
        
    </div>
</div>

    </div>
  )
}

export default Addproduct