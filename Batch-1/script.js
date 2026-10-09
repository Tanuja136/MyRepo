function changeHeading(){

    document.getElementById("title").innerHTML =
    "Welcome to JavaScript DOM";

}

















function changeColor(){

    document.getElementById("para").style.color = "red";

    document.getElementById("para").style.fontSize = "30px";

}

function showName(){

    let username =
    document.getElementById("name").value;

    document.getElementById("result").innerHTML =
    "Hello " + username;

}

function changeImage(){

    document.getElementById("photo").src =
    "cat.jpeg"; 

}

function designBox(){

    let box1 =
    document.getElementById("box");

    box1.style.backgroundColor = "green";

    box1.style.color = "white";

    box1.style.borderRadius = "20px";

    box1.style.fontSize = "25px";

}

function hideParagraph(){

    document.getElementById("hideText").style.display = "none";

}

function showParagraph(){

    document.getElementById("hideText").style.display = "block";

}