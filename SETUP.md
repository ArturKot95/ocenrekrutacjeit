# Appwrite Authentication Setup

This project has been configured with Appwrite SDK for authentication. Follow these steps to set up your Appwrite project and get the authentication system working.

## 1. Create an Appwrite Project

1. Go to [Appwrite Console](https://console.appwrite.io/)
2. Create a new project or use an existing one
3. Note down your Project ID

## 2. Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-project-id-here
```

Replace `your-project-id-here` with your actual Appwrite Project ID.

## 3. Configure Appwrite Authentication

In your Appwrite Console:

1. Go to **Auth** in the left sidebar
2. Enable **Email/Password** authentication method
3. Configure the following settings:
   - **Email verification**: Enable if you want users to verify their email
   - **Password recovery**: Enable for forgot password functionality
   - **Session duration**: Set to your preferred duration (default: 60 minutes)

## 4. Configure Platform Settings

1. Go to **Settings** > **Platforms** in your Appwrite Console
2. Add a new Web platform:
   - **Name**: Your app name
   - **Hostname**: `localhost` (for development)
   - **HTTP Referrers**: Add your domain(s)

## 5. Test the Authentication

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000`
3. Try the following features:
   - **Register**: Create a new account
   - **Login**: Sign in with existing credentials
   - **Forgot Password**: Request password reset
   - **Logout**: Sign out

## Available Routes

- `/` - Home page with authentication status
- `/login` - Login form
- `/register` - Registration form
- `/forgot-password` - Forgot password form
- `/reset-password` - Password reset form (accessed via email link)

## Features Implemented

✅ **User Registration** - Create new accounts with email and password
✅ **User Login** - Sign in with email and password
✅ **User Logout** - Sign out and clear session
✅ **Forgot Password** - Request password reset via email
✅ **Password Reset** - Reset password using email link
✅ **Protected Routes** - Redirect unauthenticated users
✅ **Authentication Context** - Global state management
✅ **Responsive UI** - Beautiful forms using DaisyUI

## Troubleshooting

### Common Issues

1. **"Invalid credentials" error**: Check your Appwrite Project ID and endpoint
2. **Password reset not working**: Ensure password recovery is enabled in Appwrite Console
3. **CORS errors**: Add your domain to the platform settings in Appwrite Console

### Development Tips

- Use the Appwrite Console to monitor user registrations and sessions
- Check the browser console for detailed error messages
- Verify environment variables are loaded correctly

## Security Notes

- Never commit your `.env.local` file to version control
- Use strong passwords in production
- Consider enabling email verification for production apps
- Regularly rotate your Appwrite API keys 