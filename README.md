
### TrackStar: Staff Performance Tracking Website

#### Objective:
Create a website that allows managers to monitor and evaluate their staff’s performance based on KPIs, attendance, and other relevant metrics. Employees will also be able to view their performance data to reflect and improve.

#### Core Technologies:
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Bootstrap 4

#### Pages Overview:
1. **Landing Page**
   - **Purpose**: Introduce the system, highlight features, and provide login/registration options.

2. **Register/Login Page**
   - **Purpose**: Allow users to register and log in, with role selection for managers and employees.

3. **User Page (For Employees)**
   - **Dashboard**: Overview of personal KPIs, attendance, and performance.
   - **KPI Management**: View personal KPIs.
   - **Attendance**: Log and view attendance records.
   - **Performance Reports**: View and download monthly reports.
   - **Profile Management**: Update personal information.

4. **Admin Page (For Managers)**
   - **Dashboard**: Overview of team performance and key metrics.
   - **KPI Management**: Add, edit, and view KPIs for all employees.
   - **Attendance Tracking**: View attendance records for the team.
   - **Performance Reports**: Generate and view detailed performance reports.
   - **Feedback**: Provide feedback to employees.

#### Project Decisions:
- **Structure**: The project is organized into four key pages, each dedicated to specific functionality (Landing, Register/Login, User, Admin).
- **Simplicity**: Each component is included on a single page to streamline development and user experience.
- **Removed KPIs**: Efficiency rate and customer satisfaction have been removed from the KPI calculations.
- **KPI Focus**: The KPIs to focus on are Attendance Rate, Task Completion Rate, and Quality of Work.

#### Implementation Strategy:
- **Setup**: Start by setting up the MERN stack environment.
- **Frontend**: Develop each page using React.js, with a focus on modular and reusable components.
- **Backend**: Implement the server-side logic with Node.js and Express.js, handling API requests, and managing the database.
- **Database**: Design MongoDB schemas for users, KPIs, attendance, and reports.
- **Authentication**: Secure the website with JWT-based authentication, ensuring different access levels for managers and employees.

### Additional Notes:
- **Consistency**: Ensure that all team members follow this summary to maintain consistency in understanding and development.
- **Page Merging**: The Home/Dashboard page is merged, and a new Landing Page has been added to streamline the user journey.
- **Sitemap**: Refer to the provided sitemap to understand the website’s structure and navigation.
