Leumy Website

Student Information

Student Name: Meury Manuel

Student Number: ST10497455

Module: WEDE5020

Institution: Rosebank College

1. Project Overview

Leumy is an online and in-store retail business established in March 2024. The business specialises in beauty and fashion products, including skincare, cosmetics, personal care products and women's clothing.

The purpose of the Leumy website is to provide customers with information about the business, display available products, allow customers to make product enquiries and provide contact information.

The website was developed using HTML5, CSS and JavaScript. Git and GitHub were used for version control and project management. The website aims to provide a consistent and user-friendly experience across desktop, tablet and mobile devices.

The website includes interactive features such as product searching, product sorting, a shopping cart, image previews and customer enquiry and contact forms.

2. Website Pages

The Leumy website consists of five main pages.

2.1 Home Page

The Home page introduces visitors to Leumy and provides an overview of the different product categories available.

The categories include:

Skincare

Cosmetics

Personal care

Fashion

The page includes the main navigation menu, branding, category images and links to other website pages.

2.2 About Us Page

The About Us page provides information about the Leumy business. It contains the following sections:

About Our Business

Our Mission

Our Vision

What We Offer

Our Commitment

The content is organised into information cards to improve readability and create a consistent visual layout.

2.3 Products Page

The Products page displays the products available from Leumy. Products are arranged using a grid layout.

The page includes:

Product images and descriptions

Product prices

Category filtering

Product searching

Price sorting

Add-to-cart buttons

A shopping cart interface

JavaScript is used to update the product display and shopping cart in response to user interactions.

The shopping cart uses browser local storage to retain its contents between page visits on the same browser. The checkout functionality is a demonstration and does not process real payments.

2.4 Enquiry Page

The Enquiry page allows customers to submit questions about Leumy products.

The form collects relevant customer information and enquiry details. HTML form controls and JavaScript validation are used to help ensure that required information is provided.

Form submissions are configured to use Formspree, subject to the form endpoint being correctly configured and active.

2.5 Contact Us Page

The Contact Us page provides Leumy's contact information, business address and operating hours.

It also includes a contact form for customers who want to send a message to the business. An embedded Google Map provides location information.

The contact form uses HTML validation and JavaScript to validate information and submit messages asynchronously through AJAX, provided the Formspree endpoint is active.

3. CSS Styling for the Desktop Solution

3.1 External Stylesheet

An external stylesheet named style.css is linked to the website's HTML pages.

Using an external stylesheet allows the website to maintain consistent styling across the different pages and reduces the need to repeat CSS rules in individual HTML files.

The stylesheet contains rules for:

Typography

Colours and backgrounds

Navigation

Page layouts

Product cards

Forms and buttons

Image presentation

Responsive layouts

Hover and focus effects

3.2 Base Styling

Base styles establish a consistent appearance throughout the website.

These include:

Font family and size

Text colour

Line height

Background colour

Margins and padding

Element spacing

The website uses a floral-white background with complementary colours to create a consistent visual identity for Leumy.

3.3 Typography

CSS typography properties establish a visual hierarchy and improve readability.

The following properties are used:

font-family

font-size

font-weight

line-height

text-align

Headings distinguish page titles and section headings, while paragraph styling supports readable body content.

3.4 Layout Structure

Flexbox and CSS Grid are used to organise website content.

Flexbox is used for:

Navigation and header arrangements

Footer sections

Contact page layouts

Flexible alignment of interface elements

CSS Grid is used for:

Product cards

About Us information cards

Responsive content arrangements

The layout changes according to screen size to improve the presentation of website content on different devices.

3.5 Visual Styling

CSS properties such as color, background-color, border, border-radius, box-shadow, padding and margin are used to improve the appearance of the website.

Rounded information cards separate content into clear sections. Hover effects provide visual feedback, while focus styling helps users identify interactive elements when navigating the website.

4. Responsive Design

4.1 Media Queries and Breakpoints

CSS media queries are used to adjust the layout according to the available screen width.

The website includes breakpoints at:

768px for smaller screens, including many tablet layouts

480px for smaller mobile screens

The product grid is designed to display:

Three products per row on larger desktop screens

Two products per row on tablet screens

One product per row on smaller mobile screens

The navigation and other page sections are also adjusted for smaller screens.

4.2 Relative Units

Relative units, including percentages, are used where appropriate to allow page sections to adapt to different screen widths.

Pixel values are retained where fixed dimensions are appropriate, such as borders and selected spacing values.

