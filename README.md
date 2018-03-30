### 06 Bookstore (eCommerce)

 001Kraken Framework
    MongoDB with Mongoose
    Dust Templates
    Custom Templating
    PayPal Integration


002 Kraken Setup

krakenjs.com

    # npm install -g yo generator-kraken bower grunt-cli
    $ yo kraken


    ? Name: TekBooks
    ? Description: Simple shopping cart
    ? Author: Brad Traversy
    ? Template library? Dust (via Makara 2)

do not chose i18n support for this project!

    ? Include i18n support? Yes
    ? Front end package manager ? Bower
    ? CSS preprocessor library? LESS
    ? JavaScript library? RequireJS

    $ cd TekBooks/

    $ npm install --save mongodb
    $ npm install --save mongoose
    $ npm install --save connect-flash
    $ npm install --save express-messages

    $ npm start

    http://localhost:8000/


Foundation

http://foundation.zurb.com/

Download Complete


003 Frontend Routes Templates Part A

    $ npm start

004 Frontend Routes Templates Part B

005 Frontend Routes Templates Part C

    $ npm start

006 Database Model

    $ mongo
    > use takbooks
    > db.createCollection('books');
    > db.createCollection('categories');
    > db.books.insert({title:"Professional Node.js", description:"Node.js is a powerful and popular new Framework for writing scalable network programs using JavaScript.", category:"NodeJS", author:"Pedro Teixeira", publisher: "Wiley", price:"21.56", cover:"node1.jpg"});
    > db.books.insert({title:"Node.js Blueprints", description:"A straightforward, practical guide containing ste-by-tep tutorials that will push your Node.js programming skills to the next level. If you are a web developer", category:"NodeJS", author:"Krasimir Tsonev", publisher: "Packt Publishing", price:"54.79", cover:"node2.jpg"});


007 Display Data From MongoDB Part A

008 Display Data From MongoDB Part B

    $ mongo
    > use tekbooks
    > db.categories.insert({name:"NodeJS"});

009 Admin CRUD Part A

Now we could add new books  
http://localhost:8000/manage/books/add


010 Admin CRUD Part B

011 Shopping Cart Part A

    $ npm start

012 Shopping Cart Part B



<br/>


