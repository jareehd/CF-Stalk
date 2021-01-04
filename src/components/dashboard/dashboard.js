import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Input} from '@material-ui/core'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

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
    const history = useHistory()
    const classes = useStyles();
    const [handle,setHandle] = React.useState(null)
    const [error,setError]  = React.useState(null)
    
    const handleSubmit = async () => {
        if(!handle) setError('do not leave it empty')
        else {
            const url = 'https://codeforces.com/api/user.status'
            const Axios = axios.create({
                baseURL: url,
                params: {
                    handle:handle
                },
              })
              
              try {
                const res = await Axios.get()
                history.push({
                    pathname: '/user',
                    result: res.data.result
                });
                setError(null)
                // console.log(res.data.result)
              } catch (e) {
                setError('Please give a right handle')
              }
        }
    }

    const handleChange = (e) => {
        const User = e.target.value
        setHandle(User)
    }

    return (
        <div>
         <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
           <Input placeholder=" Codeforces Handle" value={handle} onChange={handleChange} />
         </form>
        { error && <p style={{color:'red'}}> {error} </p> }
        </div>
    )
}

export default Dashboard;