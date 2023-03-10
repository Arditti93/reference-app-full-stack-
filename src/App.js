import React from 'react'
import { useEffect, useState } from 'react'

import CreateUser from './componets/CreateUser'
import ReadUsers from './componets/ReadUsers'
import Login from './componets/Login'
import UpdateUser from './componets/UpdateUser'
import DeleteUser from './componets/DeleteUser'


import { getCookie } from './common'
import { authCheck } from './utils'


const App = () => {

  const [user, setUser] = useState()
  const [cookie, setCookie] = useState()

  useEffect(()=>{
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  }, [])

  const loginWithToken = async (cookie) => {
    const user = await authCheck(cookie)
    setUser(user)
    setCookie(cookie)
  }

  return (

    <div className='app'>
      <CreateUser />

      <Login setter={setUser} cookie={setCookie} />

      {user ?
        <>
            <h2> Hello welcome {user} you have logged in</h2>
            <ReadUsers cookie={cookie} />
            <UpdateUser user={user} />
            <DeleteUser user={user} />
        </>
          :
          <h2>Please login</h2>
      }
    </div>
  )

}

export default App
