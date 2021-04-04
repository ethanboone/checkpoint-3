import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"

export default class Task {
    constructor(name, listId, check = false) {
        this.id = generateId()
        this.name = name
        this.listId = listId
        this.check = check
    }
    get Template() {
        return `
        <div class="row justify-content-between my-2">
            <div class="col d-flex justify-content-between align-items-center">
                ${this.check == true ? '<i class="fas fa-check"></i>' : ''}
                <button class="btn btn-outline-success" onclick="app.taskController.completed('${this.id}')">Done</button>
                    <div id="taskText">${this.name}</div>
                    <button class="btn bg-danger text-light" title='X' onclick="app.taskController.removeTask('${this.id}')">X</button>
            </div>
        </div>
        `
    }
    get task() {

    }
}