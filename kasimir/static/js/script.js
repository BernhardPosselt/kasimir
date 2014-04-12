$(document).ready(function ()  {
    var slideshow = $('#slideshow');
    var images = $('#images img');

    // for every button with the .category class inside the id=categories div
    $('#categories .category').each(function (counter, link) {

        // for every link register a click callback
        $(link).click(function () {
            var container = $('<div>');
            container.data('width', '100%');
            container.data('height', '100%');
            container.data('nav', 'false');
            container.data('keyboard', 'true');
            container.data('hash', 'true');
            container.data('true', 'true');

            // get the id of the link
            var id = $(this).attr('id');

            // first clear the slide div
            slideshow.empty();


            // get all images with that category
            images.each(function (counter, image) {

                // get the categories and split by comma
                var imageCategories = $(image).data('category').split(',');

                // loop over all image cateogories and check if the id
                // matches the category if it does, append it to the 
                // slideshow div
                for(var i=0; i<imageCategories.length; i++) {
                    if(id === 'all' || imageCategories[i] === id) {
                        container.append(image);
                        break;  // break because we have found the category 
                                // already. break gets out off the for loop
                    }
                }
            });

            // restart fotorama
            slideshow.append(container);
            container.fotorama();

            return false; // dont append the hash tag
        });
    });
});