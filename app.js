window.onload = function() {
    console.log("success window onload");

    const model = new TodoModel();
    const view = new TodoView();
    const controller = new TodoController(model, view);

    console.log(model);
    console.log(view);
    controller.registerButtonClickEvent();
};