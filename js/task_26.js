// Задача: Рекурсивный обход дерева DOM:: 
// Напишите функцию, которая рекурсивно обходит дерево DOM, начиная с указанного элемента, 
// и выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).

const traversalTree = (treeNode) => {
    console.log(treeNode.nodeName, treeNode);

    if(!treeNode.childNodes) {
        return ;
    }

    for (let i = treeNode.childNodes.length-1; i>=0; i--) {
        traversalTree(treeNode.childNodes[i]);
    }

};

export {traversalTree};