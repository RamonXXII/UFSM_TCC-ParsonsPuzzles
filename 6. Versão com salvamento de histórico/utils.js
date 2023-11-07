function isNullString(value) {
    if (value == "null") {
      return;
    } else {
      return value;
    }
}

function checkIfSolutionIsCorrect(fb) {
    if (Array.isArray(fb)) {
        if (fb.length > 0) {
            return false;
        } else {
            return true;
        }
    } else if (fb.hasOwnProperty("feedback")) {
        if (fb.success) {
            return true;
        } else {
            return false;
        }
    } else {
        if (fb.success) {
            return true;
        }
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

    if (typeof res == "undefined") {
        res = null;
    } else {
        res = JSON.parse(res);
    }
    return res;
}

/*
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 
*/
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

function del_cookie(name) {
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

function del_cookies() {
    del_cookie('userData');
    del_cookie('auth');
}

function logout(e) {
    e.stopPropagation();
    e.preventDefault();

    del_cookies();
    window.location.href = './index.html';
}

function accessDenied_returningToMain() {
    del_cookies();
    window.location.href = './index.html';
}