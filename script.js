var qn21 = "" + 1 + 0;  // 10 -- > "10"
console.log(qn21);

var qn22 = "" - 1 + 0; //-1
console.log(qn22);

var qn23 = true + false //1
console.log(qn23);

var qn24 = 6 / "3"; //2
console.log(qn24);

var qn25 = "2" * "3"; //6
console.log(qn25);

var qn26 = 4 + 5 + "px"; //"9px"
console.log(qn26);

var qn27 = "$" + 4 + 5; //"$45"
console.log(qn27);

var qn28 = "4" - 2; // 2
console.log(qn28);

var qn29 = "4px" - 2 // "4px-2" -- > NaN
console.log(qn29);

var qn210 = " -9  " + 5; // -4 --> "-9  5"
console.log(qn210);

var qn211 = " -9 " - 5; // -14
console.log(qn211);

var qn212 = null + 1; // 1
console.log(qn212);

var qn213 = undefined + 1; //NaN
console.log(qn213);

var qn214 = "\t \n" -2; // NaN --> -2 as string is 0
console.log(qn214);


//qn3
function Q3() {
    let a = parseInt(prompt("First number?", 1));
    let b = parseInt(prompt("Second number?", 2));
    
   alert(a + b);
};

//qn4
if (5>4 === true) {           //True
    console.log("True");
} else {
    console.log("False");
}

if ("apple">"pineapple"=== true) {      //False
    console.log("True");
} else {
    console.log("False");
}

if ("2">"12" == true) {        //True
    console.log("True");
} else {
    console.log("False");
}

if (undefined==null) {       //True
    console.log("True");
} else {
    console.log("False");
}

if (undefined === null) {     //False
    console.log("True");
} else {
    console.log("False");
}

if (null === "\n0\n") {  //False    null only equals to undefined if not strict
    console.log("True");
} else {
    console.log("False");
}


if (null === +"\n0\n") {   //False
    console.log("True");
} else {
    console.log("False");
}



//qn5
if ("0") {                   //Yes
    console.log("Hello");
   // alert("Hello");
};


//qn6
var a = 1;
var b = 1;
var result = a+b<4 ? "Below" : "Over";
console.log(result);


//qn7*
 /* const hello = ( who )=> console.log("Hello " + who );


const delay = (func, ms) => {
        function delayFn (who) {
            setTimeout(func, ms);
        };
    

    return delayFn();
};


const delayHello = delay(hello, 3000);
delayHello("world"); */


//qn8
let schedule = {

};

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false; 
    }
};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false


//qn 9*

let ladder = {
    step: 0,
    up() {
     this.step++;
     return this;
    
    },
    down() {
    this.step--;
    return this;
    },

    showStep: function() { // shows the current step
    console.log( this.step );
    }
    };


    
  ladder.up().up().down().showStep();
  ladder.showStep();

  //qn10*

  /* function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value); */

  //Intermediate

  //qn1

  function ucFirst(str) {
    let first = str.charAt(0);
    console.log(first.toUpperCase() + str.slice(1));
  };

  ucFirst('john');


  //qn2

  function truncate(str, maxlength) {
    if (str.length < maxlength) {
        console.log(str);
    } else if (str.length >= maxlength) {
        let newStr = str.slice(0, maxlength - 1);
        console.log(newStr + "...");
    }
  };

  truncate("Hi everyone!", 20);
  truncate("adsgasdgsgsdgdsgdsa", 3);
  truncate("What I'd like to tell on this topic is:", 20);



//qn3*

const styles = ["Jazz", "Blues"];

console.log(styles);

styles.push("Rock-n-Roll")

console.log(styles);

function replace (arr, str) {
    if(arr.length % 2 > 0 ) {
        let val = Math.trunc(arr.length/2);

        let firstHalf = arr.slice(0, val);
        let secHalf = arr.slice(val+1, arr.length);
        let newFirstHalf = firstHalf.push(str);
        let newArray = firstHalf.concat(secHalf);
        console.log(newArray);
        return newArray;
    }

}

replace(styles, "Classics");

let Replace = replace(styles, "Classics");
let Replaced = Replace.slice(1);
console.log(Replaced);

let extraStyles = ["Rap", "Reggae"];

let addedStyles = extraStyles.concat(Replaced);
console.log(addedStyles);



