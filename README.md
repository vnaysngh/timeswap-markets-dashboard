# Timeswap Markets Dashboard

A React-based dashboard for visualizing and filtering DeFi pool market data. Built with Vite for fast development and modern tooling.

## Features

- View a list of DeFi pools with key metrics: Token Pair, Total Liquidity, Total Borrowed, Lending APY, and Borrowing APY
- Filter pools by token pair using the search box
- Responsive and clean UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd timeswap-markets-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server with hot reloading:

```bash
npm run dev
```

The app will be available at the URL shown in your terminal (usually http://localhost:5173).

### Building for Production

To build the app for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/components/` – React components
- `src/styles/` – CSS files for components
- `src/poolsData.js` – Sample data for pools
- `src/App.jsx` – Main app component
- `src/index.css`, `src/App.css` – Global styles
