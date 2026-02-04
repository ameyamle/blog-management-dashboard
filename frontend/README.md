# Blog Management Dashboard

A full-stack Blog Management Dashboard built as an interview assignment.

This project demonstrates:

- CRUD operations
- Clean admin dashboard UI using TailwindCSS
- Next.js App Router structure
- Node.js + Express backend REST API
- MySQL database integration using XAMPP

---

## Features

### Blog Listing Page (`/blogs`)

- Displays all blog records in a responsive table
- Mobile-friendly card layout
- Edit and Delete actions
- Delete confirmation modal
- Search input UI (non-functional)
- Status filter dropdown UI (non-functional)
- Pagination UI (non-functional)
- Total records count

---

### Blog Form Page (`/blogs/create`, `/blogs/edit/[id]`)

The form supports:

- Title
- Slug
- Author Name
- Content
- Category
- Tags
- Published Checkbox
- Status (Draft / Published)
- Publish Date
- Reading Time

TailwindCSS form layout uses reusable `@apply` utility classes in `globals.css`.

---

## Tech Stack

Frontend: Next.js (App Router) + TailwindCSS  
Backend: Node.js + Express.js  
Database: MySQL (XAMPP phpMyAdmin)

---

# Setup Instructions

## Requirements

- Node.js v18+
- XAMPP (Apache + MySQL)

---

# Backend Setup

## 1. Open Backend Folder

cd blog-app/backend

## 2. Install Dependencies
npm install

## 3. Start XAMPP

Start the following services:
Apache
MySQL

Open phpMyAdmin:
http://localhost/phpmyadmin

## 4. Create Database

Create a database named:
blogdb

## 5. Import Database File

SQL export file is included:
database/blogdb.sql

Steps:
Select database blogdb
Click Import
Choose blogdb.sql
Click Go

## 6. Create .env

Create file:
backend/.env

Add:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=blogdb

## 7. Run Backend Server
npm run dev

Backend runs on:
http://localhost:5000

## 8. Open Frontend Folder
cd ../frontend

## 9. Install Dependencies
npm install

## 10. Run Frontend
npm run dev

Frontend runs on:
http://localhost:3000

Application Routes:

Blog Listing Page:
http://localhost:3000/blogs

Create Blog:
http://localhost:3000/blogs/create

Edit Blog Example:
http://localhost:3000/blogs/edit/1