4.3 Responsive Images

Images are included using the HTML img element. Alternative text is provided through the alt attribute to describe images where appropriate.

CSS controls image sizing and positioning to maintain a consistent presentation within product cards and other content sections.

4.4 Testing and Iteration

The website is checked at different browser widths to identify layout problems.

The responsive design review includes:

Navigation layout

Product grid arrangement

About Us cards

Contact page layout

Form presentation

Readability and spacing

Image sizing

Responsive testing should be performed on desktop, tablet-sized and mobile-sized viewports.

5. Improvements Based on Part 1 Feedback

Several changes were made to improve the website following feedback received for Part 1.

5.1 Content Improvements

The About Us page was expanded to include additional information about the business, its mission, vision, products and commitment to customers.

Product information and descriptions were also expanded to provide customers with more useful information.

5.2 Navigation Improvements

The navigation menu was reviewed following feedback that its adjustments were incomplete or incorrect and that its responsive behaviour had significant issues.

The improvements focus on:

Maintaining consistent navigation across the five website pages

Ensuring that navigation links point to the correct HTML files

Improving spacing and alignment between navigation elements

Adjusting the navigation layout for smaller screens

Checking that navigation items remain readable and accessible

Reviewing the header layout to prevent overlapping or misplaced elements

The navigation should be tested at desktop, tablet and mobile widths to ensure that it remains usable and that all links work correctly.

5.3 HTML Structure Improvements

Semantic HTML5 elements are used where appropriate to organise website content.

These include:

header

nav

main

section

article

aside

footer

The elements provide a clearer structure for the content and improve the readability and maintainability of the HTML code.

5.4 Code Comments

Comments were reviewed to explain the purpose of important sections of the HTML, CSS and JavaScript code.

The intention is to make the code easier to understand and maintain.

5.5 Git Commit Improvements

Descriptive commit messages are used to explain the changes made to the project.

Examples include:

Improve semantic HTML structure

Improve About Us page content

Add responsive product grid

Fix responsive navigation layout

Improve form validation

Add AJAX form submission

Add SEO robots and sitemap files

Each commit should describe the actual changes included in that commit.

6. Part 3: JavaScript, Forms and SEO

6.1 JavaScript Interactive Features

JavaScript is used to make parts of the website interactive.

The implemented features include:

Product searching

Product price sorting

Shopping cart updates

Saving cart contents using local storage

Product image previews through a lightbox

User feedback when interacting with selected elements

These features improve the interaction between the customer and the website.

6.2 Dynamic Product Display

The Products page includes a search field and price-sorting options.

JavaScript is used to search product information and reorder product cards according to their prices.

Category filtering allows customers to focus on products from a selected category.

The search, category filter and sorting functions should be tested together to ensure that they operate consistently.

6.3 Shopping Cart

The shopping cart allows customers to add products and remove items from the cart.

JavaScript updates the cart display and total price. Browser local storage is used to retain cart information between page visits.

The checkout interface is for demonstration purposes only. It does not represent a secure, live payment-processing system.

6.4 Form Validation

The Enquiry and Contact pages include customer forms.

HTML validation attributes and JavaScript are used to check information before submission.

Validation can include:

Required fields

Email format

Phone-number format on the Enquiry form

Minimum and maximum text lengths

Appropriate error messages

Client-side validation improves the user experience but does not replace server-side validation.

6.5 AJAX Form Submission

The forms are configured to submit information asynchronously using JavaScript's fetch() method.

AJAX allows form information to be sent without a full-page reload.

The interface can display:

A message while the submission is in progress

A success message if the submission is accepted

An error message if the submission fails

Form submission depends on valid and active Formspree endpoints, network availability and the service's configuration. Successful submission should be tested using the published website.

6.6 Search Engine Optimisation

Search engine optimisation (SEO) improvements include:

Page titles

Meta descriptions

Relevant keywords

Internal links between website pages

Heading structure

Alternative text for images

Responsive layouts

A robots.txt file

A sitemap.xml file

The robots.txt file provides instructions for search-engine crawlers. The sitemap lists the main website pages to help search engines discover them.

Both files must use the correct published website address. Their presence does not guarantee that the website will be indexed or ranked by search engines.

6.7 Website Testing

Testing should cover the main website functionality.

The testing process includes:

Opening each website page

Checking internal navigation links

Testing the responsive layout

Searching and sorting products

Filtering products by category

Adding and removing cart items

