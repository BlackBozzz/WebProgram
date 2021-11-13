//1 Задание --------------------------------------------------------------------------------------------
for (let i = 0; i < 7; i++) {
    let line = "";
    for (let k = 0; k <= i; k++) {
        line += "#";
    }
    console.log(line)
}


function reverseArray(mass){
    let new_mass=[];
    for(let i=mass.length-1;i>=0;i--){
        console.log(i)
        new_mass.push(mass[i]);
    }
    return new_mass;
}
function reverseArrayInPlace(mass){
    for(let i=mass.length-1;i>=0;i--){
        console.log(i)
        mass.unshift(mass[i]);
        mass.pop();
    }
    return mass;
}

//2 Задание --------------------------------------------------------------------------------------------
for(let i=1;i<=100;i++){
    if(i%3==0){
        if(i%5==0){
            console.log('FizzBuzz');
        }
        else{
            console.log('Fizz');
        }
    }
    else{
        if (i%5==0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }
}



//3 Задание --------------------------------------------------------------------------------------------
for (let i = 0; i < 8; i++) {
    let line = "";
    for (let k = 0; k < 8; k++) {
        if (i % 2 === 1) {
            if (k % 2 === 1) {
                line += "#";
            } else {
                line += " ";
            }
        } else if (i % 2 === 0) {
            if (k % 2 === 1) {
                line += " ";
            } else {
                line += "#";
            }
        }
    }
    console.log(line)
}


//4 Задание --------------------------------------------------------------------------------------------
function min(x,y){
    if(x<y){
        return x;
    }
    else{
        return y;
    }
}
console.log(min(5,6));
console.log(min(6,6));
console.log(min(7,6));



//5 Задание --------------------------------------------------------------------------------------------
function countBs(line) {
    let count = 0;
    for(let i = 0; i < line.length; i++) {
        if (line.charAt(i) === "B") {
            count++
        }
    }
    console.log(`Букв B: ${count}`)
}


countBs("Braaaand Broke my bike")

function countChar(line, symbol) {
    let count = 0;
    for(let i = 0; i < line.length; i++) {
        if (line.charAt(i) === symbol) {
            count++
        }
    }
    console.log(`Букв ${symbol}: ${count}`)
}

countChar("Squade make a geme, but AAAAA", "a")


//6 Задание --------------------------------------------------------------------------------------------
function range(start,end,step=1){
    let mass=[];
    if(step>0){
        for (let i=start;i<=end;i+=step){
            mass.push(i);
        }
        return mass;
    }
    else{
        for (let i=start;i>=end;i+=step){
            mass.push(i);
        }
        return mass;
    }
}
function sum(mass){
    let res=0;
    for(let i=0;i<mass.length;i++){
        res+=mass[i];
    }
    return res;
}
console.log(range(3,10));
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(sum([1,2,3,4,5,6,7,8,9]));


//7 Задание --------------------------------------------------------------------------------------------
function  reverseArray(arr) {
    let final_arr = new Array;
    for (let i = arr.length-1; i !== -1; i--) {
        final_arr.push(arr[i])
    }
    return final_arr
}

console.log(reverseArray([1, 2, "3", "4", 5, "6", 7, 8]), "rev")

function  reverseArrayInPlace(arr) {
    let k = arr.length - 1
    if (arr.length % 2 === 0) {
        for (let i = 0; i < (arr.length / 2); i++) {
            let arr1 = arr[i];
            arr[i] = arr[k];
            arr[k] = arr1;
            k--
        }

    } else {
        for (let i = 0; i < ((arr.length - 1) / 2); i++) {
            let arr1 = arr[i];
            arr[i] = arr[k];
            arr[k] = arr1;
            k--
        }

    }

}

let arrg = [1, 2, "3", "4", 5, "6", 7, 8, 9];
reverseArrayInPlace(arrg);
console.log(arrg, "orig");
