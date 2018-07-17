class TodoView {

    constructor() { }
    
    registerTask(parentNode, childNode) {
        parentNode.appendChild(childNode);
    }
}

module.export = TodoView;