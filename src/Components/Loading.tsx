import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      minHeight: '100vh',
      height: '100%',
    },
    loading: {
        color: '#2196f3',
        fontFamily: 'cursive',
        alignContent: 'center',
    },
  });

function Loading() {

    const classes = useStyles();

  return (
    <>
    <Grid container justify={'center'} alignItems={'center'} direction={'row'} className={classes.root}>
        <Grid item xs={4}>
            <h1 className={classes.loading}>Loading  <CircularProgress /></h1>
        </Grid>
    </Grid>
    </>
  )
}

export default Loading
