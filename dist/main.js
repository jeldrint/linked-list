/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const body = document.querySelector('body');\r\nbody.style.backgroundColor = 'rgb(33,33,33)';\r\n\r\nconst LinkedList = (node) => {\r\n    const head = () => {\r\n        let headNode = node;\r\n        return headNode;\r\n    }\r\n\r\n    const tail = () => {\r\n        let tailNode = node;\r\n        while(tailNode.nextNode != null){\r\n            tailNode = tailNode.nextNode;            \r\n        }\r\n        return tailNode;\r\n    }\r\n\r\n    const size = () => {\r\n        let sizeNode = node;\r\n        let num = 1;\r\n        while(sizeNode.nextNode != null){\r\n            sizeNode = sizeNode.nextNode;\r\n            num++;\r\n        }\r\n        return num;\r\n    }\r\n    \r\n    const append = (value) => {\r\n        let tailNode = tail();\r\n        tailNode.nextNode = value;\r\n        value.nextNode = null;\r\n    }\r\n\r\n    const prepend = (value) => {\r\n        let headNode = head();\r\n        value.nextNode = headNode;\r\n        node = value;\r\n    }\r\n\r\n    const at = (index) => {\r\n        let atNode = node;\r\n        for (let i = 1; i< index; i++){\r\n            atNode = atNode.nextNode;\r\n        }\r\n        return atNode\r\n    }\r\n\r\n    const pop = () => {\r\n        let nodeSize = size();\r\n        let popNode = node\r\n        for (let i =1; i<nodeSize-1; i++){\r\n            popNode = popNode.nextNode;\r\n        }\r\n        popNode.nextNode = null;\r\n    }\r\n\r\n    return {head, size, tail, append, prepend, pop, at};\r\n}\r\n\r\nconst Node = (value) => {\r\n    let nextNode = null;\r\n    return {value,nextNode}\r\n}\r\n\r\nconst newNode1 = Node('O');\r\nconst newNode2 = Node('H');\r\nconst newNode3 = Node('C');\r\nconst newNode4 = Node('E');\r\n\r\nnewNode1.nextNode =newNode2;\r\nnewNode2.nextNode =newNode3;\r\nnewNode3.nextNode =newNode4;\r\n\r\nconst list = LinkedList(newNode1);\r\n\r\nlist.append(Node('SO'))\r\nlist.pop();\r\nlist.pop();\r\nlist.pop();\r\nlist.append(Node('EN'))\r\nconsole.log(newNode1)\r\nconsole.log(list.at(3))\r\n\n\n//# sourceURL=webpack://merge-sort/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;