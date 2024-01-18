import React from 'react'

const TaskList = ({taskList,setTaskList,task,setTask}) => {
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter(el => el.id !== id)
    setTaskList(updatedTaskList);
  }

  const handleEdit = (id) => {
    const selectedTask = taskList.find(el => el.id === id);
    setTask(selectedTask);
  }
  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{taskList.length}</span>
        </div>
        <button className='clearAll' onClick={() => setTaskList([])}>Clear all</button>
      </div>
      <ul>
        {taskList.map(el => <li key={el.id}>
          <p>
            <span className='name'>{el.name}</span>
            <span className='time'>{el.date}</span>
          </p>
          <i onClick={() => handleEdit(el.id)} class="bi bi-pen"></i>
          <i onClick={() => handleDelete(el.id)} class="bi bi-trash"></i>
        </li> )}
      </ul>
    </section>
  )
}

export default TaskList