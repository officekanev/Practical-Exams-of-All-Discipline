var app = getValue() || new Book();

$( document ).ready(function(recipeBook) {
    var book = recipeBook;

    $("#add_book").attr("type", "button");
    $('#add_book').click(function(ev) {
        var name = $("#name").val();
        var image = $("#image").val();
        var rating = $("#rating").val();
        var category = $("#category").val();

        if(name == '' || image == '' || category == '' || rating == ''){
            alert('You must give some value for all fields !!!')
        }else{
            var newRecipe = new Recipe(name, image, category, rating);

            book.addRecipe(newRecipe);
            setValue(book);

            loadData();
        }
    });

    $("#clear_book").attr("type", "button");
    $("#clear_book").click(function(ev) {
        $("#name").val('');
        $("#image").val('');
        $("#rating").val('');
        $("#category").val('')

    });

    $(document).on('click','.remove',function(ev){
        var recipeId = $(this).attr("data-id");
        book.removeRecipe(recipeId);

        loadData();
    });

    loadData();

    function loadData() {
        var meat = book.getRecipes().filter(function(r) {
            console.log(r._category);

            return r._category === "meat";
        });

        var vegan = book.getRecipes().filter(function(r) {
            return r._category === "vegan";
        });

        var dessert = book.getRecipes().filter(function(r) {
            return r._category === "dessert";
        });

        var source   = $("#recipe-trmplate").html();
        var template = Handlebars.compile(source);

        var contextMeat = {meat:meat};
        var contextvegan = {meat:vegan};
        var contextdessert = {meat:dessert};
        var html    = template(contextMeat);
        var html2    = template(contextvegan);
        var html3    = template(contextdessert);

        $('#meat_recipes').html(html);
        $('#vegan_recipes').html(html2);
        $('#dessert_recipes').html(html3);
    }
}(app));

function setValue(book) {
    var jsonObject = JSON.stringify(book);
    localStorage.setItem("app", jsonObject);
}

function getValue() {
    if(localStorage.getItem("app") != null){
        var json_string = localStorage.getItem("app");
        var obj = JSON.parse(json_string);
        var appBooks = new Book();

        var recipesLen = obj.recipes.length;

        for (var i = 0; i < recipesLen; i++) {
            appBooks.addRecipe(obj.recipes[i]);
        }

        return appBooks;
    }
    else {
        return null;
    }
}
