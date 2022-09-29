import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='all-Question'>
              <div className="first-question">
                <h1>How does react Work?</h1>
                <p> = ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering our code</p>
              </div> 
              <div className="first-question">
                <h1>what is the difference between props and state in react?</h1>
                <p> = Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
              </div>
        </div>
    );
};

export default Question;