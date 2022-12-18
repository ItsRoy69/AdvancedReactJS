import React from 'react';

function GoalForm(props) {
  const [formData, setFormData] = React.useState({ goal: '', by: '' })

  const changeHandler = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: '', by: '' })

  }

  return (
    <>
      <h1>My goals</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='goal' placeholder='Goal...' value={formData.goal} onChange={changeHandler} />
        <input type='text' name='by' placeholder='by...' value={formData.by} onChange={changeHandler} />
        <button type="submit">Submit Goal</button>
      </form>
    </>

  )

}

function ListOfGoals(props) {

  return (
    <ul>
      {props.allGoals.map((listItem) => (
        <li key={listItem.goal}>
          <span>My goal is to {listItem.goal} by {listItem.by}</span>
        </li>
      )
      )}
    </ul>
  );
}


function App() {
  const [allGoals, updateAllGoals] = React.useState([]);
  console.log(allGoals)



  function addGoal(goal) { updateAllGoals([...allGoals, goal]); }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />

    </div>
  );
}

export default App;