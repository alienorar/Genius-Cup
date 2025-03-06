import Banner from "../../assets/openart-image_4mVinqhU_1741160713603_raw.jpg";
import FirstCard from "../../assets/iq-st.png"
import SecondCard from "../../assets/iq-nd.png"
import ThirdCard from "../../assets/iq-rd.jpg"
import FourthCard from "../../assets/iq-fth.jpg"
import EventsCard from "../../assets/image_2025-03-06_15-45-23.png"
import { HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa6";
import SwiperCarousel from "../../components/carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Index = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);
  
    const IqLevel = [
        {
            title: "O‘rtacha IQ darajasi",
            desc: "100 ga teng. Aholining katta qismi (taxminan 68%) 85 dan 115 gacha IQ darajasiga ega",
            icon: <HiOutlineLightBulb />,
            color: "text-[#00c674]",
            id: "beginner"
        },
        {
            title: "IQ va ta’lim darajasi ",
            desc: "oliy ma’lumotga ega bo‘lgan odamlarning o‘rtacha IQ darajasi 110-120 IQ oralig'ida",
            icon: <HiOutlineAcademicCap />,
            color: "text-[#c48016]",
            id: "middle"

        }, {
            title: "Moliyaviy muvaffaqiyat",
            desc: "IQ 130+ bo‘lganlar  o‘rtacha IQ darajasiga ega bo‘lganlarga qaraganda  2-3 barobar yuqori daromad qilishadi",
            icon: <HiOutlineCurrencyDollar />,
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
    return (
        <main>
          <section className="relative w-full h-[840px] overflow-hidden">
          <div className="relative">
      <img
        src={Banner}
        alt="banner image"
        className="w-full h-[840px] object-cover bg-top"
      />
      <motion.div
        initial={{ y: "100%" }} 
        animate={animate ? { y: "0%" } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-gray/40 backdrop-blur-xs pt-[200px]"
      >
        <h1 className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[150px] xl:text-[200px] 2xl:text-[210px] font-normal text-[#1E9FD9] text-center title-1">
          Genius Cup
        </h1>

        <p
          className="text-white banner-desc font-normal underline text-center text-[18px] sm:text-[22px] md:text-[26px] lg:text-[29px] py-4"
          style={{
            textShadow:
              "5px 5px 9px rgba(0, 0, 0, 0.7), 2px 2px 5px rgba(0, 0, 0, 0.7)",
          }}
        >
          Aql va zakovat sinovidan o‘tib, kelajak yetakchilariga aylaning!
        </p>
      </motion.div>
    </div>

</section>



<section className="p-6 grid grid-cols-1 lg:grid-cols-2 custom-container lg:mt-[100px] items-center justify-center gap-4">
  <div className="w-full">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left flex flex-col items-start justify-start gap-6 w-full"
    >
      <a
        href="#"
        className="text-base test-title sm:text-lg text-[#1E9FD9] py-1 underline font-semibold uppercase"
      >
        Aql-idrokingizni sinovdan o‘tkazing
      </a>
      <h1 className="text-2xl lg:text-[40px] sm:text-3xl md:text-4xl test-title text-gray-800 lg:w-[500px]">
        <span className="text-[#333] font-bold">IQ</span> – fikrlash va muammolarni hal qilish qobiliyatingiz{" "}
        <span className="text-[#333] font-bold">o‘lchovi</span>.
      </h1>
      <p className="text-sm sm:text-base md:text-lg test-title text-[#666] lg:w-[484px] whitespace-pre-line">
        IQ darajangiz – bu sizning fikrlash tezligingiz, muammolarni hal qilish qobiliyatingiz va intellektual salohiyatingizning kaliti. O‘z imkoniyatlaringizni kashf eting, yangi bilimlar bilan
        ongingizni charxlang va har kuni o‘zingizning eng yaxshi versiyangiz bo‘lishga intiling! Aql-u
        idrokingizni sinang – siz doim o'ylaganingizdan ham aqlliroqsiz!
      </p>
    </motion.div>
  </div>

  <div className="w-full flex flex-col gap-4 justify-center items-center">
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


            <section className=" bg-gray-100 my-[120px]">
               <div className="custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  text-center py-10">
               {IqLevel.map((item) => (
                    <div
                        key={item.title}
                        className="flex flex-col items-center justify-center bg-white p-6   "
                        id={item.id}
                    >
                        <div className={`icon-container`}>
                            {item.icon}
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
    <h2 className="text-2xl sm:text-3xl font-bold">Musobaqa bosqichlari</h2>
    <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
      «Genius Cup» IQ-turniri ikki bosqichda o'tkiziladi va quyida o'tkazish vaqtlari bilan tanishin
    </p>

    <div className="w-full custom-container flex flex-col gap-4 mt-10">
      {Events.map((item) => (
        <div
          key={item.title}
          className={`flex flex-col md:flex-row ${item.flex === "row-reverse" ? "md:flex-row-reverse" : ""} 
                                bg-white  overflow-hidden`}
        >
          <div className="w-full md:w-1/2">
            <img src={item.img} className="w-full h-full object-cover" />
          </div>

          <div className="w-full md:w-1/2 p-6 flex flex-col items-start gap-4 justify-baseline">
            <div className="flex gap-4 items-center text-gray-500 text-xs sm:text-sm md:text-base">
              <span className="text-base text-gray-800 font-semibold sm:text-lg">{item.dateTitle}:</span>

              <span className="font-bold text-lg sm:text-xl md:text-2xl text-[#1E9FD9]">{item.date}</span>
            </div>
            <span
              className={`text-xs sm:text-sm md:text-base font-medium mt-1 ${
                item.status === "Online" ? "text-green-400" : "text-red-600"
              }`}
            >
              {item.status}
            </span>

            <p className="text-gray-600 text-start text-xs sm:text-sm md:text-base mt-2">{item.desc}</p>

            <div className="mt-4 flex items-center gap-4">
              <a
                href={`https://t.me/${item.bot1.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E9FD9] text-[40px] sm:text-2xl hover:text-gray-600 transition"
              >
                <FaTelegram/>
              </a>
              <a
                href={`https://t.me/${item.bot2.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E9FD9] text-xl sm:text-2xl hover:text-gray-600 transition"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


            <section className=" px-4 py-16 lg:py-24 bg-gray-100">


                <div className="flex flex-col lg:flex-row items-center justify-between custom-container">
                    {/* Text Content */}
                    <div className="text-center lg:text-start mb-10 mt-10 lg:mb-16 organizers">
                        <h2 className="text-3xl font-bold font-sans  sm:text-4xl  text-gray-700 leading-tight">
                            TASHKILOTCHILAR
                        </h2>
                        <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            Biz sizning kelajingiz uchun qo'l uzatdik , siz buni javobsiz qoldirmaysiz degan umiddamiz!
                        </p>
                    </div>

                    {/* Swiper Carousel */}
                    <SwiperCarousel />
                </div>
            </section>


        </main>
    );
};

export default Index;