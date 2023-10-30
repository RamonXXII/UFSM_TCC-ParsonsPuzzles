function isNullString(value) {
    if (value == "null") {
      return;
    } else {
      return value;
    }
}

function getRandExURL(userId = null, dificuldade = "iniciante") {
    var url = "https://script.google.com/macros/s/AKfycbwZKg-bWoZs_OgVkRUmvxxfrdQeSTWbk3lANkRDUPik-zAvLWfieRkhCgFrU415LYYg/exec?actionRequest=getExercicioAleatorio";

    // Add dificuldade
    if (userId == null) {
        // NÃO FUNCIONA AINDA SEM ESTAR LOGADO
        url = url + "&dificuldade=" + dificuldade;
    } else {
        // Usuário está logado
        url = url + "&dificuldade=userDefault";
        url = url + "&userId=" + userId;
    }

    return url;
}


function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    res = JSON.parse(res);
    return res;
}

function setUserLevel(userLevelInfo) {
    $(".current-level").html(userLevelInfo.currentLevel);
    $(".progressbar-progress-text").html(userLevelInfo.levelProgress);
    $(".next-level").html(userLevelInfo.nextLevel);

    var levelPercent = userLevelInfo.levelProgress*10 + "%";
    if(levelPercent === "0%") {
        levelPercent = "3%";
    }
    $(".progressbar-progress").css("width",levelPercent);
  }