//var str = "My name is is is is masum";
//var uppercase = str.toUpperCase()
//var lowercase = str.toLowerCase()

//var split = str.split("is")
//var reverse = split.reverse();
//var join = reverse.join("");

//console.log(split);

//var num = 5;
//var num2 = "5.8"
//console.log(typeof num.toString());
//console.log(parseFloat(num2));
//console.log(parseInt(num2));
//console.log(+num2);

//var x = 5;
//var y = 3;
//console.log(5 % 3);

//var number = 10;
//console.log(++number);
//console.log(--number);

//var firstName = "Masum"
//var lastName = "Raihan"

//console.log(firstName + " " + lastName);

//var n = -3;
//console.log(Math.abs(n));

//var m = 4;
//console.log(Math.pow(m,3));
//var l = Math.random() * 10000
//console.log(Math.round(l));

//var name = "masum"
//var salary = 5010;

//if(salary == 5000){
//    console.log("ok done");
//} 
//else if (salary == 5010){
//    console.log("okkk");
//}
//else{
//    console.log("na hobe na");
//}

//console.log(new Date());

//var arr = [2,56,345,74,3];
//console.log(arr);
//arr[2] = 66;
//console.log(arr);
//var [two,three] = arr
//console.log(two);
//console.log(arr.indexOf(5));

//var obj = {Name:"masum", roll:43};
//console.log(obj);
//obj.roll = 444
//obj["roll"] = 444
//console.log(obj);

//var {Name,roll} = obj
//console.log(roll);

//var number = 0

//while (number < 5){
//    console.log("ok");
//    number++
//}

//for(i = 0;i <= 5; i++){
//    console.log(i);
//}

// const myFn = function (n,n2){
//    return n + n2
//}

//const myFn2 =  (n,n2,n3) => n+n2+n3;
//console.log(myFn2(2,3));


//let k = 2;
// k = 5

// const n = 3;
// n = 3
//console.log(n);

//function fn1 (p) {
//return p * k
//}

//for (let i = 0; i < 20; i++) {
//    const element = arr[i];
//}

//const arr = [2,34,234,523,42];

//for (const num of arr) {
//    console.log(num);
//}

//const obj = {name:"masum", number:5,status: true};

//for (const key in obj) {
//    console.log(obj[key]);
//}
//const key = "name"
//console.log(obj[key]);

//const obj = {name:"masum", number:5,status: true};
//const keys = Object.keys(obj)
//const values = Object.values(obj)
//console.log(values);

// const forEach = keys.forEach(key =>{
//    console.log(obj[key]);
//})
//console.log(forEach);

//const arr = [2,34,234,523,42];

//const map = arr.map((n,i,newArr) =>{
//    console.log("n",n);
//    console.log("i",i);
//    console.log("aar",newArr);
//});
//console.log(map);

//const newArr = [];
//arr.forEach( n => {
//    const newN = n - 1;
//    newArr.push(newN)
//})
//console.log(newArr);

//const arr2 = ["masum", "belal", "raihan","mr"];

//const filter = arr.filter(n => n === 7);
//const names = arr.filter(n => n !== "34")
//console.log(names);

//const name = arr2.find(n => n === "m")
//console.log(name);

//const srt = "this is pen on a table which is dark on green";
//function reverse(srt) {
//    const arr = srt.split("");
//    let string = "";
//    for (let i = arr.length - 1; i >= 0; i--) {
//        const element = arr[i];
//        string += element
//    }
//    console.log(string);
//}
//reverse(srt)

//const findMiddle = (str) => {
//    const arr = str.split(" ");
//    const map = arr.map((word,i,arr) => {
//        if (word === "is" || word === "on") {
//            if (word === "is") {
//                console.log(arr[++i]);
//            }
//        }
//    });
//}
//findMiddle(srt)

//let arr3 = [3,43,5423,234,523,3];
//let newArray = [...arr3]
//newArray.push(33333)
//console.log(newArray);
//console.log(arr3);

//let obj = {Name:"masum",Roll:3,address:"natore"};
//let newObj = {...obj};
//newObj["Name"] = "raihan";
//console.log(obj);

//let n = 3;
//if (2>1) {
//    let n =3 
//    console.log(n);
//}
//const num = 43
//const newSrt = `My name is Masum Raihan. ${num + 1} I am from Natore`;
//console.log(newSrt);

//const n1 = 3;
//const value = n1 === 3 ? "rich" : "poor";
//const value2 = n1 === 2 || "rich"
//const value3 = n1 === 2 && "rich"
//console.log(value2); 