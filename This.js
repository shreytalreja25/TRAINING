const India = {
  name: "India",
  capital: "Delhi",
  independence: 1947,

  describe() {
    console.log(
      `${this.name} was founded in ${this.independence} and its capital is ${this.capital}`
    );
  },
};

India.describe();