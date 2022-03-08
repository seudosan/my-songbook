// ./initAuth.js
import { init } from 'next-firebase-auth'

export const initAuth = () => {
  init({
    authPageURL: '/register',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'my-songbook-2936f',
        clientEmail: 'firebase-adminsdk-j617l@my-songbook-2936f.iam.gserviceaccount.com',
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY
      },
      databaseURL: 'https://my-songbook-2936f-default-rtdb.firebaseio.com'
    },
    // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyD65AKR6DsrO9Ayt_HTQ4FZ_z3QSYk6q7Y', // required
      authDomain: 'my-songbook-2936f.firebaseapp.com',
      databaseURL: 'https://my-songbook-2936f-default-rtdb.firebaseio.com',
      projectId: 'my-songbook-2936f'
    },
    cookies: {
      name: 'my-songbook-pwa', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: false, // set this to false in local (non-HTTPS) development
      signed: true
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    }
  })
}
