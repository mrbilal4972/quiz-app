import React from 'react';
import { ScoreCardPropstype } from '../Types/quiz_type';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '1rem 2rem',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  mainGrid:{
    margin: '4rem 0 1rem 0',
  }
});

 const ScoreCard:React.FC<ScoreCardPropstype> = ({score, clickHandler}) => {
  const classes = useStyles();
  console.log(score)
  const percentage: (num: number) => number = (score) => (score/5)*100;
  return (
    <Grid container justify="center" direction='row' className={classes.mainGrid}>
      <Grid item xs={12}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
           Your Score
        </Typography>
        <Typography variant="h5" component="h2">
          {percentage(score)} %
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          No. of Correct Answers 
        </Typography>
        <Typography variant="body2" component="p">
            {score}
        </Typography>
      </CardContent>
      <Button variant="contained" color="secondary" type={'button'} onClick={clickHandler}>
        Next Quiz
      </Button>
    </Card>
    </Grid>
    </Grid>
  );
}

export default ScoreCard;
