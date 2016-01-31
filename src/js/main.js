(function (App) {
    "use strict";

    
    window.addEventListener("load", onLoad, false);

    function onLoad() {
        var hotel = new Hotel();
        hotel.init();
    }

    function Hotel() {
        var oThis = this;

        oThis.imageContainer = document.querySelector(".photos");
        oThis.roomsContainer = document.querySelector(".rooms_table_form");
        oThis.reviewsContainer = document.querySelector(".reviews_list");
    }

    Hotel.prototype = {
        init: function () {
            var oThis = this;

            oThis.doCarousel();
            oThis.doRooms();
            oThis.doReviews();
        },

        doCarousel: function () {
            var oThis = this,
                carousel = new App.Carousel(oThis.imageContainer);

            carousel.show();
        },

        doRooms: function () {
            var oThis = this,
                rooms = new App.Rooms(oThis.roomsContainer);

            rooms.show(oThis.roomsContainer);
        },

        doReviews: function () {
            var oThis = this,
                reviews = new App.ReviewList(oThis.reviewsContainer, 5); //5 is page size

            reviews.show();
        }
    };
}(window.Hotel || (window.Hotel = {})));