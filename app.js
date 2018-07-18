//DOMContentLoaded 와 onload의 차이점을 한번 확인해보세요.
window.onload = function() {
    console.log("success window onload");
    const model = new TodoModel();
    const controller = new TodoController(model);
};