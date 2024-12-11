import React from 'react';
import { Task } from '../Types/types.ts';

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;