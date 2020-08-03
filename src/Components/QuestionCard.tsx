import React, { useState, useEffect } from 'react';
import { Question, AnswerType } from './../Types/quiz_type';
import { getQuiz } from '../services/quizService';
import Score from './Score';
import bg from './../images/bg.jpg'

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Loading from './Loading';

// Styling of Commponents

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    height: '100%',
    flexGrow: 1,
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain' ,
    padding: '3rem 1rem',
    fontSize: '2rem',
  },
  ques: {
    width: '100%',
    textAlign: 'center',
    padding: '2rem 0',
    fontWeight: 'bold',
    margin: '1rem 0',
    backgroundColor: 'gray',
    opacity: '0.95',
    color: 'white',
    fontSize: '1.5rem',
    },
  // Btn: {
  //   width: '100%',
  // },
  form: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    opacity: '0.95',
    color: 'white',
    padding: '2rem',
    borderRadius: '100px 5px 100px 5px',
  },
  optionBox:{
    padding: '2rem 1rem',
    backgroundColor: 'white',
    borderRadius: '100px 5px 100px 5px',
    // fontSize: '1.5rem'
  },
  options: {
    margin: '1rem 0.5rem',
    backgroundColor: 'gray',
    opacity: '0.95',
    fontSize: '1.2rem',
    borderRadius: '0.75rem',
    padding: '0.5rem'
  },
  
}));

function QuestionCard() {

  const submitHandler = (e:React.FormEvent<EventTarget>) => {

    e.preventDefault();

    // Disable Next BTn
    setDisableBtn(true)

    //Score update
    if(chkAnswer){
      setScoreValue(++scoreValue);
      console.log(scoreValue);
    }
    
    let answers: AnswerType = {
      userAnswer: String(chk),
      answer: quizArr[currentQuestion].answer
    }
    setAnswerTable([...answerTable, answers]);
    // console.log(answers,answerTable)

    // Answer Check reset
    setChkAnswer(false);

    if(currentQuestion < quizArr.length-1){
      setCurrentQuestion(++currentQuestion);
      console.log(answerTable);
      // Quiz Completation
        if(currentQuestion === quizArr.length-1){
            setBtnName('Submit');
        }
    }
    else{
        setDisplayScore(true)
        setBtnName('Next')
    }
}

//nextQuiz
function nextQuizHandler(){
  console.log('inside next quiz')
  setCurrentQuestion(0);
  setScoreValue(0)
  setDisplayScore(false);
  setNextQuiz(!nextQuiz);
  setQuizArr([]);
  setAnswerTable([])
}

// States declaration
  let [quizArr, setQuizArr] = useState<Question[]>([]);
  let [currentQuestion, setCurrentQuestion] = useState<number>(0);
  let [btnName, setBtnName] = useState<string>('Next')
  let [chk, setChk] = useState<String>("");
  let [chkAnswer, setChkAnswer] = useState<boolean>(false);
  let [displayScore, setDisplayScore] = useState<boolean>(false)
  let [scoreValue, setScoreValue] = useState<number>(0);
  let [disableBtn, setDisableBtn] = useState<boolean>(true);
  let [nextQuiz, setNextQuiz] = useState<boolean> (false);
  let [answerTable, setAnswerTable] = useState<AnswerType[]>([])
  
// Radio Button Check Implementation
  function changeHandler(e: any){
    console.log('on change')
    setDisableBtn(false);
    setChk(e.target.value);
    if(quizArr[currentQuestion].answer === e.target.value){
      setChkAnswer(true)
    }else{
      setChkAnswer(false)
    }
  }

// fetch data from API
  useEffect(() => {
    async function fetchData(){
      const questions = await getQuiz(5, 'easy');
      console.log(questions)
      setQuizArr(questions)
    }
    fetchData();
}, [nextQuiz]);

// Initailizing style classes
const classes = useStyles();

if(!quizArr.length){
  return(
    <Loading />
  )
}
if(displayScore){
  return (
    <div>
      <Score
      score= {scoreValue}
      clickHandler= {nextQuizHandler}
      answerForDisplay= {answerTable}
      />
    </div>
  )
}else{
      return (
        <Grid container justify="center" alignItems="center" direction="row" className={classes.root} >
          <Grid item  className={classes.ques}>
            {currentQuestion + 1}. {quizArr[currentQuestion].question}
          </Grid>

        <Grid item className={classes.form}>
          <form onSubmit={submitHandler}>
          {/* <Grid container justify="flex-end" alignItems="center" direction="row" >
          <Grid item lg={4}> */}
          <Grid container justify="center" alignItems="center" direction="row" className={classes.optionBox}>
            {
            quizArr[currentQuestion].options.map((option: string, index: number) => {
              return(
                <Grid item lg={10} xs={12} key={index} className={classes.options}><label><input type={'radio'} name={'opt'} value={option} checked={chk === option} onChange={changeHandler}/>{option}</label></Grid>
              )
            })
          }
          </Grid>

          <Grid container justify="flex-end" alignItems="center" direction="row" >
          <Grid item lg={4}>
          {
          btnName === 'Next' ?
          <Button type={'submit'} disabled={disableBtn} variant="contained" color="primary">
            {btnName}
          </Button> :
          // <button type={'submit'} disabled={disableBtn}>{btnName}</button> :
              // <button type={'submit'} disabled={disableBtn}>{btnName}</button>
          <Button type={'submit'} disabled={disableBtn} variant="contained" color="primary">
            {btnName}
          </Button>
          }
          </Grid>
          </Grid>
          </form>
        </Grid>
    </Grid>
      )
    }
}

export default QuestionCard
