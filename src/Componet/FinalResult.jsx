import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { handleScoreChange ,handleAmountChange } from "../Redux/actions";

export default function FinalResult() {
  const dispatch = useDispatch();
  let navigate =useNavigate();
  const {
    
    score
  } = useSelector((state) => state);
  console.log(score);
  function HandleChange(){
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(20));
    navigate("/");

  }
  return <>
  <Container >


    <Box bgcolor={'lightgray'} paddingTop={5} paddingBottom={5} sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >


      <Typography variant="h3" color={"blueviolet"}>
      fininsh
      </Typography>
 

    </Box>
    <Box bgcolor={'white'} paddingTop={5} paddingBottom={5} paddingLeft={5} paddingRight={5} sx={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >

    
      
    <Typography variant="h4" color={"blueviolet"} >
        score
      </Typography>


      <Typography variant="h4" mt={3} color={"blueviolet"} >
        {score}
      </Typography>
       

      

      <Box mt={5} width="100%">
        <Button fullWidth variant='contained' type='submit' onClick={HandleChange}>try agian</Button>
      </Box>


    </Box>



  </Container>
</>
}
