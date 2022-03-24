/*
In class, we wrote a queue class from scratch. 
For this homework, implement a stack from scratch with the methods push, pop, and check (similar to what we did in class). 
An additional challenge is to add a function called peek which returns the element at the top of the stack. 
Again, whereas a queue follows FIFO, a stack follows Last In, First Out (LIFO). 
Another challenge would be to implement this without using JavaScript arrays. 
Name this file HW1-2.js.
*/

// class Queue {
  
//     constructor(value)  {
//       this.value = [];
//     }
  
//     push(value){
//       //guard: if input is not a string
//       if (typeof(value) == 'string'){
//         this.value.push(value);
//       } else 
//         console.log('Invalid input.');
//     }
  
//     pop(){
//       //code: remove first item
//       //guard: if its empty
//       if (this.value.length==0){
//         console.log('Queue is empty.')
//       } else {
//         this.value.shift();
//       }
//     }
    
//     check(){
//       console.log(this.value);
//     }

//     peek(){

//     }

//   }
  
//   const my_queue = new Queue()
//   my_queue.push('Milk')
//   my_queue.push('Eggs')
//   my_queue.check() // ['Milk', 'Eggs']
//   my_queue.pop()
//   my_queue.check()            // ['Eggs']
//   my_queue.pop()
//   my_queue.check()            // []
//   my_queue.pop() //Queue is empty.