Checking the displayed cart total

Testing invalid and valid form inputs

Testing successful and unsuccessful form submissions

Checking the browser console for JavaScript errors

Checking the published SEO files

Issues identified during testing should be corrected and documented in the changelog.

7. Changelog

This changelog records the main changes made during development. Entries should be updated to reflect the changes actually implemented in the repository.

Part 1

Added

Created the initial Leumy website structure.

Added the main website pages.

Added initial product and business content.

Created the initial CSS styling.

Part 2

Added

Added detailed content to the About Us page.

Added the What We Offer section.

Added the Our Commitment section.

Added information cards to the About Us page.

Added responsive styling for desktop, tablet and mobile screens.

Added hover effects to selected elements.

Added focus styling for interactive elements.

Added comments explaining important sections of the code.

Updated

Improved the HTML structure using semantic HTML5 elements.

Reviewed the navigation layout and internal page links.

Updated the Products page using CSS Grid.

Updated the About Us information-card layout.

Updated the Contact page layout using Flexbox.

Improved product card styling.

Updated spacing and visual styling across the website.

Improved content based on Part 1 feedback.

Used more descriptive Git commit messages.

Fixed

Corrected HTML structure and closing-tag issues where identified.

Corrected navigation and page-linking issues where identified.

Improved the responsive product grid.

Reviewed CSS selectors affecting responsive layouts.

Part 3

Added

Added JavaScript functionality for product searching and price sorting.

Added a shopping cart interface with cart totals and item removal.

Added browser local storage to retain shopping cart contents.

Added a lightbox for viewing product images.

Added JavaScript form validation for the Enquiry and Contact pages.

Added AJAX form submission through Formspree, subject to endpoint configuration.

Added feedback messages for form submission success and errors.

Created a robots.txt file for search-engine crawler instructions.

Created a sitemap.xml file listing the main website pages.

Updated

Reviewed the navigation layout in response to feedback about incomplete or incorrect navigation adjustments and responsive behaviour.

Reviewed form fields and validation rules.

Updated the README to document the Part 3 functionality.

Updated the references to include relevant HTML, CSS, JavaScript, SEO and form-submission documentation.

Fixed

Corrected navigation, form or JavaScript issues identified during testing.

Corrected any sitemap URLs that did not match the published website.

Corrected any form endpoint or validation issues identified during testing.

Note: Keep the Part 3 entries under "Added", "Updated" and "Fixed" only when the relevant changes have been implemented. Remove any statements describing fixes that have not yet been completed or tested.

8. Technologies Used

The Leumy website uses the following technologies and tools:

HTML5: Website structure and content.

CSS: Styling and responsive layouts.

JavaScript: Interactive elements, product functions, cart updates and form validation.

AJAX and Fetch API: Asynchronous form submission.

Local Storage: Retaining shopping cart information in the browser.

Formspree: Form submission service.

Visual Studio Code: Code editing.

Git: Version control.

GitHub: Source-code repository and website hosting through GitHub Pages, if enabled.

CSS techniques include:

Flexbox

CSS Grid

Media queries

Pseudo-classes

Relative units

Responsive layouts

Transitions and hover effects

9. References

Google. (n.d.). Google Search Central: Build and submit a sitemap. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 31 October 2026).

MDN Web Docs. (n.d.). HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 31 October 2026).

MDN Web Docs. (n.d.). CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 31 October 2026).

MDN Web Docs. (n.d.). CSS Grid Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 31 October 2026).

MDN Web Docs. (n.d.). CSS Flexible Box Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 31 October 2026).

MDN Web Docs. (n.d.). JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 31 October 2026).

MDN Web Docs. (n.d.). Using the Fetch API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 31 October 2026).

MDN Web Docs. (n.d.). Client-side form validation. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 31 October 2026).

GitHub Docs. (n.d.). Creating a GitHub Pages site. Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (Accessed: 31 October 2026).

Sitemaps.org. (n.d.). Sitemaps XML format. Available at: https://www.sitemaps.org/protocol.html (Accessed: 31 October 2026).

W3Schools. (n.d.). HTML Tutorial. Available at: https://www.w3schools.com/html/ (Accessed: 31 October 2026).

W3Schools. (n.d.). CSS Tutorial. Available at: https://www.w3schools.com/css/ (Accessed: 31 October 2026).

Formspree. (n.d.). Formspree Documentation. Available at: https://help.formspree.io/ (Accessed: 31 October 2026).