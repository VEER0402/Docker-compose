# Docker Compose Microservices Stack

This project demonstrates a lightweight, real-world Docker Compose setup using multiple services.

## Architecture

- **Frontend**: Nginx (acts as web server and reverse proxy)
- **Backend**: Node.js HTTP API
- **Cache**: Redis

Client → Nginx → Backend → Redis

pgsql
Copy code

## Why this project?

- To understand Docker Compose orchestration
- To learn service-to-service communication using Docker DNS
- To practice reverse proxy and environment-based configuration
- To simulate a real microservices architecture in a lightweight setup

## How to run

```bash
docker-compose up
Access:

Frontend: http://<server-ip>:8080

API: http://<server-ip>:8080/api

Key Concepts Covered
Docker Compose services and dependencies

Port mapping and networking

Reverse proxy using Nginx

Environment variables for configuration

Cloud networking (EC2 + security groups)
