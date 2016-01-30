(function (App) {
    "use strict";

    
    window.addEventListener("load", onLoad, false);

    function onLoad() {
        var hotel = new Hotel();
        hotel.init();
    }

    function Hotel() {
        var oThis = this;

        //oThis.el = document.querySelector(".hotel");
        oThis.imageContainer = document.querySelector(".photos");
        oThis.roomsContainer = document.querySelector(".rooms_table_form");
        oThis.reviewsContainer = document.querySelector(".reviews_list");
    }

    Hotel.prototype = {
        init: function () {
            var oThis = this;

            oThis.doCarousel();
            //oThis.doRooms();
            //oThis.doReviews();
        },

        doCarousel: function () {
            var oThis = this,
                carousel = new App.Carousel(oThis.imageContainer);

            carousel.show();
        },

        doRooms: function () {
            var oThis = this,
                rooms = new Rooms();

            rooms.show(oThis.roomsContainer);
        },

        doReviews: function () {
            var reviews = new Reviews();

            reviews.show(oThis.reviewsContainer);
        }
    };
}(window.Hotel || (window.Hotel = {})));