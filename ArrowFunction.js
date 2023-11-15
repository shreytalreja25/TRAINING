const myNameIs = {
  name: "Shrey",

  regularFunction: function () {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this.name);
  },
};

myNameIs.regularFunction();
myNameIs.arrowFunction();

// const greet = () => {
//   console.log("Hello World");
// };

// greet = () => {
//   console.log("Hello World New");
// };

// greet();
