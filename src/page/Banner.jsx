import React from 'react'
import roman from '../assets/roman.jpg'

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse px-16 justify-between items-center  gap-11">
        <div className="md:w-1/2 w-full  flex items-center md:justify-end">
          <img src={roman} alt="roza" width="100%" height="100%" />
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="md:text-5xl text-2xl font-semibold mb-7">
            Book Store
          </h1>
          <p className="mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quia
            numquam. Facilis voluptatum vero aperiam, dolores quam molestiae
            voluptatibus explicabo consequuntur eligendi tempore, accusantium
            dignissimos eos error laborum labore totam pariatur quibusdam iusto
            enim adipisci? Neque quibusdam, voluptatem accusamus exercitationem
          </p>
          <button className="bg-green-500">subscribe</button>
        </div>
      </div>
    </>
  )
}

export default Banner
