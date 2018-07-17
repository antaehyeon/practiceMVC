class TodoController {
    
    constructor(model) {

        this.todoModel = model;

        this.todoRegisterationBtn = model.getTodoRegisterationBtn();

        this.todoRegisterationBtn.onclick = function() {
            const todoModel = new TodoModel();
            const todoView = new TodoView();
            
            const todoListParentUlTag = todoModel.getTodoListParentUlTag();

            const todoInputData = todoModel.getTodoInputData();
            const listItemNode = todoModel.createListItemNode(todoInputData);
    
            todoView.registerTask(todoListParentUlTag, listItemNode);

        }
    }
}

console.log('success load controller.js');