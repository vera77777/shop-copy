//Создаем новую функцию
function sayHello() {
    const username = prompt("Как тебя зовут? ");

    if (username === "Admin") {
        alert("Добро пожаловать, Админ!");
    }
    else {
        alert("Привет " + username + "!");
    }

    console.log("Пользователь " + username + " зашел на сайт");

    const namber = parseInt(prompt("Введите число"));
    if (namber % 2 === 0) {
        alert("Число четное")
    }
    else {
        alert("Не четное")
    }
    console.log(namber)

}
function gift() {
    alert("Вы получили подарок!\nСкидка 25%")
}
function helper() {
    alert("Контакты техподдержки\nSkype:helper\nPhone:89184567723")
}
function length() {
    const text = prompt("Введите число или слово:");
    alert("Длинна введенных данных: " + text.length);
   
}
let siteRating = 0;

let starids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

function star(starNamber) {

    siteRating = starNamber;

    starNamber = starNamber - 1;

    let star = document.getElementById(starids[starNamber]);

    if (star.src.includes("images/star_2.png")) {
        for (let i = 0; i <= starNamber; i++) {
            let id = starids[i];
            document.getElementById(id).src = "images/star_1.png"
        }

    }
    // иначе если звездочки заполнены
    else {
        for (let i = 0; i < starids.length; i++) {
            if (i > starNamber) {
                id = starids[i];
                document.getElementById(id).src = "images/star_2.png"
            }
        }
    }


}
function resetRating() {
    siteRating = 0;
    for (let i = 0; i < starids.length; i++) {
        console.log(i)
        document.getElementById(starids[i]).src = "images/star_2.png"
    }
    document.getElementById("ratingText").innerText = "";
    console.log("Рейтинг сброшен!")
}
const sendRatingBtn = document.getElementById("sendRating");

sendRatingBtn.addEventListener("click", function (){
let text;

if (siteRating === 5  ) {
    text = "Спасибо за отличный отзыв!"
}
else if (siteRating === 4) {
    text = "Спасибо:)))))"
}
else if (siteRating > 0) {
    text = "Спасибо за Ваш отзыв";
}
else {
    text = "Пожалуйста, поставьте оценку от 1 до 5";
}

document.getElementById("ratingText").innerText = text;


});
