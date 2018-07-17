class TodoController {
    
    constructor(model, view) {

        this.todoModel = model;
        this.todoView = view;

        this.todoRegisterationBtn = model.getTodoRegisterationBtn();

        console.log("123");
        console.log(this.todoRegisterationBtn);

        // this.todoRegisterationBtn.onclick = (function() {

        // });

        // this.todoRegisterationBtn.onclick = (function() {
        //     console.log('!444');
        //     console.log("s t o b");
        // });

        // console.log(this.todoRegisterationBtn)

        this.todoRegisterationBtn.onclick = function() {
            const todoModel = new TodoModel();
            const todoView = new TodoView();
            
            const todoListParentUlTag = todoModel.getTodoListParentUlTag();

            const todoInputData = todoModel.getTodoInputData();
            const listItemNode = todoModel.createListItemNode(todoInputData);

            console.log("111");
            console.log(todoListParentUlTag);
            console.log(listItemNode);
            console.log("1112");

            console.log("2912");
            console.log(todoInputData);
    
            todoView.registerTask(todoListParentUlTag, listItemNode);

        }

    }

    test() {
        console.log("992");
        console.log("s t m r");
    }

    registerButtonClickEvent(model, view) {
        console.log("run registerButtonClickEvent Method");
        console.log("todoRegisteronBtn onClicked !");
        console.log("12");
        console.log(model);

        const todoListParentUlTag = this.todoModel.getTodoListParentUlTag();

        const todoInputData = this.todoModel.getTodoInputData();
        const listItemNode = this.todoModel.createListItemNode(todoInputData);

        this.todoView.registerTask(todoListParentUlTag, listItemNode);

    }
}

console.log('success load controller.js');