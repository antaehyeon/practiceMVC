class TodoController {
    
    constructor(model, view) {

        this.todoModel = model;
        this.todoView = view;

        this.todoRegisterationBtn = model.getTodoRegisterationBtn();

        // console.log(this.todoRegisterationBtn)

    }

    registerButtonClickEvent() {
        console.log("run registerButtonClickEvent Method");
        this.todoRegisterationBtn.onclick = function() {
            console.log("todoRegisteronBtn onClicked !");
            this.todoListParentUlTag = todoModel.getTodoListParentUlTag();

            const todoInputData = this.todoModel.getTodoInputData();
            const listItemNode = this.todoModel.createListItemNode(todoInputData);

            this.todoView.registerTask(this.todoListParentUlTag, listItemNode);
        }
    }
}

console.log('success load controller.js');