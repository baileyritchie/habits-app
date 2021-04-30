import React,{useEffect,useState} from 'react'
import Habit from './Habit';
import axios from 'axios';
import { useHistory} from 'react-router-dom';
export default function HabitGroup({title,habits,habitGroupId}) {
  const history = useHistory(); // TODO - add correct URL for history
  // TODO - get habitGroupId passed in from props 
  // - give component ability to delete a habit
  // - give component the ability to edit a habit (after clicking a habit)
  const [habitData,setHabitData] = useState([]);
  async function deleteHabit(id){
    
    const {data} = await axios.get(`http://localhost:5000/api/habits/${id}/delete`);
    
    if (data) {
      // it was deleted
      console.log(data);
      // TODO - refresh the page
    } else {
      alert('Could not be deleted!');
    }
  }
  async function editHabit(id) {
    // do something to edit
  }
  useEffect( () => {
    const getHabitFromId = async () => {
      try {
        const temp = [];
        await Promise.all(habits.map(async(habit) => {
          const {data} = await axios.get(`http://localhost:5000/api/habits/${habit}`);
          temp.push(data);
          }
        ));
        console.log('Temp',temp);
        setHabitData(temp);
      } catch (err) {
        console.log('Could not load habits from group');
      }
    }
    getHabitFromId();
  },[habits]);
  return (
    <div>
      <h1>Habit Group: {title}</h1>
      <button onClick={(e) => history.push(`/habitgroups/${habitGroupId}/create`)}>Add a New Habit</button>
      {habitData.map((habit) => <Habit title={habit.title} id={habit._id} key={habit._id} count={habit.count} deleteThisHabit={(id) => deleteHabit(id)}/>)}
      
    </div>
  )
}
