import React from 'react'
import ProblemTagCard from '../problemTagCard/problemTagCard'

const User = (props) =>{
    
    let Rating = new Map()
    let Tag = new Map()
    let Problem  = new Set()
    
    let RatingArray = new Array()
    let TagArray = new Array()

    console.log(props.location.result)
    const init = () => {      
    props.location.result.forEach( (e)=> {
            if(e.verdict === 'OK' && !Problem.has(e.problem.name)){
            const rating = e.problem.rating
            if( rating ){
            if( !Rating.has(rating) ){
                Rating.set(rating,1)
            } 
            else {
                const prevCount = Rating.get(rating)
                Rating.set( rating ,1 + prevCount)
            }
          }
            Problem.add(e.problem.name) 
            
            e.problem.tags.forEach((t) =>{
                if(!Tag.has(t)) Tag.set(t,1)
                else {
                    const tagCount = Tag.get(t)
                    Tag.set(t,tagCount+1)
                }
            })

           }
     })

     Rating.forEach((key,value) => RatingArray.push({key,value}))
     Tag.forEach((key,value) => TagArray.push({key,value}))
     
     TagArray.sort((a,b) =>{
         if(a.key < b.key) return 1;
         else return -1;
     })

    }
    init()
     
    const length = props.location.result.length
    return (
        <div>
           { length === 0 ? <p> User has no compitive record</p> :(
               <div>
                    <ProblemTagCard  TagArray={TagArray}/>
            
                   {/* {Tag.forEach((key,value) => console.log(key,value))} */}
               </div>
           )}
        </div>
    )
}

export default User