import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"

export default class Task {
    constructor(name, listId) {
        this.id = generateId()
        this.name = name
        this.listId = listId
    }
    get Template() {
        return `
        <div class="row justify-content-between my-2">
            <div class="col d-flex justify-content-between align-items-center">
                <div class="form-check form-check" onsubmit="app.taskController.completed(${this.id})">
                    <input id="check" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1"></label>
                </div>
                    <div id="taskText">${this.name}</div>
                    <button type="submit" class="btn bg-danger text-light" title='X' onsubmit="app.taskController.removeTask(${this.id})">X</button>
            </div>
        </div>
        `
    }
}