import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

import { AnswerType, Data, Column, AnswerValidationProps } from '../Types/quiz_type';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    right: {
        border: '1px solid black',
        background: '#aed581',
    },
    wrong: {
        border: '1px solid black',
        background: '#ff7043',
    },
    others: {
      border: '1px solid black',
      background: '#eeeeee',
    },
    tableHeader: {
      border: '1px solid white',
      background: '#616161',
      color: 'white'
    }
  });

  
  const AnswerValidation: React.FC<AnswerValidationProps> = ({answerForDisplay}) => {

      const columns: Column[] = [
          { 
            id: 'Q_No',
            label: 'Q_No',
            minWidth: 170,
          },
          {
            id: 'Your_Answer',
            label: 'Your_Answer',
            minWidth: 170,
          },
          {
            id: 'Correct_Answer',
            label: 'Correct_Answer',
            minWidth: 170,
          },
        ];
      
        const rows: Data[] = [];
        answerForDisplay.forEach((item:AnswerType, index: number) => {
          console.log(item);
          rows.push({Q_No: index+1, Your_Answer: item.userAnswer, Correct_Answer: item.answer})                                    
        });
        console.log(rows);
        
      const classes = useStyles();
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
      
      const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
      
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

  return (
    <>
      <div>
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
                      className = {classes.tableHeader}
                      >
                      {column.label}
                      </TableCell>
                  ))}
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                  return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.Q_No}>
                      {columns.map((column) => {
                          const value = row[column.id];
                          return (
                          <TableCell key={column.id} align={column.align} className = {column.label === 'Your_Answer' ? (value === answerForDisplay[index].answer ? classes.right : classes.wrong) : classes.others }>
                              {value}
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
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          </Paper>
      </div>
    </>
  )
}

export default AnswerValidation
