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

    return {head, size, tail, append, prepend, pop, at};
}

const Node = (value) => {
    let nextNode = null;
    return {value,nextNode}
}

const newNode1 = Node('O');
const newNode2 = Node('H');
const newNode3 = Node('C');
const newNode4 = Node('E');

newNode1.nextNode =newNode2;
newNode2.nextNode =newNode3;
newNode3.nextNode =newNode4;

const list = LinkedList(newNode1);

