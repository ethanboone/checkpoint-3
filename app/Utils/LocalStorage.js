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
        console.log(ProxyState.lists)
        ProxyState.lists = listData.map(list => new List(list.name, list.color))
        console.log(ProxyState.lists)
    }
    if (taskData) {
        ProxyState.tasks = taskData.map(task => new Task(task.name, task.listId))
        //taskData = ProxyState.tasks
    }
    // if ((listData != null || listData != undefined) && listData.length > ProxyState.lists.length) {
    //     ProxyState.lists = listData
    // }
    // if ((taskData != null || listData != undefined) && taskData.length > ProxyState.tasks.length) {
    //     ProxyState.tasks = taskData
    // }
}