var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);

//Arrays are JavaScript objects that can hold a lot of different elements.
//var complexArr = [1, 5, "2", "Word", {"name": "James"}];
//Basically what happens in the background is that your browser will automatically give the right amount of memory space for that array. It will also change as needed if you add or remove data.
//However, in the world of high performance and different element types, sometimes you need to be more specific on how much memory is given to an array.
//Typed arrays are the answer to this problem. You are now able to say how much memory you want to give an array. Below is a basic overview of the different types of arrays available and the size in bytes for each element in that array.