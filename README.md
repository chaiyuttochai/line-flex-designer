# Line Flex Designer

Line Flex Designer is a web-based project for creating and previewing flexible design layouts. It couples a Node.js backend with an Angular frontend so you can manage designs from any modern browser.

## Stack Overview

- **Backend:** Node.js (with [Express](https://expressjs.com/) suggested for routing and middleware)
- **Frontend:** [Angular v20](https://angular.io/)
- **Database:** [MariaDB](https://mariadb.org/)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) 18 or later
- [Angular CLI](https://angular.io/cli) v20
- [MariaDB](https://mariadb.org/) server

### Install Dependencies

From the project root, install the server and client dependencies. If the Angular client resides in a `client` folder (adjust if different):

```bash
npm install               # install server dependencies
cd client && npm install  # install Angular client dependencies
cd ..
```

### Running the Server

Start the backend (assuming an Express application):

```bash
npm start
```

### Running the Client

From the `client` directory run:

```bash
ng serve
```

Then open your browser to the URL shown in the CLI output, usually `http://localhost:4200/`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
