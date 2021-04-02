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
          </div>
          <div class="p-3" id="tasks">
          </div>
          <form class="d-flex align-items-end p-2" onsubmit="app.listController.addTask('${this.id}')">
              <input type="text" name="task" id="task" class="form-control" placeholder="Add Task..."
                  aria-describedby="helpId">
              <button type="submit" class="btn bg-${this.color}" title='+'>+</button>
          </form>
      </div>
    </div>
        `
    }
}