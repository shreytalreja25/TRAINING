class Country {
  constructor(name, independence) {
    this.name = name;
    this.independence = independence;
  }
  describe() {
    // console.log(`${this.name} got independence in ${this.independence}`);
    console.log(this.name + " got independence in " + this.independence);
  }
}

const india = new Country("India", 1947);

india.describe();
