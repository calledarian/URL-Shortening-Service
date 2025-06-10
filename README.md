# URL Shortening Service
https://roadmap.sh/projects/url-shortening-service

A simple URL shortener built with NestJS and PostgreSQL.

---

## Features

- Create short, unique codes for URLs  
- Track access count for each short URL  
- Full CRUD operations on shortened URLs via REST API  
- Uses PostgreSQL for data persistence  

---

## Prerequisites

- Node.js (v16+)  
- PostgreSQL (or Docker to run it)  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/calledarian/URL-Shortening-Service.git
cd URL-Shortening-Service

### 2. Configure environment variables
Create a .env file in the root directory:

POSTGRES_USER=nest
POSTGRES_PASSWORD=nest
POSTGRES_DB=shorten
DB_PORT=5432
CONTAINER_NAME=pg-shorten

### 3. Start PostgreSQL database
You can use Docker to run PostgreSQL easily:

docker run --name pg-shorten -e POSTGRES_USER=nest -e POSTGRES_PASSWORD=nest -e POSTGRES_DB=shorten -p 5432:5432 -d postgres

### 4. Install dependencies and run the application
npm install
npm run start
The API will be accessible at http://localhost:3000.


API Endpoints
Method	Endpoint	Description
POST	/shorten	Create a new shortened URL
GET	/shorten	Retrieve all shortened URLs
GET	/shorten/:shortCode	Get original URL by short code
PUT	/shorten/:shortCode	Update a shortened URL
DELETE	/shorten/:shortCode	Delete a shortened URL
