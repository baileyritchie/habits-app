import React, {useContext,useEffect,useState} from 'react';
import AuthContext from '../context/Auth';
import axios from 'axios';
import HabitGroup from './HabitGroup';
import { useHistory} from 'react-router-dom';

export default function HabitGroups() {
  const history = useHistory();
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
  
  async function editHabitGroup(id) {
    history.push(`/habitgroups/${id}/edit`);
  }
  async function deleteHabitGroup(id) {
    try {
      const data = await axios.get(`http://localhost:5000/api/habitgroups/${id}/delete`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => getData(), []);
  return (
    <div>
      { loggedIn ? 
        <div>
          <h1>Hello from HabitGroups View</h1>
          {habitGroups.map((habitGroup) => <HabitGroup deleteHabitGroup={deleteHabitGroup} editHabitGroup={editHabitGroup} title={habitGroup.groupTitle} habits={habitGroup.habits} habitGroupId={habitGroup._id} key={habitGroup._id}/>)}
        </div>
        : <p>Please Login to see Habit Groups</p>
      }
    </div>
  )
}
