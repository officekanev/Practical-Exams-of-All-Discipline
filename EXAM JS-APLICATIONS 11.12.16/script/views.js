function showView(viewName) {
    // Hide all views and show the selected view only
    $('main > section').hide();
    $('#' + viewName).show();
}

function showHomeView() {
    showView('viewHome')// show text
}

function showHideMenuLinks() {

    $('#menu a').hide();
    if(sessionStorage.getItem('authToken')){

        $("#linkMenuUserHome").show();   // when user is login
        $("#linkMenuMyMessages").show();
        $("#linkMenuArchiveSent").show();
        $("#linkMenuSendMessage").show();
        $("#linkMenuLogout").show();
    }else {
        // when user  is not logen
        $("#linkMenuAppHome").show();
        $("#linkMenuLogin").show();
        $("#linkMenuRegister").show();
        $("#spanMenuLoggedInUser").hide();
        $("#loadingBox").hide();
        $("#infoBox").hide();
        $("#errorBox").hide();
        $("#viewAppHome").show();
    }
}

function showviewMyMessages() {
    showView('viewMyMessages');
    $('#myMessages').trigger('reset');
}

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}

function showRegisterView() {
    $('#formRegister').trigger('reset');
    showView('viewRegister');
}

function showviewSendMessage() {
    $('#formSendMessage').trigger('reset');
    showView('viewSendMessage');
    listmessages();
}

function showFormArchiveSent() {
    showView('viewArchiveSent');
}
