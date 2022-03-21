import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth'
import { initAuth } from 'initAuth'
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import { useState } from 'react'

initAuth()
console.log(sendEmailVerification)
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
}

const Register = () => {
  const userEmail = useAuthUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogout = () => {
    /* const auth = getAuth()

    auth.signOut() */
  }
  const handleReg = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential)
        sendEmailVerification(userCredential.user, actionCodeSettings)
        auth.signOut()
      })
      .catch(e => console.log('error in ' + e))
  }

  return (
    <div className='bg-yellow-300 text-center p-4 flex flex-col w-1/2 m-auto translate-y-24'>
      <h1>Register App</h1>
      <label htmlFor='email'>Email</label>
      <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <input id='password' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='bg-green-400 mt-4 rounded py-1' onClick={handleReg}>Registrase</button>
      <p className='text-cyan-900 my-4'>{userEmail.email || 'not user found'}</p>
      <button className='bg-red-400 rounded py-1' onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP
})()

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP
})(Register)
