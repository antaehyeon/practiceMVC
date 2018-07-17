class TodoModel {

    constructor() {
        this.todoInputBox = document.getElementsByName("todo")[0];
        this.registerationTodoData = document.getElementsByTagName("button");
        this.todoListParentUlTag = document.getElementsByClassName("todolist")[0];
    }

    registerTask(todoData) {
        const todoListItemNode = this.createListItemNode(todoData);
        this.todoListParentUlTag.appendChild(todoListItemNode);
    }

    createListItemNode(textData) {
        const listItemNode = document.createElement("li");
        const textNode = document.createTextNode(textData);
        listItemNode.appendChild(textNode);

        return listItemNode;
    }

    getTodoInputBox() {
        return this.todoInputBox;
    }

    getTodoListParentUlTag() {
        return this.todoListParentUlTag;
    }

}

exports.TodoModel;