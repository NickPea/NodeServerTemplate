# My Node API Server Template
#### based on software architecture reccommended in https://softwareontheroad.com/ideal-nodejs-project-structure/#di

  - routes and middleware via express
  - standard controllers
  - service layer
  - data access layer with optional models or repository pattern.
  - database with migrations, and seeders (currently configured for postgres drivers via knex npm package)
  - config files with env
  - pubsub implementation via eventemitter
  - nodemon


CLI Instructions: 
- 'mkdir newProject'
- 'cd newProject'
- 'git pull https://github.com/NickPea/NodeServerTemplate'
- 'npm start'
