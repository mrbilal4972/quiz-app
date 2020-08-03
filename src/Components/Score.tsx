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
    {/* <Container maxWidth="sm"> */}
      <ScoreCard 
      score={score}
      clickHandler = {clickHandler}
      />
      {/* Score - {score}
      <button type={'button'} onClick={clickHandler}>Next Quiz</button> */}

    <AnswerValidation answerForDisplay={answerForDisplay}/>
    {/* <div>
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.Q_No}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
</div> */}
{/* </Container> */}
      </div>
  )
}

export default Score
