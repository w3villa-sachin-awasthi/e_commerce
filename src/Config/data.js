export const setting1 = {
  dots: true,
  arrows: false,
  infinite: true, // Enable infinite scrolling for continuous looping
  speed: 500,
  slidesToShow: 4,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Adjust the speed (in milliseconds) for auto sliding
  slidesToScroll: 1, // Scroll one slide at a time for better user experience
  responsive: [
    {
      breakpoint: 1190, // For tablets
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 950, // For smaller tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 620, // For small devices
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};



// bog data 
import image1 from "../assets/Blog/img1.jpeg";
import image2 from "../assets/Blog/img2.jpeg";
import image3 from "../assets/Blog/img3.jpeg";

export const blogData = [
  {
    img: image1,
    content: "Journal Blog is Here",
    description:
      "Discover daily insights and thought-provoking articles crafted to inspire, inform, and entertain. Dive into a world of creativity and knowledge, where every blog post offers unique perspectives and valuable takeaways. Perfect for those who love exploring ideas and expanding their understanding of the world",
  },
  {
    img: image2,
    content: "Best Leather Bags",
    description:
      "Explore our premium collection of stylish and durable leather bags. Perfect for work, travel, or casual outings, these bags combine functionality and fashion effortlessly. Experience unmatched craftsmanship and timeless designs that elevate your everyday style while providing ample storage for your essentials.",
  },
  {
    img: image3,
    content: "Another Blog Post",
    description:
      "Engage with captivating stories and insightful articles designed to spark curiosity and provide inspiration. From lifestyle tips to personal growth strategies, this blog offers a diverse range of topics for readers seeking meaningful and enriching content. Perfect for anyone who enjoys thoughtful, well-crafted writing.",
  },
];

// Brand setting

export const Brandsettings = {
    dots: true,
    arrows: false, 
    infinite: false, // Disable infinite scrolling for better control
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1, // Scroll one slide at a time for better user experience
    responsive: [
        {
            breakpoint: 1500, // For tablets
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 1250, // For tablets
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 1100, // For tablets
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: true,
            },
        },
       
        {
            breakpoint: 900, // For small devices
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 770, // For small devices
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 630, // For small devices
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        }
    ],
};

// category section setting

export const categorySectionSetting = {
    dots: true,
    arrows: false,
    infinite: false, // Disable infinite scrolling for better control
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Scroll one slide at a time for better user experience
    responsive: [
      {
        breakpoint: 1220, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 950, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 620, // For small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

// Featured Category section 
export  const featuredCategorySection = {
    dots: true,
    arrows: false,
    infinite: true, // Disable infinite scrolling for better control
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Scroll one slide at a time for better user experience
    responsive: [
      {
        breakpoint: 1480, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1130, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 530, // For small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

// person component 
export const personData = [
    {
        name: "John Doe",
        saying: "Our company thrives on innovation, collaboration, and dedication. We believe in empowering our team to create impactful solutions that drive success and foster growth. We’re proud to have a passionate team committed to excellence."
    },
    {
        name: "Jane Smith",
        saying: "At our company, we embrace challenges and transform them into opportunities. Every member of our team plays a pivotal role in achieving our goals. Together, we deliver quality results and build lasting relationships with our clients."
    },
    {
        name: "Mike Johnson",
        saying: "Our company is built on trust and integrity. We value creativity and hard work, constantly pushing boundaries to deliver exceptional results. Our people are the heart of our success, and we are committed to supporting their growth and development."
    },
    {
        name: "Emily White",
        saying: "In our company, innovation and teamwork go hand in hand. We’re driven by a shared vision to create the best solutions for our clients. The passion and dedication of our team make us stand out in the industry."
    }
];

// viewed section 

export  const viewedSettings = {
    dots: true,
    arrows: false,
    infinite: true, // Enable infinite scrolling for continuous looping
    speed: 500,
    slidesToShow: 4,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000, // Adjust the speed (in milliseconds) for auto sliding
    slidesToScroll: 1, // Scroll one slide at a time for better user experience
    responsive: [
      {
        breakpoint: 1190, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 950, // For smaller tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 620, // For small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };