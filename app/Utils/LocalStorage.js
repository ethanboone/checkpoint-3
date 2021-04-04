import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"


export function saveState() {
    window.localStorage.setItem('lists', JSON.stringify(ProxyState.lists))
    window.localStorage.setItem('tasks', JSON.stringify(ProxyState.tasks))

}

export function loadState() {
    let listData = JSON.parse(window.localStorage.getItem('lists'))
    let taskData = JSON.parse(window.localStorage.getItem('tasks'))
    if (listData) {
        ProxyState.lists = listData.map(list => new List(list.name, list.color, list.id))
    }
    if (taskData) {
        ProxyState.tasks = taskData.map(task => new Task(task.name, task.listId, task.taskBody, task.check))
    }
}