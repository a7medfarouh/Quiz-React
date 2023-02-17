import { Box, Button, Typography , CircularProgress} from '@mui/material'
import { Container } from '@mui/system'
import FieldSet from './FieldSet'


import TextFieldComp from './TextFieldComp';
import useAxios from './Hooks/useAxios';
import { useNavigate } from 'react-router-dom';


export default function Settings() {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  // console.log(response);
  let navigate = useNavigate();
  
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const submit = (e) => {
    e.preventDefault();
    navigate("/question");
    // window.history.pushState({}, undefined, "/questions");
    // history.push("/questions");
    // history.push("/questions");
  };
//  const submit =(e)=>{
//   // console.log(e);
//   e.preventDefault();
//   console.log(e)
//  }
//  function submit(e){
//   e.preventDefault();
//  console.log(e)
//  }
  return <>
  <Container >
    
  <Typography bgcolor={'lightgray'} variant="h3" paddingTop={5} paddingBottom={5} sx={{borderTopLeftRadius:10,borderTopRightRadius:10}}  >
  Setting Your Quiz
  </Typography>
  <Box bgcolor={'white'} paddingTop={5} paddingBottom={5} paddingLeft={5} paddingRight={5}  sx={{borderBottomLeftRadius:10,borderBottomRightRadius:10}} >
  <form onSubmit={submit}>
    <FieldSet options={response.trivia_categories} label={"Category"}/>
    <FieldSet options={difficultyOptions} label={"Difficulty"}/>
    <FieldSet options={typeOptions} label={"Type"}/>
    <TextFieldComp/>
    <Box mt={3} width="100%">
      <Button fullWidth variant='contained' type='submit'>Get Started</Button>
    </Box>
  </form>
  </Box>
 

      
  </Container>
 
  
  </>
    
  
}
