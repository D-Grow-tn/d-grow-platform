import React, { useEffect, useState } from "react";
import "../assets/styles/invoiceTemplate.css";
import { useDispatch, useSelector } from "react-redux";
import { createItem, removeItem, updateItem } from "../store/item";
import { useParams ,useNavigate} from "react-router-dom";
import { createInvoice, fetchInvoice, fetchInvoices, updateInvoice } from "../store/invoice";

import {EditImages} from "../assets/images/image";
function CastomInvoice() {
  const { invoiceId } = useParams();
  const navigate = useNavigate()
  const invoice = useSelector((state) => state.invoice.invoice);
  const [totalItem, setTotalItem] = useState(0);
  const [itemUpdate, setItemUpdate] = useState(null);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(itemUpdate || {});
  const [sewitch, setSewitch] = useState(false);
  const [invoiceItem, setInvoiceItem] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  useEffect(() => {
    dispatch(fetchInvoice(invoiceId));
    dispatch(updateInvoice({ total: totalItem, invoiceId }));
  }, [dispatch, totalItem, invoiceId]);

  useEffect(() => {
    setInvoiceItem(invoice?.item);
  }, [invoice]);

  const toggleSwitch = () => {
    setSewitch((prevSwitch) => !prevSwitch);
    setForm({
      name: "",
      description: "",
      tax: "",
      amount: "",
    });
  };

  const handleSubmit = () => {
    if (sewitch === true) {
      const newItem = { ...form };
      const { id, name, description, amount, tax } = form;
      dispatch(updateItem({ id, name, description, amount, tax }))
        .then(() => {
          console.log("Item updated successfully");
           setInvoiceItem([...invoiceItem, newItem]);
          setOpen(false);
          toggleSwitch();
        })
        .catch((error) => {
          console.error("Error updating item:", error);
          // Handle update error if needed
        });
    } else {
      const newItem = { ...form };
      dispatch(createItem({ ...form, invoiceId }))
        .then(() => {
          console.log("Item created successfully");
          setInvoiceItem([...invoiceItem, newItem]);
          setForm({
            name: "",
            description: "",
            tax: "",
            amount: "",
          });
          setOpen(false);
        })
        .catch((error) => {
          console.error("Error creating item:", error);
          // Handle creation error if needed
        });
    }
  };

  const handleDelete = async (id, index) => {
    console.log(index);
    if (id) {
      await dispatch(removeItem(id));
    }
    if (index >= 0 && index < invoiceItem.length) {
      const updatedInvoiceItem = [...invoiceItem];
      updatedInvoiceItem.splice(index, 1);
      setInvoiceItem(updatedInvoiceItem);
    } else {
      console.log("Invalid index");
    }
  };

  const handleUpdate = (body) => {
    setOpen(true);
    setItemUpdate(body);
    setForm(body);
    setSewitch(true);

  };

  useEffect(() => {
    let total = 0;
    invoiceItem?.forEach((item) => {
      total += parseFloat(item.tax) + parseFloat(item.amount);
    });
    setTotalItem(total);
  }, [invoiceItem]);

  return (
    <div className="invoice">
      <div className="d-flex justify-content-between">
      <h1>Invoice</h1>

          <img src={EditImages} height="28" width="28" onClick={()=>navigate(`/invoices/edit/${invoiceId}`)} />

        </div>
      <div className="d-flex justify-content-between invoice-details">
        <div>
          <div>Client: {invoice?.Client?.name}</div>
          <div>Email: {invoice?.Client?.email}</div>
          <div>Phone: {invoice?.Client?.phone}</div>
          <div>Adress: {invoice?.Client?.address}</div>
        </div>
        <div>
          
          <div>Invoice Number: {invoice?.invoiceNumber}</div>
          <div>Date: {invoice?.createdAt}</div>
        </div>
      </div>
      <div className="invoice-items">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Tax</th>
              <th>Amount</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoiceItem?.map((item, index) => (
              <tr key={index}>
                <td>{item?.name}</td>
                <td>{item?.description}</td>
                <td>{item?.tax}</td>
                <td>${item?.amount}</td>
                <td>${parseFloat(item?.tax) + parseFloat(item?.amount)}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(item.id, index)}>
                    delete
                  </button>
                  <button className="btn btn-primary" onClick={() => handleUpdate(item)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && (
          <div>
            <form className="d-flex align-items-center input-container">
              <input
                placeholder="Name"
                className="input-field"
                type="text"
                name="name"
                onChange={handleChange}
                value={form?.name}
              />
              <input
                placeholder="Description"
                className="input-field"
                type="text"
                name="description"
                onChange={handleChange}
                value={form?.description}
              />
              <input
                placeholder="Tax"
                className="input-field"
                type="number"
                name="tax"
                onChange={handleChange}
                value={form?.tax}
              />
              <input
                placeholder="Amount"
                className="input-field"
                type="number"
                name="amount"
                onChange={handleChange}
                value={form?.amount}
              />
            </form>
            <button className="btn btn-primary" onClick={handleSubmit}>Confirm</button>{"  "}
            <button className="btn btn-secondary" onClick={() => { setOpen(false); toggleSwitch(); }}>Cancel</button>
          </div>
        )}
        {open === false && <button className="btn btn-primary" onClick={() => { setOpen(true); }}>Add</button>}
      </div>
      <div className="invoice-summary">
        <div>
          <strong>Total:</strong> ${totalItem.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default CastomInvoice;
