import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TaskService {
    addTask(task) {
        ProxyState.tasks.push(new Task(task.name, task.listId, task.taskBody))
        saveState()
        ProxyState.tasks = ProxyState.tasks
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
            ProxyState.tasks = ProxyState.tasks
            saveState()
            return
        } else if (foundIndex.check == true) {
            foundIndex.check = false
            ProxyState.tasks = ProxyState.tasks
            saveState()
            return
        }
        // document.getElementById('taskText').classList.add('completed')
    }
}


export const taskService = new TaskService()