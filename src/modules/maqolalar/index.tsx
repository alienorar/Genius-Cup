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
    link: "maqolalar",
  },
  {
    date: "May 15, 2024",
    title: "Design Analysis & Evaluation Analysis & Evaluation",
    description:
      "Design Analysis & Evaluation Introduction to API Design Analysis & Evaluation Introduction to API",
    image:NewsNd,
    link: "maqolalar",
  },
  {
    date: "May 15, 2024",
    title: "Introduction to API Architecture Logos",
    description:
      "Design Analysis & Evaluation Introduction to API Design Analysis & Evaluation Introduction to API",
    image: NewsRd,
    link: "maqolalar",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {newsData.map((news, index) => (
          <div key={index} className="">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <p className="text-[#01284099] text-[17px]  mt-3">{news.date}</p>
            <h3 className="text-[#061A40] lg:text-[24px] md:text-[22px] text-[20px] font-bold ">{news.title}</h3>
            <p className="text-[#01284099] text-[17px]  mt-1">{news.description}</p>
            <a
              href={news.link}
              className="text-[#012840] font-medium text-[18px] mt-3 inline-block"
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
