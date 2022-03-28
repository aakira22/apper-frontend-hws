/*
In class, we wrote a queue class from scratch. 
For this homework, implement a stack from scratch with the methods push, pop, and check (similar to what we did in class). 
An additional challenge is to add a function called peek which returns the element at the top of the stack. 
Again, whereas a queue follows FIFO, a stack follows Last In, First Out (LIFO). 
Another challenge would be to implement this without using JavaScript arrays. 
Name this file HW1-2.js.
*/

class Stack {
  
    constructor(value)  {
      this.value = [];
    }
  
    push(value){
      //guard: if input is not a string
      if (typeof(value) == 'string'){
        this.value.push(value);
      } else 
        console.log('Invalid input.')
        return 'Invalid input.'
    }
  
    pop(){
      //code: remove last item
      //guard: if its empty
      if (this.value.length<=0){
          console.log('Stack is empty.')
        return 'Stack is empty.'
      } else {
        this.value.pop();
      }
    }
    
    check(){
      console.log(this.value);
      return this.value
    }

    peek(){
        if (this.value.length <=0){
            console.log( 'Stack is empty.')
            return 'Stack is empty.'
        } else{
            console.log(this.value[this.value.length-1])
            return this.value[this.value.length-1]
        }
    }

  }
  
  const my_stack = new Stack()
  my_stack.push('Milk')
  my_stack.push(100)
  my_stack.push('Eggs')
  my_stack.check() // ['Milk', 'Eggs']
  my_stack.peek() //['Eggs']
  my_stack.pop()
  my_stack.check()            // ['Milk']
  my_stack.pop()
  my_stack.check()            // []
  my_stack.pop() //Stack is empty.

