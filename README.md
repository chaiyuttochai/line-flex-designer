# Line Flex Designer

Line Flex Designer is a web-based project for creating and previewing flexible design layouts. It couples a Node.js backend with a web frontend so you can manage designs from any modern browser. The initial frontend is a simple static page that lets you craft broadcast messages, but it can be expanded with Angular in the future.

## Stack Overview

- **Backend:** Node.js (with [Express](https://expressjs.com/) suggested for routing and middleware)
- **Frontend:** Static HTML/JS (Angular can be added later)
- **Database:** [MariaDB](https://mariadb.org/)

## Code Structure

```
line-flex-designer/
├── server/   # Node.js + Express backend
├── client/   # Static frontend files (initial broadcast page)
└── README.md
```

The **server** directory contains the Node.js backend. The **client** directory holds the static broadcast page (and can later host an Angular app). Project docs like this README live at the root.

## Getting Started

### Pre-installation
Verify that your local tools can run before installing dependencies:

```bash
node -v        # check Node.js
mysql -u <user> -p -e "SELECT VERSION();"  # verify MariaDB access
```

Create any required environment files (e.g., `.env`) with your database credentials **before** running `npm install`.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) 18 or later
- [MariaDB](https://mariadb.org/) server

### Install Dependencies

From the project root, install the server and client dependencies. If the Angular client resides in a `client` folder (adjust if different):

```bash
cd server && npm install  # install server dependencies
```

### Running the Server

Start the backend (assuming an Express application):

```bash
npm start
```

### Running the Client

The server also serves the static client files. After starting the server, open your browser to `http://localhost:3000/` to access the broadcast page.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
