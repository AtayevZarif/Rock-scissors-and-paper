let random = Math.trunc(Math.random() * 3)
let choise = Number(prompt(" 0) Tosh \n 1) Qaychi \n 2) Qog'oz"))

if (choise == random){
    if (random == 0 && choise == 0){
        random = "tosh"
        choise = "tosh"
    }
    else if (random == 1 && choise == 1){
        random = "qaychi"
        choise = "qaychi"
    }
    else if (random == 2 && choise == 2){
        random = "qog'oz"
        choise = "qog'oz"
    }
    alert(" Bot: " + random + "\n Siz: " + choise + "\n Durrang")
}
else if (random === 2 && choise === 0){
    alert(" Bot: qog'oz \n Siz: tosh \n Bot yutdi")
}
else if (random === 0 && choise === 2) {
    alert(" Bot: tosh \n Siz: qog'oz \n Siz yutdingiz")
}
else if (random === 0 && choise === 1){
    alert(" Bot: tosh \n Siz: qaychi \n Bot yutdi")
}
else if (random === 1 && choise === 0){
    alert(" Bot: qaychi \n Siz: tosh \n Siz yutdingiz")
}
else if (random === 1 && choise === 2){
    alert(" Bot: qaychi \n Siz: qog'oz \n Bot yutdi")
}
else if (random === 2 && choise === 1){
    alert(" Bot: qog'oz \n Siz: qaychi \n Siz yutdingiz")
}