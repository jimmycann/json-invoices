# A Code Challenge for parsing JSON

A lightweight app for parsing and invoice in JSON format and updating a database.

1. Drag and drop a valid JSON invoice into the box.
2. File is uploaded to the server, parsed recorded to the database and emitted on the socket
3. All users receive real-time update

## Tools
- Angular (ES6)
- Express
- Socket.io
- Webpack
- Gulp
- SASS

## Dependencies

1. Install the latest [Node.js and NPM](https://nodejs.org). This config is built with Node V6.2.0.
2. Webpack `npm install webpack -g` and ensure it is available on your PATH
2. Gulp `npm install gulp -g` and ensure it is available on your PATH

## Setup

For development tools and building:

2. Run `yarn` or `npm install` within the project root directory in Terminal.
3. Change directory `cd ./public` and run `yarn` or `npm install` again for the client side dependencies.
4. Back to project root `cd ../`
5. Run `npm start:dev` to start the server.
6. Run `npm run build:watch` to run webpack and watch for changes.
6. Run `npm test` to run Karma tests and watch for changes.
7. Run `gulp build:watch` to process our stylesheets. Webpack also sees there changes and modifies the bundle.

## Structure

- `/public/components` contains a sub-directory for each component, holding source JS and views.
- `/public/style` contains a sub-directory for each style component, folder scss for the source styling and css for the compiled version.
- `/public/dist` is the directory for webpack compiled JS and CSS
- `/routes` API and models definition
- `/.config/.env` stores global variables for the server
- `/.config/.db` Database connection params

## Scripts

| Command               | Purpose                                              |
|:----------------------|:-----------------------------------------------------|
| `npm run clean`       | Delete `/public/dist/*`.                             |
| `npm run build`       | Compile JS and CSS to `/public/dist/bundle`.         |
| `npm run build:watch` | Build, rebuilding on source file changes.            |
| `npm run start:dev`   | Start the server, restarting on source file changes. |
| `npm run start:prod`  | Start the server using forever in production mode    |
| `npm run stop:prod`   | Stop the production server                           |
| `npm run restart:prod`| Restart the production server                           |
| `npm start`           | Start the server.                                    |
| `npm test`            | Start Karma testing watching for file changes.       |

Developed by [Jimmy Cann](mailto:mail@jimmycann.com) and licensed under MIT.
