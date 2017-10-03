class Node {
	constructor(data, priority) {

		this.data = data;
		this.priority = priority;
		this.left = null;
		this.right = null;
		this.parent = null;


	}

	appendChild(node) {
		if(node != undefined) {

			if (this.left == null){
				this.left = node;
				node.parent=this;
			}
			else if ( this.right == null){
				 this.right = node;
				 node.parent = this;
			}


        }

	}

	removeChild(node) {
		if ( this.left == node){
			this.left.parent = null;
			this.left = null;
		}
		else if (this.right ==  node){
			this.right.parent = null;
			this.right = null;
		}
		else if ( this.left != node && this.right != node ){
			throw  new Error();
		}

	}

	remove() {

		if (this.parent != null)
		this.parent.removeChild(this);

	}

	swapWithParent() {

		var father = this.parent;
		var son = this;

		if ( this.parent != null) {
			if ( father.parent != null) {
                (father.parent.left == father) ? father.parent.left = son : father.parent.right = son;
            }
			son.parent = father.parent;
			father.parent=son;
            var buf1 = son.left;
            var buf2 = son.right;
			if ( father.left == son){
				son.left =  father;
				son.right = father.right;
				if ( son.right!= null)
				son.right.parent = son;

			}
			else {
				son.right = father;
				son.left = father.left ;
				if(son.left!=null)
				son.left.parent = son;
			}
			if (buf1!=null )
			buf1.parent = father;
			if (buf2!=null)
			buf2.parent = father;
			father.left = buf1;
			father.right = buf2;


        }





		
	}
}


const root = new Node(1, 2);
const left = new Node(3, 4);
const right = new Node(5, 6);

root.appendChild(left);
root.appendChild(right);

right.swapWithParent();

console.log(left.parent == right );
module.exports = Node;


