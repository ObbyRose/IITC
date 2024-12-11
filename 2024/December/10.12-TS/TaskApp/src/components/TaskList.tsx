import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../Types/types.ts';
import TaskCard from './TaskCard';

const TaskList: React.FC = () => {
  const { tasks, deleteTask, filterTasks, loading, error } = useTaskContext();
  const [statusFilter, setStatusFilter] = useState<string | undefined>();
  const [priorityFilter, setPriorityFilter] = useState<string | undefined>();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  const handleFilterChange = () => {
    filterTasks(statusFilter, priorityFilter);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="filters">
        <select onChange={e => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="">Filter by Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select onChange={e => setPriorityFilter(e.target.value)} value={priorityFilter}>
          <option value="">Filter by Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={handleFilterChange}>Apply Filters</button>
      </div>
      
      <div className="task-list">
        {!Array.isArray(tasks) ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList