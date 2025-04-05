# TraceWise - Test Case Traceability and Management System

## Overview

TraceWise is an AI-driven software testing tool designed to revolutionize test case management. It introduces automation and visual hierarchy mapping to streamline test planning, execution, and maintenance. By dynamically detecting obsolete, modified, and new test cases when requirements change, TraceWise enhances efficiency and reduces redundancy. The system also prioritizes test cases based on recent project activity and historical insights, ensuring optimal test coverage.

## Key Features

1. **Visual Test Case Traceability**
   - Interactive hierarchical UI to map projects → reuirements → source code → test cases.
   - Enables intuitive navigation and collaboration among testers, developers, and managers.

2. **AI-Driven Test Case Evolution**
   - Tracks requirement changes and identifies obsolete, modified, and new test cases.
   - Uses GPT-4 for semantic similarity analysis to evaluate the impact of requirement updates.

3. **Priority-Based Test Case Surfacing**
   - Dynamically prioritizes test cases based on defect history, recent code changes, and requirement criticality.
   - Integrates with GitHub/GitLab to analyze code modifications and JIRA for requirement impact assessment.

4. **Historical Test Case Insights**
   - Recommends reusable test cases from past projects to reduce redundancy.
   - Optimizes test suites for better coverage using historical data.

5. **Real-Time Updates**
   - Ensures instant synchronization across users using WebSockets.

## Technology Stack

### Frontend
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.

### Backend
- **Flask**: For server-side logic and API development.
- **GPT-4**: For AI-driven semantic analysis of requirements and test cases.


## Project Structure

- **Frontend**: Contains React components for the UI, including:
  - `RequirementTable`: Displays a list of requirements.
  - `RequirementDetails`: Shows detailed information about a selected requirement.
  - `RequirementModal`: Allows adding or editing requirements.
- **Backend**: Handles API requests, real-time updates, and AI-driven analysis.
- **Database**: Stores structured and unstructured data, including test case relationships.

## Visualization of Test Case Failures

TraceWise provides a visual representation of how a test case failure impacts the source code and requirements. The hierarchical UI highlights:
- **Failed Test Cases**: Marked in red for quick identification.
- **Affected Requirements**: Linked to the failed test cases, showing the potential impact on project features.
- **Source Code Mapping**: Displays the code modules associated with the failed test cases, enabling developers to trace the root cause efficiently.

This visualization ensures seamless collaboration between testers and developers, reducing the time to resolve issues.


## Future Scope

1. **Blockchain-Based Test Case Verification**: Implement tamper-proof records of test executions for compliance and security.
2. **Multi-Project Interoperability**: Enable seamless test case sharing across different projects within an organization.
3. **Advanced Analytics & Dashboards**: Provide insights into test coverage gaps, defect trends, and risk analysis.
4. **Integration with More DevOps Tools**: Extend support for tools like Azure DevOps, Jenkins, Selenium, and Cypress.


## Team Roles

- **Frontend Developers**: Build and maintain the user interface.
- **Backend Developers**: Develop APIs and manage server-side logic.
- **AI Engineers**: Fine-tune GPT-4 for requirement and test case analysis.
- **DevOps Engineers**: Ensure smooth deployment and real-time updates.
- **UX Designers**: Design intuitive and user-friendly interfaces.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```
4. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
5. Start the backend:
   ```bash
   npm run dev
   ```

## Conclusion

TraceWise is a comprehensive solution for managing test cases in agile and DevOps environments. By using AI and interactive visualizations, it simplifies test planning, execution, and maintenance, ensuring higher efficiency and better collaboration.