(function (App) {
    "use strict";

    App.RoomStore = function () {
        var oThis = this;

        oThis.rooms = App.Data.hotelDetails.rooms;
        oThis.occupancySorted = "";
        oThis.priceSorted = "";
    };

    App.RoomStore.prototype = {
        sort: function (key) {
            var oThis = this;

            switch (key) {
                case "occupancy": if (oThis.occupancySorted === "" || oThis.occupancySorted === "desc") {
                    oThis.rooms.sort(oThis._propAscComparator(key));
                    oThis.occupancySorted = "asc";
                    oThis.priceSorted = "";
                } else {
                    oThis.rooms.sort(oThis._propDescComparator(key));
                    oThis.occupancySorted = "desc";
                    oThis.priceSorted = "";
                }
                    break;

                case "price": if (oThis.priceSorted === "" || oThis.priceSorted === "desc") {
                    oThis.rooms.sort(oThis._propAscComparator(key));
                    oThis.priceSorted = "asc";
                    oThis.occupancySorted = "";
                } else {
                    oThis.rooms.sort(oThis._propDescComparator(key));
                    oThis.priceSorted = "desc";
                    oThis.occupancySorted = "";
                }
                    break;
            }
        },

        _propAscComparator: function (key) {
            return function (a, b) {
                return a[key] - b[key];
            }
        },

        _propDescComparator: function (key) {
            return function (a, b) {
                return b[key] - a[key];
            }
        },
    };
}(window.Hotel || (window.Hotel = {})));