import React,{useState,useContext} from 'react'
import AuthContext from '../context/Auth';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

export default function CreateHabitGroupForm() {
  const [groupTitle,setGroupTitle] = useState("");
  const {userId,loggedIn} = useContext(AuthContext);
  const habits = []; // when creating a new habit group it has no habits by default
  async function createHabitGroup(e) {
    e.preventDefault();
    try {
      let {message} = await axios.post("http://localhost:5000/api/habitgroups/create",{
      groupTitle,
      userId,
      habits
      });
      console.log(message);
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      {loggedIn ? 
      <form onSubmit={(e) => createHabitGroup(e)}>
        <h1>Create Habit Group Form</h1>
        <input type="text" placeHolder="Add Group Title" onChange={(e) => setGroupTitle(e.target.value)} value={groupTitle}/>
        <button type="submit">Submit</button>
      </form>
      : <div>
          <p>Please log in or sign up to create a habit group</p>
        </div>
      }
    </div>
  )
}
