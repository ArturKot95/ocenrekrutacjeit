# Next.js App with Appwrite Authentication

This is a Next.js application with Appwrite authentication integration, featuring session management and protected routes.

## Features

- **Session Management**: Automatically checks for existing sessions on app load
- **Protected Routes**: Redirects authenticated users away from auth pages
- **Authentication Flow**: Login, register, forgot password, and reset password
- **Dashboard**: Protected dashboard for authenticated users
- **Modern UI**: Built with DaisyUI and Tailwind CSS

## Session Checking

The app automatically checks for existing sessions when loading:

1. **AuthContext**: On app initialization, `checkUser()` is called to verify if a user session exists
2. **Auth Pages**: Login, register, forgot password, and reset password pages check for existing sessions and redirect authenticated users to the dashboard
3. **Protected Routes**: The dashboard uses `ProtectedRoute` component to ensure only authenticated users can access it

### How it works:

- When the app loads, `AuthContext` calls `account.get()` to check for an existing session
- If a session exists, the user is automatically logged in
- If no session exists, the user remains unauthenticated
- Auth pages (login, register, etc.) redirect authenticated users to `/dashboard`
- The dashboard redirects unauthenticated users to `/login`

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your Appwrite configuration in `src/lib/appwrite.ts`

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Protected dashboard page
│   ├── login/            # Login page with session checking
│   ├── register/         # Register page with session checking
│   ├── forgot-password/  # Forgot password page
│   └── reset-password/   # Reset password page
├── components/
│   └── auth/             # Authentication components
│       ├── LoginForm.tsx
│       ├── RegisterForm.tsx
│       ├── ProtectedRoute.tsx
│       └── ...
├── contexts/
│   └── AuthContext.tsx   # Authentication context with session management
└── lib/
    └── appwrite.ts       # Appwrite configuration
```

## Authentication Flow

1. **App Load**: `AuthContext` checks for existing session
2. **Authenticated User**: Redirected to dashboard if accessing auth pages
3. **Unauthenticated User**: Can access login/register pages
4. **Login/Register**: Creates new session and redirects to dashboard
5. **Logout**: Clears session and redirects to home page
