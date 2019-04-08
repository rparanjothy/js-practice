const log = m => {
  if (m) {
    document.body.innerHTML = m;
    log2(m);
  }
};

const log2 = m => (m ? console.log(m) : null);

age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

log(age);

// using reduce to sum
sumOfAges = age.reduce((out, a) => out + a, 0);
log(`sum of ages = ${sumOfAges}`);

// map
let twice = age.map(a => a * 2);
log(twice);

//filter
// get <5
let lessThan5 = age.filter(e => e <= 5);
log(lessThan5);

// pipeline
let out = age
  .map(a => Math.pow(a, 2))
  .filter(a => a < 25)
  .reduce((o, a) => o + a);
log(out);

//add to begin
age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var a = age.unshift(1, 2, 3, 4);
log(age);

//list manipulation
age = [1, 2, 3, 4, 5];
//pop removes the last element and returns
t = age.pop();
log(`removed element (last) is ${t}`);
log(`age is now ${age}`);

//shift pulls out the first element
age = [1, 2, 3, 4, 5];
//pop removes the last element and returns
t = age.shift();
log(`removed element (first) is ${t}`);
log(`age is now ${age}`);

//unshift adds an element as the first element
age = [1, 2, 3, 4, 5];
//pop removes the last element and returns
t = age.unshift(0);
log(`adds to the beginning and returns length ${t}`);
log(`age is now ${age}`);

//push adds a new element
age = [1, 2, 3, 4, 5];
t = age.push(99);
log(
  `adds a new element at the end and returns the length of the array is ${t}`
);
log(`age is now ${age}`);

/////////

// Array slicing
// slice is destructive
log("------ Slicing -------");
age = [1, 2, 3, 4, 5];
log(age);
t = age.slice(0, 3);
log(t);

// negative value for slice means from end n number of chars
t = age.slice(-3);
log(t);

// splice
//destructive
log("------ Splice -------");
log("from nth index, x element to be removed and returns the removed");
age = [1, 2, 3, 4, 5];
log(age);
t = age.splice(0, 2);
log(t);
log(age);

log(
  "splice can also remove and replace with new value if provided and returns the removed element"
);
age = [1, 2, 3, 4, 5];
t = age.splice(0, 1, "99");
log(t);
log(age);

//splice can also insert in the middle of the array without deleting if you dont specify the delete n
log(
  "splice can also insert in the middle of the array without deleting if you dont specify the delete n "
);
age = [1, 2, 3, 4, 5];
t = age.splice(0, 0, "inserted at 0");
log(t);
log(age);
t = age.splice(2, 0, "inserted at 2");
log(t);
log(age);

// negative value for slice means from end n number of chars
// t=age.slice(-3)
// log(t)

// log("Ramkumar")

//reverse
age = [1, 2, 3, 4, 5];
age.reverse();
log(age);

let word = "ramar";
reversed = word
  .split("")
  .reverse()
  .join("");
log(reversed);
log(reversed === word);

//Sets

var s = new Set();
log(s);
s.add(1).add(2);
log(s);

//like python string to chars
var aa = Array.from("ram").reverse();
log(aa);

//Maps
var m = new Map();
m.set(1, "a");
m.set(2, "a");
log(m);
log(m.get(1));
log(m.keys());

log(Array.from(m)[0]);

aa.forEach(q => log(q));

//any number of args like (sum)
function u(...a) {
  a.map(q => log(q));
  return a.reduce((o, e) => o + e);
}

u(1, 2, 3, 4, 5, 6, 7);

log(u(1, 2, 3, 4, 5, 6, 7));

function getAverage(...e) {
  t = e.reduce((acc, element) => acc + element.length, 0);
  log(t / e.length);
}

getAverage("ram", "ramk", "rishi");

// Given an unsorted array which has a number in the majority (a number appears more than 50% in the array), find that number?(Solution)
a = [1, 1, 1, 1, 1, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 3, 4, 5, 6];
o = new Map();
// a.forEach(e=>o[e]=o[e]?o[e]+1:1)
const l = a.length / 2;
log(l);
a.forEach(e => (o.has(e) ? o.set(e, o.get(e) + 1) : o.set(e, 1)));
log(o);

for (e of o.entries()) {
  if (e[1] > l) {
    log(e[0]);
  }
}

a = 11;
b = 22;
log(`a is ${a}; b is ${b}`);
a = a + b;
log(`a is ${a}; b is ${b}`);
b = a - b;
log(`a is ${a}; b is ${b}`);
a = a - b;
log(`a is ${a}; b is ${b}`);

//my fib series, add a and b; make b as the sum (which is the val) and then
// recompute a as total - a (old a)
function fib(x) {
  fiblist = [];
  // add = (a) => {return a.reduce((o,e)=>o+e)}
  a = 0;
  b = 1;
  fiblist.unshift(0, 1);
  //since we added 2 in the beginning
  while (x - 2 > 0) {
    x--;
    // log(`a:${a} b:${b} o:${a + b}`);
    b = a + b;
    a = b - a;
    // log(b)
    fiblist.push([b, parseFloat((b / a).toFixed(5))]);
    // log(`a is ${a}; b is ${b}`);
  }
  return fiblist;
}

log(fib(10));

// 218922995834555169026;

function fac(a, x, ct) {
  if (ct > 0) {
    // log(x);
    log(`a:${a},b:${x},fac:${a * x},ct:${ct}`);
    // ct -= 1;
    fac(a * x, ++x, --ct);
  }
}

log(fac(1, 1, 9));
