(function (App) {
    "use strict";

    App.Carousel = function (el) {
        var oThis = this;

        oThis.images = App.Data.images;
        oThis.el = el;
        oThis.presentImgIndex = 0,
        oThis.intervalId = 0;
    };

    App.Carousel.prototype = {
        show: function () {
            var oThis = this;

            oThis._render();
            oThis.init();
        },

        init: function() {
            var oThis = this;

            oThis.attachEvents();
            oThis.startSlideShow();
        },

        attachEvents: function() {
            var oThis = this,
                prev,
                next;

            prev = document.querySelector(".left_holder");
            next = document.querySelector(".right_holder");

            prev.addEventListener("click", function () {
                oThis.changeImage(-1);
                oThis.restartSlideShow();
            });

            next.addEventListener("click", function () {
                oThis.changeImage(1);
                oThis.restartSlideShow();
            });
        },

        startSlideShow: function () {
            var oThis = this;

            oThis.intervalId = setInterval(function () {
                oThis.changeImage(1);
            }, 4000);
        },

        restartSlideShow: function () {
            var oThis = this;

            clearInterval(oThis.intervalId);
            oThis.startSlideShow();
        },

        changeImage: function (val) {
            var img = document.querySelector(".img_container"),
                desc = document.querySelector(".image_overlay"),
                oThis = this;

            oThis.presentImgIndex += val;

            if (oThis.presentImgIndex > oThis.images.length) {
                oThis.presentImgIndex = 0;
            } else if (oThis.presentImgIndex < 1) {
                oThis.presentImgIndex = oThis.images.length - 1;
            }

            img.src = oThis.images[oThis.presentImgIndex].src;
            desc.innerHTML = oThis.images[oThis.presentImgIndex].desc;
        },
        _render: function () {
            var imgSection,
                imgContainer,
                imgOverlay,
                lHolder,
                rHolder,
                img,
                oThis = this;

            imgSection = document.createElement("div");

            imgContainer = document.createElement("img");
            imgContainer.className = "img_container";
            imgContainer.src = "../src/img/1_large.jpg";
            imgSection.appendChild(imgContainer);

            imgOverlay = document.createElement("div");
            imgOverlay.className = "image_overlay";
            imgSection.appendChild(imgOverlay);

            lHolder = document.createElement("div");
            img = document.createElement("img");
            img.className = "left_holder";
            img.src = "../src/img/right-arrow.png";
            lHolder.appendChild(img);
            imgSection.appendChild(lHolder);

            rHolder = document.createElement("div");
            img = document.createElement("img");
            img.className = "right_holder";
            img.src = "../src/img/left-arrow.png";
            rHolder.appendChild(img);
            imgSection.appendChild(rHolder);

            oThis.el.appendChild(imgSection);
        }
        
    };
}(window.Hotel || (window.Hotel = {})));