const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_BkdtplOQx";
const kinveyAppSecret = "89ced2beeeb743e6a9f479a9e0e1c1b7";
const kinveyAppAuthHeaders = { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)};

function loginUser(event) {
     //event.preventDefault();

    let userData = {
        username: $('#formLogin input[name=username]').val(),
        password: $('#formLogin input[name=password]').val()
    };

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
        headers: kinveyAppAuthHeaders,
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: loginUserSuccess,
        error: handleAjaxError
    });

    function loginUserSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        $('#viewLogin').hide();
        let gretting = `Welcome, ${userInfo.username}!`;
        $('#spanMenuLoggedInUser').text(gretting);
        $('#spanMenuLoggedInUser').show();
        showView('loadingBox');
        showInfo('Login successful.');
        let welcome = `Welcome, ${userInfo.username}!`;
        $('#viewUserHomeHeading').text(welcome);
        showView('viewUserHome');
    }
}

function saveAuthInSession(userInfo) {
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('userId', userInfo._id);
    $('#loggedInUser').text("Welcome, " + userInfo.username);
}


function formatDate(iso) {
    let date = new Date(iso);
    if(Number.isNaN(date.getDate()))
        return '';
    return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            '.' + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());
    function padZeros(num) {
        return('0' + num).slice(-2);
    }
}

function formatSender(name, username) {
    if(!name)
        return username;
    else
      return username + '(' + name + ')';
}

function registerUser(event) {
    //event.preventDefault();

    let userData = {
        username: $('#formRegister input[name=username]').val(),
        password: $('#formRegister input[name=password]').val()
    };

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
        headers: kinveyAppAuthHeaders,
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: registerUserSuccess,
        error: handleAjaxError
    });

    function registerUserSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        showView('loadingBox');
         $('#viewRegister').hide();
        let gretting = `Welcome, ${userInfo.username}!`;
        $('#spanMenuLoggedInUser').text(gretting);
        $('#spanMenuLoggedInUser').show();
        showView('loadingBox');
        let welcome = `Welcome, ${userInfo.username}!`;
        $('#viewUserHomeHeading').text(welcome);
         showInfo('User registration successful.');
        showView('viewUserHome');
    }
}

function logoutUser() {

    let header = 'Kinvey ' + sessionStorage.getItem('authToken');

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
        headers: header,
    });

    sessionStorage.clear();

    showView('viewHome');
    showHideMenuLinks();
    showInfo('Log - Out successful');
}
