import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { taskService } from "../Services/TaskService.js"
import { loadState } from "../Utils/LocalStorage.js"

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
        loadState()
    }

    removeTask(id) {
        if (window.confirm('Are you sure you want to delete this task?')) {
            taskService.removeTask(id)
        }
        return
    }

    completed(id) {
        // window.event.preventDefault()
        // let form = window.event.target
        console.log('controller')
        // window.event.preventDefault()
        taskService.completed(id)
    }
    addTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        let task = {
            name: form.task.value,
            listId: listId,
            check: false
        }
        taskService.addTask(task)
        form.reset()
    }
}
