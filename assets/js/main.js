var handleLink = (bodyDOM) => {
    $(document).on("click", "a[href^='#']", (event) => {
        // Prevent default link handling
        event.preventDefault();

        let $link = $(event.target);
        let $target = $($link.attr("href"));

        // Scroll to give target
        bodyDOM.stop().animate({
            scrollTop: $target.offset().top
        }, 1000, "easeInOutExpo");
    });
}

window.addEventListener("load", (event) => {
    handleLink($("html"));
});
