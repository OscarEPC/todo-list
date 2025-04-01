import { useState } from 'react';
import './styles.css';
import { Input } from './components/Input';
import { Item } from './components/Item';

export const TodoListApp = () => {
  const [tasks, setTasks] = useState([]);
  
  const handleAddButtonPress = (value) => {
    if (tasks.includes(value)) return;
    setTasks((tasks) => [value, ...tasks]);
    
  }

  const handleDeleteButtonPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks)
  }

  const handleCleanAllButtonPress = () => {
    setTasks([]);
  }

  return (
    <div className='d-flex bg-primary vh-100 align-items-center'>
      <div className='w-25 mx-auto bg-white p-3 rounded-1'>
        <h1>Todo App</h1>
        <div className="d-flex mb-2">
          {/* <input type="text" className="form-control me-2" /><button className="btn btn-primary" onClick={handleAddButtonPress}>+</button> */}
          <Input
            onEnterPress={handleAddButtonPress}
          />
          {/* <button className="btn btn-primary" onClick={handleAddButtonPress}>+</button> */}
        </div>
        {tasks.map((task) => (
          <Item key={task} task={task} />
        ))}
        <div className='mt-3 d-flex justify-content-between align-items-center'>
          <p className='mb-0'>You have {tasks.length} pending task</p><button className='btn btn-primary' onClick={handleCleanAllButtonPress}>Clear All</button>
        </div>
      </div>
    </div>
  )
}
