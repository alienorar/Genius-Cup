import Banner from "../../assets/openart-image_4mVinqhU_1741160713603_raw.jpg";
import FirstCard from "../../assets/iq-st.png"
import SecondCard from "../../assets/iq-nd.png"
import ThirdCard from "../../assets/iq-rd.jpg"
import FourthCard from "../../assets/iq-fth.jpg"
import EventsCard from "../../assets/image_2025-03-06_15-45-23.png"
import SwiperCarousel from "../../components/carousel";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hat from "../../assets/hat.png"
import Finance from "../../assets/finance.jpg"
import Light from "../../assets/light.png"
import NewsCard from "../../assets/news-card.png"
const Index = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const IqLevel = [
    {
      title: "O‘rtacha IQ darajasi",
      desc: "100 ga teng. Aholining katta qismi (taxminan 68%) 85 dan 115 gacha IQ darajasiga ega",
      icon: Light,
      color: "text-[#00c674]",
      id: "beginner"
    },
    {
      title: "IQ va ta’lim darajasi ",
      desc: "oliy ma’lumotga ega bo‘lgan odamlarning o‘rtacha IQ darajasi 110-120 IQ oralig'ida",
      icon: Hat,
      color: "text-[#c48016]",
      id: "middle"

    }, {
      title: "Moliyaviy muvaffaqiyat",
      desc: "IQ 130+ bo‘lganlar  o‘rtacha IQ darajasiga ega bo‘lganlarga qaraganda  2-3 barobar yuqori daromad qilishadi",
      icon: Finance,
      color: "text-[#166cc4]",
      id: "master"
    }
  ]


  const Events = [
    { date: "20.04.2025", status: "Online", title: "Birinchi bosqich", dateTitle: "O'tkazish sanasi", desc: "Musobaqaninhg birinchi bosqichi online tarzda quyida keltirilgan telegram botlar orqali o'tkizilinadi. Musobaqada ishtirok etish uchun oldindan ro'yhatdan o'tib qo'yishingiz zarur!", bot1: "@Genius_cup_bot", bot2: "@Genius_cup2_bot", img: EventsCard, },
    {
      date: "20.04.2025", status: "Offline", title: "Birinchi bosqich", dateTitle: "O'tkazish sanasi", desc: "Musobaqaninhg ikkinchi bosqichi Osiyo texnologiyalar binosida o'tkizilinadi. \n" +
        "ikkinchi bosqichga tavsiya etilganlar o'zlari bilan shaxslarini tasdiqlovchi hujjjatlarni belgilangan vaqtdan kechikmagan holda olib kelishi zarur!", bot1: "@Genius_cup_bot", bot2: "@Genius_cup2_bot", img: EventsCard, flex: "row-reverse"
    }
  ]

  const blogs = [
    {
      date: "May 15, 2019",
      imageSrc: NewsCard,
      title: "Highlight some of the fundraising",
      author: "James Smith",
    },
    {
      date: "Jun 20, 2019",
      imageSrc: NewsCard,
      title: "Charity Law & Regulation and Social Enterprise",
      author: "James Smith",
    },
    {
      date: "Aug 25, 2019",
      imageSrc: NewsCard,
      title: "Highlight some of the fundraising",
      author: "James Smith",
    },
  ];

  const table_data = [
    {
      id: 1,
      grade: (
        <>
          <span className="font-bold text-[#333]">3 - 4 - 5</span> - SINF O'QUVCHILARI

        </>),
      location: "TELEGRAM BOTLAR ORQALI ",
      date: "20-APREL",
      time: "9:00 DAN 10:00 GA QADAR",
    },
    {
      id: 2,
      grade: (
        <>
          <span className="font-bold text-[#333]">6 - 7 - 8</span> - SINF O'QUVCHILARI HAMDA <br />

        </>),
      location: "TELEGRAM BOTLAR ORQALI ",
      date: "20-APREL",
      time: "11:00 DAN 12:00 GA QADAR",
    },
    {
      id: 3,
      grade: (
        <>
          <span className="font-bold text-[#333]">9 - 10 - 11</span> - SINF O'QUVCHILARI HAMDA <br />
          <span className="font-bold text-[#333]">1 - 2</span> - BOSQICH AKADEMIK LITSEY TALABALARI
        </>
      ),
      location: "TELEGRAM BOTLAR ORQALI ",
      date: "20-APREL",
      time: "11:00 DAN 12:00 GA QADAR",
    },
  ];
  return (
    <main>
      <section className="relative w-full h-[780px] overflow-hidden">
        <div className="relative">
          <img
            src={Banner}

            alt="banner image"
            className="w-full h-[780px] object-cover bg-top"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={animate ? { y: "0%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray/40 backdrop-blur-[2px] pt-[200px]"
          >
            <h1 className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[100px] xl:text-[160px] 2xl:text-[180px] font-normal text-[#1E9FD9] text-center title-1">
              Genius Cup
            </h1>

            <p
              className="text-white banner-desc font-normal underline text-center text-[18px] sm:text-[22px] md:text-[26px] lg:text-[25px] py-4"
              style={{
                textShadow:
                  "5px 5px 9px rgba(0, 0, 0, 0.7), 2px 2px 5px rgba(0, 0, 0, 0.7)",
              }}
            >
              "Aql va zakovat sinovidan o‘tib, kelajak yetakchilariga aylaning!"
            </p>
          </motion.div>
        </div>

      </section>



      <section className="p-4 grid grid-cols-1 lg:grid-cols-2 custom-container lg:mt-[90px] items-center justify-center gap-4">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left flex flex-col items-start justify-start gap-6 w-full"
          >
            <a
              href="#"
              className="text-[16px] test-title sm:text-lg text-[#1E9FD9] py-1 text-center lg:text-start  underline font-semibold uppercase"
            >
              Aql-idrokingizni sinovdan o‘tkazing
            </a>
            <h1 className="text-2xl lg:text-[40px] sm:text-3xl md:text-4xl test-title text-gray-800 lg:w-[535px]">
              <span className="text-[#333] font-bold">IQ</span> – darajangizni biz bilan
              <span className="text-[#333] px-2 font-bold">o‘lchang</span>.
            </h1>
            <p className="text-sm sm:text-base md:text-lg test-title text-[#666] lg:w-[500px]  whitespace-pre-line">
              IQ darajangiz – bu sizning fikrlash tezligingiz, muammo
              larni hal qilish qobiliyatingiz va intellektual salohiyatingizning kaliti. O‘z imkoniyatlaringizni kashf eting, yangi bilimlar bilan
              ongingizni charxlang va har kuni o‘zingizning eng yaxshi versiyangiz bo‘lishga intiling! Aql-u
              idrokingizni sinang – siz doim o'ylaganingizdan ham aqlliroqsiz!
            </p>
          </motion.div>
        </div>

        <div className="w-full flex flex-col gap-4 justify-center items-center pt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 items-end"
          >
            <img src={FirstCard} alt="First Card" className="w-[271px] h-[290px] object-cover" />
            <img src={SecondCard} alt="Second Card" className="h-[210px] w-[271px] object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="grid lg:grid-cols-2 md:grid-cols-2 items-start gap-4"
          >
            <img src={ThirdCard} alt="Third Card" className="h-[210px] w-[271px] object-cover" />
            <img src={FourthCard} alt="Fourth Card" className="w-[271px] h-[290px] object-cover" />
          </motion.div>
        </div>
      </section>


      <section className=" bg-gray-100 lg:my-[120px]">
        <div className="custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  text-center py-10">
          {IqLevel.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center bg-white p-6   "
              id={item.id}
            >
              <div className={`icon-container`}>
                <img src={item.icon} alt="item-icon" className="w-[80px] h-[80px]" />
              </div>
              <h3 className={`text-xl text-[30px] font-bold mt-4 ${item.color}`}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="events">
        <div className="inset-1.5 bg-white/70 backdrop-blur-xs text-center py-10">
          <h2 className="lg:text-[45px] sm:text-3xl font-bold text-[#333]">
            Musobaqa bosqichlari
          </h2>
          <p className="text-[#666] mt-2 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            «Genius Cup» IQ-turniri ikki bosqichda o'tkiziladi va quyida o'tkazish vaqtlari bilan tanishing
          </p>

          <div className="w-full custom-container flex flex-col gap-6 mt-10">
            {Events.map((item) => (
              <div
                key={item.title}
                className={`flex flex-col gap-5 md:flex-row ${item.flex === "row-reverse" ? "md:flex-row-reverse" : ""
                  } bg-white overflow-hidden`}
              >
                {/* Image Section */}
                <div className="w-full md:w-[690px]">
                  <div className="flex items-center justify-center ">
                    <div className=" bg-white rounded-lg overflow-hidden py-4 px-3">
                      {/* Table */}
                    <div className="border border-[#1E9FD9] rounded-lg">
                    <table className="table-fixed min-h-[40vh] rounded-lg">
                        {/* Header */}
                        <thead>
                          <tr className="bg-[#48b8ec] text-white text-center font-mono font-stretch-condensed font-semibold test-title rounded-lg ">
                            <th className="py-4 px-6 text-[16px]  font-[400] rounded-tl-lg  test-title border-white">O'QITISH SANASI</th>
                            <th className="py-4 px-6 text-[16px]  test-title font-[400] border-white">O'TKAZILISH MANZILI</th>
                            <th className="py-4 px-6 text-[16px] test-title rounded-tr-lg font-[400]">VAQTLARI</th>
                          </tr>
                        </thead>
                        {/* Body */}
                        <tbody>
                          {table_data.map((row, index) => (
                            <tr
                              key={row.id}
                              className={`${index === 1 ? "bg-blue-100  hover:bg-blue-200 transition" : "bg-transparent  hover:bg-blue-100 h-[50px] transition"
                                }`}
                            >
                              <td className="py-2 px-6 text-[#333] text-[16px] lowercase  ">
                                <span className="text-[#666]">{row.grade}</span>
                              </td>
                              <td className="py-2 px-6 text-[#333]  lowercase  text-[16px]">
                                {row.location}
                                <span className="font-semibold text-[#333]">ONLINE</span>
                              </td>
                              <td className="py-2 px-6 text-[#666]   lowercase text-[16px]">
                                <span className="font-bold text-[#333]">{row.date}</span> <br />
                                {row.time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    </div>

                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 px-1.5 py-4 sm:py-6 flex flex-col items-start gap-3 sm:gap-4 justify-baseline">
                  {/* Date Section */}
                  <div className="flex gap-2 sm:gap-4 items-center text-gray-500 text-xs sm:text-sm md:text-base">
                    <span className="text-[#333] font-bold text-sm sm:text-lg md:text-2xl">
                      {item.dateTitle}:
                    </span>
                    <span className="font-bold text-sm sm:text-lg md:text-2xl text-[#1E9FD9]">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#333] hover:text-[#1E9FD9] transition-all ease-linear">
                    {item.status === "Online" ? "Birinchi bosqich: Online" : "Ikkinchi bosqich: Offline"}
                  </p>

                  {/* Description */}
                  <p className="lg:w-[460px] text-[#666] text-start text-xs sm:text-sm md:text-base lg:text-[20px] mt-2">
                    {item.desc}
                  </p>

                  {/* Telegram Button */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4">
                    <a
                      href={`https://t.me/${item.bot1.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block w-full py-2 px-4 text-[#1E9FD9] font-bold border-2 border-[#1E9FD9] rounded-full overflow-hidden transition-all duration-300 group"
                    >
                      <span className="absolute inset-0 bg-[#1E9FD9] scale-0 rounded-lg origin-center transition-transform duration-300 group-hover:scale-100"></span>
                      <span className="relative z-10 group-hover:text-white">
                        Telegram sahifa
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" px-4 py-16 lg:py-20 bg-gray-100">
        <div className="flex flex-col lg:flex-row items-center justify-between custom-container">
          {/* Text Content */}
          <div className="text-center lg:text-start mb-10 mt-10 lg:mb-16 organizers test-title">
            <h2 className="text-3xl font-bold test-title lg:text-[45px] lg:w-[350px] sm:text-4xl  text-[#333] leading-tight">
              TASHKILOTCHILAR
            </h2>
            <p className="mt-3 text-lg sm:text-xl lg:w-[450px] text-[#666] max-w-2xl lg:text-[25px] mx-auto">
              Biz sizning kelajingiz uchun qo'l uzatdik , siz buni javobsiz qoldirmaysiz degan umiddamiz!
            </p>
          </div>

          {/* Swiper Carousel */}
          <SwiperCarousel />
        </div>
      </section>
      <section className="custom-container">
        <div className="my-[100px]  py-10">
          <div className="container mx-auto px-4">
            <h1 className="lg:text-[45px] md:text-[35px] sm:text-[25px] text-[22px] font-bold text-center text-[#333] mb-1">Latest Blogs</h1>
            <p className="lg:text-[18px] md:text-[17px] sm:text-[15px]  text-[#666] text-center mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, incidunt.</p>
            <div className="flex flex-wrap justify-between items-center gap-6">
              {blogs.map((blog, index) => (
                <div key={index} className="w-[280px] flex flex-col py-4 justify-between mx-auto">
                  <div className="relative ">
                    <img src={blog.imageSrc} alt={blog.title} className="w-[280px] h-[270px] object-cover " />
                    <span className="absolute top-15 rounded-[30px] -left-9 bg-indigo-900 text-white text-sm px-3 py-2">
                      {blog.date}
                      <span className="absolute top-1/2 right-[-2px] -translate-y-1/2 w-3 h-3 bg-indigo-900 rotate-45"></span>
                    </span>
                  </div>
                  <Link to={"maqolalar"} className="mt-4 text-[22px] test-title font-semibold hover:text-[#1E9FD9] text-[#333]">{blog.title}</Link>
                  <div className="flex items-center gap-4 text-[15px] font-semibold text-[#666] mt-2">
                    <p className="flex items-center gap-1">
                      <FaUser className=" text-[#1E9FD9] text-[19px]" /> {blog.author}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;