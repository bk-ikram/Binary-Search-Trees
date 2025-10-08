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

tree.inOrderForEach(console.log,tree.root);