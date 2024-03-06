
let personName = "John Doe";

const personDetails = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };

let personBio = {
    name: 'John Doe',
    age: 30,
  };
  
  let object = Object.create (personBio);


  const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 50;
obj.subtract = 1;
obj.increment;
obj.decrement;

const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: false,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};
const sentance = Object.create(job);
sentance.position = "developer";   
// sentance.showDetails();


let personalAddress = {
    name:'jamaldeen',
    age:30,
    hobbies:[
       'reading','playing','sleeping'
    ],
        address: {
            city: "Berlin",
            country: "Germany"
        }
  }
  personalAddress.hobbies.push('coding');
  personalAddress.address.city = 'Munich';


//   personalAddress.hobbies.forEach(item=>{
//     console.log(item);
//   })

  personalAddress.hobbies.forEach((item, index) => {
    if (index === 1) {
        console.log(item);
    }
});


// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

Object.keys(employees).forEach(key => {
    let value = employees[key];

	 console.log(`${key}: ${value}`);
});


// Get the length of the keys
const length = Object.keys(employees).length;

console.log(length);

const values = Object.values(employees);

console.log(values);



const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);


entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});


const nameData = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(nameData, details);

console.log(character);


// Initialize an object
const nameDetails = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const JobDetails = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the object with the spread operator
const characterDetails = {...nameDetails, ...details}

console.log(characterDetails);

// ==============================================
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

// console.log('====================================');
// console.log(keys);
// console.log('====================================');