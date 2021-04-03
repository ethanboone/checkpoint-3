import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TaskService {
    addTask(task) {
        console.log('added task')
        ProxyState.tasks = [...ProxyState.tasks, new Task(task.name, task.listId)]
        saveState()
    }

    removeTask(id) {
        console.log('task service')
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        saveState()
    }
    completed(id) {

        let foundTask = ProxyState.task.find(t => t.id == id)

        // document.getElementById('taskText').classList.add('completed')
    }
}


export const taskService = new TaskService()