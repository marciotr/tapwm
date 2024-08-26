function btn1() {
    var aluno1 = {
        ra: "1234",
        name: "Enrico",
    };
    alert(JSON.stringify(aluno1));
}

function btn2() {
    var aluno2 = new Object ();
    aluno2.ra = "4321";
    aluno2.name = "Robson";
    alert(JSON.stringify(aluno2));
}

function btn3() {
    var aluno1 = new Object ();
    aluno1.ra = "1029";
    aluno1.name = "José";

    var aluno3 = Object.assign({}, aluno1);
    alert(JSON.stringify(aluno3));
}


