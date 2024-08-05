# Popular Articles App

## Description

This application displays the most popular articles based on selected timeframes: today, this week, or this month. Users can view article details, including the title, description, author, source, and publication date. Additionally, users can open the full article in a new tab.

**Home Screen:**
![Alt text](public/assets/readme/Home%20screen.png)

**Article Detail Screen:**
![Alt text](public/assets/readme/Article%20Detail.png)

## Tech Stack

The application is built with the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A library that provides simple and standardized ways to write Redux logic.
- **Redux Saga**: A middleware library for managing side effects in Redux applications.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **React Testing Library**: A library for testing React components in a user-centric way.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **Cypress**: For end-to-end testing to capture errors and validate the entire user flow.

## Getting Started

Follow these steps to get started with the project:

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

**Clone the repository:**

```bash
git clone https://github.com/yourusername/popular-articles.git
cd popular-articles
```

**Install dependencies:**

```bash
npm install
```

### Running The App

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running The Tests

```bash
npm test
```

Launches the test runner in the interactive watch mode.\

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Tech Approach

- **State Management**: Redux Toolkit is used for managing and storing articles.
- **API Fetching**: Redux-Saga is utilized to handle asynchronous data fetching and side effects.
- **Component Design**: Components are built to be reusable and modular, enhancing code maintainability.
- **Testing**: Comprehensive testing is done using Jest for unit tests, RTL for component tests, and Cypress for end-to-end tests.
- **Styling**: Tailwind CSS is employed for quick, responsive designs.
- **Optimization**: The codebase is optimized for performance with clean and maintainable code.
- **TypeScript**: TypeScript is used throughout the application for better developer experience and to reduce runtime errors.
