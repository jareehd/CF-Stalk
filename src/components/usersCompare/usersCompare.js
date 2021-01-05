import React from 'react'
import ProblemTagCard from '../problemTagCard/problemTagCard'

const UserCompare = (props) =>{
    
    let Rating1 = new Map()
    let Tag1 = new Map()
    let Problem1  = new Set()
    
    let RatingArray1 = new Array()
    let TagArray1 = new Array()
    
    let Rating2 = new Map()
    let Tag2 = new Map()
    let Problem2  = new Set()
    
    let RatingArray2 = new Array()
    let TagArray2 = new Array()
     

    console.log(props.location.result)
    const init = () => {      
    
    // first User
    props.location.result.user1.forEach( (e)=> {
            if(e.verdict === 'OK' && !Problem1.has(e.problem.name)){
            const rating = e.problem.rating
            if( rating ){
            if( !Rating1.has(rating) ){
                Rating1.set(rating,1)
            } 
            else {
                const prevCount = Rating1.get(rating)
                Rating1.set( rating ,1 + prevCount)
            }
          }
            Problem1.add(e.problem.name) 
            
            e.problem.tags.forEach((t) =>{
                if(!Tag1.has(t)) Tag1.set(t,1)
                else {
                    const tagCount = Tag1.get(t)
                    Tag1.set(t,tagCount+1)
                }
            })

           }
     })

     Rating1.forEach((key,value) => RatingArray1.push({key,value}))
     Tag1.forEach((key,value) => TagArray1.push({key,value}))
     
     TagArray1.sort((a,b) =>{
         if(a.key < b.key) return 1;
         else return -1;
     })

     // Second User 

    props.location.result.user2.forEach( (e)=> {
            if(e.verdict === 'OK' && !Problem2.has(e.problem.name)){
            const rating = e.problem.rating
            if( rating ){
            if( !Rating2.has(rating) ){
                Rating2.set(rating,1)
            } 
            else {
                const prevCount = Rating2.get(rating)
                Rating2.set( rating ,1 + prevCount)
            }
          }
            Problem2.add(e.problem.name) 
            
            e.problem.tags.forEach((t) =>{
                if(!Tag2.has(t)) Tag2.set(t,1)
                else {
                    const tagCount = Tag2.get(t)
                    Tag2.set(t,tagCount+1)
                }
            })

           }
     })

     Rating2.forEach((key,value) => RatingArray2.push({key,value}))
     Tag2.forEach((key,value) => TagArray2.push({key,value}))
     
     TagArray2.sort((a,b) =>{
         if(a.key < b.key) return 1;
         else return -1;
     })
    }
    init()
     
    const length = props.location.result.user1.length || props.location.result.user2.length
    return (
        <div>
           { length === 0 ? <p> No User has any compitive record</p> :(
               <div>
                    <ProblemTagCard Type = {2} Tag1={Tag1} Tag2={Tag2} />
            
                   {/* {Tag.forEach((key,value) => console.log(key,value))} */}
               </div>
           )}
        </div>
    )
}

export default UserCompare