# Michele Regina Bora - Personal Portfolio Website

This is the source code for Michele Regina Bora's personal portfolio website. The website showcases Michele's skills, projects, and contact information. It is designed to serve as an online resume and portfolio. 

_Feel free to utilize this template as a starting point to create your own website._

</br> 

## Table of Contents

- [Michele Regina Bora - Personal Portfolio Website](#michele-regina-bora---personal-portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [JavaScript Code Documentation - Front-End](#javascript-code-documentation---front-end)
      - [1. Page Loading Animation](#1-page-loading-animation)
      - [2. Color Panel and Changer](#2-color-panel-and-changer)
      - [3. Navigation](#3-navigation)
      - [4. Text Rotation](#4-text-rotation)
      - [5. Navigation Links](#5-navigation-links)
      - [6. Cursor Animation](#6-cursor-animation)
      - [7. Miscellaneous](#7-miscellaneous)
    - [Usage:](#usage-1)
    - [Note:](#note)
  - [JavaScript Code Documentation - Back-End (Forms)](#javascript-code-documentation---back-end-forms)
    - [Pre-requisites](#pre-requisites)
    - [Installation](#installation-1)
    - [Configuration](#configuration)
    - [Running the Server](#running-the-server)
  - [Usage](#usage-2)
      - [Important Note for Production](#important-note-for-production)
  - [License](#license)


## Description

This repository contains the HTML, CSS, and JavaScript code for Michele Regina Bora's personal portfolio website. The website includes sections such as Home, About Me, Portfolio, Online Magazine, and Contact.

## Features

- Responsive design for various devices
- Customizable color theme
- Portfolio showcasing notable projects
- Online magazine section for publications
- Contact form for easy communication

## Technologies Used

- HTML
- CSS
- JavaScript
- GSAP (GreenSock Animation Platform) library for animations
- Particle.js for particle effects
- Node.Js ()


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Micheleregina2022/your-repository.git
   ```

2. Open the `index.html` file in a web browser.


## Usage

- Navigate through different sections using the navigation bar.
- Explore the portfolio to view projects.
- Check the online magazine section for the latest publications.
- Use the contact form to get in touch with Michele.


## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Make changes and commit them (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a pull request

</br> 

## JavaScript Code Documentation - Front-End

#### 1. Page Loading Animation
   - The code uses GSAP to animate the loader element upon window load.
   - It translates the loader element (`#loader`) upwards (`y: "-100%"`), fades it out (`opacity: 0`), and then sets its display to none (`display: "none"`).

#### 2. Color Panel and Changer
   - Clicking on an element with the class `color-panel` toggles the class `color-changer-active` on an element with the class `color-changer`.
   - Clicking on a link within an element with the class `colors` appends a new stylesheet link to the head, changing the color theme based on the link's title.

#### 3. Navigation
   - Clicking the element with the class `menubar` slides down the navigation content (`#navigation-content`) using GSAP.
   - Clicking the element with the class `navigation-close` slides up the navigation content.

#### 4. Text Rotation
   - The code rotates text elements with the class `txt-rotate`.
   - It initializes a `TxtRotate` class that animates text rotation with a typewriter effect.

#### 5. Navigation Links
   - Clicking on specific navigation links (`#about-link`, `#contact-link`, etc.) triggers animations to show or hide relevant sections.

#### 6. Cursor Animation
   - The cursor (`.cursor`) follows the mouse position with a slight delay, creating a smooth movement effect.
   - Hovering over certain elements (`a`, `.menubar`, `.navigation-close`) changes the cursor's scale and opacity.

#### 7. Miscellaneous
   - The code contains various GSAP animations to control the display and visibility of different sections on the page.

### Usage:
   - The code assumes the existence of specific HTML elements and CSS classes (e.g., `#loader`, `.color-panel`, `.color-changer`, `#navigation-content`, `.txt-rotate`, etc.). Make sure these elements and classes are present in your HTML.

### Note:
   - Ensure that GSAP and jQuery libraries are included in your project for the code to work correctly.


</br> 

## JavaScript Code Documentation - Back-End (Forms)

This section contains the back-end code for handling form submissions in a JavaScript application. The back-end is built using Node.js, Express, and Nodemailer for sending emails.

### Pre-requisites

Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Install the required Node.js packages:

    ```bash
    npm install
    ```

### Configuration

1. Create a file named `.env` in the project root.

2. Open the `.env` file and add the following configuration:

    ```env
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    ```

    Replace `your-email@gmail.com` with your Gmail email address and `your-email-password` with your Gmail application-specific password. Make sure to follow [Gmail's application-specific password guide](https://support.google.com/accounts/answer/185833?hl=en) to generate the password.

### Running the Server

1. Start the Node.js server:

    ```bash
    npm start
    ```

    The server will run on `http://localhost:3000`.

2.Your server is now ready to handle form submissions. The submit button on the form will send an email using the configured email credentials.

</br>

## Usage

#### Important Note for Production

**Please Note:** The current server configuration is suitable for local development. If you plan to deploy this website to a production environment, additional adjustments are necessary. For a production-ready setup, consult the documentation of your hosting provider and make the necessary modifications to enhance security and performance.

</br> 

## License

This project is licensed under the [MIT License](LICENSE).

</br> 

---