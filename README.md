# Line Flex Designer

Line Flex Designer is a project aimed at providing a flexible and modern web-based design environment. It pairs a Node.js backend with an Angular frontend so you can create, manage and preview designs easily.

## Stack Overview

- **Backend:** Node.js (we recommend using [Express](https://expressjs.com/) for routing and middleware)
- **Frontend:** [Angular v20](https://angular.io/)
- **Database:** [MariaDB](https://mariadb.org/)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) 18 or later
- [Angular CLI](https://angular.io/cli) matching version 20
- [MariaDB](https://mariadb.org/) server

### Install Dependencies

From the project root, install the backend and frontend packages. If these live in separate folders, adjust the paths accordingly.

```bash
npm install          # install server dependencies
cd client && npm install  # install Angular client dependencies
cd ..
```

### Running the Server

To start the backend (assuming it is an Express application):

```bash
npm start
```

### Running the Client

From the `client` directory run:

```bash
ng serve
```

Then open your browser to the URL shown in the Angular CLI output, usually `http://localhost:4200/`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
