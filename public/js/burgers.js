// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // Add a new burger.
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bn").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        var id = $(this).data("id");
        var devouredState = $(this).data("devouredState");

        var newDevouredState = {
            devoured: devouredState
        }

        // Send the PUT request.
        $.ajax("/api/burgers/:" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

})
