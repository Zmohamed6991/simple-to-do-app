Project Title: To Do App

Description: A simple Todo App built with React where users can add, edit, and delete tasks. 

Technologies Used: React, React Hooks, Javascript, CSS

Key Features:

Salary and Expense Management: Users can submit their monthly salary, and expenses are validated in real-time to ensure they don't exceed the remaining salary. The app provides an overview of all expenses, including the total amount spent and the remaining balance.
CRUD Operations: Full support for creating, reading, updating, and deleting expenses using a RESTful API designed with the Gin framework, integrated with GORM for database interaction.
Error Handling and Validation: Error handling and data validation to ensure accurate and correct data entry, providing clear feedback for invalid inputs using status codes and responding with a JSON response.
My role:

Backend Development: Designed and implemented the backend API using the Gin web framework in Go, ensuring efficient routing and integration with the database for salary and expense management features.
Database Integration: Integrated GORM for handling database operations, including salary and expense CRUD functionality, ensuring smooth and reliable data storage and retrieval.
Challenges and Solutions:

Challenge 1: Ensuring that expenses do not exceed the remaining salary, and handling cases where users input incorrect data.

Solution 1: Implemented data validation using Gin’s bind JSON and custom error handling to provide clear error messages and maintain data consistency.

Challenge 2: Users must input their monthly salary before entering expenses to prevent errors.

Solution 2: Implemented a check for salary requirements before inputting expenses. An error will be displayed if expenses are entered first.
