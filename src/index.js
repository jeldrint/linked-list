const body = document.querySelector('body');
body.style.backgroundColor = 'rgb(33,33,33)';

const LinkedList = (node) => {
    const head = () => {
        let headNode = node;
        return headNode;
    }

    const tail = () => {
        let tailNode = node;
        while(tailNode.nextNode != null){
            tailNode = tailNode.nextNode;            
        }
        return tailNode;
    }

    const size = () => {
        let sizeNode = node;
        let num = 1;
        while(sizeNode.nextNode != null){
            sizeNode = sizeNode.nextNode;
            num++;
        }
        return num;
    }
    
    const append = (value) => {
        let tailNode = tail();
        tailNode.nextNode = value;
        value.nextNode = null;
    }

    const prepend = (value) => {
        let headNode = head();
        value.nextNode = headNode;
        node = value;
    }

    const at = (index) => {
        let atNode = node;
        for (let i = 1; i< index; i++){
            atNode = atNode.nextNode;
        }
        return atNode
    }

    const pop = () => {
        let nodeSize = size();
        let popNode = node
        for (let i =1; i<nodeSize-1; i++){
            popNode = popNode.nextNode;
        }
        popNode.nextNode = null;
    }

    const contains = (value) => {
        let containsNode = node;
        let nodeSize = size();

        for (let i = 1; i <= nodeSize; i++){
            if(containsNode.value === value){
                return true;
            }
            containsNode = containsNode.nextNode;
        }
        return false;
    }

    const find = (value) => {
        let findNode = node;
        let nodeSize = size();

        for (let index = 1; index <= nodeSize; index++){
            if(findNode.value === value){
                return `The value is found on index ${index}`;
            }
            findNode = findNode.nextNode;

        }
        return `The value cannot be found. ${null}`;
    }

    const insertAt = (value,index) => {
        let insertAtNode = node;
        if(index == 1){
            value.nextNode = insertAtNode.nextNode
            insertAtNode.nextNode = value;
        }else{
            for (let i =1; i < index; i++){
                insertAtNode = insertAtNode.nextNode;
            }
            if(insertAtNode == null || index == 0){
                console.log('Index does not match the current size')
            }else{
                value.nextNode = insertAtNode.nextNode
                insertAtNode.nextNode = value;        
            }
        }
    }

    const removeAt = (index) => {
        let currentNode = node;
        let prevNode;

        if(index == 1){
            prevNode = currentNode.nextNode; // this is the new Head;
            node = prevNode;                 // transferred to original node;

            currentNode.nextNode = null;
        }else{
            for (let i =1; i<index; i++){
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            if(currentNode == null || index == 0){
                console.log('Index does not match the current size')
            }else{
                prevNode.nextNode = currentNode.nextNode;
                currentNode.nextNode = null;        
            }
        }
    }

    return {head, size, tail, append, prepend, pop, at, contains, find, insertAt, removeAt};
}

const Node = (value) => {
    let nextNode = null;
    return {value,nextNode}
}

const newNode1 = Node('O');

//APPEND TESTING
const list = LinkedList(newNode1);
list.append(Node('Hello'))
list.append(Node('Try'))

//PREPEND TESTING
const newNode2 = Node('Single');
list.prepend(newNode2)

//POP TESTING
list.pop();

//AT TESTING
//console.log(list.at(2));

//CONTAINS TESTING
//console.log(list.contains('Try'));

//FIND TESTING
//console.log(list.find('Try'))

//INSERT-AT TESTING
list.insertAt(Node('really?',1))
list.insertAt(Node('Pogi'),4)

//REMOVE-AT TESTING
list.removeAt(1)

//MAIN OUTPUT OF LINKED LIST - HEAD
console.log(list.head());
