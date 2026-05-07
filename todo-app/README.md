# DSO101 Assignment 1
## To-Do List Web Application

DSO101 – Continuous Integration and Continuous Deployment  
Student Name: Kinley Wangmo  
Student Number: 02250356  

### GitHub Repository
You can access the project source code using the link below:

https://github.com/kinley2007wangmo/KinleyWangmo_02250356_DSO101_A1.git

### Project Description
This project is a simple To-Do List web application that allows users to:
- Add tasks
- View tasks
- Delete tasks
- Manage their daily activities

### Technologies Used
Frontend:
- React
- JavaScript
- HTML
- CSS

Backend:
- Node.js
- Express

Database
- PostgreSQL

DevOps Tools
- Docker
- Docker Hub
- Render
- GitHub

### Project Structure
![Project Struicture](assets/project-structure.png)

## Environment Variables

### Backend
```env
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=password
```

### Frontend
```env
REACT_APP_API_URL=https://be-todo.onrender.com
```

---

## Docker Setup

### Backend Docker Build

```bash
docker build -t kinley2007wangmo/be-todo:02250356 .
```

### Backend Docker Push

```bash
docker push kinley2007wangmo/be-todo:02250356
```

### Frontend Docker Build

```bash
docker build -t kinley2007wangmo/fe-todo:02250356 .
```

### Frontend Docker Push

```bash
docker push kinley2007wangmo/fe-todo:02250356
```

---

## Deployment on Render

### Backend Deployment
- Created Web Service using existing Docker image
- Configured environment variables
- Exposed port 5000

### Frontend Deployment
- Created Web Service using frontend Docker image
- Configured API URL environment variable

---

## Automated Deployment

A `render.yaml` file was configured for multi-service deployment.

```yaml
services:
  - type: web
    name: be-todo
    env: docker
    dockerfilePath: ./backend/Dockerfile

  - type: web
    name: fe-todo
    env: docker
    dockerfilePath: ./frontend/Dockerfile
```

---

## Testing

The application was tested by:
- Running backend service
- Running frontend service
- Verifying frontend-backend communication
- Checking deployment status on Render

---

## Screenshots

### Docker Images
![Docker images](assets/docker-images.png)

### Docker Hub Repository
(Add screenshot here)

### Backend Deployment
![Backend Render](assets/backend-render.png)

### Frontend Deployment
![Frontend Render](assets/frontend-render.png)

### Working Application
![Workinkg App](assets/working-app.png)

---

## References

- Docker Documentation
- Render Documentation
- GitHub Documentation

# DSO101 Assignment 2
## CI/CD Pipeline

This project now includes a Jenkins CI/CD pipeline for frontend + backend.

### Jenkinsfile
- Located in project root
- Stages:
  - Checkout
  - Install Frontend
  - Build Frontend
  - Test Frontend
  - Install Backend
  - Test Backend
  - Deploy (optional)

### GitHub Link
[https://github.com/kinley2007wangmo/KinleyWangmo_02250356_DSO101_A1.git]