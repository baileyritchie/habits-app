// form to edit a habit
import AuthContext from '../context/Auth';
import React, {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { Link,useHistory, useParams} from "react-router-dom";

export default function EditHabitForm() { 
  const {habitId} = useParams();
  const [title,setTitle] = useState("");
  const [count,setCount] = useState(0);

  async function getHabitById(id) {
    console.log('getting single habit route');
    try {
      console.log('the habit id from EditHabitForm is:',id);
      const {data} = await axios.get(`http://localhost:5000/api/habits/${id}`);
      if (!data) {
        // if habit cannnot be fetched in order to edit, push to create route
        console.log('habit not found')
      }
      setTitle(data.title);
      setCount(data.count);
    } catch (err) {
      console.log(err);
    } 
  }
  
  const {userId,loggedIn} = useContext(AuthContext);
  const history = useHistory();
  async function editHabit(e) {
    e.preventDefault();
    try {
      let {data} = await axios.post(`http://localhost:5000/api/habits/${habitId}/edit`, {
        title,
        count
      });
      console.log(data, "habit edited");
      history.push("/"); // back to view all habits
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getHabitById(habitId)
  }, [habitId]);

  return (
    <div>
      {loggedIn ? 
        <>
          <form onSubmit={editHabit}>
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
            <button type="submit">Submit Your Habit</button>
          </form>
        </> : 
        <>
          <p>Please Sign In to Edit Your Habits</p>
          <Link to="/login">Sign In Here</Link>
        </>
      }
      
    </div>
  )
}
