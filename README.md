# RSS Backend

[![Node.js CI](https://github.com/MityaDementiy/rss-backend/actions/workflows/node.js.yml/badge.svg)](https://github.com/MityaDementiy/rss-backend/actions/workflows/node.js.yml)

This project is a backend service for RSS feeds.

## Installation

To install the project, you can use following command:

```bash
make install
```


This will install all necessary npm packages.

## Running the Project

To start the project, use the following command:

```bash
make start
```

This will start the server.

## Docker

You can also run the project in a Docker container. First, build the Docker image:

```bash
make docker-build
```

Then, run the Docker container:

```bash
make docker-run
```

This will start the server in a Docker container, accessible at `localhost:8080`.

Have a great day!

