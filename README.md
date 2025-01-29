
---

# Learning Nginx with Node.js and Docker

Many thanks to [TechWorldwithNana](https://www.youtube.com/@TechWorldwithNana) for uploading tutorials about DevOps.  
Here is the link I learned from:  
[Full NGINX Tutorial - Demo Project with Node.js, Docker](https://www.youtube.com/watch?v=q8OleYuqntY)

---

## Table of Contents

1. [Introduction](#introduction)
2. [How Does This Learning-Nginx-Demo Work?](#how-does-this-learning-nginx-demo-work)
3. [Why Nginx?](#why-nginx)
4. [Installing Nginx](#installing-nginx)
5. [Setting Up `nginx.conf`](#setting-up-nginxconf)
6. [Docker Setup](#docker-setup)
7. [Docker Tips](#docker-tips)
8. [Problems I Encountered](#problems-i-encountered)

---

## Introduction

This project demonstrates how to set up a simple Nginx reverse proxy to route requests to a Node.js server running in Docker containers. Each container will have a unique environment variable, allowing you to identify which one is processing the request.

This setup will use Docker Compose to spin up multiple containers from the same image and assign unique environment variables. You can see the configuration in the `docker-compose.yml` file.

---

## How Does This Learning-Nginx-Demo Work?

In this demo, you'll configure Nginx to handle incoming requests and distribute them to one of the Node.js servers in a cluster.  
You’ll use Node.js and assign each server a unique environment name so you can easily track which one is handling the request.

Docker will be used to create multiple containers from the same image, and Docker Compose will manage these containers, each with its own unique environment variable. You can see the configuration in the `docker-compose.yml` file.

---

## Why Nginx?

`Nginx` is used as a reverse proxy.  
A **normal proxy** (also called a forward proxy) routes clients to a system that filters or handles security tasks *for* the clients, such as blocking certain keywords or managing access.

A **reverse proxy**, on the other hand, sits in front of a set of backend servers and protects them. It receives requests and determines which backend server should handle the request. The selection of backend servers can be based on various criteria, such as round-robin or load balancing.

---

## Installing Nginx

1. **Download Nginx**  
   Download Nginx from their [official website](https://nginx.org/en/docs/windows.html).

2. **Extract and Place Nginx**  
   Extract the files and place them in a folder on your PC.

3. **Running Nginx**  
   You can run Nginx by either:
   - Double-clicking on `nginx.exe`, or
   - Using the command `start nginx.exe` in your terminal.

4. **Checking If It's Running**  
   You can check if Nginx is running by opening the Task Manager and filtering for `nginx`.

5. **Multiple Instances of Nginx**  
   You can run `nginx.exe` multiple times to create several instances. However, only the first one will work correctly. Be careful, as running multiple instances can cause confusion. It’s best to avoid running multiple instances to prevent issues.

---

## Setting Up `nginx.conf`

The `nginx.conf` file is located in the `conf` folder inside the Nginx directory.  
This file is where you define the configuration for Nginx, such as which server belongs to which cluster and how requests are routed to the backend servers.

You can refer to the `nginx.conf` file in the repository for an example configuration.  
It includes explanations for the meaning of each configuration option.

---

## Docker Setup

You can use the Dockerfile to build your Node.js server image, then use the `docker-compose.yml` file to create multiple containers, each with a unique environment variable.

Docker Compose simplifies the management of multiple containers, allowing you to assign distinct environment variables for each container to make it easy to distinguish them.

---

### Docker Tips

- **Rebuilding the Docker Image**  
  Use the following command to rebuild the image each time you make changes:
  
  ```bash
  docker-compose up --build
  ```

  If you don’t use `--build`, Docker will reuse the existing image, which means changes to your code or configuration might not take effect.

---

## Problems I Encountered

### Running Multiple Nginx Instances Doesn’t Work

Only the first instance of Nginx will run correctly. Even if you change the configuration and try running Nginx again, it won’t use the updated configuration. This is because only the first instance remains active, and any new instances fail to replace the running one.

### Browser May Cache Redirects

I once changed my Nginx configuration and restarted everything, but the URL still redirected to the old one (I tested with Google and Amazon). Out of curiosity, I tried running the site in an incognito browser window, and it worked as expected.  
This was because my browser had cached the old redirect. Make sure to test in an incognito window or clear your browser cache when making changes to the configuration.

---
