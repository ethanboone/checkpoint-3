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
        console.log(ProxyState.lists)
        ProxyState.tasks = taskData.map(task => new Task(task.name, task.listId, task.taskBody, task.check))
        console.log(ProxyState.tasks)
        //taskData = ProxyState.tasks
    }
    // if ((listData != null || listData != undefined) && listData.length > ProxyState.lists.length) {
    //     ProxyState.lists = listData
    // }
    // if ((taskData != null || listData != undefined) && taskData.length > ProxyState.tasks.length) {
    //     ProxyState.tasks = taskData
    // }
}