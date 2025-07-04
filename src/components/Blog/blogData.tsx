import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Top 5 UI Frameworks to Build Modern Web Applications in 2025",
    paragraph:
      "Explore the most powerful and flexible UI frameworks that can accelerate your web development projects and improve user experience.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "ADMIN",
      image: "/images/blog/author-01.png",
      designation: "Frontend Engineer",
    },
    tags: ["Web Development", "UI/UX"],
    publishDate: "July 2025",
  },
  {
    id: 2,
    title: "How Cloud Computing is Revolutionizing Small Businesses",
    paragraph:
      "Discover how cloud technology is helping startups and SMEs cut costs, scale faster, and build more secure, resilient systems.",
    image: "/images/blog/blog-02.jpg",
    author: {
       name: "ADMIN",
      image: "/images/blog/author-02.png",
      designation: "Cloud Consultant",
    },
    tags: ["Cloud", "Technology"],
    publishDate: "June 2025",
  },
  {
    id: 3,
    title: "Proven Digital Marketing Strategies That Work in 2025",
    paragraph:
      "Learn the latest trends and proven tactics in digital marketing, from SEO to social media advertising, to grow your business online.",
    image: "/images/blog/blog-03.jpg",
    author: {
       name: "ADMIN",
      image: "/images/blog/author-03.png",
      designation: "Digital Marketing Strategist",
    },
    tags: ["Marketing", "SEO"],
    publishDate: "May 2025",
  },
];

export default blogData;
