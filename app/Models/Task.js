import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"

export default class Task {
    constructor(name, listId, taskBody, check = false) {
        this.id = generateId()
        this.name = name
        this.listId = listId
        this.taskBody = taskBody
        this.check = check
    }
    get Template() {
        return `
        <div class="row justify-content-between my-2">
            <div class="col d-flex align-items-center">
                ${this.check == true ? '<i class="fas fa-check"></i>' : ''}
                <button class="btn btn-sm btn-outline-success m-2" onclick="app.taskController.completed('${this.id}')">Done</button>
                    <div class="d-flex flex-column m-2">
                        <h5 id="taskText">${this.name}</h5>
                        <span>${this.taskBody}</span>
                    </div>
                <button class="justify-content-end btn btn-sm text-danger" title='X' onclick="app.taskController.removeTask('${this.id}')">X</button>
            </div>
        </div>
        `
    }
    get task() {

    }
}