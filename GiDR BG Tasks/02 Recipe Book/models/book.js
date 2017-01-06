var Book = (function() {
    function Book() {
        this.recipes  = [];
    }

    Book.prototype.addRecipe = function(newRecipe){
        var keyId = parseInt(newRecipe._id);
        localStorage.setItem("lastId", keyId);

        this.recipes[keyId] = newRecipe;
    };

    Book.prototype.removeRecipe = function(id){
        console.log(parseInt(id));
        var len = this.recipes.length;

        delete this.recipes[parseInt(id)];
    };

    Book.prototype.getRecipes = function() {
        return this.recipes;
    };

    return Book;
})();
