import NewsSt from "../../assets/news-1.png"
import NewsNd from "../../assets/news-2.png"
import NewsRd from "../../assets/news-3.png"
const newsData = [
  {
    date: "May 15, 2024",
    title: "Design Analysis & Evaluation Introduction to API",
    description:
      "Design Analysis & Evaluation Introduction to API Design Analysis & Evaluation Introduction to API",
    image:NewsSt,
    link: "#",
  },
  {
    date: "May 15, 2024",
    title: "Design Analysis & Evaluation Analysis & Evaluation",
    description:
      "Design Analysis & Evaluation Introduction to API Design Analysis & Evaluation Introduction to API",
    image:NewsNd,
    link: "#",
  },
  {
    date: "May 15, 2024",
    title: "Introduction to API Architecture Logos",
    description:
      "Design Analysis & Evaluation Introduction to API Design Analysis & Evaluation Introduction to API",
    image: NewsRd,
    link: "#",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto my-10 px-5">
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {newsData.map((news, index) => (
          <div key={index} className="bg-transparent border border-gray-200 rounded-2xl p-4">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-52 object-cover rounded-xl"
            />
            <p className="text-sm text-gray-500 mt-3">{news.date}</p>
            <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{news.description}</p>
            <a
              href={news.link}
              className="text-blue-600 font-medium mt-3 inline-block"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default NewsSection;
