import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TaskService {
    addTask(task) {
        ProxyState.tasks = [...ProxyState.tasks, new Task(task.name, task.listId, task.check)]
        saveState()
    }

    removeTask(id) {
        console.log('task service')
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        saveState()
    }
    completed(id) {
        let foundIndex = ProxyState.tasks[ProxyState.tasks.findIndex(t => t.id == id)]
        if (foundIndex.check == false) {
            foundIndex.check = true
            saveState()
            ProxyState.tasks = ProxyState.tasks
            return
        } else if (foundIndex.check == true) {
            foundIndex.check = false
            saveState()
            ProxyState.tasks = ProxyState.tasks
            return
        }
        // document.getElementById('taskText').classList.add('completed')
    }
}


export const taskService = new TaskService()