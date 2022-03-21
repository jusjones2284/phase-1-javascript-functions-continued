// code your solution here
// function razzle(){
//     console.log("You've been raxzzled!");
// }

// razzle();

function razzle(lawyer = "Billy", target = "'em"){
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}

razzle();
razzle("Methuselah", "T' challah");

function razzles(attorney = "hotgirl", targets = "bigbooty"){
    console.log(`${attorney} you owe me ${targets}!`);
}

razzles();
razzles("justin", "ken");


function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);ß
}

saturdayFun();
saturdayFun("hockey");

function mondayWork(covid = "go to the office"){
    return(`This Monday, I will ${covid}.`);

};

function wrapAdjective(){

};

const fn = function(){
    console.log("yet more razzling");
};

const fnn = function(){
    console.log("we are going to the store");
};

fnn();

const basketball = function(){
    console.log("this is how we do it!")
};

basketball();


function outerFirst(greeting, msg = "It's a fine day to learn"){
    const innerFunction = function (name, lang = "Python"){
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction("student", "JavaScript");
}
outerFirst("Hello");

function outer(greeting, msg = "It's a fine day to learn"){
    const innerFunction = function (name, lang = "Python"){
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
}

outer("Hello", "Go to work")("student", "JavaScript");

function outer(greeting, msg = "It's a fine day to learn"){
    const innerFunction = function (name, lang = "Python"){
        return `${greeting}, ${name}! ${msg} ${lang}`
    };
    return innerFunction
}
outer("Hello", "Go to work")("student", "JavaScript");

const storedFunction = outer("Hello");
storedFunction("student", "Ruby");


function outerBank(greetings, msgs = "It's a fine day to learn"){
    return function (name, lang = "Python"){
        return `${greetings}, ${name}! ${msgs} ${lang}`;
    };
}
outerBank("Bonjour")("student", "C++");



function outerBay(){
    return function(Amira = "special"){
        return`You are`
    }

}