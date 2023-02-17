import React, { useState } from 'react'
import { MenuItem ,Select ,InputLabel ,FormControl } from '@mui/material';
import { Box } from '@mui/system'
import { useDispatch } from "react-redux";

import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../Redux/actions";

export default function FieldSet(props) {
  const dispatch = useDispatch();
    const {label,options}=props;
    const [value, setValue] = useState("");
    const handleChange = (e) => {
      setValue(e.target.value);
      switch (label) {
        case "Category":
          dispatch(handleCategoryChange(e.target.value));
          break;
        case "Difficulty":
          dispatch(handleDifficultyChange(e.target.value));
          break;
        case "Type":
          dispatch(handleTypeChange(e.target.value));
          break;
        default:
          return;
      }
    };
  return <>
  
  <Box mt={3} width="100%" bgcolor={'white'}>
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select value={value} label={label} onChange={handleChange}>
       {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
    </Select>
  </FormControl>
</Box >

  </>
}

