/* crong 피드백
1. Model 이라는 것이 DOM node 를 뜻하는 것이 절대 아님 (절대절대절대)
2. Model 의 데이터는 DOM 에 있는 것을 찾는게 아니고 자료구조로 가지고 있는 것
3. 당장 화면에 보여지지 않는 데이터까지 가지고 있는것이 Model ? (당장화면에 보여지지 않는 데이터까지 모두 다 화면에 존재하지 않을테니까요.)
Ex > this.todolist = [];
*/

class TodoModel {

    constructor() {
        this.currentInputTodoData;
        this.todoList = [];
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
        const textNode = document.createTextNode(this.getCurrentInputTodoData());
        listItemNode.appendChild(textNode);

        return listItemNode;
    }
}