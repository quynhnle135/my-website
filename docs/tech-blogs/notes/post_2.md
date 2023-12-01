---
title: Common HTTP Verbs
---

# Common HTTP Verbs

* Link: https://www.linkedin.com/feed/update/urn:li:activity:7129153243707789312/

1. HTTP GET: <br/>
This retrieves a resource from the server. It is idempotent. Multiple identical requests return the same result. 
 
2. HTTP PUT: <br/>
This updates or Creates a resource. It is idempotent. Multiple identical requests will update the same resource. 
 
3. HTTP POST: <br/> 
This is used to create new resources. It is not idempotent, making two identical POST will duplicate the resource creation. 
 
4. HTTP DELETE: <br/> 
This is used to delete a resource. It is idempotent. Multiple identical requests will delete the same resource. 
 
5. HTTP PATCH: <br/> 
The PATCH method applies partial modifications to a resource. 
 
6. HTTP HEAD: <br/> 
The HEAD method asks for a response identical to a GET request but without the response body. 
 
7. HTTP CONNECT: <br/> 
The CONNECT method establishes a tunnel to the server identified by the target resource. 
 
8. HTTP OPTIONS: <br/> 
This describes the communication options for the target resource. 
 
9. HTTP TRACE: <br/> 
This performs a message loop-back test along the path to the target resource. 


