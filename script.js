// =====================================
// LOVEPRIME - MAIN JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const videoCards = document.querySelectorAll(".video-card");

    let selectedCategory = "all";


    // VIDEO FILTER FUNCTION
    function filterVideos() {

        const searchText = searchInput.value.toLowerCase().trim();

        videoCards.forEach(function (card) {

            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();
            const category = card.dataset.category;

            const matchesSearch =
                title.includes(searchText) ||
                description.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                category === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    }


    // SEARCH VIDEOS
    if (searchInput) {

        searchInput.addEventListener("input", function () {
            filterVideos();
        });

    }


    // CATEGORY FILTER
    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            categoryButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            selectedCategory = button.dataset.category;

            filterVideos();

        });

    });


    // ADMIN LOGIN BUTTON
    const adminButton = document.querySelector(".admin-btn");

    if (adminButton) {

        adminButton.addEventListener("click", function () {
            console.log("Admin login page will open.");
        });

    }


    console.log("LovePrime website loaded successfully!");

});