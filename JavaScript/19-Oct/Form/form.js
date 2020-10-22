var name = document.getElementsByClassName('Name').value;
var Numbers = document.getElementsByClassName('Numbers').value;
var checkBox = document.getElementById('checkBox').value;
var Password = document.getElementsByClassName('Password').value;
var CreateAccount = document.getElementById('CreateAccount').value;








function checkName() {
    var txt = document.getElementById('Name').value;
    var regex = /(\b[a-z](?!\s))/g;

    txt = txt.replace(regex, function (x) {
        return x.toUpperCase();
    });

    document.getElementById('Name').value = txt;
}




let reg = /a/i;
console.log(reg.test('aaaaa'));