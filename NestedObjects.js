const India = {
  name: "India",
  capital: "Delhi",

  details: {
    flag: "Tricolor",
    currency: "Rupee",
    printDetail() {
      console.log(
        `${this.flag} is the flag of ${this.name} and its currency is ${this.currency}`
      );
    },
  },
};

India.details.printDetail();
