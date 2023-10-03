import React, { useEffect } from 'react'
import CastomInvoice from '../../../components/CastomInvoice'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchInvoice } from '../../../store/invoice';

function OneInvoice() {
  const { invoiceId } = useParams();
  const dispatch = useDispatch()
  const invoice = useSelector((state)=>state.invoice.invoice)
  console.log("🚀 ~ file: OneInvoice.js:11 ~ OneInvoice ~ invoice:", invoice)
useEffect(()=>{
 dispatch(fetchInvoice(invoiceId))
},[dispatch])

  return (
    <div>
        <CastomInvoice  invoice={invoice} />
    </div>
  )
}

export default OneInvoice