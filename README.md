# Payload User-Based Access Control Example

This repository is a simple example demonstrating [User-Based Access Control (UBAC)](https://github.com/tigersoft6084/ubac-demo) with Payload. It shows how to implement UBAC across various collections using Payload CMS.

## Install

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/tigersoft6084/ubac-demo.git
   ```
2. Navigate to your project directory and copy the environment file:
   ```
   cd ubac-demo && cp .env.example .env
   ```
3. Install dependencies and start the development server:
   ```
   yarn && yarn dev
   ```
   Alternatively, if you prefer Docker, see the [Docker](#docker) section below.
4. Open your browser and access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin).
5. Use the form on the page to create your first admin user.

### Docker

To use Docker for setting up the project, follow these instructions:

1. Complete the first two steps from the [Install](#install) section. The `docker-compose` file will utilize the `.env` file located in your project root.
2. Start the Docker environment:
   ```
   docker-compose up
   ```
3. Proceed with steps 4 and 5 from the [Install](#install) section to access the admin panel and create your first admin user.

Docker simplifies the process of getting the project running and ensures a consistent development environment across different machines.

## Configuring User Permissions

To configure user permissions in the admin panel:

1. Go to the admin's user management page.
2. Understand the available user roles:
   - `Owner` role can read, create, update, or delete any users, including themselves.
   - `Staff` role can read or update their own user information.
   Note: The `Role` and `Permissions` fields can only be modified by users with the `Owner` role.
3. If you are logged in as an `Owner`, you can edit every user's permissions:
   - Navigate to a user's profile from the users list.
   - Modify the checkboxes under the `Permissions` section to grant or revoke permissions on specific collections.
4. Click the "Save" button to apply the changes.