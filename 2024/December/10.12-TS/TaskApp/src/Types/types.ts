export interface Task {
    id: number
    title: string
    description: string
    dueDate: string
    priority: "Low" | "Medium" | "High"
    status: "Pending" | "In Progress" | "Completed"
}

export interface TaskContextType {
    tasks: Task[]
    addTask: (task: Task) => void
    updateTask: (task: Task) => void
    deleteTask: (taskId: number) => void
    filterTask: (status?: string, priority?: string) => void
}