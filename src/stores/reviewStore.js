(function (App) {
    "use strict";

    var data = App.data;

    App.ReviewStore = function () {
        var oThis = this;

        oThis.reviews = App.Data.hotelDetails.reviews;
        oThis.sorted = "";
    };

    App.ReviewStore.prototype = {

        sort: function () {
            var oThis = this;

            if (oThis.sorted === "desc" || oThis.sorted === "") {
                oThis.reviews.sort(oThis._compareAsc);
                oThis.sorted = "asc";
            } else {
                oThis.reviews.sort(oThis._compareDesc);
                oThis.sorted = "desc";
            }
        },

        _compareAsc: function (a, b) {
            return a.reviewScore - b.reviewScore;
        },

        _compareDesc: function (a, b) {
            return b.reviewScore - a.reviewScore;
        }

    };
}(window.Hotel || (window.Hotel = {})));