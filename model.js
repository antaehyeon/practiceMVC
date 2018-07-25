/* crong 피드백
1. Model 이라는 것이 DOM node 를 뜻하는 것이 절대 아님 (절대절대절대)
2. Model 의 데이터는 DOM 에 있는 것을 찾는게 아니고 자료구조로 가지고 있는 것
3. 당장 화면에 보여지지 않는 데이터까지 가지고 있는것이 Model ? (당장화면에 보여지지 않는 데이터까지 모두 다 화면에 존재하지 않을테니까요.)
Ex > this.todolist = [];

crong 2차 피드백
1. 넵 괜찮은편이에요.
model의 todoItemNode 메서드를 view쪽으로 옮길 수 있으면 더 좋겠네요.
model에서 데이터와 크게 상관없는 부분으로 보이는 처리를 하고 있는게 어색해서요.
*/

class TodoModel {

    constructor() {
        this.currentInputTodoData;
        this.todoList = [];
    }

    getCurrentInputTodoData() {
        return this.currentInputTodoData;
    }

    setCurrentInputTodoData(data) {
        this.currentInputTodoData = data;
    }

    getTodoList() {
        return this.todoList;
    }

    pushTodoListData() {
        this.todoList.push(this.currentInputTodoData);
    }
}