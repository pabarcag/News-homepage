# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://github.com/pabarcag/News-homepage)
- Live Site URL: [Add live site URL here](https://pabarcag.github.io/News-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this exercise I learned how to make a side menu that when opened keeps the focus on the menu, obscuring the background content.
To do this, use a "trick" to put a sibling div of the menu that occupies the space that the menu does not cover and give it opacity.
        <div class="test-opacity-trick">
            <div class="opacity"></div>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">New</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Popular</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Trending</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Categories</a></li>
                    <img src="./assets/images/icon-menu-close.svg" alt="close" class="nav__close">
                </ul>
            </nav>
        </div>


## Author

- Frontend Mentor - [@patosinsuerte](https://www.frontendmentor.io/profile/Patosinsuerte)
