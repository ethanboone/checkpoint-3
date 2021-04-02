import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { taskService } from "../Services/TaskService.js"

function _draw() {
    let form = document.getElementById('tasks')
    let template = ''
    if (ProxyState.tasks.length == 0) {
        template += `<div><p>No Tasks</p></div>`
    }
    ProxyState.tasks.forEach(task => template += task.Template)
    form.innerHTML = template
}


export default class TaskController {
    constructor() {
        ProxyState.on("tasks", _draw)
    }

    removeTask(id) {
        window.event.preventDefault()
        taskService.removeTask(id)
    }
    completed(id) {
        window.event.preventDefault()
        taskService.completed(id)
    }
}
