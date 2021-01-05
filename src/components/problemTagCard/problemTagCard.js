import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

let columns,rows;

const init = (props) =>{
  if(props.Type == 1){
     columns = [
        { id: 'name', label: 'Tag Name', maxWidth: 100 },
        { id: 'code', label: 'Solved', minWidth: 100 }
      ];
      
      rows = props.TagArray.map((e) => {
        return  { name:e.value , code:e.key} 
      })

  } else {
     columns = [
        { id: 'name', label: 'Tag Name', maxWidth: 100 },
        { id: 'user1', label: 'Solved by User1', minWidth: 70 },
        { id: 'user2', label: 'Solved by User2', minWidth: 70 }
     ];

     
    const Keys = new Set() 
    
    props.Tag1.forEach( (key,value) => Keys.add(value))
    props.Tag2.forEach( (key,value) => Keys.add(value))
    
    let tagArray = new Array()
    Keys.forEach((e)=>{
      const name = e , user1 = props.Tag1.get(e)  ,user2 = props.Tag2.get(e);
      tagArray.push({name,user1,user2})
      console.log({name , user1 ,user2})
    })
    rows = tagArray
  }   
}

const useStyles = makeStyles({
  root: {
    width: '40%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  init(props) 
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
  );
}