(function (App) {
    "use strict";

    App.ReviewList = function (el, pgSize) {
        var oThis = this;

        oThis.rStore = new App.ReviewStore();
        oThis.pgSize = pgSize;
        oThis.el = el;
        oThis.pager = new App.Pagination(oThis.pgSize, oThis.rStore.reviews);
    };

    App.ReviewList.prototype = {
        show: function () {
            var oThis = this;

            oThis._render(oThis.el);
            oThis.reset(oThis.el);
            oThis.attachEvents();
        },
        reset: function() {
            var oThis = this;

            oThis.pager.setPage(0);
            oThis._renderReviews(oThis.pager.getPage(1));            
        },
        updateReviews: function (reviews) {
            var oThis = this;

            oThis.pager.init(oThis.rStore.reviews);
            oThis.reset(oThis.el);
            oThis._updatePageOnView();
        },

        attachEvents: function() {
            var prev_page = document.querySelector(".prev_page"),
               next_page = document.querySelector(".next_page"),
               sortReview = document.querySelector(".sort_panel"),
                oThis = this;

            prev_page.addEventListener("click", function () {
                oThis.prevPage();
            });

            next_page.addEventListener("click", function () {
                oThis.nextPage();
            });

            sortReview.addEventListener("click", function () {
                oThis.rStore.sort();
                oThis.updateReviews();
            });
        },

        _clear: function () {
            document.querySelector(".reviews_section").innerHTML = "";
        },

        _renderReviews: function (reviews) {
            var oThis = this,
                holder = document.querySelector(".reviews_section");

            oThis._clear();

            if (reviews.length === 0) {
                holder.appendChild(oThis._createEmptyRow("No reviews present"));
            } else {
                reviews.forEach(function (review) {
                    holder.appendChild(oThis._createReviewRow(review));
                }, oThis);
            }
        },

        _createEmptyRow: function (content) {
            return document.createElement("div").innerHTML(content);
        },

        _createReviewRow: function (review) {
            var rLi, score, content, reviewer;

            rLi = document.createElement("li");
            rLi.className = "one_review";

            score = document.createElement("strong");
            score.className = "review_score";
            score.innerHTML = review.reviewScore;

            content = document.createElement("blockquote");
            content.className = "review_content";
            content.innerHTML = review.reviewContent;

            reviewer = document.createElement("cite");
            reviewer.innerHTML = review.reviewBy;

            content.appendChild(reviewer);
            rLi.appendChild(score);
            rLi.appendChild(content);

            return rLi;
        },

        _render: function() {

            var container,
                prev,
                curr,
                next,
                listContainer,
                oThis = this;

            listContainer = document.createElement("div");
            listContainer.className = "reviews_section";

            container = document.createElement("div");
            container.className = "pagination_section";

            prev = document.createElement("div");
            prev.innerHTML = "Prev";
            prev.className = "prev_page";

            next = document.createElement("div");
            next.innerHTML = "Next";
            next.className = "next_page";

            curr = document.createElement("div");
            curr.className = "curr_page";
            curr.innerHTML = oThis.pager.getPageNo() + "/" + oThis.pager.getTotalPages();

            container.appendChild(prev);
            container.appendChild(curr);
            container.appendChild(next);
            oThis.el.appendChild(listContainer);
            oThis.el.appendChild(container);

        },

        nextPage: function () {
            var oThis = this;

            oThis.pager.setPage(1);
            oThis._renderReviews(oThis.pager.getPage());
            oThis._updatePageOnView();
        },

        prevPage: function () {
            var oThis = this;

            oThis.pager.setPage(-1);
            oThis._renderReviews(oThis.pager.getPage());
            oThis._updatePageOnView();
        },

        _updatePageOnView: function () {
            var currPage = document.querySelector(".curr_page"),
                oThis = this;

            currPage.innerHTML = oThis.pager.getPageNo() + "/" + oThis.pager.getTotalPages();
        }

    }

    App.Pagination = function (pgSize, reviews) {
        var oThis = this;

        oThis.pgSize = pgSize;
        oThis.reviews = reviews;
        oThis.noOfPages = Math.ceil(reviews.length / pgSize);
        oThis.pages = {};
        oThis.init();
    };

    App.Pagination.prototype = {
        init: function (reviews) {
            var oThis = this;

            oThis.reviews = reviews || oThis.reviews;
            oThis.currPage = 1;
            oThis.calculatePageReviews();
        },

        calculatePageReviews: function () {
            var oThis = this,
                i,
                j,
                k = 0;

            for (i = 0 ; i < oThis.noOfPages; i++) {
                oThis.pages["page" + (i + 1)] = [];

                for (j = 0; j < oThis.pgSize && k < oThis.reviews.length; j++) {
                    oThis.pages["page" + (i + 1)].push(oThis.reviews[k]);
                    k++;
                }
            }
        },
        setPage: function (pgNo) {
            if (pgNo !== 0) {
               this.currPage += pgNo;
            }
        },
        getPageNo: function() {
            return this.currPage;
        },
        getTotalPages: function() {
            return this.noOfPages;
        },
        getPage: function (pgNo) {
            if (typeof pgNo === "undefined") {
                return this.pages["page" + this.currPage];
            } else {
                return this.pages["page" + pgNo];
            }
        }
    };
}(window.Hotel || (window.Hotel = {})));