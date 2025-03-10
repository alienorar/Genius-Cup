
import { useState } from "react";
import { FaFacebookF, FaInstagram ,FaUser} from "react-icons/fa";
import ArticleCard from "../../assets/article-card.png"
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialIcons = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  {icon: <FaTelegram/>, link:"https://t.me/Genius_cup_bot"},
];


const posts = [
  {
    id: 1,
    date: "Mar 20, 2018",
    title: "This is How I Relax on Lazy Sundays",
    image: ArticleCard,
    author: "Alice Johnson",
    content: "Lorem ipsum dolor sit amet,Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, con lorim ectetur Nulla fringilla purus at leo dignisntum accumsan leo vel tempor. Sit amet ukmi consectetur Nulla fringillat etur adipisicing elit at leo dignissim congue",
  },
  {
    id: 2,
    date: "Apr 25, 2018",
    title: "Going Shopping in New Dress & a Hat",
    image:ArticleCard,
    author: "Michael Roberts",
    content: "ShoppiLorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, con lorim ectetur Nulla fringilla purus at leo dignisntum accumsan leo vel tempor. Sit amet ukmi consectetur Nulla fringillat etur adipisicing elit at leo dignissim congue",
  },
  {
    id: 3,
    date: "Jan 18, 2019",
    title: "How an Island Forms in River And Stones",
    image: ArticleCard,
    author: "James Smith",
    content: "Did you know thaLorem ipsum dosectetur adipisicing elit, sed do.Lorem  ipsum dolor sit amet, con lorim ectetur Nulla fringilla purus at leo dignisntum accumsan leo vel tempor. Sit amet ukmi consectetur Nulla fringillat etur adipisicing elit at leo dignissim congue lorieiutitueruiterityrytui"
  },
];





const BlogPost = () => {
  const [selectedPost, setSelectedPost] = useState(posts[0]); // Default birinchi maqola

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
  };

  return (
    <section>
    {/* Banner */}
    <div className="article-banner h-[80vh]">

</div>
 <div>
  <nav className="text-gray-500 text-sm flex items-center space-x-2 py-6  custom-container">
      <span className="font-semibold text-gray-700"><Link to={"/"}> HOME</Link></span>
      <span className="font-[800] ">{">"}</span>
      <span className="text-[#1E9FD9]  font-semibold">OUR BLOG STYLE 4</span>
    </nav>
 </div>
    <div className="max-w-6xl mx-auto py-8 grid grid-cols-12 gap-6 my-[100px]  ">
      {/* Social Media Icons */}
      
      <div className="col-span-1 flex flex-col items-center space-y-3">
        <span className="text-gray-500 text-sm">🔗 45</span>
        {socialIcons.map((item, index) => (
          <a key={index} href={item.link} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition">
            {item.icon}
          </a>
        ))}
      </div>

      {/* Blog Content */}
      <div className="col-span-7">
        <div className="bg-gray-300 w-full h-[340px] flex items-center justify-center text-[#666] text-lg">
          <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
        </div>

        <div className="mt-4 flex items-center space-x-2">
          <span className="relative bg-[#1E9FD9] text-white text-sm px-3 py-1 rounded-full inline-block">
            {selectedPost.date}
            <span className="absolute top-1/2 right-[-2px] -translate-y-1/2 w-3 h-3 bg-[#1E9FD9] rotate-45"></span>
          </span>
          <span className="text-[#666] text-sm">🔖 Charity, poor, people, ideas</span>
        </div>

        {/* Blog Post Text */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
          <div className="flex items-center text-[#666] text-sm mt-2 space-x-3">
            <FaUser className="text-[#1E9FD9]"/>
            <span>{selectedPost.author}</span>
   
          </div>
          <p className="mt-4 text-[#666] lg:text-[17px] leading-relaxed">{selectedPost.content}</p>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="col-span-4 bg-gray-100 py-[30px] px-[20px]">
        <h3 className="font-bold text-lg mb-4 test-title">RECENT POSTS</h3>
        {posts.map((post, index) => (
          <div key={index} className="flex items-center space-x-3 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
            onClick={() => handlePostClick(post)}>
            <img src={post.image} alt={post.title} className="w-[75px] h-[75px] object-cover rounded-md bg-gray-300" />
            <div>
              <p className="text-[#666] text-sm">{post.date}</p>
              <p className="text-[#333] font-bold text-[18px]">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

    
  );
};

export default BlogPost;
