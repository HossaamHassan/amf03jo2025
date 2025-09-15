$(document).ready(function () {
    // Navbar and Footer
    $(this).find(".fa-plus").show();
    $(this).find(".fa-minus").hide();
    $(".toggleButton, .toggleButtonHeader").click(function () {
        if ($(window).width() <= 991) {
            let dropdown;

            if ($(this).closest(".footer-item").length) {
                dropdown = $(this).closest("div").next("ul");
            }

            if ($(this).closest("li").find(".dropdown-menu-news").length) {
                dropdown = $(this).closest("li").find(".dropdown-menu-news");
            }
            dropdown.toggleClass("show");

            if (dropdown.hasClass("show")) {
                $(this).find(".fa-plus").hide();
                $(this).find(".fa-minus").show();
            } else {
                $(this).find(".fa-plus").show();
                $(this).find(".fa-minus").hide();
            }
        }
    });

    // Search
    $(".search-btn").on("click", function (e) {
        e.preventDefault();
        $(".searchBarOpen").addClass("active");
    });

    $(".searchBarOpen--closeBtn").on("click", function () {
        $(".searchBarOpen").removeClass("active");
    });
});

