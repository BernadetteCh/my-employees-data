# My employees madness

![My employees madness, PA project!](/img/employeemadness.png "coded by BernadetteCh")

## About

I created this project for my personal assesement in the web module.
It is an employee registration system, where all the data is saved in a
database.
With this program you can create, delete and edit employees and assign them with
available equipments of your company. You can filter and sort both tables.  
They are connected with each other and fully dynamic.

Technologies included: MongoDB, ExpressJS, React

### Instruction

To use the programm correct, paste in you .env file your MONGO_URL to connect with your MongoDB compass and run the populate.js file with npm run populate. Then start your server with npm run dev and start the react app.

#### CodeSnippets

The asynchronous functions sends a post request with the data of the inputvalues to the server
and gets saved in the database.

![My employees madness, PA project!](/img/codesnippet1.png "create an employee")

Filtering the table for a specific position or level inside a setTimout, which executes the defined funtcion inside the conditional statement.

![My employees madness, PA project!](/img/codesnippet2.png "filter table by position or level")

Data gets saved in your MongoDB compass

![My employees madness, PA project!](/img/codesnippet3.png "MongoDB compass")
