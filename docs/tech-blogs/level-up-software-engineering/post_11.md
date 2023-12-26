---
title: The complete roadmap for backend engineering
---

# The complete roadmap for backend engineering
I often get asked questions like:
- What should I learn next to level up in my career?
- What backend skills am I missing that I need to be a senior engineer?
- How do I break into my first tech role?

## 1. Basic of the internet
You should learn some of the basics of the internet:
* How does the internet work?
* What is HTTP?
* Browsers and how they work?
* DNS and how it works?
* What is a Domain Name?
* What is hosting?

## 2. Pick a backend language
- Next step is to choose a backend programming language to learn. A programming language will be used to develop and maintain the business logic and core features of an application. Top four languages would be Javascript, Java, Python, and PHP
- Once you learn the language, then you can pick up a framework to help you develop backend applications quicker and with good patterns or structure in that language:
    * Javascript - Node.js, Express.js, etc
    * Java - Spring, Struts, Google Web Toolkit
    * Python - Django or Flask
    * Php - Laravel

## 3. Everything version control
- Learning how to version control your code is a life-saver
- Git is a version control system that developers use all over the world. It helps you track different versions of your code and collaborate with other developers

## 4. OS and General knowledge
- In order to understand how computers and servers work, it will be helpful for you to study in general how operating systems work
- Some things you'll want to research include: 
    * Terminal commands
    * POSIX Bascis
    * Memory Management
    * Threads and Concurrency
    * Process management
    * Basic networking concepts
    * I/O management
    * Interprocess communication

## 5. Relational databases
- Databases are where we store most of our data for web apps and websites
- A relational database is a type of database that stores and provides access to data points that are <b>related to one another</b>
- Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables
- Here are a few popular databases you may use and will want to learn: PostgreSQL, MySQL, MS SQL, Oracle, MariaDB

## 6. NoSQL Databases
- NoSQL is an approach to database management that can accommodate a wide variety of data models, including key-value, document, columnar, and graph formats
- A NoSQL database generally means that it is non-relational, distributed, flexible and scalable.
- Here are several types of NoSQL databases you may encounter: Document DBs (MongoDB), Realtime (Firebase), Key-value (Redis or DynamoDB), Time Series (InfluxDB), Column DBs (Cassandra), Graph DBs (Neo4j)

## 7. Deep-dive into Databases
- Once you've learned the basics of querying, inserting, and interacting with data in a database, you are ready for the next level of understanding:
    * ORMs: simpler way to interact with the db and structure your queries
    * ACID: ensures that grouped database operations leave the database in a valid state even in the event of unexpected errors
    * Transactions: a sequence of multiple operations performed on a database, and all served as a single logical unit of work
    * N + 1 Problem: the more items you return, the slower your query runs linearly
    * Normalization: organizing data to elimate redundancy and inconsistencies
    * Profiling Performance: optimizing queries, reducing cpu usage, reducing WALWriteLock, etc

## 8. Scaling Databases
- The final thing you want to learn about databases is how to scale them when the traffic on your system grows
- There are a variety of different principles and techniques you can use including:
    * Indexes: faster data lookup
    * Sharding Strategies: splitting out very large tables of data for easier access
    * CAP Theorem: a distributed system can only provide two of three properties simultaneously: consistency, availability, and partition tolerance
    * Data replication: read-replicas, data lakes, data warehouse
    * Horizontal and Vertical Scaling: more instances or bigger instances

## 9. Learn about APIs and HTTP requests
- HTTP methods are the foundations of APIs, They help web applications make calls to each other to update, read, edit, and delete data
- The 5 API most HTTP methods include: GET, POST, PUT, PATCH, DELETE
- APIs are a core part of backend web development. They are specific methods that programs can use to interact with your app
- Here are some API design specifications and standards you should learn: REST, Open API Specs, JSON APIs, GraphQL, gRPC
- There are many useful HTTP API libraries that you can use: axios - Node.js, HttpClient - Java, HttpCleint - Apache, Guzzle - PHP, Requests - Python

## 10. Authentication and Authorization
- Authentication is used to verify the identity of a user. It proves that the clients trying to access a remote server are really who they say they are
- Authorization happens after successful authentication. It is the approval that a certain client has the right to make a request.
- Simply put, authorization is when an entity verifies that you have the right to access data or information on a given server
- Here are some of the most common authorization types you should learn: Basic Auth, OAuth, Token Auth, JWT, SAML, and Cookie Based

## 11. Caching
- Web caching is the activity of storing data for resuse, such as a copy of a web page serverd by a web server
- It is cached or stored the first time a user visits the page and the next time a user requests the same page, a cache will serve the copy, which helps keep the origin server from getting overloaded.
- Here are some types of caching that can be implemented throughout the web stack: 
    * Site cache – serves content quickly to return website visitors
    * Application/Output caching – server level HTML caching
    * Distributed Data caching – redis, memcached, GemFire, Ehcache
    * File caching – CDN for static files, images, multimedia

