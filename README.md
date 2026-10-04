# Visitor Registration System

This project is a Java Full Stack mini project based on the topic: Visitor Registration System.

## Project Structure

- `backend/` – Spring Boot project with MySQL + JPA
- `frontend/` – HTML, CSS, and JavaScript UI
- `frontend/downloads/` – place your `register.png` here

## Frontend Setup

Open the file in the browser:

- `frontend/index.html`

If you want to serve it locally:

```bash
cd frontend
python -m http.server 5500
```

Then open: `http://localhost:5500`

## Backend Setup

The backend requires Java 25 (LTS) and Maven.

1. Start MySQL and create a database named `visitor_db`.
2. In `backend`, copy `src/main/resources/application.properties.example` to
   `src/main/resources/application.properties`, then set `DB_USERNAME` and
   `DB_PASSWORD` in your environment to your MySQL credentials.
3. Run the project:

```bash
cd backend
mvn spring-boot:run
```

## Default API

- POST `http://localhost:8080/api/visitors`
- GET `http://localhost:8080/api/visitors`

## Notes

- Put your image file as `frontend/downloads/register.png`.
- The frontend will automatically try to load it.
