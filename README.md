# Assignment:  🌟

Next Generation Bank (Nex Bank) is a sleek, modern web application designed to give users a clear and intuitive view of their financial transactions. Built with **scalability**, **accessibility**, and **performance** in mind, it’s a production-ready app that’s easy to maintain, test, and extend. In this assignment, I focused primarily on building strong fundamentals for scaling up the project, with a clean and scalable feature store, as well as modular and reusable components following Redux principles.

👉 **Try it live!** Visit [nex-bank.pages.dev](https://nex-bank.pages.dev/)  

👉 **Jump to a transaction**: Link directly to details, like [this example](https://nex-bank.pages.dev/timeline/detail/txn_1_2025-11-04).

![image](https://github.com/user-attachments/assets/4cd53388-c4b1-4aa9-8277-2cd6f113c1b0)

![image](https://github.com/user-attachments/assets/70179d6a-9d93-4b1a-8058-09ce8a126c5d)

### 📂 Folder Structure
<img src="https://github.com/user-attachments/assets/dfc871c9-cfbb-4acd-b5e2-31c215d2c762" alt="Sorted Results" width="750">  

### 🚀 Core Features
Nex Bank is packed with features to ensure a smooth and delightful user experience while keeping the codebase clean and developer-friendly:

- **Scalable & Maintainable**: Modular architecture ensures a clean separation of concerns, promoting reusability, clarity, and ease of scaling.
- **Smart State Management**: Powered by **Signal Store** with a Redux-inspired approach for predictable, reactive data updates.
- **Reusable Components**: Lightweight, modular components simplify maintenance, testing, and reuse across features.
- **Filter & Sort Magic**: Effortlessly sort and filter transactions using reactive computed properties.
- **Dark Mode**: Toggle dark mode for a comfortable experience in any lighting condition.
- **Infinite Scrolling**: Seamlessly browse large transaction sets with smooth infinite scrolling.
- **Solid Error Handling**: Refresh and retry options ensure smooth recovery from errors.
- **Accessibility First**: Meets WCAG guidelines with keyboard navigation and screen reader support for inclusive access.
- **Responsive Design**: Adapts beautifully to phones, tablets, desktops, and beyond.
- **Performance Boost**: Smart caching and efficient data fetching minimize API calls.
- **Clean Data Models**: Type-safe interfaces keep code organized and maintainable.
- **Testing Ready**: Structured for straightforward unit and end-to-end testing.

  
## Tech Stack 🛠️

- **Frontend Framework**: Angular
- **State Management**: Signal Store
- **Styling**: CSS, SCSS, Bootstrap
- **Testing**: Jest, Cypress

### Lighthouse Performance Snapshot

Nex Bank scores high on performance, accessibility, and SEO, but there’s always room to grow!  
![Lighthouse Results](https://github.com/user-attachments/assets/13a83d0c-9f96-4fec-ad53-414e3985cd43)

**Areas to Polish**:
- **Unused CSS**: Bootstrap includes some extra styles. We could slim it down using PurgeCSS or stick to specific SCSS modules.
- **Accessibility Tweaks**: Custom Angular elements in lists (e.g., non-`<li>` tags) can confuse screen readers. Switching to web components or stricter list structures could help.

## Sorting in Action 📅

Sort transactions by date, amount, or more with a single click!  
<img src="https://github.com/user-attachments/assets/f72fca89-2c59-428a-872b-8cdd1e96605f" alt="Sorted Results" width="500">  

## Testing 🧪

Nex Bank’s architecture is test-friendly, with modular components and clear separation of concerns. While I haven’t added many comprehensive unit tests yet, the setup makes it easy to write tests for components, services, or end-to-end user flows using Jest or Cypress with the use of dedicated mock files. Here is the screenshot for one component based e2e testing using Cypress.

![image](https://github.com/user-attachments/assets/acb4e44f-0cc2-4397-acbb-e584e63291c1)


## What’s Next? 🚀

We’re excited to keep improving Nex Bank! Here are some ideas for the future:

- **More Tests**: Add comprehensive unit and E2E tests for full confidence in the codebase.
- **Performance Wins**: Explore lazy loading for assets or advanced caching to make things even faster.
- **Accessibility Boost**: Conduct deeper audits to ensure top-tier WCAG compliance.
- **New Features**: Add more filtering options, export tools, or personalized dashboards.

## Get Started 🏁

Ready to dive in? Follow these steps to run Nex Bank locally:

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

4. Run Cypress
  
```
npx cypress open
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
