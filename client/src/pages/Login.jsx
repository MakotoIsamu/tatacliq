import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://tatacliq-phi.vercel.app/api/auth/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      })
      const data = await response.json()
      if (!response.ok) {
        return setError(data.message)
      }
      // Clear error if login is successful
      setError(null)
      alert('Login successful')
      navigate('/')
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className='bg-gray-950 flex justify-center items-center h-screen w-screen'>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        {error && <p className='text-red-800 bg-red-400 p-2'>{error}</p>}
        <input 
          type="email" 
          value={email} 
          name='email' 
          placeholder='Enter email..' 
          className='input-field' 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          value={password} 
          name="password" 
          placeholder='Enter password..' 
          className='input-field' 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <div className='flex justify-between items-center p-2 bg-white text-black gap-3'>
          <Link to='/signup'>Signup</Link>
          <p>Forgot password</p>
        </div>
        <button type='submit' className='p-2 bg-white text-black border-white'>Login</button>
      </form>
    </div>
  )
}

export default Login
