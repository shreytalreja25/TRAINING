function Country(name, independence) {
  this.name = name;
  this.independence = independence;
  this.describe = function () {
    console.log(`${this.name} was founded in ${this.independence}`);
  };
}

const india = new Country("India", 1947);

india.describe();