import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Task, TaskContextType } from '../Types/types.ts';
import axios from 'axios';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

type TaskProviderProps = {
    children: ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/tasks')
      .then(response => {
        setTasks(response.data);
        setError(null); // clear error if data is fetched successfully
      })
      .catch(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        } else {
          setError('Failed to load tasks');
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setLoading(true);
    axios.post('http://localhost:3000/tasks', task)
      .then(response => {
        setTasks([...tasks, response.data]);
        setError(null);
      })
      .catch(err => {
        setError("Failed to add task");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  const updateTask = (updatedTask: Task) => {
    setLoading(true);
    axios.put(`http://localhost:3000/tasks/${updatedTask.id}`, updatedTask)
      .then(() => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setError(null);
      })
      .catch(err => {
        setError("Failed to update task");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  const deleteTask = (taskId: string) => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/tasks/${taskId}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
        setError(null);
      })
      .catch((err) => {
        setError("Failed to delete task");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  const filterTasks = (status?: string, priority?: string) => {
    setLoading(true);
    axios.get('http://localhost:3000/tasks', {
      params: { status, priority }
    })
      .then(response => {
        setTasks(response.data);
        setError(null);
      })
      .catch(err => {
        setError("Failed to filter tasks");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, filterTasks, loading, error }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be used within a TaskProvider");
  return context;
};