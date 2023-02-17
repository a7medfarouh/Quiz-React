import React from 'react'
import { FormControl,TextField } from '@mui/material';
import { Box } from '@mui/system'
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../Redux/actions";

export default function TextFieldComp() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };
  return <>
  
  <Box mt={3} width="100%" bgcolor={'white'}>
  <FormControl fullWidth>
    <TextField
    onChange={handleChange}
    variant="outlined"
    label="Amount of Questions"
    type="number"
    size="small"
    />
  </FormControl>
</Box >

  </>
}
