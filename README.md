# easyplanner

A group work planner developed using Angular, Express.js and MySQL.


## Getting Started
To work on this project you will first need to make sure all the prerequisites are installed on your machine. After that you follow the instructions on installation and running the application. 

## Prerequisites
You will need: 
- [node.js](https://nodejs.org/en/) with [npm](https://www.npmjs.com/get-npm) and [Angular CLI](https://cli.angular.io/) installed on your computer
- A local server environment to run the database like [MAMP](https://www.mamp.info/en/)


### Installation
To install all the packages needed to run this app open up two terminal windows and follow these steps. 
In the first terminal locate the folder called easy-planner, this is the front end of the application.
When you have opened the folder run the following command: 
```SH
$ npm install
```

In the second terminal locate the folder called server and run the same command: 
```SH
$ npm install
```

After doing that you will need to get your database up and running. So start you local server environment and import the MySQL script provided with the project named easyplanner_database.sql. Ensure that your database is listening on localhost port 3306 and move on to the next step. 


### Run Application and start development Server
To run the application you will need two terminal windows, one for the front end and one for the back end. 
Lets make sure the server is running first. In the first terminal locate the folder called server and run the following command: 
```SH
$ npm start
```

To run the front end of the application use the second terminal window and locate the easy-planner folder and run the following command:
```SH
$ ng serve 
```

Now you can open up your browser and paste in the following url http://localhost:4200/login and the application will run. You can alternatively run the command below to open up the internet browser automatically when you run the front end
```SH
$ ng serve --open
```


