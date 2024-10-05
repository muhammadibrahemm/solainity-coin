
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import SignUp from './components/Registration/SignUp'
import SmsCheck from './components/SMSCheck/SMSCheck'
import { Login } from './components/Login/Login'
import UserLayout from './components/User/SubComponents/UserLayout'
import { User } from './components/User/User'
import UserProfile from './components/User/UserProfile'
import Activity from './components/User/UserActivity'
import {Account} from './components/User/Account'
import { Logout } from './components/Logout/Logout'
import { MathMcqs } from './components/User/MathMcqs'
import VideoAd from './components/User/Video-Aid'

function App() {
    const router = createBrowserRouter(
      [
        {
          path:'/',
          element: <Layout />,
          children: [
            {
              path:'/',
              element: <Home />
            },
            {
              path:'/signup',
              element: <SignUp />
            },
            {
              path: '/verification-code',
              element: <SmsCheck />
            },
            {
              path: '/login',
              element: <Login />
            },
            {
              path: '/logout',
              element: <Logout />
            },
            {
              path: '/user',
              element: <UserLayout />,
              children:[
                {
                  path:'',
                  element: <User />
                },
                {
                  path:'profile',
                  element: <UserProfile />
                },
                {
                  path:'activity',
                  element: <Activity />
                },
                {
                  path:'account',
                  element: <Account />
                },
                {
                  path: 'logout',
                  element: <Logout />
                },
                {
                  path: 'activity/math-quiz',
                  element: <MathMcqs />
                },
                {
                  path: 'activity/video-ad',
                  element: <VideoAd />
                }
              ]
            }
          ]
        }
      ]
    )

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
