class TodoView {

    constructor() { }
    
    registerTask(parentNode, childNode) {
        parentNode.appendChild(childNode);
    }
}

exports.TodoView;