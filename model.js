class TodoModel {

    constructor() {
        /* 
        model이라는 것이 DOM node를 말하는 게 아닙니다.(절대로)
        model의 데이터는 DOM에 있는 것을 찾는게 아니고, 자료구조로 가지고 있어야 합니다.
        당장화면에 보여지지 않는 데이터까지 모두 다 화면에 존재하지 않을테니까요.
        이런식으로요
        this.todolist = [];
        */

        this.currentInputTodoData;
        this.todoList = [];

        // this.todoInputBox = document.getElementsByName("todo")[0];
        // this.todoRegisterationBtn = document.getElementsByTagName("button");
        // this.todoListParentUlTag = document.getElementsByClassName("todolist")[0];
    }

    getCurrentInputTodoData() {
        return this.todoInputData;
    }

    setCurrentInputTodoData(data) {
        this.todoInputData = data;
    }

    getTodoList() {
        return this.todoList;
    }

    pushTodoListData(data) {
        this.todoList.push(data);
    }

    createListItemNode() {
        const listItemNode = document.createElement("li");
        console.log("02"); console.log(listItemNode);
        const textNode = document.createTextNode(this.getCurrentInputTodoData());
        console.log("03"); console.log(textNode);
        console.log("04"); console.log(this.currentInputTodoData);
        listItemNode.appendChild(textNode);

        return listItemNode;
    }

    // createListItemNode(textData) {
    //     const listItemNode = document.createElement("li");
    //     const textNode = document.createTextNode(textData);
    //     listItemNode.appendChild(textNode);

    //     return listItemNode;
    // }

    // getTodoInputBox() {
    //     return this.todoInputBox;
    // }

    // getTodoInputData() {
    //     return this.todoInputBox.value;
    // }

    // getTodoListParentUlTag() {
    //     return this.todoListParentUlTag;
    // }

    // getTodoRegisterationBtn() {
    //     return this.todoRegisterationBtn[0];
    // }

}

console.log("success load module.js");