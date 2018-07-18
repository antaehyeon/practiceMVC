class TodoController {
    
    //controller 의 역할이 model과 view를 연결시켜준다는 점에서는 괜찮게 구현했어요
    constructor(model) {

        this.todoModel = model;

        this.todoRegisterationBtn = model.getTodoRegisterationBtn();

        //onclick과 addEventListener의 차이점을 찾아보세요. 지금 쓴 방법은 추천하지 않는 방법이에요.
        this.todoRegisterationBtn.onclick = function() {
            //이미 app.js에서 todomodel을 초기화 했자나요?  그게 controller에 this.todoModel로 넘겨받았고요.
            //그런데 왜 여기서 또 초기화를 할까요? 
            const todoModel = new TodoModel();
            const todoView = new TodoView();
            
            const todoListParentUlTag = todoModel.getTodoListParentUlTag();

            const todoInputData = todoModel.getTodoInputData();
            const listItemNode = todoModel.createListItemNode(todoInputData);
    
            todoView.registerTask(todoListParentUlTag, listItemNode);

        }
    }
}

console.log('success load controller.js');