import React from "react";

const BlogCard = ({ date, category, author, title, description, image }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={image} alt={title} />
        <span className="blog-date">{date}</span>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <li className="blog-category">{category}</li>
          <span className="blog-author">{author}</span>
        </div>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
        <button className="more-about-button">READ MORE ➔</button>
      </div>
    </div>
  );
};

function BlogsSection () {
  const blogs = [
    {
      date: "08 Mar",
      category: "Nursery",
      author: "Wdtadmin",
      title: "The Ultimate Guide To Creating A Positive Classroom Environment.",
      description:
        "Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.",
      image: "image9.png",
    },
    {
      date: "08 Mar",
      category: "Nursery",
      author: "Wdtadmin",
      title: "Tips For Creating A Productive Study Space At Home For Kids.",
      description:
        "Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.",
      image: "image10.png",
    },
    {
      date: "08 Mar",
      category: "Kindergarten",
      author: "Wdtadmin",
      title:
        "Fun And Educational Activities To Boost Children's Learning Ability.",
      description:
        "Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.",
      image: "image11.png",
    },
  ];

  return (
    <section className="blogs-section">
      <h5 className="section-subtitle">NEWS & BLOGS</h5>
      <h2 className="section-title">
        Boosting The Development Of <br /> Children's Brain & Motor Skills
      </h2>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
