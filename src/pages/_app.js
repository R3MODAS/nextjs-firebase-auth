import '@/styles/globals.css'
import Navbar from 'components/Navbar'
import ProtectedRoute from 'components/ProtectedRoute'
import { useRouter } from 'next/router'
import { AuthContextProvider } from './Context/AuthContext'
import "../styles/globals.css"

const noAuthRequired = ['/', '/login', '/signup']

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {noAuthRequired.includes(router.pathname) ?
          <Component {...pageProps} />
          : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
      </AuthContextProvider>
    </>
  )
}
