var app = app || {};

(function(kanbanApp) {
    //TODO: #1 MAKE ALL UL’s SORTABLE
    var items = this.Cards();
    items.sort(function(a,b){
        var keyA = $(a).text();
        var keyB = $(b).text();

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    var ul = $('.alphaList');
    $.each(items, function(i, li){
        ul.append(li);
    });

    // TODO https://jqueryui.com/sortable/
    console.log("MAKE ALL UL’s SORTABLE");

    //var kanban = new kanbanApp.kanban();


    $('#add').click(function(ev) {
        ev.preventDefault();
        let cardname = $('#name').val();
        let option = $('#column').val();

        //TODO: #2 CREATE CARD USING FORM, ADD DATA TO KANBAN CARDS COLLECTION
        console.log('CREATE CARD USING FORM, ADD DATA TO KANBAN CARDS COLLECTION');

        observeChanges();
    });

    var ids = [];
    function observeChanges() {

        var cards = kanban.getCards();
        var col1 = $('#1');
        var col2 = $('#2');
        var col3 = $('#3');
        var col4 = $('#4');

        cards.forEach(function(c) {
            var isExist = ids.filter(function(id) {
                return id === c.getId();
            });

            if (isExist.length<=0) {
                switch (c.getColumn()) {
                    case 1:
                        col1.append('<li>'+c.getName()+'</li>');
                    break;
                    case 2:
                        col2.append('<li>'+c.getName()+'</li>');
                    break;
                    case 3:
                        col3.append('<li>'+c.getName()+'</li>');
                    break;
                    case 4:
                        col4.append('<li>'+c.getName()+'</li>');
                    break;
                }
                ids.push(c.getId());
            }
        });
    }
}(app));
