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

    /*
        EVENT LISTENER 을 등록합니다.
    */
    registerEventListener(model, view) {
        const registerationBtn = view.findElementByClassName("register");
        const todoListfoldingBtn = view.findElementByClassName("fold");
        const todoListUnfoldingBtn = view.findElementByClassName("unfold");

        registerationBtn.addEventListener("click", () => {
            this.addTodoListData(model, view);
        });

        todoListfoldingBtn.addEventListener("click", () => {
            view.controlTodoListHidden("fold");
        });

        todoListUnfoldingBtn.addEventListener("click", () => {
            view.controlTodoListHidden("unfold");
        });
    }

    /*
        BUTTON EVENT
        할일을 추가하는 이벤트를 담당합니다.
    */
    addTodoListData(model, view) {
        const currentInputData = view.findElementByName("todo").value;
        model.setCurrentInputTodoData(currentInputData);
        const todoItemNode = view.createListItemNode();
        const todoListParentNode = view.findElementByClassName("todolist");
        view.registerTask(todoListParentNode, todoItemNode);
        model.pushTodoListData();
    }
}