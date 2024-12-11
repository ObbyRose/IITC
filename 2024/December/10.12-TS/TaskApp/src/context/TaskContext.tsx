import React , {createContext, useState, useContext, useEffect, Children} from 'react'
import { Task, TaskContextType } from '../Types/types.ts'
import axios from 'axios'

const TaskContext = createContext <TaskContextType | undefined>(undefined);

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        axios.get('http://localhost:3000/tasks')
        .then(response => setTasks(response.data))
        .catch(() => {
            const storedTasks = localStorage.getItem('tasks')
            if(storedTasks) {setTasks(JSON.parse(storedTasks))}
        })
    }, [])
    useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
    
    const addTask = (task: Task) => {
        axios.post(`http://localhost:3000/tasks`, task)
        .then(response => setTasks([...tasks, response.data]))
        .catch(err => console.error("Failed to add task", err))
    };
    const updateTask = (updatedTask: Task) => {
        axios.put(`http://localhost:3000/tasks/${updatedTask.id}`, updatedTask)
        .then(()=> {
            setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
        })
        .catch(err => console.error("Failed to update task", err));
    }
    const deleteTask = (taskId: number) => {
        axios.delete(`http://localhost:3000/tasks/${taskId}`)
        .then(() => {
            setTasks(tasks.filter(task => task.id !== taskId))
        })
        .catch(err => console.error("Failed to delete task", err))
    }
    const filterTasks = (status ?: string, priority ?: string) => {
        axios.get(`http://localhost:3000/tasks`, {
            params: { status, priority }
        })
        .then(response => setTasks(response.data))
        .catch(err => console.error("Failed to filter tasks", err))
    }
    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, filterTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasksContext = ()