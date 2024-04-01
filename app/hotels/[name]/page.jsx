import React from 'react'

const Hotel = ({ params }) => {
    const descriptions = {
        'Hilton': {
            'one': {
                'title': 'Fine Dining Experience',
                'desc': 'Hilton offers a wide range of dining options to choose from. From a la carte to buffet, we have it all. Our chefs are trained to provide you with the best dining experience. So come and enjoy the delicious food at Hilton because we believe that good food is the key to a happy life.'
            },
            'two': {
                'title': 'Relaxing Ambiance',
                'desc': 'The ambiance at Hilton is designed to provide you with a relaxing experience. Our rooms are equipped with all the amenities you need to make your stay comfortable. Why not come and relax at Hilton because we believe that a relaxed mind is a happy mind.'
            },
            'three': {
                'title': 'Pool Party',
                'desc': 'Pool parties at Hilton are a must-attend event. Our pool is equipped with all the amenities you need to have a great time. So come and enjoy the party. Because we believe that a good party is the key to a happy life. And we promise you that you will have a great time.'
            }
        },
        'Paradise': {
            'one': {
                'title': 'Heavenly Experience',
                'desc': 'The Paradise Hotel is a place where you can relax and unwind. Our rooms are designed to provide you with the best experience. So come and enjoy the heavenly experience at Paradise because we believe that a relaxed mind is a happy mind. And we promise you that you will have a great time.'
            },
            'two': {
                'title': 'Mesmerizing Food',
                'desc': 'The food at Paradise is literally out of this world. Our chefs are trained to provide you with the best dining experience. So come and enjoy the mesmerizing food at Paradise because we believe that good food is the key to a happy life. HotelMS booking will ensure you that you will have a great time.'
            },
            'three': {
                'title': 'Eternal Bliss',
                'desc': 'There are so many things to do and see in this hotel that we promise that you are going to feel at Gods place. So come and enjoy the eternal bliss at Paradise because we believe that a good party is the key to a happy life. We can assure you that you will have a great time'
            }
        },
        'Ratna': {
            'one': {
                'title': 'Traditional Experience',
                'desc': 'Hotel Ratna is Nepals first 5-star hotel. We offer a traditional experience to our guests. Our rooms are designed to provide you with the best experience. So come and enjoy the traditional experience at Ratna because we believe that a relaxed mind is a happy mind. And we promise you that you will have a great time.'
            },
            'two': {
                'title': 'Gods and Godesses',
                'desc': 'The hotel has a unique theme of Gods and Goddesses. The hotel is designed with peace of heart in mind. So come and enjoy the mesmerizing food at Ratna because we believe that good food is the key to a happy life. HotelMS booking will gurantee you that you will have a great time.'
            },
            'three': {
                'title': 'New look on old traditions',
                'desc': 'The hotel has lots of rituals and old style dining. We promise you that you are going to feel at a traditional village home. So come and enjoy the religious bliss at Ratna because we believe that a good and memorable experience is the key to delighting our customers. We can assure you that you will have a great time.'
            }
        }
    }

    const images = {
        'Hilton': {
            'one': 'https://stories.hilton.com/apac/uploads/sites/3/2022/05/Hero-Image-Complex.jpg',
            'two': 'https://hiltonsatmanyatabengaluru.com/wp-content/uploads/2022/08/neer-1.jpg',
            'three': 'https://pbs.twimg.com/media/DAiZ-s2XUAAKwVU.jpg'
        },
        'Paradise': {
            'one': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/a8/99/de/the-whitehouse-paradise.jpg?w=1200&h=-1&s=1',
            'two': 'https://static.readytotrip.com/upload/information_system_24/3/7/0/item_3701764/photo_96854963.jpg',
            'three': 'https://lh3.googleusercontent.com/proxy/Ble1Fb5CAh3uyYXcwIrxL7t8woblX-yqiVzKAXj7kMIzq___Ie1UiD2D-IOaHRoqyrJ72y8YcGafv61558Ah1GPt7BaKAjC6gqqM36sabI82V8gOIZjQH762MwHEpf0jMjBe8g_jBWBotsmEfv3notztOkKaO9T_8hNAwpT-zF5pc2ezM0tGFYvlJqsSkfthqslQ2uOt'
        },
        'Ratna': {
            'one': 'https://media.cntraveler.com/photos/642b0d726e286eaba871f8c3/3:2/w_2999,h_1999,c_limit/Villa-Palladio-Jaipur_30.jpg',
            'two': 'https://media.apalmanac.com/wp-content/uploads/2023/07/atul-pratap-chauhan-villa-palladio-jaipur-project-of-the-week-apalmanac_0012.jpg',
            'three': 'https://media.apalmanac.com/wp-content/uploads/2023/07/atul-pratap-chauhan-villa-palladio-jaipur-project-of-the-week-apalmanac_0007.jpg'
        }
    }
    return (
        <div class="bg-gray-100 font-sans xl:px-28">
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold text-center mb-8">Welcome to {params.name}</h1>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src={
                            images[params.name].one
                        } alt="Hotel Image 1" class="rounded-lg shadow-lg" />
                    </div>
                    <div className='my-auto'>
                        <p class="text-xl font-semibold mb-4">{
                            descriptions[params.name].one.title
                        }</p>
                        <p>
                            {
                                descriptions[params.name].one.desc
                            }
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className='my-auto'>
                        <p class="text-xl font-semibold mb-4">{descriptions[params.name].two.title}</p>
                        <p class="mb-4">{descriptions[params.name].two.desc}</p>
                    </div>
                    <div>
                        <img src={
                            images[params.name].two

                        } alt="Hotel Image 2" class="rounded-lg shadow-lg" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <img src={
                            images[params.name].three
                        } alt="Hotel Image 3" class="rounded-lg shadow-lg" />
                    </div>
                    <div className='my-auto'>
                        <p class="text-xl font-semibold mb-4">{descriptions[params.name].three.title}</p>
                        <p class="mb-4">
                            {
                                descriptions[params.name].three.desc
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel