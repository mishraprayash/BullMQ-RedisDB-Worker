
# BullMQ with RedisDB for Scalable Design 

This simple project is focused on creating a scalable server design by differentiating a critical and non critical task in our server and using the BullMQ system for queueing the non critical task in another server and processing it seperately. Behind the scene, this is using a connection of a RedisDB where our job logs and information are stored.

In this implementation, there are two types of system.

- **Producer**
- **Consumer or Worker**


**Producer** 

- A producer is a system which produces the job. It means that it is a system which determines the non critical task and add it to the queue. Basically, it is used to send the task to the consumer.

**Consumer or Worker**

- This is a system which processes the incoming tasks sent by the producer according to the queue system.


When a producer send a certain task or data, then we need a place to store it. So BullMQ uses the RedisDB for storing the data that has been sent from the producer to the consumer and also the logs, events and other information regarding the state of the process.


*For more information about how BullMQ works refer to this documentation:*
 
[BullMQ documentation](https://docs.bullmq.io/)

*Also if you want to create your RedisDB Cloud for free then you can visit this link:*

[Create RedisDB](https://aiven.io/)
