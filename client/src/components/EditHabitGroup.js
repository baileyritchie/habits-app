import React,{useState,useEffect,useContext} from 'react'
import AuthContext from '../context/Auth'
import axios from 'axios'
import { Link,useHistory, useParams} from "react-router-dom";



export default function EditHabitGroup() {
  const [groupTitle,setGroupTitle] = useState("");
  const {habitGroupId} = useParams();
  const {userId,loggedIn} = useContext(AuthContext);
  async function getHabitGroupById(id) {
    // TODO - implement function that gets habit group data based on the habitgroup id 
    try {
      const data = await axios.get(`http://localhost:5000/api/habitgroup/${habitGroupId}`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  async function submitHabitGroupChanges(e){
    e.preventDefault();
    try {
      const data = await axios.post(`http://localhost:5000/api/habitgroups/${habitGroupId}/edit`, {
        groupTitle
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => getHabitGroupById(habitGroupId), [habitGroupId]);
  return (
    <div>
      {loggedIn ? 
        <>
          <form onSubmit={(e) => submitHabitGroupChanges(e)}>
            <input
              type="text"
              placeholder= "Edit your Group Title"
              onChange={(e) => setGroupTitle(e.target.value)}
              value={groupTitle}
            />
            <button type="submit">Submit Your Group Edits</button>
          </form>
        </> : 
        <>
          <p>Please Sign In to Edit Your Habit Groups</p>
          <Link to="/login">Sign In Here</Link>
        </>
      }
    </div>
  )
}
