import React from 'react'

const AddTask = ({taskList,setTaskList,task,setTask}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if(task.id){
      const date = new Date();
      const updatedTaskList = taskList.map(el => el.id === task.id ? {id:task.id,name:task.name,date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : el);
      setTaskList(updatedTaskList);
      setTask({});
    }
    else{
      const date = new Date();
    let newTask = {
      id:date.getTime(),
      name:e.target.task.value,
      date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...taskList,newTask]);
    setTask({});
    }
    
  }
  return (
    <section className='addTask'>
      <form onSubmit={submitHandler}>
      <input type="text" name="task" value={task.name || ""} placeholder='Enter task' autoComplete='off' maxLength='25' onChange={(e) => setTask({...task,name: e.target.value})} />
      <button type='submit'>{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}

export default AddTask