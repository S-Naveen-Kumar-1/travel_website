import Aos from "aos";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const blogs = [
  {
    id: 1,
    title: "Exploring the Beauty of Kashmir",
    description:
      "Discover the serene valleys, snow-capped mountains, and pristine lakes that make Kashmir the 'Paradise on Earth.'",
    detailedDescription: `
      Kashmir, often referred to as 'Heaven on Earth,' is a land of breathtaking beauty. From the serene Dal Lake to the snow-capped peaks of Gulmarg, every corner of Kashmir is a feast for the senses. The region offers a wide variety of experiences, from the tranquil houseboats on Dal Lake to the adventure-filled slopes of Gulmarg.

      The lush green valleys, like Pahalgam and Sonamarg, provide the perfect backdrop for a peaceful retreat. Visitors can enjoy a shikara ride on the placid waters of Dal Lake, or take a stroll through the vibrant Mughal gardens that are a testament to the region's rich history.

      Whether you're seeking adventure or tranquility, Kashmir offers a unique blend of both. Trekking through the Himalayan foothills, skiing on the snowy slopes of Gulmarg, or simply sitting by the lake with a cup of saffron tea, Kashmir has something for everyone. The hospitality of the locals and the rich cultural heritage make it an unforgettable experience.

      In addition to its natural beauty, Kashmir is also home to a rich cultural heritage. The region's handicrafts, like Pashmina shawls and Kashmiri carpets, are world-renowned. The food is equally rich, with the famous Wazwan feast offering a taste of traditional Kashmiri dishes like Rogan Josh, Gushtaba, and Yakhni.

      Whether you are an adventure seeker, a nature lover, or a culture enthusiast, Kashmir offers an experience like no other. The landscapes are stunning, the people are warm, and the memories you create will last a lifetime.
    `,
    photos: [
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQJIvQpHUKIk0olqxEfhJNhn547qw7IQ9NIy22Grfjmi_-JAy4petzvnNZ7STYO3bWQGzdAI3_YGLv-zPPm0UcmDv28XlRuZCMtt-aycw",
      "https://via.placeholder.com/600x400?text=Dal+Lake",
      "https://via.placeholder.com/600x400?text=Snow+Capped+Mountains",
    ],
    authorName: "Rohit Sharma",
    authorImage:
      "https://i3.wp.com/www.probatsman.com/wp-content/uploads/2023/06/Rohit-Sharma.jpg?strip=all", // Placeholder author image
    totalLikes: 120,
    comments: [
      {
        text: "This place is so beautiful! I would love to visit Kashmir someday.",
        authorName: "Alice",
        timestamp: "2025-01-01T10:30:00Z",
      },
      {
        text: "The description of Dal Lake is so serene. Kashmir is on my bucket list!",
        authorName: "Bob",
        timestamp: "2025-01-02T14:15:00Z",
      },
    ],
  },
  {
    id: 2,
    title: "A Journey to Dal Lake",
    description:
      "Experience the tranquility of Dal Lake, ride a shikara, and stay in a traditional houseboat.",
    detailedDescription: `
      Dal Lake is the crown jewel of Srinagar, offering a peaceful retreat from the hustle of everyday life. The lake is dotted with houseboats and shikaras, making it a unique experience for visitors. The reflection of the snow-capped mountains on the water's surface creates a surreal scene that is truly unforgettable.

      A shikara ride on Dal Lake is an experience like no other. As you glide through the calm waters, surrounded by floating gardens and houseboats, you can enjoy the tranquility that this picturesque lake offers. The early morning mist rising from the lake and the sound of the boatman's paddle cutting through the water make for a serene and magical atmosphere.

      Staying in a houseboat on Dal Lake is another must-do experience. These traditional wooden boats are equipped with all the comforts of a hotel, yet offer a unique and intimate experience. The interiors are beautifully decorated with Kashmiri carpets and intricately carved woodwork, giving you a taste of the region's rich heritage.

      In addition to its natural beauty, Dal Lake is also home to several cultural attractions. The floating market on the lake is a must-see, where vendors sell flowers, vegetables, and handicrafts directly from their boats. The nearby Mughal gardens, like Nishat Bagh and Shalimar Bagh, are perfect for a leisurely walk and offer stunning views of the lake.

      Whether you're here for a romantic getaway or a peaceful retreat, Dal Lake offers an experience that will stay with you long after you've left.
    `,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwPzwY59hbrMA9jVd1mg5nUoZR560iE2XYQ&s",
      "https://via.placeholder.com/600x400?text=Houseboat",
      "https://via.placeholder.com/600x400?text=Dal+Lake+Sunrise",
    ],
    authorName: "Virat Kholi",
    authorImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRfkO7EMBYM1zBLptL1xFDXi9VWFTsoWbOg&s",
    totalLikes: 85,
    comments: [
      {
        text: "I can imagine how peaceful it must be to stay in a houseboat!",
        authorName: "Charlie",
        timestamp: "2025-01-03T09:45:00Z",
      },
      {
        text: "Dal Lake is a dream destination! This article really brings it to life.",
        authorName: "David",
        timestamp: "2025-01-04T11:00:00Z",
      },
    ],
  },
  {
    id: 3,
    title: "The Splendor of Gulmarg",
    description:
      "Gulmarg, the meadow of flowers, is a haven for adventure enthusiasts and nature lovers alike.",
    detailedDescription: `
      Gulmarg, which means 'Meadow of Flowers,' is a paradise for adventure seekers and nature enthusiasts. Located in the Pir Panjal range, this picturesque destination is known for its lush green meadows, snow-covered mountains, and breathtaking views. During the summer, the meadows are covered in vibrant wildflowers, creating a colorful tapestry that stretches as far as the eye can see.

      Gulmarg is also a haven for winter sports enthusiasts. The region transforms into a skiing destination during the winter months, attracting tourists from around the world. The Gulmarg Gondola, one of the highest cable cars in the world, takes visitors to the top of Mount Apharwat, where they can enjoy panoramic views of the surrounding mountains and valleys.

      Skiing in Gulmarg is an unforgettable experience. The slopes are perfect for both beginners and experienced skiers, and the snow conditions are ideal for a thrilling ride down the mountain. If skiing isn't your thing, you can also enjoy other winter activities like snowboarding, snowshoeing, and sledging.

      In addition to winter sports, Gulmarg offers a range of other activities, including trekking, golfing, and horse riding. The region is also home to several scenic spots, like the frozen Alpather Lake and the charming St. Mary's Church.

      Gulmarg is a place where nature and adventure come together in perfect harmony. Whether you're looking to relax in the meadows or get your adrenaline pumping on the slopes, Gulmarg offers something for everyone.
    `,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MeBkQzGEovk8KVKtqIR_B1BL7EYat6N6og&s",
      "https://via.placeholder.com/600x400?text=Gulmarg+Gondola",
      "https://via.placeholder.com/600x400?text=Skiing+in+Gulmarg",
    ],
    authorName: "Elon Musk",
    authorImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7QN7mNoJwm0XjwMXKcGbVokxaTRAksF9bA&s",
    totalLikes: 200,
    comments: [
      {
        text: "I love skiing! Gulmarg sounds like the perfect place for it.",
        authorName: "Eve",
        timestamp: "2025-01-05T08:30:00Z",
      },
      {
        text: "The views from the Gulmarg Gondola must be incredible.",
        authorName: "Frank",
        timestamp: "2025-01-05T12:00:00Z",
      },
    ],
  },
  {
    id: 4,
    title: "The Charm of Leh-Ladakh",
    description:
      "Explore the rugged beauty of Leh-Ladakh, a high-altitude desert with breathtaking landscapes.",
    detailedDescription: `
      Leh-Ladakh, a region in northern India, is known for its stark landscapes and unique culture. Surrounded by the towering peaks of the Himalayas and the Karakoram range, Leh-Ladakh offers some of the most stunning landscapes in the world. The high-altitude desert is dotted with ancient monasteries, crystal-clear lakes, and pristine valleys.

      One of the most famous attractions in Leh-Ladakh is Pangong Lake, which stretches across the border between India and China. The lake is known for its shimmering blue waters and stunning surroundings. Another must-visit destination is Nubra Valley, where you can experience the beauty of the desert and snow-capped peaks in one place.

      Leh-Ladakh is also famous for its Buddhist culture. The region is home to several monasteries, such as the Hemis Monastery and Thiksey Monastery, where you can learn about the region's rich spiritual heritage.

      Whether you're trekking through the rugged mountains, visiting ancient monasteries, or simply enjoying the tranquil beauty of the landscape, Leh-Ladakh offers an experience that is truly one of a kind.
    `,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQBChJ-Rb2yRePGGuW3aQH-MRZLpnoi57TA&s",
      "https://via.placeholder.com/600x400?text=Pangong+Lake",
      "https://via.placeholder.com/600x400?text=Nubra+Valley",
    ],
    authorName: "Salman Khan",
    authorImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHneBhCTBZSdmVaoVlPJsrsApOv8nnv-V30A&s",
    totalLikes: 175,
    comments: [
      {
        text: "Leh-Ladakh is on my bucket list! The landscapes look unreal.",
        authorName: "Samantha",
        timestamp: "2025-01-06T09:00:00Z",
      },
      {
        text: "I would love to visit Pangong Lake one day. It looks so peaceful.",
        authorName: "Raj",
        timestamp: "2025-01-06T13:00:00Z",
      },
    ],
  },
  {
    id: 5,
    title: "The Mystical Spiti Valley",
    description:
      "Discover the hidden gem of Himachal Pradesh, Spiti Valley, known for its rugged terrain and monasteries.",
    detailedDescription: `
      Spiti Valley, located in the northern part of Himachal Pradesh, is a mystical land that remains largely untouched by modern civilization. Surrounded by towering peaks and ancient monasteries, Spiti offers a unique blend of natural beauty and spiritual serenity.

      The valley is home to several monasteries, including the famous Key Monastery, which is perched high on a hill and offers panoramic views of the surrounding landscape. The Tabo Monastery, one of the oldest in the region, is known for its ancient murals and sculptures.

      Spiti is also known for its harsh terrain, with high-altitude deserts and rugged mountain passes. The region is ideal for trekkers and adventure enthusiasts looking for a challenge. The landscapes are awe-inspiring, with vast stretches of barren land, dotted with small villages and monasteries.

      Whether you're looking to explore the region's rich culture, embark on a challenging trek, or simply enjoy the tranquility of the landscape, Spiti Valley offers a unique and unforgettable experience.
    `,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvczAwlnKgAo5mkVoOCR4HzMUDdyxLLgpVPA&s",
      "https://via.placeholder.com/600x400?text=Key+Monastery",
      "https://via.placeholder.com/600x400?text=Spiti+Valley+Trekking",
    ],
    authorName: "Under Taker",
    authorImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_fbYYhIOwOhkXO7xj9KKYPWVzGoXdWpd1A&s",
    totalLikes: 210,
    comments: [
      {
        text: "Spiti Valley looks so peaceful and remote. I would love to visit.",
        authorName: "Nina",
        timestamp: "2025-01-06T10:30:00Z",
      },
      {
        text: "The monasteries in Spiti are fascinating. I hope to visit one day.",
        authorName: "Vikram",
        timestamp: "2025-01-06T14:00:00Z",
      },
    ],
  },
];

const BlogListing = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    navigate(`/blogs/${blog.id}`, { state: { blog } });
  };

  return (
    <div className="p-5 flex flex-col items-center justify-center w-[95%]">
      <h1 className="text-3xl font-bold mb-5">Travel Blogs</h1>
      <p className="text-gray-600 mb-10">
        Explore insights, tips, and stories about Kashmir's beauty and culture.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => handleBlogClick(blog)}
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={blog.photos[0]}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 line-clamp-3 text-center mb-4">
              {blog.description}
            </p>

            {/* Author Info */}
            <div className="flex items-center mb-4">
              <img
                src={blog.authorImage}
                alt={blog.authorName}
                className="w-10 h-10 object-cover rounded-full mr-3"
              />
              <span className="text-sm font-medium text-gray-700">
                {blog.authorName}
              </span>
            </div>

            {/* Read Blog Button */}
            <button
              onClick={() => handleBlogClick(blog)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Read Blog
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
