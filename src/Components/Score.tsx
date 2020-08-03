import React from 'react';
import { ScorePropsType } from '../Types/quiz_type';
import ScoreCard from './ScoreCard';

import { makeStyles } from '@material-ui/core/styles';
import AnswerValidation from './AnswerValidation';

const useStyles = makeStyles({
  scorePage: {
    minHeight: '100vh',
    height: '100%',
    backgroundColor: 'gray',
    padding: '2rem',
    boxSizing: 'border-box',
  }
});


const Score: React.FC<ScorePropsType> = ({score, clickHandler, answerForDisplay}) => {
    
  const classes = useStyles();

  return (
    <div className={classes.scorePage}>
      <ScoreCard 
      score={score}
      clickHandler = {clickHandler}
      />
      <AnswerValidation answerForDisplay={answerForDisplay}/>
    </div>
  )
}

export default Score
