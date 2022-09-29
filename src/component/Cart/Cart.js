
import React from 'react';
import "./Cart.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Cart = ({time,first,second,third,fourth, btnHandler,item}) => {
    const notify = () => toast("Your Activity is complete!");
    return (
        <div className='cart-item'>
            {/* autohor name and img */}
            <div className="author">
                <div className="user">
                <img src="https://scontent.fcla5-1.fna.fbcdn.net/v/t39.30808-6/281821626_103663765691251_5323223089780076472_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHk4WFObw0kO132NRHCWKyn5nwtnt9P1FLmfC2e30_UUn7JXRrWaaCvpcHCEUccf7iWvhD7pf0HtAeg0qQfgmp_&_nc_ohc=OC1BusGl79MAX-d5xof&_nc_zt=23&_nc_ht=scontent.fcla5-1.fna&oh=00_AT9jUqB2qPidooCLPctB5Z3V01S-nbphgMGMSMrufcED-A&oe=63393114" alt="" />
                </div>

                <div className="user-info">
                    <h2>Abdur Rahman </h2>
                    <p>Hajigonj,Chandpur</p>
                </div>

            </div>
           {/* author information */}
            <div className="author-info">
                <div className="weight">
                    <h2 className="weight-h">50 <small>kg</small></h2>
                    <p className="weight-p">Weight </p>
                </div>
                <div className="height">
                <h2 className="weight-h">5.3</h2>
                    <p className="weight-p" >Height </p>
                </div>
                <div className="age">
                <h2 className="weight-h" >21<small>yrs</small></h2>
                    <p  className="weight-p">Age </p>
                </div>
            </div>
            {/* breakTime Button */}
              <div className="breakTime">
              <h3>Add a Break </h3>
              </div>
            <div className="break-btn-all">
                
                <button className="break-btn" onClick={()=>btnHandler(first)}>{first}</button>
                <button className="break-btn" onClick={()=>btnHandler(second)}>{second}</button>
                <button className="break-btn" onClick={()=>btnHandler(third)}>{third}</button>
                <button className="break-btn" onClick={()=>btnHandler(fourth)}>{fourth}</button>
                
            </div>

            {/* exercize details */}

            <div className="breakTime">
              <h3>Exercise Details </h3>
              </div>


              <div className="exersise-time">
                 <h4>Exercise time</h4> <small> {time} seconds</small>
              </div>
              <div className="exersise-time">
                 <h4>Breaktime</h4> <small id="small">{item} seconds</small>
              </div>
           
            
            <div className="tost-btn">
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>


        </div>
    );
};

export default Cart;