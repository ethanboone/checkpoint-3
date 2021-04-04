import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"

export default class List {
    constructor(name, color, id = generateId()) {
        this.id = id
        this.name = name
        this.color = color
    }
    get Template() {
        return `
        <div class="col-md-4 my-4">
            <div class="card shadow bg-white rounded" id="list">
                <div class="text-center p-2 d-flex bg-${this.color} justify-content-between">
                    <div class="d-flex flex-column">
                        <h3>${this.name}</h3>
                        <p>${this.completedTasks}</p>
                    </div>
                <button class="btn btn-sm text-light btn-outline-light" onclick="app.listController.removeList('${this.id}')">x</button>
            </div>
            <div class="p-3" id="tasks">
            ${this.Tasks}
            </div>
            <form class="d-flex flex-column justify-items-end p-2" onsubmit="app.taskController.addTask('${this.id}')">
                <input type="text" name="task" class="form-control" placeholder="Add Task Title..."
                  aria-describedby="helpId" min="3" max="15" required></input>
                <input type="text" name="taskBody" class="form-control" placeholder="Add Task Body..."
                  aria-describedby="helpId" min="3" max="50" required></input>
              <button type="submit" class="btn bg-${this.color}" title='+'>+</button>
            </form>
            </div>
        </div>
        `
    }
    get Tasks() {
        let taskList = ProxyState.tasks.filter(t => t.listId == this.id)
        //console.log(taskList)
        let template = ''
        taskList.forEach(t => template += t.Template)
        return template
    }
    get completedTasks() {
        let tasks = ProxyState.tasks.filter(t => t.listId === this.id)
        //let listTasks = tasks.filter(t => t.listId == this.id)
        //let incomplete = tasks.filter(t => t.check == false)
        let complete = tasks.filter(t => t.check == true)
        let template = ''
        template = `${complete.length}/${tasks.length}`
        return template

    }
}
