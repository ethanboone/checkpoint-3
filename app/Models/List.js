import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"

export default class List {
    constructor(name, color) {
        this.id = generateId()
        this.name = name
        this.color = color
    }
    get Template() {
        return `
        <div class="col-md-4 my-4">
            <div class="card shadow bg-white rounded" id="list">
                <div class="text-center p-2 d-flex bg-${this.color} justify-content-between">
                <h3>${this.name}</h3>
                <button class="btn text-light btn-outline-light" onclick="app.listController.removeList('${this.id}')">x</button>
            </div>
            <div class="p-3" id="tasks">
            ${this.Tasks}
            </div>
            <form class="d-flex align-items-end p-2" onsubmit="app.taskController.addTask('${this.id}')">
              <input type="text" name="task" class="form-control" placeholder="Add Task..."
                  aria-describedby="helpId">
              <button type="submit" class="btn bg-${this.color}" title='+'>+</button>
            </form>
            </div>
        </div>
        `
    }
    get Tasks() {
        let taskList = ProxyState.tasks.filter(t => t.listId === this.id)
        let template = ''
        taskList.forEach(t => template += t.template)
        console.log(taskList)
        return template
    }
}
