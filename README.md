# URL Shortener (MERN Stack + HashMap(Java))

## Overview

This project is a URL shortener web service built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to input long URLs and receive shortened versions, making them easier to share and manage. The backend implements efficient URL storage and lookup using hash tables.

## Features

- Shorten long URLs to compact, easy-to-share links
- Redirect users from shortened URLs to original long URLs
- Track the number of clicks for each shortened URL
- Efficient storage and retrieval using hash table implementation
- User-friendly React frontend for URL submission and management

## Technologies Used

- MongoDB: Database for storing URL mappings
- Express.js: Backend framework
- React.js: Frontend library
- Node.js: Runtime environment
- Java: For hash table implementation (backend algorithm)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm
- MongoDB
- Java Development Kit (JDK)

## Installation

1. Fork the repository
2. Install backend dependencies
3. Install frontend dependencies

## Running the Application

1. Start the backend server
2. In a new terminal, start the frontend
3. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter a long URL in the input field on the homepage.
2. Click "Shorten" to generate a shortened URL.
3. Copy and share the shortened URL.
4. When users visit the shortened URL, they will be redirected to the original long URL.

## API Endpoints

- `POST /api/shorten`: Create a new shortened URL
- `GET /api/:shortUrl`: Redirect to the original URL


