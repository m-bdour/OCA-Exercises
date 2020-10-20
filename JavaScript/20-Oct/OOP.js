class person {

    constructor(id, name, age) {

        this.id = id;
        this.name = name;
        this.age = age;
    }

    Greeting() {
        return ("I hope you've had your coffee already")
    }
}

var Trainer = new person(101, 'Mohammad Shwaiki', '27');
var Student = new person(114, 'Mohammad Bdour', '23');
Student.Game = 'Dark Souls';

document.write('<br/>', 'My name is: ', Trainer.name, '  ', ' , ', ' with ', Trainer.id, ' id ', ' , ', 'and age is:', Trainer.age);


document.write(person.Greeting(), '<br/>', 'My name is: ', Student.name, '  ', ' , ', ' with ', Student.id, ' id ', ' , ', 'and age is:', Student.age, '. ', 'also the most game i have spent time playing with is ', Student.Game);



class anime {

    constructor(Name, Main, Genre) {
        this.Name = Name;
        this.Main = Main;
        this.Genre = Genre;
    }

    Running() {
        document.write("Good Anime")
    }


}

let OnePiece = new anime('One Piece', 'Lofy', 'Adventure');
let Akame = new anime('Acame ga kill', 'Akame', 'Action');

document.write(OnePiece);
document.write(Akame.name, Akame.Main, Akame.Genre);



class Animal {

    constructor(id, name, isPet) {

        this.id = id;
        this.name = name;
        this.isPet = isPet;

    }

    homeAnimal() {

        if (name != "Cat" || "Horse" || "Sheep") {
            document.write('<br/>', 'This animal is Dangerous')
        } else {
            document.write('<br/>', 'This animal is a pet ')

        }


    }



}


class Teacher extends person {

    constructor(Felid, id, age) {

        super(id, name, age);


        this.Felid = Felid;

    }

}

Shwaiki = () => Greeting + '<br/>';

let Ashraf = new Teacher('21A', 'Ashraf', 26, 'Host');

document.write(Shwaiki, '<br/>', Ashraf.id, Ashraf.name, Ashraf.age, Ashraf.Felid);