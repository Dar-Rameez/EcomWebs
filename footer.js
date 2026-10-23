
const footerHTML = `
  <footer class="section-footer">
    <div class="footer-container container">

      <div class="content_1">
        <img src="./images/logo.png" alt="EcomWeb Store logo" />

        <p>
          Welcome to EcomWebs Store,
          your destination for quality gadgets and accessories.
        </p>

        <img
          src="https://i.postimg.cc/Nj9dgJ98/cards.png"
          alt="Accepted payment methods"
        />
      </div>

      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="./products.html">Computer Store</a>
        <a href="./products.html">Laptop Store</a>
        <a href="./products.html">Accessories</a>
        <a href="./products.html">Sales &amp; Discounts</a>
      </div>

      <div class="content_3">
        <h4>QUICK LINKS</h4>
        <a href="./index.html">Home</a>
        <a href="./about.html">About Us</a>
        <a href="./contact.html">Contact Us</a>
        <a href="./addToCart.html">Shopping Cart</a>
      </div>

      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>Stay updated on new arrivals, offers and promotions.</p>

        <form class="f-mail" id="newsletterForm">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            aria-label="Your email address"
            required
          />
          <button type="submit" aria-label="Subscribe to newsletter">
            <i class="bx bx-envelope"></i>
          </button>
        </form>
      </div>

    </div>

    <div class="f-design">
      <div class="f-design-txt">
        <p>&copy; ${new Date().getFullYear()} EcomWebs Store. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

const existingFooter = document.querySelector(".section-footer");

if (existingFooter) {
  existingFooter.outerHTML = footerHTML;
} else {
  document.body.insertAdjacentHTML("beforeend", footerHTML);
}

const newsletterForm = document.querySelector("#newsletterForm");

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you for your interest! Newsletter signup is not connected yet.");
  newsletterForm.reset();
});
