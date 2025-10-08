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
                root.data = successorNode.data;
                successorNode.data = value;
                root.right = this.delete(root.right, value);
                //successorNode = this.delete(successorNode, value);
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

    levelOrderForEach(callback,q = [this.root]){
        if(!callback)
            throw new Error("No Callback function provided");
        //base case
        if(q.length === 0)
            return
        const cur = q[0];
        callback(cur.data);
        q = q.slice(1).concat([cur.left,cur.right].filter((ele) => ele !== null));
        return this.levelOrderForEach(callback,q);
    }

    inOrderForEach(callback,root){
        if(!callback)
            throw new Error("No Callback function provided");
        //base case
        if(root === null)
            return
        const leftSide = root === null ? null : root.left;
        const rightSide = root === null ? null : root.right;
        this.inOrderForEach(callback,leftSide);
        callback(root.data);
        this.inOrderForEach(callback,rightSide);
    }

    preOrderForEach(callback,root){
        if(!callback)
            throw new Error("No Callback function provided");
        //base case
        if(root === null)
            return
        const leftSide = root === null ? null : root.left;
        const rightSide = root === null ? null : root.right;
        callback(root.data);
        this.inOrderForEach(callback,leftSide);
        this.inOrderForEach(callback,rightSide);
    }

    postOrderForEach(callback,root){
        if(!callback)
            throw new Error("No Callback function provided");
        //base case
        if(root === null)
            return
        const leftSide = root === null ? null : root.left;
        const rightSide = root === null ? null : root.right;
        this.inOrderForEach(callback,leftSide);
        this.inOrderForEach(callback,rightSide);
        callback(root.data);
    }

    height(root,value){
        const foundNode =  this.find(root,value);
        if (foundNode === null)
            return null;
        return this.heightRec(foundNode);
    }

    heightRec(root){
        //base case
        if(root === null)
            return 0;
        const leftSide = root === null ? null : root.left;
        const rightSide = root === null ? null : root.right;
        //check if tot height of left side vs right side
        return Math.max(this.heightRec(leftSide)
                            ,this.heightRec(rightSide)) + 1
    }
    depth(root,value, valueDepth = 0){
        //base cases, for when the value is not found
        if(root === null)
            return null;            
        else if(root.data > value)
            valueDepth =  1 + this.depth(root.left, value, valueDepth);
        else if (root.data < value)
            valueDepth =  1 + this.depth(root.right, value, valueDepth);
        return valueDepth;
    }

    isBalanced(root){
        //base case, root is null, return 0
        if(root === null)
            return
        const leftHeight = this.heightRec(root.left) ;
        const rightHeight = this.heightRec(root.right) ;
        if (Math.abs(leftHeight - rightHeight) > 1)
            return false
        this.isBalanced(root.left);
        this.isBalanced(root.right);
        return true
    }

    rebalance(root){
        const data = [];
        this.inOrderForEach((ele) => data.push(ele),root);
        this.root = this.buildTree(data);
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