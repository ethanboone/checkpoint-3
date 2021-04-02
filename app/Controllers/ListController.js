import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { listService } from "../Services/ListService.js"

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
    addTask() {
        window.event.preventDefault()
        let form = window.event.target
        let task = {
            name: form.task.value
        }
        listService.addTask(task)
        form.reset()
    }

}