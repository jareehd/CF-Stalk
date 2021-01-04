import React from 'react'

const User = (props) =>{
    
    let Rating = new Map()
            props.location.result.forEach( (e)=> {
            const rating = e.problem.rating
            if( !Rating.has(rating) ){
                Rating.set(rating,1)
            } 
            else {
                const prevCount = Rating.get(rating)
                Rating.set( rating ,1 + prevCount)
            } 
    })
    
     
    const length = props.location.result.length
    return (
        <div>
           user
           { length === 0 ? <p> User has no compitive record</p> :(
               <div>
                   ok
                   {Rating.forEach((key,value) => console.log(key,value) )}
               </div>
           )}
        </div>
    )
}

export default User