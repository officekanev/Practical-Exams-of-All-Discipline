function getKinveyUserAuthHeaders() {
    return {
        'Authorization' : 'Kinvey ' + sessionStorage.getItem('authToken')
    }
}

function sendMessages() {

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
        headers: getKinveyUserAuthHeaders(),
        data: adrevtsData,
        success: createNewAdverts,
        error: handleAjaxError
    });

    function send(data) {

    }
}

function listmessages() {

    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
        headers: getKinveyUserAuthHeaders(),
        success: printMessages,
        error: handleAjaxError
    });

    function printMessages(data) {

        let option = $('<option></option>');

        for(let messages of data) {
            option.attr("value", '').text(messages['sender_username']);
            option.val(messages['sender_username'] + messages['sender_name']);
            $('#msgRecipientUsername').append(option);
        }
    }
}

function listMessages() {
    $('#myMessages').empty();

    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
        headers: getKinveyUserAuthHeaders(),
        success: loadadvertsSuccess,
        error: handleAjaxError
    });

    function loadadvertsSuccess(adverts) {
        //console.dir(adverts)
        let table = $(`
            <table>
                <thead>
                        <tr>
                            <th>From</th>
                            <th>Message</th>
                            <th>Date Received</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
            </table>`);

        let tBody = $(`<tbody>

</tbody>`);

        for(let messages of adverts) {
            // console.dir(adverts)
            let tr = $('<tr>');
            displayTableRow(tr, messages);
            tr.appendTo(tBody);
        }

        tBody.appendTo(table);
        $('#myMessages').append(table);
        showView('viewMyMessages');
    }

    function displayTableRow(tr, messages) {
        let links = [];

        //let iso = "dateISO08601";

        //if(messages._acl.creator == sessionStorage.getItem('userId')){
            let deleteLink = $("<a href='#'>[Delete]</a>")
                .click(function () { deleteAdvertsById(messages._id)});
            links.push(deleteLink);
            links.push(' ');
        //}
        tr.append(
            $('<td>').text(messages['sender_username']),
            $('<td>').text(messages['sender_name']),
            $('<td>').text(''),
            $('<td>').append(links)
        );
    }
}

function deleteAdvertsById(bookId) {
    $.ajax({
        method: "DELETE",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages/" + bookId,
        headers: getKinveyUserAuthHeaders(),
        success: deleteabonatSuccess,
        error: handleAjaxError
    });

    function deleteabonatSuccess() {
        listMessages();
        showInfo('Advertisements has deleted successfully.');
    }
}






























