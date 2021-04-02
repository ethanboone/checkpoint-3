import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"

class TaskService {
    removeTask(id) {
        let tasks = ProxyState.tasks
        //tasks.find(task => id == task.id)
        console.log()
    }

    completed(id) {
        ProxyState.tasks = [...ProxyState.tasks, new task(task.name)]
    }
}

export const taskService = new TaskService()