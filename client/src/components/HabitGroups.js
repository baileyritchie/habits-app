import React, {useContext,useEffect,useState} from 'react';
import AuthContext from '../context/Auth';
import axios from 'axios';
import HabitGroup from './HabitGroup';

export default function HabitGroups() {
  const {loggedIn,userId} = useContext(AuthContext);
  const [habitGroups,setHabitGroups] = useState([]);
  const [habits,setHabits] = useState([]);

  async function getData() {
    const {data} = await axios.get("http://localhost:5000/api/habitgroups");
    if (!data) {
      console.log('data was not retrieved');
    }
    console.log(data);
    setHabitGroups(data);
  }
  
  useEffect(() => getData(), []);
  return (
    <div>
      { loggedIn ? 
        <div>
          <h1>Hello from HabitGroups View</h1>
          {habitGroups.map((habitGroup) => <HabitGroup title={habitGroup.groupTitle} habits={habitGroup.habits} habitGroupId={habitGroup._id} key={habitGroup._id}/>)}
        </div>
        : <p>Please Login to see Habit Groups</p>
      }
    </div>
  )
}
