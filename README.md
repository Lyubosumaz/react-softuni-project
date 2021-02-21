# react-softuni-course-project
my project "Dqvol 4"

## --need to install--

install Node.js --version 12:
sudo snap install node --channel=12/stable --classic


windows-build-tools for bcrypt,

download MongoDB from here:
https://www.mongodb.com/download-center/community


## --dependencies info--

Front-end:

React - build with create-react-app,

Redux - state management,

Yup - validations,

Jest & Enzyme - testing,


Back-end:

Express,

MongoDB,


## --check for all used dependencies in the package.json files--


## --how to start app--

open Command Prompt write: mongod,

open second Command Prompt directory /server write: npm install (for first start) then npm start,

open third Command Prompt directory /client write: npm install (for first start) then npm start


## --how to start unit tests--

open Command Prompt directory /client write: npm install then npm test


## --info--

JWT with Authentication refresh tokens and Blacklist tokens,

Route Authentication for path: /logout, /profile, all /game and all /social,

Tests are correctly rendering the Components,

Server routing is using middleware for authorizing the user,

/server/utils/seed.js contains the Game Items,

/server/app-config.js contains server options
