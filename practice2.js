const log = m => (m ? console.log(m) : null);

const factoryFn = () => {
  return { name: "Ram", age: 33 };
};

log("hi");

// const Person = { name: "Ram", age: "22" };
const Person = factoryFn();
log(Person);

function p() {
  log("I am P");
}

const logger = log("RR");

// var p1=new Person()

class Ram {
  constructor() {
    this.id = 1;
  }

  toggle() {
    log(" > I am toggle");
  }
}

const r = new Ram();
log(r);
log(r.toggle());

const mix = {
  name: "Ram",
  sayHi: () => {
    console.log("Hi...");
    // return this;
  },
  sayHello() {
    console.log("Hello...");
    return this;
  },
  sayHowAreYou() {
    console.log("How are you!!...");
    return this;
  },
  sayBye: () => {
    console.log("Bye...");
    return this;
  }
};

const car = {
  make: "Acura",
  counter: 10,
  log: m => (m ? console.log(m) : null),
  start() {
    log("Engine Starting");
    this.counter++;
    log(this.counter);
    return this;
  },
  stop() {
    log("Engine Stopping");
    this.counter--;
    log(this.counter);
    return this;
  }
};

const m = mix;
log(m.sayHi());
log(m);

m.sayHello()
  .sayHowAreYou()
  .sayBye();

const MDX = car;
log(MDX);

MDX.start()
  .start()
  .stop();

//apply
const g = {
  sayHi: function() {
    log("hi..");
    return `Hi...${this.name}`;
  }
};

log(g.sayHi.apply({ name: "Ram" }));
log(g.sayHi.call({name:"LL"}))


log(Math.max.apply(null,[1,2]))

log(Math.max(1,2,3,3))

var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  log(person.fullName.apply(person1));