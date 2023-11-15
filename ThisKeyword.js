// (function printthis(){
//     console.log(this);
// })(); // window object

// // printthis(); // window object

"use strict";

function printthis(name) {

    this.name = name;
    
    console.log(`${name}`);
}

printthis("Shrey"); 

const show={
    name:'Harvinder',
    date:'15-10-1999',

    describe()
    {
        console.log(`${this.name} born on ${this.date}`);
        console.log(this.name+" born On this date = "+this.date);
    },
}

show.describe();