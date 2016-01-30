(function (App) {
    "use strict";

    App.Data = {};

    App.Data.images = [{
        src: "../src/img/1_large.jpg",
        desc: "Description of photo 1"
    }, {
        src: "../src/img/2_large.jpg",
        desc: "Description of photo 2"
    }, {
        src: "../src/img/3_large.jpg",
        desc: "Description of photo 3"
    }, {
        src: "../src/img/4_large.jpg",
        desc: "Description of photo 4"
    }, {
        src: "../src/img/5_large.jpg",
        desc: "Description of photo 5"
    }, {
        src: "../src/img/6_large.jpg",
        desc: "Description of photo 6"
    }, {
        src: "../src/img/7_large.jpg",
        desc: "Description of photo 7"
    }, {
        src: "../src/img/8_large.jpg",
        desc: "Description of photo 8"
    }, {
        src: "../src/img/9_large.jpg",
        desc: "Description of photo 9"
    }, {
        src: "../src/img/10_large.jpg",
        desc: "Description of photo 10"
    }, {
        src: "../src/img/11_large.jpg",
        desc: "Description of photo 11"
    }, {
        src: "../src/img/12_large.jpg",
        desc: "Description of photo 12"
    }, {
        src: "../src/img/13_large.jpg",
        desc: "Description of photo 13"
    }, {
        src: "../src/img/14_large.jpg",
        desc: "Description of photo 14"
    }];
    App.Data.hotelDetails = {
        reviews: [{
            reviewScore: 5,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 3,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 1,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 6,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 8,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 5,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 10,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 9,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 2,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 7,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 1,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }, {
            reviewScore: 9,
            reviewContent: "Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.",
            reviewBy: "Malcolm Reynolds"
        }],
        rooms: [{
            name: "Basic 2 Bed",
            occupancy: 2,
            price: 88.99,
            quantity: 0,
            availability: "Yes"
        }, {
            name: "Basic Family Room",
            occupancy: 4,
            price: 99.99,
            quantity: 0,
            availability: "Yes"
        }, {
            name: "Deluxe 2 Bed",
            occupancy: 2,
            price: 109.99,
            quantity: 0,
            availability: "Yes"
        }, {
            name: "Deluxe Family Room",
            occupancy: 7,
            price: 119.99,
            quantity: 0,
            availability: "Yes"
        }, {
            name: "Bridal Suite",
            occupancy: 2,
            price: 167.99,
            quantity: 0,
            availability: "Yes"
        }, {
            name: "President Suite",
            occupancy: 2,
            price: 301.99,
            quantity: 0,
            availability: "Yes"
        }, {
            name: "One+One",
            occupancy: 2,
            price: 78.99,
            quantity: 0,
            availability: "Yes"
        }]
    }
}(window.Hotel || (window.Hotel = {})));