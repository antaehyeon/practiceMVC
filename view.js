/* crong 피드백
1. view는 진짜 렌더링에 집중하는 경우가 많음
2. Controller 를 통해서 데이터를 받아, 화면을 렌더링하는 코드 (현재, 괜춘함) 이나, View 에서 Model을 접근해서 가져오기도 함
*/

class TodoView {

    findElementByName(name) {
        return document.getElementsByName(name)[0];
    }

    findElementByTagName(name) {
        return document.getElementsByTagName(name)[0];
    }

    findElementByClassName(name) {
        return document.getElementsByClassName(name)[0];
    }

    registerTask(parentNode, childNode) {
        parentNode.appendChild(childNode);
    }

}
