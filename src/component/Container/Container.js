import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Exercise from "../Exercise/Exercise";
import "./Container.css"

const Container = () => {
  const [exercise, setExercise] = useState([]);
  const [lists,setLists]=useState([])
  // const [break,setBreak]=useState(0)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, []);
 
  
  // add to list button

  const addTolist=(exercise)=>{
         
     const newList=[...lists,exercise]

     setLists(newList);

  }
 
  const [item,setItem]=useState()
   useEffect(()=>{
         
    const newNum=localStorage.getItem('shopping-cart')
    setItem(newNum)

  },[item])

     
  // add to local storage
  const first=10;
  const second=20;
  const third=30;
  const fourth=40;

  const btnHandler=(id)=>{
       
   localStorage.setItem('shopping-cart', JSON.stringify(id));
   const newNum=localStorage.getItem('shopping-cart')
   setItem(newNum)

}


  // for get all the price of list

  let exerciseTime=0;

  for (const time of lists){
     
       const newTime=time.time;

       exerciseTime=exerciseTime+newTime;

  }

  // console.log(exerciseTime);



  return (
    <div className="main-container">
     <div className="exercise">
     {exercise.map((e) => (
        <Exercise key={e.id} addTolist={addTolist} exercise = {e}></Exercise>
      ))}
     </div>
     <div className="cart-container">
     <Cart first={first} item={item} btnHandler={btnHandler} second={second} third={third} fourth={fourth} time={exerciseTime}></Cart>
     </div>
    </div>
  );
};

export default Container;
