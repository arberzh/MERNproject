import React, { useState } from "react";
import { addOne } from './services/porosite'
const ShtoPorosi = () => {

const [name, setName] = useState('');
const [product, setProduct] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addOne({ fullName: name, product: product });
      console.log('ok', response);
      setName('');
      setProduct('');
    } catch (error) {
      console.log('error', error);
    }

  };
  return (
<div className="container">
  <form onSubmit={handleSubmit}>
  <div className="form-group row">
    <label htmlFor="fullName" className="col-sm-2 col-form-label">Emri Mbiemri</label>
    <div className="col-sm-10">
      <input type="text"
             className="form-control" 
             id="fullName" 
             placeholder="Emri dhe mbiemri i klientit"
             name="fullName"
             value={name}
             onChange={(e) => setName(e.target.value)} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="product" className="col-sm-2 col-form-label">Produkti</label>
    <div className="col-sm-10">
      <input type="text" 
            className="form-control" 
            id="product" 
            placeholder="Produkti i shitur tek klienti"
            name="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)} />
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Shto porosinë</button>
    </div>
  </div>
</form>
    </div>
  );
};
export default ShtoPorosi