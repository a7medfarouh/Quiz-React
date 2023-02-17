import React,{useState ,useEffect} from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import useAxios from './Hooks/useAxios';
import { useSelector } from 'react-redux';
import { decode} from "html-entities";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { handleScoreChange } from "../Redux/actions";
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};



export default function Questions() {
  const dispatch = useDispatch();
  let navigate =useNavigate();
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);
  console.log( question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score);
    let apiUrl = `https://opentdb.com/api.php?amount=${amount_of_question}`;
    if (question_category) {
      apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
      apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
      apiUrl = apiUrl.concat(`&type=${question_type}`);
    }
  const { response, loading } = useAxios({ url: apiUrl })
  const [ questionIndex , setQuestionIndex ] = useState(0);
  const [ options , setOptions ] = useState([]);
  // console.log(response.results[questionIndex].question);
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);
  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // history.push("/score");
      navigate("/score")
    }
  };
 
  return <>
    <Container >


      <Box bgcolor={'lightgray'} paddingTop={5} paddingBottom={5} sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >


        <Typography variant="h3" >
          Quiz
        </Typography>
        <Typography color={"white"} bgcolor={'blueviolet'} width={"18%"} paddingTop={1} paddingBottom={1} paddingLeft={0} paddingRight={0} marginLeft={"80%"} borderRadius={25} >
          <span>{questionIndex+1}</span> of <span>{amount_of_question}</span> Questions
        </Typography>

      </Box>
      <Box bgcolor={'white'} paddingTop={5} paddingBottom={5} paddingLeft={5} paddingRight={5} sx={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >

        <Typography textAlign={"start"} variant="h5" >
          Q : {decode(response?.results[questionIndex].question) }
          {/* {decode(response.results[questionIndex].question)} */}

        </Typography>
        
        <Grid mt={3} container spacing={2}>
        {options.map((data, id) => (
          <Grid item  mt={3} xs={6} key={id}>
          <Button onClick={handleClickAnswer} variant='outlined' >{decode(data)}</Button>
        </Grid>
        
      ))}
          
         

        </Grid>

        {/* <Box mt={3} width="100%">
          <Button fullWidth variant='contained' type='submit'>Submit</Button>
        </Box> */}


      </Box>



    </Container>
  </>
}
