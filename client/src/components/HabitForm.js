// form to create a new habit
import AuthContext from '../context/Auth';
import React, {useState,useEffect,useContext} from 'react';
import axios from 'axios';

import { Link,useHistory} from "react-router-dom";

export default function HabitForm() {
  const [title,setTitle] = useState("");
  const [count,setCount] = useState(0);
  const {userId,loggedIn} = useContext(AuthContext);
  const history = useHistory();
  async function createHabit(e) {
    e.preventDefault();
    try {
      let {data} = await axios.post("http://localhost:5000/api/habits/create", {
        title,
        count,
        userId
      });
      console.log('user if from habit form',userId);
      console.log(data, "habit added");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div>
      {loggedIn ? 
        <>
          <form onSubmit={createHabit}>
            <input
              type="text"
              placeholder= "Add Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <input
              type="text"
              placeholder="Add Count"
              onChange={(e) => setCount(Number(e.target.value))}
              value={count}
            />
            <button type="submit">Submit</button>
          </form>
        </> : 
        <>
          <p>Please Sign In to create habits</p>
          <Link to="/login">Sign In Here</Link>
        </>
      }
      
    </div>
  )
}
