class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(data){
        this.data = [...new Set(data)].sort();
        this.buildTree(this.data)
    }

    buildTree(arr){
        //build the tree
        //first sort the array and remove duplicates
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0,mid);
        const right = arr.slice(mid+1);
        





    }
}