## 12. Web security knowledge
- It’s important to secure your data from corrupt actors who may try to maliciously access or use your data / app. This is where web security knowledge comes in.
- Here are two of the most common web security concepts you should learn: Hashing and API Security.

    * Hashing – used to hide away passwords and other data that needs to be secured to only the owner of the data

        * Pro tip: Don’t use MD5

        * SHA family

        * Scrypt / Bcrypt

    * API Security – important to keep your APIs secure from bad actors: HTTPS, CORS, CSP, SSL/TLS, OWASP Risks, Server security

## 13. Automated testing
- Automated testing helps ensure that users can actually use an app in the way you'd expect.
- It's important to test both the happy path, as well as the path for if bad data is entered or unexpected actions are required
- Here are some of the most common types of testing: unit tests, integration tests, functional tests, end-to-end tests, load tests, smoke tests

## 14. CI/CD + Feature flags - The only workflow that works
- CI/CD stands for continuous integration and deployment. It is a workflow that development teams use to frequently deliver code changes
- Feature flags allow you to toggle parts of yor code on and off from being accessible without code changes
- Common tools for CI/CD and feature flags: Github actions, Gitlab pipelines, Jenkins, TeamCity, Circle Ci, Bamboo
- Common libraries for feature flags: Launch Darkly, Split, Taplytics

## 15. Design and Development Patterns
- Software design patterns help developers to solve common recurring problems with code. They are principles and patterns that help you build software in a way that is maintainable, extensible, performant, readable, and scaleable.
- Here are some common ones you should learn: SOLID, GOD Design Pattern, Domain Driven Design, Test Driven Development, Event Sourcing, CQRS

## 16. Architecture Patterns for Apps
- Architectural patterns make it easier to solve common issues and problems by providing repeatable designs that address common situations.
- We are all building similar things at the end of the day, so why not standardize some of our patterns and learn from each other?
    * Monolith - tried and true, old faithful
    * Microservices - lots of lovers and lots of haters
    * SOA - an older approach mostly used before microservices
    * Serverless - new and hip, all the cool cats are using this
    * Service Mesh - service-to-service communication between miroservices
    * Twelve Factor Apps – 12 principles for building apps that are portable, scalable, and reliable

## 17., Messages, Queues, and Brokers
- Message queues are a mechanism for sending and receiving messages asynchronously - usually between microservices. They provide a way to decouple the sending and receiving applications, so each can operate independently.
- Message brokers, on the other hand, act as an intermediary between the sender and receiver.
- Message brokers validate, store, route, and deliver messages to the appropriate destinations. They serve as intermediaries between other applications, allowing senders to issue messages without knowing where the receivers are.
- Some popular examples are: Memphis, Kafka, RabbitMQ, etc.

## 18. Containerization and Virtualization
- If you want an operating system where you can install different libraries, languages, databases, etc., OS containers are the better choice. If you want to package up and distribute your application as components to the cloud, application containers are your best option.

## 19. Websockects and Server Sent Events
- WebSockets are a real-time, bidirectional, event-driven communication protocol that provides persistent connections between clients and servers.
- One of the main differences is that an SSE Connection is one-way (server → client), vs. Websockets can communicate both ways.
- Both Websockets and SSE are often used for: gaming apps, chat apps, trading apps, multi-edit documents

## 20. Web Servers
- A web server is a computer system that delivers web content to end users over the internet via a web browser.
- Web servers respond to the client request in either of the following two ways:
    * Sending the file to the client associated with the requested URL.
    * Generating a response by invoking a script and communicating with database
- You should also know about web server security practices: a reverse proxy, access restriction, security updates and patches, networking monitoring, firewall or SSL

## 21. Building for Scale
- When people start using your app and sharing it with their friend, your database is starting to get overwhelmed, your API servers are getting hammered resulting in timeouts, and users are frustrated. What can you do to scale your system?
    * Horizontal scaling
    * Vertical scaling
    * Sharding
    * Rate-limiting
    * Throttling
    * Loadshifting
    * Circuit breaker
    * Horizontal Pod Autoscaling

## 22. Observaibility - Metrics, Monitoring, and Alerting
- Metrics, monitoring, and alerting are all interrelated concepts that together form the basis of a monitoring system.
- They give you crucial visibility into the health of your systems, help you understand trends in usage or behavior, and to understand the impact of changes you make.
- If the metrics fall outside of what you’d expect, monitoring systems can notify an engineer to dive in and take a look, and then assist that engineer by surfacing information while they identify possible causes of the increased errors.

---
You can read the full article [here](https://levelupsoftwareengineering.substack.com/p/backend-engineering-roadmap?utm_source=profile&utm_medium=reader2)

