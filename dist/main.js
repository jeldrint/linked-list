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

eval("const body = document.querySelector('body');\r\nbody.style.backgroundColor = 'rgb(33,33,33)';\r\n\r\nconst LinkedList = (node) => {\r\n    const head = () => {\r\n        let headNode = node;\r\n        return headNode;\r\n    }\r\n\r\n    const tail = () => {\r\n        let tailNode = node;\r\n        while(tailNode.nextNode != null){\r\n            tailNode = tailNode.nextNode;            \r\n        }\r\n        return tailNode;\r\n    }\r\n\r\n    const size = () => {\r\n        let sizeNode = node;\r\n        let num = 1;\r\n        while(sizeNode.nextNode != null){\r\n            sizeNode = sizeNode.nextNode;\r\n            num++;\r\n        }\r\n        return num;\r\n    }\r\n    \r\n    const append = (value) => {\r\n        let tailNode = tail();\r\n        tailNode.nextNode = value;\r\n        value.nextNode = null;\r\n    }\r\n\r\n    const prepend = (value) => {\r\n        let headNode = head();\r\n        value.nextNode = headNode;\r\n        node = value;\r\n    }\r\n\r\n    const at = (index) => {\r\n        let atNode = node;\r\n        for (let i = 1; i< index; i++){\r\n            atNode = atNode.nextNode;\r\n        }\r\n        return atNode\r\n    }\r\n\r\n    const pop = () => {\r\n        let nodeSize = size();\r\n        let popNode = node\r\n        for (let i =1; i<nodeSize-1; i++){\r\n            popNode = popNode.nextNode;\r\n        }\r\n        popNode.nextNode = null;\r\n    }\r\n\r\n    const contains = (value) => {\r\n        let containsNode = node;\r\n        let nodeSize = size();\r\n\r\n        for (let i = 1; i <= nodeSize; i++){\r\n            if(containsNode.value === value){\r\n                return true;\r\n            }\r\n            containsNode = containsNode.nextNode;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    const find = (value) => {\r\n        let findNode = node;\r\n        let nodeSize = size();\r\n\r\n        for (let index = 1; index <= nodeSize; index++){\r\n            if(findNode.value === value){\r\n                return `The value is found on index ${index}`;\r\n            }\r\n            findNode = findNode.nextNode;\r\n\r\n        }\r\n        return `The value cannot be found. ${null}`;\r\n    }\r\n\r\n    const insertAt = (value,index) => {\r\n        let insertAtNode = node;\r\n        if(index == 1){\r\n            value.nextNode = insertAtNode.nextNode\r\n            insertAtNode.nextNode = value;\r\n        }else{\r\n            for (let i =1; i < index; i++){\r\n                insertAtNode = insertAtNode.nextNode;\r\n            }\r\n            if(insertAtNode == null || index == 0){\r\n                console.log('Index does not match the current size')\r\n            }else{\r\n                value.nextNode = insertAtNode.nextNode\r\n                insertAtNode.nextNode = value;        \r\n            }\r\n        }\r\n    }\r\n\r\n    const removeAt = (index) => {\r\n        let currentNode = node;\r\n        let prevNode;\r\n\r\n        if(index == 1){\r\n            prevNode = currentNode.nextNode; // this is the new Head;\r\n            node = prevNode;                 // transferred to original node;\r\n\r\n            currentNode.nextNode = null;\r\n        }else{\r\n            for (let i =1; i<index; i++){\r\n                prevNode = currentNode;\r\n                currentNode = currentNode.nextNode;\r\n            }\r\n            if(currentNode == null || index == 0){\r\n                console.log('Index does not match the current size')\r\n            }else{\r\n                prevNode.nextNode = currentNode.nextNode;\r\n                currentNode.nextNode = null;        \r\n            }\r\n        }\r\n    }\r\n\r\n    return {head, size, tail, append, prepend, pop, at, contains, find, insertAt, removeAt};\r\n}\r\n\r\nconst Node = (value) => {\r\n    let nextNode = null;\r\n    return {value,nextNode}\r\n}\r\n\r\nconst newNode1 = Node('O');\r\n\r\n//APPEND TESTING\r\nconst list = LinkedList(newNode1);\r\nlist.append(Node('Hello'))\r\nlist.append(Node('Try'))\r\n\r\n//PREPEND TESTING\r\nconst newNode2 = Node('Single');\r\nlist.prepend(newNode2)\r\n\r\n//POP TESTING\r\nlist.pop();\r\n\r\n//AT TESTING\r\n//console.log(list.at(2));\r\n\r\n//CONTAINS TESTING\r\n//console.log(list.contains('Try'));\r\n\r\n//FIND TESTING\r\n//console.log(list.find('Try'))\r\n\r\n//INSERT-AT TESTING\r\nlist.insertAt(Node('really?',1))\r\nlist.insertAt(Node('Pogi'),4)\r\n\r\n//REMOVE-AT TESTING\r\nlist.removeAt(1)\r\n\r\n//MAIN OUTPUT OF LINKED LIST - HEAD\r\nconsole.log(list.head());\r\n\n\n//# sourceURL=webpack://merge-sort/./src/index.js?");

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