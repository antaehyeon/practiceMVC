//네. view는 진짜 렌더링에 집중하는 경우가 많아요.
class TodoView {
    
    //지금은 controller 를 통해서 데이터를 받아서 화면렌더링을 하는 코드죠.
    //괜찮습니다. 그런데 view에서 model을 접근해서 가져오기도 해요.
    registerTask(parentNode, childNode) {
        parentNode.appendChild(childNode);
    }
}

console.log("success load view.js");