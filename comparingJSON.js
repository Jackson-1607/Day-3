let obj1 ={ name: "Person 1", age:5};
let obj2 ={ age:5, name: "Person 1"};



function areObjectsEqual(obj1, obj2) {
    let stringifiedObj1 = JSON.stringify(obj1);
    let stringifiedObj2 = JSON.stringify(obj2);
    return stringifiedObj1 === stringifiedObj2;
}

console.log(areObjectsEqual(obj1, obj2));