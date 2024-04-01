import { SocialIcon } from 'react-social-icons'

const About = () => {
    return (
        <div className='bg-gray-300 p-16 h-full'>
            <h1 className='text-4xl font-bold text-center mt-4'>
                About HotelMS
            </h1>
            <p className='text-center text-lg mt-4'>
                HotelMS is a hotel booking web application that allows users to book hotel rooms across the world. It also allows users to order amenities and keep track of their bookings. HotelMS is a one-stop destination for all your hotel booking needs.
            </p>
            <div>
                {/* icons for facebook, instagram, twitter in big font and arranged in grid of columns 3 */}
                <div className='flex justify-center items-center mt-16 gap-16'>
                    <div className='flex flex-col'>
                        <SocialIcon url="https://x.com" />
                        <p className='text-xl text-center font-medium' >X </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SocialIcon url="https://facebook.com" />
                        <p className='text-xl font-medium'>Facebook </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SocialIcon url="https://instagram.com" />
                        <p className='text-xl font-medium'>Instagram </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About