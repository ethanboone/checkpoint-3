import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { taskService } from "../Services/TaskService.js"
import { loadState } from "../Utils/LocalStorage.js"



export default class TaskController {

    removeTask(id) {
        if (window.confirm('Are you sure you want to delete this task?')) {
            taskService.removeTask(id)
        }
        return
    }

    completed(id) {
        taskService.completed(id)
    }

    addTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        let task = {
            name: form['task'].value,
            listId: listId,
            taskBody: form['taskBody'].value
        }
        taskService.addTask(task)
        form.reset()
    }
}
