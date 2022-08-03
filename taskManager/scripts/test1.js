

// dog contructor
function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

// class
class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

function testObjects() {
    console.log("Test objects");
    // 1 - Object literal
    let lola = {
        name: "Lola",
        age: 3, 
        color: "Pink"
    };
    console.log(lola);

    let fido = {
        Name: "Fido",
        Age: "4",
        Color: "Gray",
        Race: "XYZ"
    }
    console.log(fido);

    // 2 - Object constructor
    let dog3 = new Dog("Trex", 1, "DarkGreen");
    console.log(dog3);

    let dog4 = new Dog("Shela", 3, "Purple");
    console.log(dog4);

    // 3 - Class
    let cat1 = new Cat("DrMewosalot", 1, "White");
    console.log(cat1);
}

// testing
testObjects();
    