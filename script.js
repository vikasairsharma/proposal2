document.addEventListener("DOMContentLoaded", () => {
    // Attach event listeners to the cards dynamically
    document.querySelector(".cards").addEventListener("click", (event) => {
        const target = event.target.closest(".card");
        if (!target) return; // If the click wasn't on a card, do nothing

        // Determine which section to show
        const sectionId = target.querySelector("h3").textContent.includes("WordPress")
            ? "wordpress"
            : "hardcoded";

        // Hide the menu and show the selected section
        document.getElementById("menu").classList.add("hidden");
        document.getElementById(sectionId).classList.remove("hidden");
    });

    // Attach event listener to the back buttons
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            // Hide all details sections
            document.querySelectorAll(".details").forEach((detail) => {
                detail.classList.add("hidden");
            });

            // Show the menu
            document.getElementById("menu").classList.remove("hidden");
        });
    });
});
