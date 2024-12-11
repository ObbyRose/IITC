import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';  
import AddTaskForm from './components/AddTaskForm';  

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;