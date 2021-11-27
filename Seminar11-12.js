//1
let city1 = {};
city1.name = "ГородN";
city1.population = 10e6;
console.log(city1);
//2
let city2 = {
    name: "ГородM",
    population: 1e6
};
console.log(city2);
//3
city1.getName = function () {
    return this["name"];
};
city2.getName = function () {
    return this.name;
};
console.log(city1.getName());
console.log(city2.getName());
//4
city1.exportStr = function () {
    let str = "";
    for (let key in this) {
        if (this[key] instanceof Function) {
            continue;
        }
        else {
            str += `${key}=${this[key]}\n`;
        }
    }
    return str;
};
city2.exportStr = function () {
    let str = "";
    for (let key in this) {
        if (typeof this[key] !== "function") {
            str += `${key}=${this[key]}\n`;
        }
    }
    return str;
};
console.log(city1.exportStr());
console.log(city2.exportStr());
//5
function getObj() {
    return this;
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());
//6
let obj = {};
obj.method3 = function () {
    return "метод3";
};
obj.method2 = function () {
    return this;
};
obj.method1 = function () {
    return this;
};
console.log(obj.method1().method2().method3());
//7
let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1, d1[6], d1[7]);
//8
let d2 = [45, 78, 10, 3];
let sum2 = 0;
for (let i= 0; i < d2.length; i++) {
    sum2 += d2[i];
}
console.log(sum2);
//9
let d3 = [45, 78, 10, 3];
d3[7] = 100;
let sum3 = 0;
for (let index in d3) {
    sum3 += d3[index];
}
console.log(sum3);
//10
let d4 = [45, 78, 10, 3];
function my(a, b) {
    return a-b;
}
console.log(d4.sort(my));
//11
let d5 = [];
let n = 3;
let m = 4;
for (let i = 0; i < n; i++) {
    d5[i] = [];
    for (let j = 0; j < m; j++) {
        d5[i][j] = 5;
    }
}
console.log(d5);
//15
function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function() {
        return `${this.from},${this.to}`;
    };
}
let c1 = new Card("Екатеринбург", "Москва");
console.log(c1.show());
//16
class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    };
    getInfo() {
        return `${this.name},${this.age},${this.height}`;
    };
    get firstname() {
        return this.name;
    };
}
let humans = [
['Коля', 23, 180],
['Даша', 19, 170],
['Ваня', 18, 192],
['Петя', 45, 178],
['Вася', 34, 197],
['Джони', 40, 168],
['Катя', 37, 160],
['Петя', 29, 200],
['Соня', 21, 172],
['Женя', 25, 175]
];
for (let i = 0; i < humans.length; i++) {
    humans[i] = new Human(humans[i][0], humans[i][1], humans[i][2]);
}
console.log(humans);
console.log(humans[0].getInfo());
console.log(humans[0].firstname);
//17
function sortByName(humans) {
    for (let i = 0; i < humans.length - 1; i++) {
        for (let j = i + 1; j < humans.length; j++) {
            if (humans[i].name > humans[j].name) {
                let max = humans[i];
                humans[i] = humans[j];
                humans[j] = max;
            }
        }
    }
    return humans;
}
function sortByHeight(humans) {
    for (let i = 0; i < humans.length - 1; i++) {
        for (let j = i + 1; j < humans.length; j++) {
            if (humans[i].height < humans[j].height) {
                let min = humans[i];
                humans[i] = humans[j];
                humans[j] = min;
            }
        }
    }
    return humans;
}
console.log(sortByHeight(humans));
//18
let dt1 = new Date(2045, 0, 1, 0,0);
console.log(dt1);
//19
let dt2 = new Date()/1000;
console.log(dt2);
//20
function getDays(year, month) {
    return new Date(year, month, 0).getDate();
}
console.log(getDays(2021, 2));