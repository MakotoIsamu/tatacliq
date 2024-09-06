import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://tatacliq-phi.vercel.app/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      })
      const data = await response.json()
      if (!response.ok) {
        return setError(data.message)
      }
      // Clear error if signup is successful
      setError(null)
      alert('Signup successful')
      navigate('/login')
    } catch (error) {
      console.log(error)
      setError('An error occurred while signing up')
    }
  }

  return (
    <div className='bg-gray-950 flex justify-center items-center h-screen w-screen'>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        {error && <p className='text-red-800 bg-red-400 p-2'>{error}</p>}
        <input 
          type="text" 
          value={name} 
          name='name' 
          placeholder='Enter name..' 
          className='input-field' 
          onChange={(e) => setName(e.target.value)} 
        />
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
          <Link to='/login'>Login</Link>
          <p>Forgot password</p>
        </div>
        <button type='submit' className='p-2 bg-white text-black border-white'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
