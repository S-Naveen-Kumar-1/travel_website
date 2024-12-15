import React from "react";
import styled from "styled-components";

// Sample blog data
const blogs = [
    {
        id: 6,
        title: "The Beauty of Pahalgam: Kashmir's Jewel",
        description:
          "Pahalgam, a beautiful town in Kashmir, is known for its scenic beauty and peaceful environment. With its rivers, lush meadows, and pine forests, Pahalgam offers a perfect getaway for those looking to escape the hustle and bustle of city life.",
        imageUrl: "https://via.placeholder.com/300x200", // Placeholder image
        authorImage: "https://via.placeholder.com/50", // Placeholder author image
        authorName: "Sania Mirza", // Author name
      },
    {
        id: 4,
        title: "Discovering Kashmir: A Paradise on Earth",
        description:
          "Kashmir, often referred to as 'Paradise on Earth,' offers a breathtaking landscape with its snow-capped mountains, lush valleys, and pristine lakes. From the famous Dal Lake in Srinagar to the serene meadows of Gulmarg, Kashmir is a must-visit destination for nature lovers and adventure seekers.",
        imageUrl: "https://via.placeholder.com/300x200", // Placeholder image
        authorImage: "https://via.placeholder.com/50", // Placeholder author image
        authorName: "Amina Khan", // Author name
      },
      {
        id: 5,
        title: "Exploring the Beautiful Meadows of Gulmarg",
        description:
          "Gulmarg, a stunning hill station in Kashmir, is known for its lush green meadows, snow-capped peaks, and the famous Gulmarg Gondola. It’s a perfect destination for skiing in the winter and trekking in the summer, offering an unforgettable experience in every season.",
        imageUrl: "https://via.placeholder.com/300x200", // Placeholder image
        authorImage: "https://via.placeholder.com/50", // Placeholder author image
        authorName: "Imran Ali", // Author name
      },
     
   
  ];
  

const Blogs = () => {
  return (
    <TravelBlogsContainer>
      <TitleContent>
        <Title>Travel Blogs</Title>

        <Header>
          <p>Insights, tips, and stories to inspire your travels.</p>
          <ViewAllLink href="/blogs">View All Blogs</ViewAllLink>
        </Header>
      </TitleContent>

      <BlogsSection>
        <MainBlog>
          <BlogImage src={blogs[0].imageUrl} alt={blogs[0].title} />
          <BlogTitle>{blogs[0].title}</BlogTitle>
          <BlogDescription>{blogs[0].description}</BlogDescription>

          {/* Author info for the first blog */}
          <AuthorSection>
            <AuthorImage src={blogs[0].authorImage} alt={blogs[0].authorName} />
            <AuthorName>{blogs[0].authorName}</AuthorName>
          </AuthorSection>
        </MainBlog>

        <SideBlogs>
          {blogs.slice(1).map((blog) => (
            <Blog key={blog.id}>
              <BlogContent>
                <BlogImage src={blog.imageUrl} alt={blog.title} />
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDescription>{blog.description}</BlogDescription>
              </BlogContent>
            </Blog>
          ))}
        </SideBlogs>
      </BlogsSection>
    </TravelBlogsContainer>
  );
};

export default Blogs;

const TravelBlogsContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
`;

const TitleContent=styled.div`
    padding: 10px;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
  text-align: left;
  width: 100%;
`;

const ViewAllLink = styled.button`
  color: blue;
`;

const BlogsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px; /* Limit width on large screens */
`;

const MainBlog = styled.div`
  flex: 1;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  margin-bottom: 20px;
`;

const SideBlogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  max-width: 400px;
  align-items: center;
`;

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const BlogContent = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlogTitle = styled.h3`
  margin: 10px 0;
`;

const BlogDescription = styled.p`
  color: #555;
  text-align: center;
  flex-grow: 1;
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  text-align: left;
  width: 100%;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-size: 16px;
  color: #555;
`;
