function showInfo(message) {  //  THIS FUNC SHOW GREEN , RED & BLUE window
    $('#infoBox').text(message);
    $('#infoBox').show();          // show div
    setTimeout(function() {
        $('#infoBox').fadeOut();
    }, 500);
}

function handleAjaxError(response) {  // decide kind of error
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg);
}

function showError(errorMsg) {  // invoke ERROR box
    $('#errorBox').text("Error: " + errorMsg);
    $('#errorBox').show();
}
