import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../Types/types';

const AddTaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [task, setTask] = useState<Omit<Task, 'id'>>({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    status: 'Pending',
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!task.title || !task.dueDate) {
      setError("Title and due date are required");
      return;
    }

    setError(null);

    const newTask: Task = { ...task, id: crypto.randomUUID() };
    addTask(newTask);

    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Medium',
      status: 'Pending',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input 
        type="text" 
        placeholder="Title" 
        value={task.title} 
        onChange={e => setTask({ ...task, title: e.target.value })} 
      />
      <textarea 
        placeholder="Description" 
        value={task.description} 
        onChange={e => setTask({ ...task, description: e.target.value })} 
      ></textarea>
      <input 
        type="date" 
        value={task.dueDate} 
        onChange={e => setTask({ ...task, dueDate: e.target.value })} 
      />
      <select 
        value={task.priority} 
        onChange={e => setTask({ ...task, priority: e.target.value })}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
