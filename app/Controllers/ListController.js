import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { listService } from "../Services/ListService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";

function _draw() {
    let form = document.getElementById('app')
    let template = ''
    if (ProxyState.lists.length == 0) {
        template += `<div class="col"><p>No lists yet...</p></div>`
    }
    ProxyState.lists.forEach(list => template += list.Template)
    form.innerHTML = template
}



export default class ListController {
    constructor() {
        ProxyState.on("lists", _draw)
        ProxyState.on("tasks", _draw)
        loadState()
        _draw()
    }

    addList() {
        window.event.preventDefault()
        let form = window.event.target
        let list = {
            name: form.name.value,
            color: form.color.value
        }
        console.log(form.name.value)
        listService.addList(list)
        form.reset()
    }

    removeList(id) {
        if (window.confirm('Are you sure you want to delete this list?')) {
            listService.removeList(id)
        }
        return
    }


}