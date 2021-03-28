import React, {useContext,useEffect,useState} from 'react';
import AuthContext from '../context/Auth';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Habits() {
  const {loggedIn,userId} = useContext(AuthContext);
  const [habits,setHabits] = useState([]);

  async function getData() {
    const {data} = await axios.get("http://localhost:5000/api/habits");
    if (!data) {
      console.log('data was not retrieved');
    }
    console.log('These are the habits on this account:',data);
    setHabits(data);
  }
  useEffect(() => getData(), []);
  
  return (
    <div>
      {
        loggedIn ? 
          <>
            <h1> Welcome {userId}</h1>
            {habits.map((item) => <p key={item._id}>{item.title}</p>)}
          </> :
          <>
            <p> Log in to see active habits</p>
            <Link to="login">Log In Here</Link>
          </>
      }
    </div>
  )
}
