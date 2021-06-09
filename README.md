# react-softuni-project
my project jokingly named "Dqvol 4" 


# --dependencies info--

## front-end:

  1. React -> build with create-react-app

  2. Redux with Thunk and Persist -> state management

  3. SASS and Yup -> utils

  4. Jest & Enzyme -> testing

## back-end:

  1. Node.js with Express -> server

  2. MongoDB and Mongoose -> database and ORM


# --install--

  1. Node.js above version 12

  2. MongoDB

  3. windows-build-tools needed for bcrypt


# --start app--

  1. Clone project source code
  
    git@github.com:Lyubosumaz/react-softuni-project.git

  2. Start MongoDB service

    service mongod status

    sudo systemctl start mongod
  
  3. Both directories /server and /client should contain node_modules insure it with

    npm install

  4. Open terminal tabs for both directories /server and /client to run their service

    npm start

  5. Browse http://localhost:3000


# --unit tests--

  In terminal on directory /client type command

    npm install then npm test


# --info--

JWT with Authentication refresh tokens and Blacklist tokens,

Route Authentication for path: /logout, /profile, all /game and all /social,

Tests are correctly rendering the Components,

Server routing is using middleware for authorizing the user,

/server/utils/seed.js contains the Game Items,

/server/app-config.js contains server options
