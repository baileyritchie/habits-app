import React, {useContext,useEffect,useState} from 'react';
import AuthContext from '../context/Auth';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import Habit from './Habit';

export default function Habits() {
  const {loggedIn,userId} = useContext(AuthContext);
  const [habits,setHabits] = useState([]);
  async function getData() {
    const {data} = await axios.get("http://localhost:5000/api/habits");
    
    if (!data) {
      console.log('data was not retrieved');
    }
    console.log('These are the habits on this account:',data);
    console.log('habit data type:',typeof data);
    setHabits(data);
  }
  useEffect(() => getData(), []);

  async function deleteHabit(id){
    const {data} = await axios.get(`http://localhost:5000/api/habits/${id}/delete`);
    if (data) {
      // it was deleted
      await getData();
    } else {
      alert('Could not be deleted!');
    }
  }
  
  return (
    <div>
      {
        loggedIn? 
          <>
            <h1> Welcome User:{userId}</h1>
            {habits.map((item) => <Habit userId id={item._id} key={item._id} title={item.title} count={item.count} deleteThisHabit={(id) => deleteHabit(id)} />)}
          </> :
          <>
            <p> Log in to see active habits</p>
            <Link to="login">Log In Here</Link>
          </>
      }
    </div>
  )
}
