# Leumy Website

## Student Information

- Student Name:Meury Manuel
- Student Number: ST10497455
- Module: WEDE5020
- Institution: Rosebank College

---

# Leumy Website

## 1. Project Overview

Leumy is an online and in-store retail business established in March 2024. 
The business specialises in beauty and fashion products, including 
skincare, cosmetics, personal care products and women's clothing.

The purpose of the Leumy website is to provide customers with information 
about the business, display its products, allow customers to make product 
enquiries and provide contact information.

The website was developed using HTML5 and CSS, with a focus on creating 
a clear, consistent and responsive design that can be viewed on desktop, 
tablet and mobile screen sizes.

---

## 2. Website Pages

The Leumy website consists of five main pages:

### Home Page

The Home page introduces visitors to Leumy and provides an overview of 
the different product categories available. The categories include 
skincare, cosmetics, personal care and fashion.

### About Us Page

The About Us page provides information about the Leumy business. It 
includes the following sections:

- About Our Business
- Our Mission
- Our Vision
- What We Offer
- Our Commitment

The information was organised into separate content cards to make the 
page easier to read and improve the overall visual layout.

### Products Page

The Products page displays the products available from Leumy. Products 
are organised using a grid layout, while a category section allows users 
to view the different product categories.

The page also includes a search field and sorting options as part of the 
product interface.

### Enquiry Page

The Enquiry page contains a form that allows customers to provide their 
details and submit an enquiry about Leumy products.

### Contact Us Page

The Contact Us page provides customers with Leumy's contact information 
and a form for sending a message to the business.

---

# 3. CSS Styling for Desktop Solution

## 3.1 External Stylesheet

An external stylesheet named "style.css" was created and linked to the 
HTML pages.

Using an external stylesheet allows the website to maintain a consistent 
design across all pages and avoids repeating the same CSS code in each 
HTML file.

The stylesheet contains the main styling for the website, including 
typography, colours, navigation, layouts, product cards, forms, buttons 
and responsive design.

## 3.2 Base Styling

Base styles were created for the website to provide a consistent 
appearance across all pages.

The base styling  includes:

- Font family
- Font size
- Text colour
- Line height
- Background colour
- Margins
- Padding


## 3.3 Typography

CSS typography properties were used to create a clear visual hierarchy 
throughout the website.

The following properties were used:

- font-family
- font-size
- font-weight
- line-height
- text-align

Larger and bolder headings are used for page titles and section headings, 
while paragraphs use a smaller font size and increased line spacing to 
improve readability.

## 3.4 Layout Structure

Flexbox and CSS Grid were used to structure and organise the website 
content.

Flexbox was used for:

- Navigation menus
- Contact page sections
- Footer sections
- Product page layout

CSS Grid was used for:

- Product cards
- About Us information cards

The desktop version of the Products page displays multiple product cards 
in columns. The About Us page also uses a two-column card layout on 
larger screens.

## 3.5 Visual Styling

Visual styling was added to make the website more attractive and easier 
to use.

The following CSS properties were used:

- color
- background-color
- border
- border-radius
- box-shadow
- padding
- margin

The About Us page was redesigned using rounded information cards. Each 
section is placed inside its own box to make the content easier to 
understand and visually separate the different topics.

Hover effects were also added to selected elements to provide visual 
feedback when users interact with them.

The ":focus" pseudo-class was also used to improve the appearance of 
focused interactive elements.

---

# 4. Responsive Design

## 4.1 Breakpoints

Media queries were used to make the website responsive across different 
screen sizes.

The website was designed for:

- Desktop screens
- Tablet screens
- Mobile screens

A breakpoint of "768px" is used to change the layout for smaller screens.

A second breakpoint of "480px" is used for very small mobile screens.

On smaller screens, the navigation changes from a horizontal layout to a 
vertical layout.

The product grid also changes according to the screen size. The desktop 
layout displays three products per row, the tablet layout displays two 
products per row, and the mobile layout displays one product per row.

## 4.2 Relative Units

Relative units such as "% " were used to improve the 
responsiveness of the website.

Percentages are used for the widths of larger page sections so that they 
can adjust according to the available screen size.

