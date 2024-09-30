Project Title: To Do App

Description: A simple Todo App built with React where users can add, edit, and delete tasks. 

Technologies Used: React, React Hooks, Javascript, CSS

Key Features:
- Add and Delete tasks

My role:

Backend Development: Designed and implemented the backend API using the Gin web framework in Go, ensuring efficient routing and integration with the database for salary and expense management features.
Database Integration: Integrated GORM for handling database operations, including salary and expense CRUD functionality, ensuring smooth and reliable data storage and retrieval.
Challenges and Solutions:

Challenge 1: Ensuring that expenses do not exceed the remaining salary, and handling cases where users input incorrect data.

Solution 1: Implemented data validation using Gin’s bind JSON and custom error handling to provide clear error messages and maintain data consistency.

Challenge 2: Users must input their monthly salary before entering expenses to prevent errors.

Solution 2: Implemented a check for salary requirements before inputting expenses. An error will be displayed if expenses are entered first.

# Full Documentation:


