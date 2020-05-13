class BinarySearchTree {

  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }

    /* If the tree already exists, then start at the root, 
       and compare it to the key you want to insert.
       If the new key is less than the node's key 
       then the new node needs to live in the left-hand branch */
    else if (key < this.key) {
        /* If the existing node does not have a left child, 
           meaning that if the `left` pointer is empty, 
           then we can just instantiate and insert the new node 
           as the left child of that node, passing `this` as the parent */
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        /* If the node has an existing left child, 
           then we recursively call the `insert` method 
           so the node is added further down the tree */
        else {
            this.left.insert(key, value);
        }
    }
    // Similarly, if the new key is greater than the node's key then you do the same thing, but on the right-hand side */
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
}


  find(key) {
    // If then item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    }
    /* If the item you are looking for is less than the root, then follow the left child.
    If there is an existing left child, then recursively check its left and/or right child until you find the item */
    else if (key < this.key && this.left) {
      return this.left.find(key)
    }
    /* If the item you are looking for is greater that the root then follow the right child. If there is an existing right child, then recursively check its left and/or right child until you find thte item */
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    //You have searched the tree and the item is not there
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {0 
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      /* If the node only has a left child, then you replace the node with its left child */
      else if (this.left) {
        this._replaceWith(this.left);
      }
      /* Similarly if the node only has a right child */
      else if (this.right) {
        this._replaceWith(this.right);
      }
      /* If node has no children, then simply remove it and any references to it */
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key)
    }
    else if (key > this.key && this.right) {
      this.right.remove(key)
    }
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  dfsInOrder(){
    if(this.left) {
      this.left.dfsInOrder();
    }
   
    if(this.right) {
      this.right.dfsInOrder();
    }

    console.log(this.key);
  }

  dfsOutOrder(){
    console.log(this.key);
    if(this.left) {
      this.left.dfsOutOrder();
    }
    if(this.right) {
      this.right.dfsOutOrder();
    }
  

    
  }
  
  dfsPostOrder(){
    if(this.left) {
      this.left.dfsPostOrder();
    }
  
    if(this.right) {
      this.right.dfsPostOrder();
    }
    console.log(this.key);
  }

  dfsPreOrder(){
    console.log(this.key)
    if(this.left) {
      this.left.dfsPreOrder();
    }
  
    if(this.right) {
      this.right.dfsPreOrder();
    }
  }
  

  
}

console.log('hello');

function main(){
  const bst = new BinarySearchTree;

  bst.insert(25, '25');
  bst.insert(15, '15');
  bst.insert(50, '50');
  bst.insert(10, '10');
  bst.insert(24, '24');
  bst.insert(35, '35');
  bst.insert(70, '70');
  bst.insert(4, '4');
  bst.insert(12, '12');
  bst.insert(18, '18');
  bst.insert(31, '31');
  bst.insert(44, '44');
  bst.insert(66, '66');
  bst.insert(90, '90');
  bst.insert(22, '22');


  // bst.dfsPostOrder();
  
  // bst.dfsPreOrder();
  bst.dfsInOrder();
}

function main2(){
  const bst = new BinarySearchTree;


  bst.insert('Captain Picard', 21);

  bst.insert('Commnader Riker', 6);
  bst.insert('Commander Data', 21);
  
  bst.insert('Lt. Cmdr. Worf', 4);

  bst.insert('Lt. Cmdr LaForge', 7);
  bst.insert('Lt. Cmdr. Crusher', 8);
  bst.insert('Lieutenant Security-Officer', 12);
  bst.insert( 'Lieutenant Selar', 141);

  bst.dfsOutOrder();
}

function bestProfit(prices) {
  if(!prices.length)
  return 0;

  let buy = prices[0], sell = prices[0], profit = 0;
    for(var i = 1; i < prices.length; ++i ) {
      sell = prices[i];
        if(sell < buy) buy = sell;
        if(sell - buy > profit) profit = sell - buy;
    }
    return profit;
}

console.log(bestProfit([13, 20, 22, 250, 203, 404, 34]));

