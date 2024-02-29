window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const videoContainer = document.querySelector('.video-container');
    const photoContainer = document.querySelector('.photo-container');

    // Calculate the new heights based on scroll position
    const videoHeight = Math.max(150 - scrollY * 0.1, 100) + 'vh'; // Limit the minimum height to 100vh
    const photoHeight = Math.min(100 + scrollY * 0.01, 100) + 'vh'; // Limit the maximum height to 100vh

    // Set the new heights
    videoContainer.style.height = videoHeight;
    photoContainer.style.height = photoHeight;
});

let game1 = document.getElementById('game1');
let game2 = document.getElementById('game2');
let game3 = document.getElementById('game3');
let img = document.getElementById('img');
let form = document.getElementById('form');
let text = document.getElementById('text');
let link = document.getElementById('link');
let para = document.getElementById('para');
let para1 = document.getElementById('para1');
let heading = document.getElementById('heading');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    game1.style.marginLeft = value * 0.09 + 'px';
    game2.style.marginLeft = value * 0.09 + 'px';
    game3.style.marginLeft = value * 0.09 + 'px';
    img.style.marginLeft = value * 0.01 + 'vh';
    form.style.marginLeft = value * 0.09 + 'px';
    text.style.marginTop = value * -2.5 + 'px';
    link.style.marginLeft = value * -3.5 + 'px';
    para.style.marginLeft = value * -0.40 + 'px';
    para1.style.marginLeft = value * 0.40 + 'px';
    heading.style.marginBottom = value * -0.1 + 'px';


});

// Get the purchase confirmation modal
var purchaseConfirmationModal = document.getElementById("purchaseConfirmationModal");

// Get the close button for the purchase confirmation modal
var closeButton = document.querySelector("#purchaseConfirmationModal .close");

// Function to open the purchase confirmation modal
function openPurchaseConfirmationModal() {
    purchaseConfirmationModal.style.display = "block";
}

// Function to close the purchase confirmation modal
function closePurchaseConfirmationModal() {
    purchaseConfirmationModal.style.display = "none";
}

// Close the modal when the user clicks on the close button or outside the modal
window.addEventListener("click", function(event) {
    if (event.target == purchaseConfirmationModal) {
        closePurchaseConfirmationModal();
    }
});

// Close the modal when the user clicks on the close button
closeButton.addEventListener("click", function() {
    closePurchaseConfirmationModal();
});

// Open the purchase confirmation modal when the user clicks the purchase button
document.getElementById("openPurchaseForm").addEventListener("click", function() {
    openPurchaseConfirmationModal();
});
