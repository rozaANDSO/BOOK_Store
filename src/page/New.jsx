import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const news = [
  {
    title: "Article 1",
    content: "This is the content of Article 1",
    author: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5VDjCP4lDnEyxCB2EA6fSHoz4962OkQeIA&s",
    description:
      "This is the description of Article 1 and will be published in the",
  },
  {
    title: "Article 2",
    content: "This is the content of Article 2",
    author: "Jane Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvWX7BKGsI0WIxj_At1eROnJ3ZZUhf8rBvg&s",
    description:
      "This is the description of Article 2 and will be published in the",
  },
  {
    title: "Article 3",
    content: "This is the content of Article 3",
    author: "Mark Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvWX7BKGsI0WIxj_At1eROnJ3ZZUhf8rBvg&s",
    description:
      "This is the description of Article 3 and will be published in the",
  },
  {
    title: "Article 4",
    content: "This is the content of Article 4",
    author: "Jane Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5VDjCP4lDnEyxCB2EA6fSHoz4962OkQeIA&s",
    description:
      "This is the description of Article 4 and will be published in the",
  },
  {
    title: "Article 5",
    content: "This is the content of Article 5",
    author: "Mark Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvWX7BKGsI0WIxj_At1eROnJ3ZZUhf8rBvg&s",
    description:
      "This is the description of Article 5 and will be published in the",
  },
  {
    title: "Article 1",
    content: "This is the content of Article 1",
    author: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5VDjCP4lDnEyxCB2EA6fSHoz4962OkQeIA&s",
    description:
      "This is the description of Article 1 and will be published in the",
  },
  {
    title: "Article 2",
    content: "This is the content of Article 2",
    author: "Jane Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvWX7BKGsI0WIxj_At1eROnJ3ZZUhf8rBvg&s",
    description:
      "This is the description of Article 2 and will be published in the",
  },
  {
    title: "Article 3",
    content: "This is the content of Article 3",
    author: "Mark Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvWX7BKGsI0WIxj_At1eROnJ3ZZUhf8rBvg&s",
    description:
      "This is the description of Article 3 and will be published in the",
  },
  {
    title: "Article 4",
    content: "This is the content of Article 4",
    author: "Jane Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5VDjCP4lDnEyxCB2EA6fSHoz4962OkQeIA&s",
    description:
      "This is the description of Article 4 and will be published in the",
  },
  {
    title: "Article 5",
    content: "This is the content of Article 5",
    author: "Mark Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvWX7BKGsI0WIxj_At1eROnJ3ZZUhf8rBvg&s",
    description:
      "This is the description of Article 5 and will be published in the",
  },
];

const New = () => {
  return (
    <div>
      <h1 className="font-extrabold">New Page</h1>
      <p>This is the new page.</p>

      <Swiper
      
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {news.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to="/about">
                <h3 className="text-lg font-medium mb-4">{item.title}</h3>
              </Link>
              <p className="text-sm text-gray-900">{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-20 object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default New;
