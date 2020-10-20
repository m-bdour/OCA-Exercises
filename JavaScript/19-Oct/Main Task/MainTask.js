class person {
    constructor(name, age, degree) {
        this.name = name;
        this.age = age;
        this.degree = degree;
    }
}

class clothes extends person {
    constructor(name, shirt, pants) {
        super(name);
        this.shirt = shirt;
        this.pants = pants;
    }
};

const firsPerson = new person('Mohammad', '23', 'Civil Engineering');
const secondPerson = new person('Ahmad', '26', 'Industrial Engineering');
const thirdPerson = new clothes('Ahmad', 'red', ' blue');

console.log('name: ', firsPerson.name, 'age: ' + firsPerson.age, ' degree: ', firsPerson.degree);
console.log('name: ', secondPerson.name, 'age: ' + secondPerson.age, ' degree: ', secondPerson.degree);
console.log('name: ', thirdPerson.name, 'shirt: ' + thirdPerson.shirt, ' pants: ', thirdPerson.pants);




class car {





};

class animal {



};