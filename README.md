# react-softuni-project
My project jokingly named "Dqvol 4", used as course finals project.
Now is test ground for trying new stuff that I see on internet.
Traditional SPA site.



# --dependencies info--

## front-end:

  1. React -> started with create-react-app

  2. Redux with Thunk & Persist -> state management

  3. SASS & Yup -> utils

  4. Jest & Enzyme -> testing

## back-end:

  1. Node.js with Express -> server

  2. MongoDB with Mongoose -> database and ORM



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

    npm run test



# --info--

  Authentication with JWT and refresh tokens on time interval with blacklisting tokens

  Client Route Authentication for paths: /logout, /profile, all /game and all /social 

  Unit Testing the correct rendering of components

  /server/utils/seed.js contains the Game Items

  /server/app-config.js contains server options
