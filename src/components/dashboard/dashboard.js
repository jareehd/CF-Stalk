import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Input} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginTop : 80,
        minWidth: 600,
      },
    },
  }));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <div>
         <form className={classes.root} noValidate autoComplete="off">
           <Input placeholder=" Codeforces Handle" />
         </form>
        </div>
    )
}

export default Dashboard;