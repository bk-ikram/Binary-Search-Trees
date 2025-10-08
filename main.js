import {Tree , prettyPrint , generateRandomNumberArray} from './classes.js';

const randomArray = generateRandomNumberArray(10,1,100);

console.log(randomArray);

let tree = new Tree(randomArray);


prettyPrint(tree.root);

/*
tree.root = tree.insert(tree.root,50);
prettyPrint(tree.root);
*/

/*
console.log("The node found is:")
console.log(tree.find(tree.root,200));

*/
/*
console.log("The successor found is:")
console.log(tree.findInorderSuccessor(tree.find(tree.root,randomArray[2])));
*/

/*
console.log(`The value to delete is ${randomArray[2]}`)
tree.root = tree.delete(tree.root,randomArray[2]);

prettyPrint(tree.root);
*/

//console.log(`Finding successor for ${randomArray[5]}`)
//console.log(tree.findInorderSuccessor(tree.root,randomArray[5]));

//tree.levelOrderForEach(console.log);

//tree.inOrderForEach(console.log,tree.root);

/*
console.log(`finding height for value: ${randomArray[5]}`);
console.log(tree.height(tree.root,randomArray[5]));
*/

/*
console.log(`finding depth for value: ${randomArray[5]}`);
const result = tree.depth(tree.root,randomArray[5])
console.log(result);
*/
//--------------
console.log(`checking if tree is balanced before insertion:`);
console.log(tree.isBalanced(tree.root));

console.log("preorder printout of the tree")
tree.preOrderForEach(console.log,tree.root);
console.log("inorder printout of the tree")
tree.inOrderForEach(console.log,tree.root);
console.log("postorder printout of the tree")
tree.postOrderForEach(console.log,tree.root);

tree.root = tree.insert(tree.root,120);
tree.root = tree.insert(tree.root,200);
tree.root = tree.insert(tree.root,175);
tree.root = tree.insert(tree.root,102);

prettyPrint(tree.root);



console.log(`checking if tree is balanced after insertion:`);
console.log(tree.isBalanced(tree.root));

tree.rebalance(tree.root);


prettyPrint(tree.root);
console.log(`checking if tree is balanced after rebalancing:`);
console.log(tree.isBalanced(tree.root));

console.log("preorder printout of the tree")
tree.preOrderForEach(console.log,tree.root);
console.log("inorder printout of the tree")
tree.inOrderForEach(console.log,tree.root);
console.log("postorder printout of the tree")
tree.postOrderForEach(console.log,tree.root);