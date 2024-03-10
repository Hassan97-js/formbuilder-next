/**
 * An array of routes that are accessible
 * to the public
 *  */
export const publicRoutes: string[] = [];

/**
 * An array of routes that are used
 * for authentication
 * @description
 * These routes will redirect users to `/` route
 *  */
export const authRoutes = ["/auth/sign-in", "/auth/sign-up"];

/**
 * The prefix for API authentication routes
 * @description
 * Routes that start with this prefix are used for API authentication purposes
 *  */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path if user logged in
 *  */
export const DEFAULT_LOGIN_REDIRECT = "/";
