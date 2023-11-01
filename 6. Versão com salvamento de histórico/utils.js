function isNullString(value) {
    if (value == "null") {
      return;
    } else {
      return value;
    }
}

function getRandExURL(userId = null, dificuldade = 0) {
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


function getHistoricoURL(authentication = null) {
    var url = "https://script.google.com/macros/s/AKfycbwZKg-bWoZs_OgVkRUmvxxfrdQeSTWbk3lANkRDUPik-zAvLWfieRkhCgFrU415LYYg/exec?actionRequest=getHistorico";

    url = url + "&authentication=" + JSON.stringify(authentication);

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
    const progressBarPercentRate = 10;

    $(".current-level").html("Nivel " + userLevelInfo.currentLevel);
    $(".progressbar-progress-text").html(userLevelInfo.levelProgress);
    $(".next-level").html("Nivel " + userLevelInfo.nextLevel);

    var levelPercent = userLevelInfo.levelProgress*progressBarPercentRate + "%";
    if(levelPercent === "0%") {
        levelPercent = "3%";
    }
    $(".progressbar-progress").css("width",levelPercent);
  }

function btnEnable(btnName, color="#ffb86c") {
    $(btnName).prop('disabled', false);
    $(btnName).css('background-color', color);
    $(btnName).css('cursor', 'pointer');
}

function btnDisable(btnName) {
    $(btnName).prop('disabled', true);
    $(btnName).css('background-color', '#a5a5a5');
    $(btnName).css('cursor', 'wait');
}