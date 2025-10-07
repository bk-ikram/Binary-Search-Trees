class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(data){
        this.data = [...new Set(data)].sort((a,b) => a - b);
        this.root = this.buildTree(this.data);
    }

    buildTree(arr){
        //base case
        if(arr.length === 0)
            return null;
        const mid = Math.floor(arr.length / 2);
        const midNode = new Node(arr[mid]);
        const left = arr.slice(0,mid);
        const right = arr.slice(mid+1);
        midNode.left = this.buildTree(left);
        midNode.right = this.buildTree(right);
        return midNode;
    }

    insert(root, value){
        //base case
        if(root === null){
            return new Node(value)
        }
        if(root.data > value)
            root.left = this.insert(root.left,value);
        if(root.data < value)
            root.right = this.insert(root.right,value);
        
        return root;
    }

    delete(root, value){
        //In case the value is not found
        if (root === null)
            return root;
        //traverse tree to find value
        if (root.data > value)
            root.left = this.delete(root.left, value);
        if (root.data < value)
            root.right = this.delete(root.right, value);
        //Check if value found
        if (root.data === value){
            //Check if node is leaf element
            if( root.left === null && root.right === null)
                return null;
            //If node only has right child
            else if( root.left === null)
                return root.right;
            //If node only has left child
            else if( root.right === null)
                return root.left;
            else{
                let successorNode = this.findInorderSuccessor(root);
                //swap value to be deleted, with the successor
                const tmp = root.data;
                root.data = successorNode.data;
                successorNode.data = tmp;
                //root = this.root(root,value);

            }
                

        }
        return root;
    }

    findInorderSuccessor(root){
        let cur = root.right;
        while(cur !== null && cur.left !== null){
            cur = cur.left;
        }
        return cur;
    }

    find(root,value){
        //base cases
        if(root === null || root.data === value)
            return root
        else if(root.data > value)
            return this.find(root.left, value);
        else
            return this.find(root.right, value);
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

function generateRandomNumberArray(length, min, max) {
  return Array.from({ length: length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

export {Tree , prettyPrint , generateRandomNumberArray}