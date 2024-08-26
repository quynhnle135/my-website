---
title: AZ-204 Implement Azure App Service web apps
---

# AZ-204: Implement Azure App Service web apps

## Explore Azure App Service

#### What are Azure App Service? 
- Azure App Service is HTTP-based service for hosting web applications, REST APIs, and mobile backends. 
- Azure App Service has some of the following key features:
    - Built-in auto scale support
    - Container support
    - Continous integration/deployment support
    - Deployment slots
    - App Service on Linux

#### What are Azure App Service plans?
- Shared compute: <b>Free and Shared</b>, the two base tiers, runs an app on the same Azure VM as other App Service apps, including apps of other customers. These tiers allocate CPU quotas to each app that runs on the shared resouces, and <mark>the resources cannot scale out.</mark>
- Dedicated compute: The <b>Basic, Standard, Premium, Premium V2, and PremiumV3</b> tiers run apps on dedicated Azure VMs. Only apps in the same App Service plan share the same compute resouces. <mark>The higher the tier, the more VM instances are available to you for scale-out.</mark>
- Isolated: The <b>Isolated and IsolatedV2</b> tiers run dedicated Azure VMs on dedicated Azure Virtual Networks. It provides network isolation on top of compute isolation to your apps. <mark>It provides the maximum scale-out capabilities.</mark>

#### When do you need to isloate your app into a new App Service plan?
- The app is resource-intensive.
- You want to scale the app independently from the other apps in the existing plan.
- The app needs resource in a different geographical region.

#### How to deploy to App Service? 
- Automated deployment:
    - Automated deployment is a process used to push out new features and bug fixes in a fast and repetitive pattern with minimal effect on end users.
    - Azure supports automated deployment directly from several sources such as Azure DevOps Services, Github, and Bitbucket. 
- Manuual deployment: Here are some options that you can use to manually push your code to Azure: Git, CLI, Zip deploy, FTP/S
- Use deployment slots: 
    - Continuously deploy code 
    - Coninuously deploy containers

#### How Azure App Service manages authentication and authorization? 
- The authentication and authorization module runs in the same sandbox as your application code. When it's enabled, every incoming HTTP request passes through it before being handled by your application code. This module hanles several things for your app:    
    - Authenticates users and clients with the specified identity provider(s)
    - Validates, stores, and refreshes OAuth tokens issued by the configured identity provider(s)
    - Manages the authenticated session
    - Injects identity information into HTTP request headers.

#### Steps of authentication flow
- Sign user in
- Post authentication
- Establish authenticated session
- Serve authenticated content

#### Multi-tenant App Service networking features
- In Azure, the term multi-tenant app service refers to an environment where <b><i>multiple customers (tenants) share the same computing resources</i></b>, such as a server or database.
- Inbound traffic: The data coming into your Azure cloud/resource from the internet or other networks.
- Outbounds traffic: The data leaving your Azure cloud/resource to head to other networks.
- Inbound features: 
    - App-assigned address &rarr; Support IP-based SSL needs for your app, support unshared dedicated inbound address for your app.
    - Access restrictions &rarr; Restrict access to your app from a set of well-defined addresses.
    - Service endpoints
    - Private endpoints
- Outbound features:
    - Hybrid connections
    - Gateway-required virtual network integration
    - Virtual network integration

---
## Configure Web App Settings

---
## Scale apps in Azure App Service

---
## Explore Azure App Service deployment slots

---
## Knowlege Check
- Which of the following App Service plan categories provides the maximum scale-out capabilities? 
- Which of the following networking features of App Service can be used to control outbound network traffic? 
