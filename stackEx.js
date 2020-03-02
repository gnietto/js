var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
homeworkStack.pop('PSY44');
homeworkStack.push('CS50');

//The topmost book in the stack was the one that was put there last. If you remove that book from your stack's top, you would expose the book that was put there before the last book and so on.
//If you think about it, in all the above examples, you are getting Last-In-First-Out type of service. We will try to mimic this with our code.
//This data storage scheme is called a Stack. In particular, we would have to implement the push() method that pushes JavaScript objects at the top of the stack; and pop() method, that removes the JavaScript object that's at the top of the stack at the current moment.
