// class TodoController {
    
//     //controller 의 역할이 model과 view를 연결시켜준다는 점에서는 괜찮게 구현했어요
//     constructor(model) {

//         this.todoModel = model;

//         this.todoRegisterationBtn = model.getTodoRegisterationBtn();

//         //onclick과 addEventListener의 차이점을 찾아보세요. 지금 쓴 방법은 추천하지 않는 방법이에요.
//         this.todoRegisterationBtn.onclick = function() {
//             //이미 app.js에서 todomodel을 초기화 했자나요?  그게 controller에 this.todoModel로 넘겨받았고요.
//             //그런데 왜 여기서 또 초기화를 할까요? 
//             const todoModel = new TodoModel();
//             const todoView = new TodoView();
            
//             const todoListParentUlTag = todoModel.getTodoListParentUlTag();

//             const todoInputData = todoModel.getTodoInputData();
//             const listItemNode = todoModel.createListItemNode(todoInputData);
    
//             todoView.registerTask(todoListParentUlTag, listItemNode);

//         }
//     }
    
// }

class TodoController {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.registrationBtn = this.view.findElementByTagName("button");

        console.log("15"); console.log(model);
        console.log("16"); console.log(view);

        this.registerEventListener(this.registrationBtn, this.addTodoListData(model, view));

        console.log("12"); console.log(this.addTodoListData(model, view));
    }

    registerEventListener(node, handler) {
        console.log("09"); console.log(node);
        // 1 번째 방법
        node.addEventListener("click", this.addTodoListData());
        // 2 번째 방법
        // document.getElementsByTagName("button")[0].addEventListener("click", this.addTodoListData);

        // 2개의 결과 모두 <button>등록</button> 이 반환됩니다.
        console.log("10"); console.log(node);
        console.log("11"); console.log(document.getElementsByTagName("button")[0]);

        console.log(handler);
        console.log(this.addTodoListData);
    }

    addTodoListData(model, view) {
        console.log("13"); console.log(model);
        console.log("14"); console.log(view);
        console.log("suceess add Event(addTodoListData)");
        const currentInputData = view.findElementByName("todo").value;
        model.setCurrentInputTodoData(currentInputData);
        const todoItemNode = model.createListItemNode();
        const todoListParentNode = view.findElementByClassName("todolist");
        view.registerTask(todoListParentNode, todoItemNode);
    }

}

console.log('success load controller.js');