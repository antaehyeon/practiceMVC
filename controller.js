class TodoController {
    
    constructor() {

        this.todoModel = new TodoModel();
        this.todoView = new TodoView();

        this.todoRegisterationBtn = this.todoModel.getTodoRegisterationBtn();
        
    }

    registerButtonClickEvent() {
        this.todoRegisterationBtn.onclick = function() {
            this.todoListParentUlTag = todoModel.getTodoListParentUlTag();

            const todoInputData = this.todoModel.getTodoInputData();
            const listItemNode = this.todoModel.createListItemNode(todoInputData);

            this.todoView.registerTask(this.todoListParentUlTag, listItemNode);
        }
    }





    


}