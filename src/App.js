// import logo from './logo.svg';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import FinalResult from './Componet/FinalResult';
import Layout from './Componet/Layout';
import Questions from './Componet/Questions';
import Settings from './Componet/Settings';


let router =createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {index:true,element:<Settings/>},
    {path:"/question",element:<Questions/>},
    {path:"/score",element:<FinalResult/>},
    {path:"*",element:<Settings/>}
  ]}
]);
function App() {
  return <>
  
  <Container maxWidth="md">
    <Box textAlign={'center'} marginTop={2}>
    
    <RouterProvider router={router}/>
     
    </Box>
    
  </Container>
 
  </>
    
  
}

export default App;
