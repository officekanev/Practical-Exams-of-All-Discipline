var id = getRecipeId() || 0;

var Recipe = (function () {

    function Recipe()
    {
        this._id  = id++;
    }

    function Recipe(name, image, category, rating)
    {
        this._id  = id++;
        this.setName(name);
        this.setImage(image);
        this.setCategory(category);
        this.setRating(rating);
    }

    Recipe.prototype.setImage = function (image) {
        this._image = image;
    }

    Recipe.prototype.setName = function (name) {
        this._name = name;
    }

    Recipe.prototype.setCategory = function (category){
        this._category = category;
    }

    Recipe.prototype.setRating = function (rating) {
        this._rating = rating;
    }

    return Recipe;
})();

function getRecipeId() {
    if(localStorage.getItem("lastId") != null){
        var id = parseInt(localStorage.getItem("lastId"));

        return ++id;
    }
    else {
        return null;
    }
}