Fixed units such as "px" are still used where precise dimensions are 
needed, such as borders and some image dimensions.

## 4.3 Responsive Images

Images were added using the HTML "<img>" element with appropriate 
alternative text using the "alt" attribute.

Image sizes are controlled to maintain a consistent appearance within 
the website layout.

## 4.4 Testing and Iteration

The website was tested by gradually reducing the browser window width to 
check how the layout responds to different screen sizes.

The responsive design was checked for:

- Navigation layout
- Product grid layout
- About Us cards
- Contact page layout
- Overall readability
- Content spacing


# 5. Improvements Based on Part 1 Feedback

Several improvements were made based on the feedback received for Part 1.

## 5.1 Content Improvements

The website content was expanded to provide more information about the 
business.

The About Us page was improved by adding:

- About Our Business
- Our Mission
- Our Vision
- What We Offer
- Our Commitment

Additional product information and descriptions were also added to make 
the Products page more informative.

## 5.2 Navigation Improvements

The navigation menu was reviewed and improved so that users can clearly 
move between the five main pages:

- Home
- About Us
- Products
- Enquiry
- Contact Us

The navigation was also made responsive so that the menu changes to a 
vertical layout on smaller screens.

## 5.3 HTML Structure Improvements

The HTML structure was improved by using semantic HTML5 elements.

The following elements were used where appropriate:

- <header>
- <nav>
- <main>
- <section>
- <article>
- <aside>
- <footer>

These elements provide a clearer structure for the website and make it 
easier to understand how the content is organised.

## 5.4 Comments Improvements

The comments in the HTML and CSS code were improved based on the Part 1 
feedback.

Instead of using short or vague comments, comments were added to explain 
the purpose of important sections of the code.


## 5.5 Git Commit Improvements

Git commit messages were made more descriptive so that each commit 
explains the changes made to the project.

Examples of descriptive commit messages include:

- Improve semantic HTML structure
- Improve About Us page content
- Add responsive product grid
- Improve navigation layout
- Improve CSS comments
- Add responsive mobile layout

---

# 6. Changelog

## Part 2

### Added

- Added more detailed content to the About Us page.
- Added the What We Offer section.
- Added the Our Commitment section.
- Added information cards to the About Us page.
- Added responsive styling for desktop, tablet and mobile screens.
- Added a mobile breakpoint for smaller devices.
- Added hover effects to interactive elements.
- Added focus styling for interactive elements.
- Added additional CSS comments explaining important sections.

### Updated

- Updated the HTML structure using semantic HTML5 elements.
- Updated the navigation layout.
- Updated the Products page layout using CSS Grid.
- Updated the About Us page layout using CSS Grid.
- Updated the Contact page layout using Flexbox.
- Updated the product cards.
- Updated the styling and spacing across the website.
- Updated content based on feedback received from Part 1.
- Updated Git commit messages to provide clearer descriptions of changes.

### Fixed

- Fixed incorrect HTML structure and closing tags.
- Fixed navigation and page linking issues.
- Fixed responsive product layout.
- Fixed the product grid so that it changes from three columns to two 
  columns and then one column on smaller screens.
- Fixed CSS selector issues affecting responsive layouts.

---

# 7. Technologies Used

The Leumy website was created using the following technologies:

- HTML5
- CSS
- Visual Studio Code
- Git
- GitHub

CSS techniques used include:

- Flexbox
- CSS Grid
- Media Queries
- Pseudo-classes
- Responsive layouts
- Relative units

---

8. References

MDN Web Docs. (n.d.). HTML: HyperText Markup Language.
Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 10 September 2026).

MDN Web Docs. (n.d.). CSS: Cascading Style Sheets.
Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 10 September 2026).

MDN Web Docs. (n.d.). CSS Grid Layout.
Available at: https://developer.mozilla.org/en-US/ (Accessed: 10 September 2026).

MDN Web Docs. (n.d.). CSS Flexible Box Layout.
Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout (Accessed: 12 September 2026).

W3Schools. (n.d.). HTML Tutorial.
Available at: https://www.w3schools.com/html/ (Accessed: 12 September 2026).

W3Schools. (n.d.). CSS Tutorial.
Available at: https://www.w3schools.com/Css/ (Accessed: 14 September 2026).