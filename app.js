window.onload = function() {
    console.log("success window onload");
    const model = new TodoModel();
    const controller = new TodoController(model);
};