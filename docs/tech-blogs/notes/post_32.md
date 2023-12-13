---
title: 6 skills required to be a senior software engineer
---

# 6 skills required to be a senior software engineer

## 1. Data Modeling
- As a seinor engineer, you'll be asked to come up with a data model or architecture that:
    * solve your unique problem
    * fits with your existing systems
    * can be easily extended
    * is performant

### Entity
- An entity is a real-world object or concept that can be uniquely identified and described, such as a person, place, thing, event, or concept.
- An entity is typically represented by a table in a relational database, and each instance of the entity is represented by a row in the table.

### Attribute
- An attribute is a characteristic or property of an entity, such as a name, age, address, or color. Attributes are represented by columns in the table that represents the entity.

### Relationship
- A relationship is a connection or association between two or more entities and it describes how entities interact or relate to each other
- Relationships can be one-to-one, one-to-many, or many-to-many

## 2. Events, message queues, and workers
- A lot of companies today are building / working in distributed systems that process work in real-time (APIs), but also asynchronously (queues + workers).
- One of the key pieces of an asynchronous system is message queues. Message queues are really useful when working with micro services. You can use them to:
    * Rate limit processing of events
    * Communicate between micro services
    * Shard the load of specific types of events to be processed at different rates
    * Batch process a bunch of events
- Message queues can also be used for interservice communication. If an action or event:
    * Doesn't need instant feedback
    * Spans several domains
    * Is used by multiple consumers

## 3. Autoscaling infrastructure


## 4. Cloud technologies


## 5. Caching


## 6. Concurrency / Idempotency

---

You can read the full artcile [here](https://levelupsoftwareengineering.substack.com/p/6-skills-required-to-be-a-senior?utm_source=profile&utm_medium=reader2)