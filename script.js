document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. HOME PAGE: INTERACTIVE CATEGORIES
    // ==========================================
    const categories = document.querySelectorAll(".category");

    categories.forEach(function (category) {
        category.addEventListener("click", function () {
            const heading = category.querySelector("h3");

            if (heading) {
                const categoryName = heading.textContent.trim();
                alert("You selected: " + categoryName);
            }
        });
    });


    // ==========================================
    // 2. PRODUCTS PAGE: SEARCH FOR PRODUCTS
    // ==========================================
    const searchBox = document.querySelector(".search-box input, input.search-box");
    const productCards = Array.from(document.querySelectorAll(".product-card"));
    let searchMessage = document.getElementById("searchMessage");

    if (searchBox && productCards.length > 0 && !searchMessage) {
        searchMessage = document.createElement("p");
        searchMessage.id = "searchMessage";
        searchMessage.setAttribute("aria-live", "polite");

        const searchContainer = searchBox.closest(".search-box");

        if (searchContainer) {
            searchContainer.insertAdjacentElement("afterend", searchMessage);
        } else {
            searchBox.insertAdjacentElement("afterend", searchMessage);
        }
    }

    function searchProducts() {
        if (!searchBox || productCards.length === 0) {
            return;
        }

        const searchText = searchBox.value.trim().toLowerCase();
        let visibleProducts = 0;

        productCards.forEach(function (card) {
            const productName = card.textContent.toLowerCase();

            if (productName.includes(searchText)) {
                card.style.display = "";
                visibleProducts++;
            } else {
                card.style.display = "none";
            }
        });

        if (searchMessage) {
            if (visibleProducts === 0) {
                searchMessage.textContent = "No products found. Try another search.";
            } else {
                searchMessage.textContent = visibleProducts + " product(s) found.";
            }
        }
    }

    if (searchBox) {
        searchBox.addEventListener("input", searchProducts);
    }


    // ==========================================
    // 3. PRODUCTS PAGE: SORT PRODUCTS
    // ==========================================
    const sortBox = document.querySelector("select.sort-box");
    const productGrid = document.querySelector(".product-grid");

    if (sortBox && productGrid) {
        sortBox.addEventListener("change", function () {
            const cards = Array.from(productGrid.querySelectorAll(".product-card"));

            if (sortBox.value === "low-to-high") {
                cards.sort(function (cardA, cardB) {
                    return Number(cardA.dataset.price) - Number(cardB.dataset.price);
                });
            } else if (sortBox.value === "high-to-low") {
                cards.sort(function (cardA, cardB) {
                    return Number(cardB.dataset.price) - Number(cardA.dataset.price);
                });
            }

            cards.forEach(function (card) {
                productGrid.appendChild(card);
            });
        });
    }


    // ==========================================
    // 4. PRODUCTS PAGE: PRODUCT IMAGE LIGHTBOX
    // ==========================================
    const productImages = document.querySelectorAll(".product-card img");

    if (productImages.length > 0) {
        const lightbox = document.createElement("div");

        lightbox.id = "leumyLightbox";
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-modal", "true");
        lightbox.setAttribute("aria-label", "Product image viewer");

        lightbox.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.85);
            display: none;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 20px;
            z-index: 9999;
        `;

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.textContent = "×";
        closeButton.setAttribute("aria-label", "Close image viewer");

        closeButton.style.cssText = `
            position: absolute;
            top: 15px;
            right: 25px;
            font-size: 40px;
            color: white;
            background: transparent;
            border: none;
            cursor: pointer;
        `;

        const enlargedImage = document.createElement("img");
        enlargedImage.style.cssText = `
            max-width: 90%;
            max-height: 75vh;
            object-fit: contain;
        `;

        const imageCaption = document.createElement("p");
        imageCaption.style.cssText = `
            color: white;
            text-align: center;
            font-size: 18px;
        `;

        lightbox.appendChild(closeButton);
        lightbox.appendChild(enlargedImage);
        lightbox.appendChild(imageCaption);
        document.body.appendChild(lightbox);

        function closeLightbox() {
            lightbox.style.display = "none";
            document.body.style.overflow = "";
        }

        productImages.forEach(function (image) {
            image.style.cursor = "zoom-in";

            image.addEventListener("click", function () {
                enlargedImage.src = image.src;
                enlargedImage.alt = image.alt;

                const productCard = image.closest(".product-card");
                const productHeading = productCard ? productCard.querySelector("h3") : null;

                imageCaption.textContent = productHeading ? productHeading.textContent.trim() : image.alt;

                lightbox.style.display = "flex";
                document.body.style.overflow = "hidden";
                closeButton.focus();
            });
        });

        closeButton.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && lightbox.style.display === "flex") {
                closeLightbox();
            }
        });
    }


    // ==========================================
    // 5. ADVANCED CART & CHECKOUT LOGIC
    // ==========================================
    const cartCountElement = document.getElementById("cartCount");
    const cartItemsContainer = document.getElementById("cart-items-container");
    const cartTotalPriceElement = document.getElementById("cartTotalPrice");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn, .product-card button");
    const paymentMethodSelect = document.getElementById("paymentMethod");
    const cardDetailsDiv = document.getElementById("cardDetails");
    const checkoutForm = document.getElementById("checkoutForm");

    // Load cart array from localStorage (stores objects: [{name, price}])
    let cart = JSON.parse(localStorage.getItem("leumyCart")) || [];

    // Function to update UI (badge counter and cart items table)
    function updateCartUI() {
        if (cartCountElement) {
            cartCountElement.textContent = cart.length;
        }

        localStorage.setItem("leumyCart", JSON.stringify(cart));

        if (cartItemsContainer && cartTotalPriceElement) {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = "<p>Your cart is currently empty.</p>";
                cartTotalPriceElement.textContent = "0";
                return;
            }

            let html = "<ul style='list-style: none; padding: 0;'>";
            let total = 0;

            cart.forEach((item, index) => {
                total += Number(item.price);
                html += `
                    <li style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee;">
                        <span>${item.name}</span>
                        <span>R${item.price} 
                            <button type="button" onclick="removeFromCart(${index})" style="background: none; border: none; color: red; cursor: pointer; margin-left: 15px; font-weight: bold;">✕</button>
                        </span>
                    </li>`;
            });

            html += "</ul>";
            cartItemsContainer.innerHTML = html;
            cartTotalPriceElement.textContent = total;
        }
    }

    // Add item to cart on button click
    addToCartButtons.forEach(button => {
        const btnText = button.textContent.trim().toLowerCase();
        if (btnText.includes("add to cart") || button.classList.contains("add-to-cart-btn")) {
            button.addEventListener("click", () => {
                const productCard = button.closest(".product-card");
                const productName = productCard ? productCard.querySelector("h3").textContent.trim() : "Product";
                const productPrice = productCard ? productCard.getAttribute("data-price") : "0";

                cart.push({ name: productName, price: productPrice });
                updateCartUI();

                alert(productName + " added to your cart!");
            });
        }
    });

    // Make remove function global so inline onclick works
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    // Toggle credit card input visibility based on payment selection
    if (paymentMethodSelect && cardDetailsDiv) {
        paymentMethodSelect.addEventListener("change", (e) => {
            if (e.target.value === "credit-card") {
                cardDetailsDiv.style.display = "flex";
            } else {
                cardDetailsDiv.style.display = "none";
            }
        });
    }

    // Handle form checkout submission
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            alert("Thank you for your order! Your payment has been successfully processed.");
            cart = [];
            updateCartUI();
            checkoutForm.reset();
            if (cardDetailsDiv) cardDetailsDiv.style.display = "none";
        });
    }

    // Initial render call on page load
    updateCartUI();


    // ==========================================
    // 6. CATEGORY FILTERING LOGIC
    // ==========================================
    const categoryLinks = document.querySelectorAll(".categories-list a");
    const allProductCards = document.querySelectorAll(".product-card");

    categoryLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            categoryLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            const selectedCategory = link.getAttribute("data-category");

            allProductCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = ""; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    });

    // ==========================================
    // 7. FOOTER: UPDATE COPYRIGHT YEAR AUTOMATICALLY
    // ==========================================
    const copyrightText = document.querySelector("#copyright p");

    if (copyrightText) {
        copyrightText.textContent = "© " + new Date().getFullYear() + " Leumy. All Rights Reserved.";
    }
});

// =====================================
// FORM VALIDATION AND AJAX SUBMISSION
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // Select the Enquiry and Contact forms
    const forms = [
        document.getElementById("enquiryForm"),
        document.getElementById("contactForm")
    ].filter(Boolean);

    // Validate and submit each form
    forms.forEach(function (form) {

        // Let JavaScript display validation messages
        form.noValidate = true;

        // Create a message area for success or errors
        const feedback = document.createElement("div");

        feedback.className = "form-feedback";
        feedback.setAttribute("role", "status");
        feedback.setAttribute("aria-live", "polite");

        form.prepend(feedback);

        // Run validation when the user submits the form
        form.addEventListener("submit", async function (event) {

            // Stop the normal page reload
            event.preventDefault();

            feedback.textContent = "";
            feedback.className = "form-feedback";

            // Check required fields, email format,
            // minimum lengths and other HTML rules
            if (!form.checkValidity()) {

                form.reportValidity();

                feedback.textContent =
                    "Please check your information and complete all required fields.";

                feedback.classList.add("error");

                return;
            }

            // Additional South African phone-number validation
            const phoneField = form.querySelector(
                'input[type="tel"]'
            );

            if (phoneField) {

                const phone = phoneField.value.trim();

                const phonePattern = /^(?:\+27|0)[0-9 ]{9,12}$/;

                if (!phonePattern.test(phone)) {

                    phoneField.setCustomValidity(
                        "Enter a valid South African phone number starting with 0 or +27."
                    );

                    phoneField.reportValidity();

                    phoneField.setCustomValidity("");

                    feedback.textContent =
                        "Please enter a valid South African phone number.";

                    feedback.classList.add("error");

                    return;
                }
            }

            // Make sure the form has a submission address
            if (!form.action || !form.action.startsWith(
                "https://formspree.io/f/"
            )) {

                feedback.textContent =
                    "The form submission address is missing or incorrect.";

                feedback.classList.add("error");

                return;
            }

            // Disable the submit button while sending
            const submitButton = form.querySelector(
                'button[type="submit"], input[type="submit"]'
            );

            const originalButtonText = submitButton
                ? submitButton.textContent
                : "";

            if (submitButton) {
                submitButton.disabled = true;

                if (submitButton.tagName === "BUTTON") {
                    submitButton.textContent = "Sending...";
                }
            }

            feedback.textContent = "Sending your message...";
            feedback.classList.add("sending");

            try {

                // Send form data using AJAX
                const response = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                        "Accept": "application/json"
                    }
                });

                // Check whether Formspree accepted the submission
                if (response.ok) {

                    feedback.textContent =
                        "Thank you! Your message has been submitted successfully.";

                    feedback.className = "form-feedback success";

                    form.reset();

                } else {

                    let errorMessage =
                        "Your message could not be submitted. Please try again.";

                    try {

                        const result = await response.json();

                        if (result.errors && result.errors.length > 0) {
                            errorMessage = result.errors
                                .map(function (error) {
                                    return error.message;
                                })
                                .join(" ");
                        }

                    } catch (error) {
                        // Keep the default error message
                    }

                    feedback.textContent = errorMessage;
                    feedback.className = "form-feedback error";
                }

            } catch (error) {

                // Display a message if the network request fails
                feedback.textContent =
                    "A connection error occurred. Please check your internet and try again.";

                feedback.className = "form-feedback error";

            } finally {

                // Re-enable the submit button
                if (submitButton) {

                    submitButton.disabled = false;

                    if (submitButton.tagName === "BUTTON") {
                        submitButton.textContent = originalButtonText;
                    }
                }
            }
        });
    });
});