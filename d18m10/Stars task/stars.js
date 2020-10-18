function leftStars(Shape, Base) {

    for (var i = 1; i <= Base; i++) {
        for (var a = 1; a <= i; a++) {
            var starRow = '';
            starRow += Shape;
            document.write(starRow);
        }

        document.write('<br/>');


    }

}

leftStars('M', 5);

document.write("  <br/> <br/>")
document.write("------------------------------------------")
document.write("  <br/>  <br/>")


function writeStars(Base) {

    for (var i = 1; i <= Base; i++) {

        for (var b = Base - i; b >= 1; b--) {

            document.write(' &nbsp ');
        }

        for (var a = 1; a <= i; a++) {

            document.write('*');
        }
        document.write('<br/>');


    }

}

writeStars(5);


document.write("  <br/> <br/>")
document.write("------------------------------------------")
document.write("  <br/>  <br/>")


function centerStars(Base) {

    for (var i = 1; i <= Base; i += 2) {
        for (var b = (Base - i) / 2; b > 0; b--) {
            document.write(' &nbsp ');
        }
        for (var a = 1; a <= i; a++) {
            document.write('*');
        }
        document.write('<br/>');

    }
}

centerStars(5);