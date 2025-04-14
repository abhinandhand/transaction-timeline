## Overview
This project is a modern, production-ready web application designed to be scalable, maintainable, and accessible. The app leverages a Redux-inspired state management approach using **Signal Store**, focuses on reusable components, and incorporates best practices for error handling, responsiveness, accessibility, and performance optimization.

The primary goal was to build an app that is easy to test, maintain, and scale while minimizing API requests and delivering a seamless user experience through features like infinite scrolling, error retry mechanisms, and clean, intuitive interfaces and support  **new features with ease**.

## Features
- **Scalable State Management**: Utilizes **Signal Store** with a Redux mindset to manage application state efficiently. Store methods and computed signals ensure predictable state updates and optimized reactivity.
- **Reusable Components**: Designed modular, lightweight components to simplify maintenance, improve testability, and promote code reuse across the app.
- **Infinite Scrolling**: Implements seamless infinite scrolling to enhance user experience when navigating large datasets.
- **Error Handling**: Robust error handling with refresh and retry mechanisms for failed API requests, ensuring a resilient user experience.
- **Accessibility**: Built with accessibility in mind, adhering to WCAG guidelines to ensure the app is usable by all, including keyboard navigation and screen reader support.
- **Responsiveness**: Fully responsive design, optimized for various devices and screen sizes.
- **Performance Optimization**: Minimizes API requests through efficient data fetching and caching strategies.
- **Clean Data Models**: Well-defined interfaces and models to ensure type safety and maintainable code.
- **Testing Readiness**: Structured for easy component and end-to-end testing, with reusable components simplifying test setup.

## Tech Stack
- **Frontend Framework**: [Angular]
- **State Management**: Signal Store
- **Styling**: [ CSS, SCSS, Boostrap]
- **Testing**: [Jest, Cypress]


## Testing
While I would like to add more comprehensive unit tests, the app's architecture is designed to facilitate testing. Reusable components and a clear separation of concerns make it straightforward to add unit tests for individual components or E2E tests for user flows in the future.

## Future Improvements
- **Unit Testing**: Add comprehensive unit tests for components and services to ensure full code coverage.
- **Performance Enhancements**: Explore additional optimizations like lazy loading for assets or advanced caching strategies.
- **Extended Accessibility**: Conduct thorough accessibility audits to further improve compliance with WCAG standards.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abhinandhand/transaction-timeline.git
   ```

2. Run backend

```
cd Backend
npm run start:mac

or 

npm run start:windows
```

3. Run Frontend


```
cd Frontend
npm i
npm run start
```


# Assignment Rabobank

Rabobank’s software is mainly used to get insights on customer transactions. Within this assignment there is some backend software created to spin up a NodeJS service which serves a transactions file. Create an Angular application where a user can see their transactions in in list (timeline).

The requirements are:
- All transactions should be shown 
- All transactions should be showed grouped based on date and ordered (newest on top)
- The information in the timeline should only show `otherParty.name` and the `amount` in EUR. (Be aware there is some USD as well, need to convert it based on the rate)
- When clicking on a transaction you should navigate to a detail page showing the more in-depth details
- It would be nice if there is some sort of styling (scss)

In addition to the code, consider other matters that you consider as part of your work.

## Thats it, happy 💻!
