function startApp() {

    sessionStorage.clear();

    showHideMenuLinks();

    $('form').submit( function (e) {
        e.preventDefault();
    });

    showView('viewHome');

    // // Bind the navigation menu links  THIS IS ALL MEN with concret event
        $("#linkMenuAppHome").click(showHomeView);
        $("#linkMenuLogin").click(showLoginView);
        $("#linkMenuRegister").click(showRegisterView);
        $("#linkUserHomeMyMessages").click(listMessages);
        $("#linkUserHomeArchiveSent").click(showFormArchiveSent);
        $("#linkUserHomeSendMessage").click(showviewSendMessage);
        $("#linkMenuLogout").click(logoutUser);



    // // Bind-връзвам the form submit buttons
        $("#formLogin").submit(loginUser);
        $("#formRegister").submit(registerUser);
        $("#formSendMessage").submit(sendMessages);



    $('#infoBox', '#errorBox').click(function () {
        $(this).fadeOut();
    });

    $(document).on({   
        ajaxStart: function () {$('#loadingBox').show();},

        ajaxStop: function () {$('#loadingBox').fadeOut();}
    });
}