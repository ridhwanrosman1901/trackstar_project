# Awesome Staff Performance Tracking Website

## Introduction
This project is a web-based application designed to help managers and employees within a company track performance metrics such as KPIs, attendance, and overall work performance. The basic version of this project includes core functionalities and is designed to be simple yet effective for basic performance tracking needs.


## Features
- **User Authentication**: Secure login and registration with JWT.
- **Role-Based Access**: Different views for managers and employees.
- **KPI Management**: Add, edit, and view KPIs.
- **Attendance Tracking**: Log and review attendance records.
- **Performance Reports**: Generate and view monthly performance reports.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS or Bootstrap


## Usage
1. **Visit the Landing Page**
   - Access the landing page at `http://localhost:3000` and navigate through the site.

2. **Register and Log In**
   - Create a new account and log in. Make sure to select the appropriate role (manager or employee).

3. **Use the Dashboard**
   - Access your personalized dashboard to view KPIs, attendance, and performance reports.

4. **Manage KPIs**
   - Managers can add, edit, and view KPIs.

5. **Log Attendance**
   - Employees can log their attendance daily.

6. **View Reports**
   - Generate and view monthly performance reports.

## Pages
1. **Landing Page**
   - Introduction to the system with key features and call-to-action buttons.
2. **Home/Dashboard Page**
   - Overview of key metrics and quick links to other sections.
3. **Login/Registration Page**
   - User authentication with role selection during registration.
4. **User Profile Page**
   - Personal information and performance summary.
5. **KPI Management Page**
   - Create, edit, and view KPIs.
6. **Attendance Page**
   - Log and view attendance records.
7. **Performance Reports Page**
   - Generate and view monthly performance reports.

### Outline for the Pages (Admin and User)

#### 1. Landing Page (Common)
- **Introduction**: Brief overview of the staff performance tracking system.
- **Features**: Highlight key features such as KPI tracking, attendance monitoring, and performance reporting.
- **Call to Action**: Buttons for login and registration.
- **Navigation**: Links to other informational pages (e.g., About, Contact).

#### 2. Home/Dashboard Page
- **Admin View**:
  - **Overview**: Display team performance metrics, attendance summary, and key alerts.
  - **Quick Links**: Access KPI Management, Attendance Records, Performance Reports, User Management.
  - **Analytics**: Graphs and charts for overall performance trends.
- **User View**:
  - **Overview**: Display personal performance metrics, attendance summary, and key alerts.
  - **Quick Links**: Access Personal KPIs, Attendance Log, Performance Reports.
  - **Goal Tracking**: Visual representation of progress towards personal goals.

#### 3. Login/Registration Page (Common)
- **User Authentication**: Forms for user registration and login.
- **Role Selection**: Ensure users are identified as either admins or regular users during registration.
- **Forgot Password**: Option to reset password.

#### 4. User Profile Page
- **Admin View**:
  - **Admin Information**: Display admin details and privileges.
  - **Team Overview**: Summary of team members' performance and attendance.
- **User View**:
  - **Personal Information**: Display user details and performance summary.
  - **Edit Profile**: Option for users to update their personal information.

#### 5. KPI Management Page
- **Admin View**:
  - **Add/Edit KPIs**: Forms to create and modify KPIs for the team.
  - **View KPIs**: List of all KPIs with filtering options.
  - **Assign KPIs**: Ability to assign KPIs to specific users.
- **User View**:
  - **View Personal KPIs**: Display KPIs assigned to the user with details and progress tracking.
  - **Update Progress**: Option for users to update their progress on assigned KPIs.

#### 6. Attendance Page
- **Admin View**:
  - **Log Attendance**: Ability to log attendance for team members.
  - **View Attendance Records**: Detailed list of attendance records for all users with filtering options.
- **User View**:
  - **Log Attendance**: Simple form for users to log their own attendance.
  - **View Personal Attendance**: List of personal attendance records.

#### 7. Performance Reports Page
- **Admin View**:
  - **Generate Reports**: Tools to generate comprehensive performance reports for the team.
  - **View Reports**: List of all generated reports with download options.
  - **Analytics**: Advanced data visualization tools for performance analysis.
- **User View**:
  - **View Personal Reports**: Display monthly performance reports for the user.
  - **Download Reports**: Option to download personal performance reports in PDF format.

#### 8. User Management Page (Admin Only)
- **User List**: Display a list of all users with their roles and statuses.
- **Add/Edit Users**: Forms to add new users or edit existing user details.
- **Manage Roles**: Ability to assign or change user roles (admin or regular user).

### Implementation Plan

#### 1. Landing Page
- **Design and Develop**: Create a visually appealing landing page with essential information and navigation.

#### 2. User Authentication
- **Implement Registration/Login**: Set up JWT authentication for secure login and registration.
- **Role-Based Access Control**: Ensure role-specific navigation and access to features.

#### 3. Home/Dashboard Page
- **Admin and User Views**: Implement conditional rendering to display appropriate data and controls based on the user role.

#### 4. KPI Management
- **Schema Design**: Define MongoDB schema for storing KPI data.
- **API Endpoints**: Create CRUD operations for KPIs.
- **Frontend Implementation**: Develop forms and lists for KPI management, with role-based access control.

#### 5. Attendance Tracking
- **Schema Design**: Define schema for attendance records.
- **API Endpoints**: Create endpoints for logging and retrieving attendance data.
- **Frontend Forms**: Develop forms for logging and viewing attendance, with conditional rendering for different roles.

#### 6. Performance Reports
- **Generate and View Reports**: Implement logic to generate and display performance reports with appropriate access control.

#### 7. User Management (Admin Only)
- **Admin Tools**: Develop tools for admins to manage user accounts and roles.

### Technologies and Tools

- **Frontend**: React.js with role-based conditional rendering.
- **Backend**: Node.js with Express.js for API development.
- **Database**: MongoDB for storing user data, KPIs, attendance records, and reports.
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication.
- **Styling**: CSS or a framework like Bootstrap for a responsive and user-friendly interface.

### Conclusion

This outline provides a structured approach to developing the staff performance tracking website with distinct interfaces for admins and regular users. By focusing on essential functionalities and leveraging the MERN stack, you can create an effective tool for tracking and improving staff performance.
