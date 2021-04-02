import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"

export default class Task {
    constructor(name) {
        this.id = generateId()
        this.name = name
    }
    get Template() {
        return `
        <div class="d-flex justify-content-between">
            <p class="justify-content-center"><div class="form-check form-check-inline" onsubmit="app.taskController.completed(${this.id})">
  <input id="check" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1"></label>
</div>${this.name}</p><button type="submit" class="btn bg-danger text-light" title='X' onsubmit="app.taskController.removeTask(${this.id})">X</button>
        </div>
        `
    }
}