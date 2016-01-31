(function (App) {
    "use strict";

    App.Rooms = function (el) {
        var oThis = this;

        oThis.el = el;
        oThis.totalCost = 0;
        oThis.init();
    };

    App.Rooms.prototype = {
        init: function () {
            var oThis = this;

            oThis.rStore = new App.RoomStore();
        },

        show: function () {
            var oThis = this;

            oThis.renderRoomTable();
        },
        renderRoomTable: function () {
            var oThis = this,
                thead,
                tbody,
                tfoot,
                table;

            table = document.createElement("div");
            table.className = "rooms_table";
            thead = oThis.renderHeader();
            tbody = oThis.renderBody();
            tfoot = oThis.renderFooter();

            table.appendChild(thead);
            table.appendChild(tbody);
            table.appendChild(tfoot);
            oThis.el.appendChild(table);
        },

        renderFooter: function () {
            var footer,
                lbl,
                res;

            footer = document.createElement("div");
            footer.className = "table_footer";
            lbl = document.createElement("div");
            lbl.innerHTML = "Total Cost: ";

            res = document.createElement("label");
            res.className = "total_cost";

            footer.appendChild(lbl);
            footer.appendChild(res);

            return footer;
        },

        renderBody: function () {
            var oThis = this,
                tbody;

            tbody = document.createElement("div");

            oThis.rStore.rooms.forEach(function (room) {
                tbody.appendChild(oThis._createRoomRow(room));
            });

            return tbody;
        },

        _createRoomRow: function (room) {

            var tr,
                td,
                selectRoom,
                    oThis = this;

            tr = document.createElement("div");
            tr.className = "one_room";
            tr.className += " tr";

            td = document.createElement("div");
            td.className = "room_name";
            td.className += " td";
            td.innerHTML = room.name;
            tr.appendChild(td);

            td = document.createElement("div");
            td.className = "room_availability";
            td.className += " td";
            td.innerHTML = room.availability;
            tr.appendChild(td);

            td = document.createElement("div");
            td.className = "room_occupancy";
            td.className += " td";
            td.innerHTML = room.occupancy;
            tr.appendChild(td);

            td = document.createElement("div");
            td.className = "room_price";
            td.className += " td";
            td.innerHTML = room.price;
            tr.appendChild(td);

            td = document.createElement("div");
            td.className = "room_quantity";
            td.className += " td";
            selectRoom = oThis._createSelectBox(room);
            td.appendChild(selectRoom);
            tr.appendChild(td);

            return tr;
        },

        _createSelectBox: function (room) {

            var select,
                option,
                prevVal,
                currVal,
                i,
                oThis = this;

            select = document.createElement("select");
            select.className = "room_type";
            select.setAttribute("data-val", 0);
            select.addEventListener("change", function (evt) {
                prevVal = select.getAttribute("data-val");
                currVal = evt.target.value;
                select.setAttribute("data-val", currVal);
                oThis.calculateCost(currVal-prevVal);
            });

            option = document.createElement("option");
            option.value = "0";
            option.selected = "selected";
            option.innerHTML = 0;
            select.appendChild(option);

            for (i = 0 ; i < 5; i++) {
                option = document.createElement("option");
                option.value = (i+1) * room.price;
                option.innerHTML = i + 1;
                select.appendChild(option);
            }

            return select;
        },

        renderHeader: function () {

            var table,
                thead,
                tr,
                th,
                oThis= this;

            table = document.createElement("div");
            table.className = "rooms_table";

            thead = document.createElement("div");
            tr = document.createElement("div");
            tr.className = "tr";

            th = document.createElement("div");
            th.className = "room_name";
            th.className += " th";
            th.innerHTML = "Room Name";
            
            tr.appendChild(th);

            th = document.createElement("div");
            th.className = "room_availability";
            th.className += " th";
            th.innerHTML = "Availability";
            tr.appendChild(th);

            th = document.createElement("div");
            th.className = "room_occupancy";
            th.className += " th";
            th.innerHTML = "Occupancy";
            th.addEventListener("click", function (evt) {
                oThis.rStore.sort("occupancy");
                oThis._clear(oThis.el);
                oThis.show(oThis.el);
            });
            tr.appendChild(th);

            th = document.createElement("div");
            th.className = "room_price";
            th.className += " th";
            th.innerHTML = "Price per Room";
            th.addEventListener("click", function (evt) {
                oThis.rStore.sort("price");
                oThis._clear(oThis.el);
                oThis.show(oThis.el);
            });
            tr.appendChild(th);

            th = document.createElement("div");
            th.className = "room_quantity";
            th.className += " th";
            th.innerHTML = "No. of Rooms";
            tr.appendChild(th);

            thead.appendChild(tr);

            return thead;
        },

        _clear: function () {
            this.el.innerHTML = "";
        },


        calculateCost: function (diff) {
            var oThis = this;

            oThis.totalCost += diff;

            document.querySelector(".total_cost").innerHTML = oThis.totalCost;
        },
    };
}(window.Hotel || (window.Hotel = {})));