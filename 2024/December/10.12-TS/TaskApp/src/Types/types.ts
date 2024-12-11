export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
}

export interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    deleteTask: (id: string) => void; 
    filterTasks: (status?: string, priority?: string) => void;
    loading: boolean;
    error: string | null;
  }
  