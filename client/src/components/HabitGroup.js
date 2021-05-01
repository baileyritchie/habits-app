import React,{useEffect,useState} from 'react'
import Habit from './Habit';
import axios from 'axios';
import { useHistory} from 'react-router-dom';
export default function HabitGroup({title,habits,habitGroupId,deleteHabitGroup,editHabitGroup}) {
  const history = useHistory(); // TODO - add correct URL for history
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
      <button onClick={(e) => editHabitGroup(habitGroupId)}>Edit this Group</button>
      <button onClick={(e) => deleteHabitGroup(habitGroupId)}>Delete this Group</button>
      <button onClick={(e) => history.push(`/habitgroups/${habitGroupId}/create`)}>Add a New Habit</button>
      {habitData.map((habit) => <Habit title={habit.title} id={habit._id} key={habit._id} count={habit.count} deleteThisHabit={(id) => deleteHabit(id)}/>)}
    </div>
  )
}
