import React, { useState } from "react";
import "../assets/styles/invoiceTemplate.css";
import { useDispatch, useSelector } from "react-redux";

function CastomInvoice({invoice}) {
  const dispatch = useDispatch()
  const [open,setOpen]=useState(false)
  const [form,setForm]=useState([])
  console.log("🚀 ~ file: CastomInvoice.js:6 ~ CastomInvoice ~ form:", form)
  const handleChange = (e)=>{
    const {name,value}= e.target
    setForm((form)=>({...form,[name]:value}))
  }
  const invoiceData = {
    invoiceNumber: "INV-001",
    date: "2023-09-11",
    dueDate: "2023-09-25",
    items: [
      { description: "Item 1", quantity: 2, price: 50 },
      { description: "Item 2", quantity: 3, price: 30 },
    ],
    taxRate: 0.08,
  };

  const subtotal = invoice?.item.reduce(
    (acc, item) => acc + item.tax * item.amount,
    0
  );
  const tax = subtotal * invoiceData.taxRate;
  const total = subtotal + tax;
  const handleSubmit =async()=>{
     dispatch(createI)
  }
  return (
    <div className="invoice">
      <h1>Invoice</h1>
      <div className="invoice-details">
        <div>Invoice Number: {invoice?.invoiceNumber}</div>
        <div>Date: {invoice?.createdAt}</div>
        <div>Due Date: {invoiceData.dueDate}</div>
      </div>
      <div className="invoice-items">
        <table>
          <thead>
            <tr>
            <th>Name</th>
              <th>Description</th>
              <th>Tax</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice?.item.map((item, index) => (
              <tr key={index}>
                <td>{item?.name}</td>
                <td>{item?.description}</td>
                <td>{item?.tax}</td>
                <td>${item?.amount}</td>
                <td>${item?.tax * item?.amount}</td>
              </tr>
            ))}
         
          </tbody>
        

        </table>
        {open && 
          <div className="d-flex align-items-center input-container">
          <form> 
          <input placeholder="Name" className="input-field" type="text" name="name"onChange={handleChange} />
          <input placeholder="Discreption" className="input-field" type="text"name="description" onChange={handleChange}/>
          <input placeholder="Tax" className="input-field" type="number" name="tax"onChange={handleChange}/>
          <input placeholder="Amount" className="input-field" type="number" name="amount"onChange={handleChange}/>
          </form>
          <button onClick={()=>setOpen(true)}>confirm</button>
          </div>
          }
         {open === false && <button onClick={()=>setOpen(true)}>Add</button>}

      </div>
      <div className="invoice-summary">
        <div>
          <strong>Total:</strong> ${total}
        </div>
      </div>
    </div>
  );
}

export default CastomInvoice;
