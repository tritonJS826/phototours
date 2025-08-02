# PT-General Server

This is a Node.js Express server for the PhotoTours application.

## Getting Started

1.  Install dependencies:
    ```bash
    pnpm install
    ```

2.  Create a `.env` file in the root of this directory and add the following environment variable:
    ```
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
    Replace the values with your database connection details.

3.  Run the database migrations:
    ```bash
    pnpm prisma:migrate
    ```
    This will create the necessary tables in your database. The `prisma:migrate` script runs `prisma migrate dev`. This command should be used during development to create and apply migrations.

4.  Generate the Prisma client:
    ```bash
    pnpm prisma:generate
    ```
    This will generate the Prisma client based on your schema. The `prisma:generate` script runs `prisma generate`. This command should be run after every change to the `schema.prisma` file.

5.  Start the development server:
    ```bash
    pnpm dev
    ```
    The server will start on the port specified in your `.env` file, or on port 3000 by default.

## Scripts

*   `pnpm dev`: Starts the server in development mode with hot reloading.
*   `pnpm build`: Compiles the TypeScript code to JavaScript.
*   `pnpm start`: Starts the server in production mode.
*   `pnpm prisma:migrate`: Runs database migrations.
*   `pnpm prisma:generate`: Generates the Prisma client.


## Zoho CRM Integration

### 1. Registration on Zoho Developer Console

1. Go to Zoho Developer Console
2. Create an account or sign in to existing one
3. Create a new project (Add Project)

### 2. OAuth 2.0 Application Setup

1. Go to https://api-console.zoho.eu → "Add Client" → Server-based Applications
2. Fill out the form:
   - **Client Name**: Phototours CRM
   - **Homepage URL**: http://localhost:8000 (for development)
   - **Authorized Redirect URIs**: http://localhost:8000/auth/zoho/callback
3. Save Client ID and Client Secret

### 3. Obtaining Access Tokens

1. Form the authorization URL:
   ```
   https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=YOUR_CLIENT_ID&scope=ZohoCRM.modules.ALL,ZohoCRM.settings.ALL&redirect_uri=http://localhost:8000/auth/zoho/callback&access_type=offline
   ```
2. Open the URL in browser and authorize
3. Copy the received `code` from redirect URL even if it shows incorrect or empty page

### 4. Exchanging Code for Tokens

1. Send POST request:

   ```
   POST https://accounts.zoho.com/oauth/v2/token

   Content-Type: application/x-www-form-urlencoded

   code=YOUR_CODE&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&redirect_uri=http://localhost:8000/auth/zoho/callback&grant_type=authorization_code
   ```

2. Get `access_token` and `refresh_token`

### 5. Environment Variables Setup

Add to `.env` file:

```
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
ZOHO_REFRESH_TOKEN=your_refresh_token
```

### 6. Usage in Application

- Access Token is automatically refreshed via Refresh Token
- When users register, leads are automatically created in Zoho CRM
- All user data is transferred to the CRM system

