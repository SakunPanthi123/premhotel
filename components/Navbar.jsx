import Link from 'next/link'
import {useContext} from 'react'
import {useRouter} from 'next/navigation'
import UserContext from '@components/UserProvider'

const Navbar = () => {
    const router = useRouter()
    const {user, setUser} = useContext(UserContext)
  return (
    
        <nav className='flex justify-between bg-black text-white p-4'>
            <div>
            <Link className='text-yellow-500 font-medium' href='/'>
                HotelMS
            </Link>
            </div>
            <div className='gap-4 flex'>
                <Link href='/'>
                    Home
                </Link>
                <Link href='/rooms'>
                    Rooms
                </Link>
                <Link href='/hotels'>
                    Hotels
                </Link>
                <Link href='/about'>
                    About
                </Link>
            { !user ? 
                    <div className='flex gap-4'>
                        <Link href='/login'>
                            Login
                        </Link>
                        <Link href='/register'>
                            Register
                        </Link>
                    </div>
                    : <div className='gap-4 flex'>
                        <Link href='/profile'>
                            Profile
                        </Link>
                        <button 
                            onClick = {
                                async () => {
                                    const conf = await confirm('Are you sure you want to logout')
                                    if (!conf) return
                                    setUser('')
                                    router.push('/login')
                                }
                            
                            }
                        >
                            Logout
                        </button>
                    </div>
}
            </div>
           

        </nav>
  )
}

export default Navbar