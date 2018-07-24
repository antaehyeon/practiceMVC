/* crong 피드백
1. 왜 클릭 이벤트 함수 안에서 model 과 view 를 초기화 하나요?
2. onclick과 addEventListener의 차이점을 찾아볼 것 (onclick은 추천하지 않는 방법이다)
3. controller 가 model 과 view 를 연결해주는 점에서 괜찮게 구현함
*/

class TodoController {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.registerEventListener(model, view);
    }

    registerEventListener(model, view) {
        const registerationBtn = view.findElementByTagName("button");
        // console.log("01"); console.log(registerationBtn);
        // console.log("02"); console.log(model);
        // console.log("03"); console.log(view);
        // const registerationBtn = document.querySelector("button");
        // console.log("05"); console.log(registerationBtn);
        registerationBtn.addEventListener("click", () => {
            this.addTodoListData(model, view);
            // console.log(this);
        });
    }

    addTodoListData(model, view) {
        const currentInputData = view.findElementByName("todo").value;
        // console.log("00"); console.log(currentInputData);
        model.setCurrentInputTodoData(currentInputData);
        const todoItemNode = model.createListItemNode();
        const todoListParentNode = view.findElementByClassName("todolist");
        view.registerTask(todoListParentNode, todoItemNode);
    }
}