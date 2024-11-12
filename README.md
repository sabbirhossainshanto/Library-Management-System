# **Library Management System Api**

## Library-Management-System-Api-Live-URL[(https://library-management-eta-nine.vercel.app/)]

## **Description**

The Library Management System API is a backend system designed to streamline the management of books, members, and borrowing activities for a library. It allows library staff to perform CRUD operations for books and members, as well as manage borrowing and returning of books by members.

## **Technology Stack & Packages**

Backend Framework: Node.js with Express
Database: PostgreSQL
ORM: Prisma
Language: TypeScript
Other Packages: zod, ts-node-dev, http-status, cors

## **Key Features & Functionality**

Book Management:
Add, view, update, and delete books.
Tracks total and available copies of each book.

Member Management:
Register, view, update, and delete library members.
Tracks each member's contact information and join date.

Borrow & Return Books:
Allows members to borrow available books.
Enables return functionality to update availability.
Tracks overdue books (more than 14 days) and provides an overdue list endpoint.

Error Handling:
Returns standardized error responses for invalid requests or unexpected issues.

# Installation Guide

## **1. Clone the Project Repository**

First, you need to clone the project repository.

Open your terminal and execute the following command:

```bash
git clone https://github.com/sabbirhossainshanto/Library-Management-System
```

## **2. Navigate to the Project Directory**

Once the repository is cloned, navigate to the project directory:

```bash
cd project-name
```

## **3. Install All Packages**

Next, install all the required dependencies listed in the `package.json` file. You can use either Yarn or npm:

With **Yarn**:

```bash
yarn install
```

Or with **npm**:

```bash
npm install
```

This command will install all the necessary packages.
Then change the .env file data base link with your own username and password. And the run this command:

```bash
npm run dev
```
