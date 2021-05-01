import React from 'react';
import { useHistory } from "react-router-dom";


export default function Habit({id,title,count,deleteThisHabit}) {
  let history = useHistory();

  async function editHabit(habitObj){
    console.log('habit to edit:',habitObj.id);
    history.push(`/habits/${habitObj.id}/edit`);
  }
  return (
    <div>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <p>{count} days of completing this habit!</p>
      <button onClick={(e) => deleteThisHabit(id)}>Delete Habit</button>
      <button onClick={(e) => editHabit({id,title,count})}>Edit Habit</button>
    </div>
  )
}


