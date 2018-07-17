class TodoModel {

    constructor() {
        this.todoInputBox = document.getElementsByName("todo")[0];
        this.todoRegisterationBtn = document.getElementsByTagName("button");
        this.todoListParentUlTag = document.getElementsByClassName("todolist")[0];
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

    getTodoInputData() {
        console.log("enter getTodoInputData");
        console.log(this.todoInputBox.value);
        return this.todoInputBox.value;
    }

    getTodoListParentUlTag() {
        // console.log("enter getTodoListParentUlTag");
        // console.log(this.todoListParentUlTag);
        return this.todoListParentUlTag;
    }

    getTodoRegisterationBtn() {
        // console.log("enter getTodoRegisterationBtn");
        // console.log(this.todoRegisterationBtn);
        return this.todoRegisterationBtn[0];
    }

}

console.log("success load module.js");