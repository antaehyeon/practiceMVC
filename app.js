/* crong 피드백 
1. DOMContentLoaded 와 onload 의 차이점을 확인해볼 것
*/
window.addEventListener('DOMContentLoaded', function() {
    const model = new TodoModel();
    const view = new TodoView(model);
    const control = new TodoController(model, view);
});