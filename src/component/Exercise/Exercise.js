import React from 'react';
import "./Exercise.css";

const Exercise = ({exercise,addTolist}) => {
//    console.log(props);

// console.log(addTolist)
   const {image, name, time, description } = exercise;
    return (
        <div className='exercise'>
            <div className='boxItems'>
                <img src={image} alt="" />
                <div className="boxInfo">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>Time required: {time} seconds</p>
                    <div >
                    <button onClick={()=>addTolist(exercise)}  className="box-btn">Add to list</button>
                    </div>
                     </div>
               </div>
        </div>
    );
};

export default Exercise;