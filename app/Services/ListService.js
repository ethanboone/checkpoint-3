import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js";

class ListService {
    addList(list) {
        ProxyState.lists = [...ProxyState.lists, new List(list.name, list.color)]
        saveState()
    }

}

export const listService = new ListService()