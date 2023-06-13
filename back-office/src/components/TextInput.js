import React from 'react'
import {TextField} from '@mui/material';
import { Placeholder } from 'react-bootstrap';

function TextInput({Placeholder,width}) {
    
  return (
    <TextField
    hiddenLabel
    id="filled-hidden-label-normal"
    placeholder={Placeholder}
    variant="filled"
    InputProps={{
      style: {
        backgroundColor: '#daeaf088',
        borderRadius: '8px',
        width: width
      },
     
    }}
  />
  )
}

export default TextInput
