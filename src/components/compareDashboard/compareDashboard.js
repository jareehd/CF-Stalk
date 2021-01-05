import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Input,Button} from '@material-ui/core'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginTop : 80,
        minWidth: 400,
      },
    },
}));


const CompareDashboard = (props) => {
    const history = useHistory()
    const classes = useStyles();
    const [handle1,setHandle1] = React.useState(null)
    const [handle2,setHandle2] = React.useState(null)
    const [error,setError]  = React.useState(null)
    
    const handleSubmit = async () => {
        if(!handle1 || !handle2) setError('do not leave user handles empty')
        else {
            const url = 'https://codeforces.com/api/user.status'
           try{
            const res1 = await axios.create({
                baseURL: url,
                params: {
                    handle:handle1
                },
            }).get()
            
            
            const res2 = await axios.create({
              baseURL: url,
              params: {
                  handle:handle2
              },
            }).get()
              
                history.push({
                    pathname: '/usersCompare',
                    result: {
                      user1 :res1.data.result,
                      user2 :res2.data.result,
                    }
                });
                setError(null)
              } catch (e) {
                setError('Please give right handles')
              }
        }
    }

    const handleChange1 = (e) => {
      const User = e.target.value
      setHandle1(User)
  }
  
  const handleChange2 = (e) => {
      const User = e.target.value
      setHandle2(User)
  }

    return (
        <div>
         <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
           <Input placeholder=" Codeforces Handle of 1st User" value={handle1} onChange={handleChange1} />
           <Input placeholder=" Codeforces Handle of 2nd User" value={handle2} onChange={handleChange2} />
           <Button type='Submit' variant="contained"> Compare </Button>
         </form>
        { error && <p style={{color:'red'}}> {error} </p> }
        </div>
    )
}

export default CompareDashboard;