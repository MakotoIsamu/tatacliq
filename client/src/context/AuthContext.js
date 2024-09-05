import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)

    const handleLogout = async () => {
      const response = await fetch('http://localhost:5000/api/auth/logout', {
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data);
    };

    useEffect(() => {
      async function checkAuth(){
        const response = await fetch('https://tatacliq-phi.vercel.app/api/auth/checkAuth',{
            credentials: 'include'
        })
        const data = await response.json()
        if(data.message === 'Authorized'){
            setIsAuth(true)
        } if(data.message === 'Unauthorized'){
            setIsAuth(false)
        }
      }

      checkAuth()
    }, [])
    
  return ( <AuthContext.Provider value={{isAuth , setIsAuth , handleLogout}}>
        {children}
  </AuthContext.Provider>
  )
}

export {AuthContext , AuthProvider}