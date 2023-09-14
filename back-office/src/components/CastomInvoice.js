import React from "react";
import "../assets/styles/invoiceTemplate.css";
function CastomInvoice() {
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

  const subtotal = invoiceData.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const tax = subtotal * invoiceData.taxRate;
  const total = subtotal + tax;
  return (
    <div className="invoice">
      <h1>Invoice</h1>
      <div className="invoice-details">
        <div>Invoice Number: {invoiceData.invoiceNumber}</div>
        <div>Date: {invoiceData.date}</div>
        <div>Due Date: {invoiceData.dueDate}</div>
      </div>
      <div className="invoice-items">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="invoice-summary">
        <div>
          <strong>Subtotal:</strong> ${subtotal}
        </div>
        <div>
          <strong>Tax ({(invoiceData.taxRate * 100).toFixed(2)}%):</strong> $
          {tax}
        </div>
        <div>
          <strong>Total:</strong> ${total}
        </div>
      </div>
    </div>
  );
}

export default CastomInvoice;
