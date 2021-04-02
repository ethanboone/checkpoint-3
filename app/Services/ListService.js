import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListService {
    addList(list) {
        ProxyState.lists = [...ProxyState.lists, new List(list.name, list.color)]
    }

    addTask(task) {
        console.log('added task')
        ProxyState.tasks = [...ProxyState.tasks, new Task(task.name)]
    }
}

export const listService = new ListService()