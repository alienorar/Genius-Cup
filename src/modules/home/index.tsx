import YellowSpot from "../../assets/Ellipse 2.svg"
import Brain from "../../assets/brain.png"
import Arrow from "../../assets/arrow.png"
import BlueSpot from "../../assets/ellipse1.png"
import IqSt from "../../assets/iq-st.png"
import Iqnd from "../../assets/iq-nd.png"
import AverageIq from "../../assets/average-it.png"
import KnowledgeIq from "../../assets/study-iq.png"
import FinanceIq from "../../assets/finance-iq.png"
import Symbol from "../../assets/symbol.png"
import OtuLogo from "../../assets/otu-logo.png"
import ArrowWhite from "../../assets/arrow.svg"
import WhiteSpot from "../../assets/Ellipse 4.svg"

const Index = () => {

  const iqData = [
    {
      title: "O‘rtacha IQ Darajasi",
      description:
        "100 ga teng. Aholining katta qismi (taxminan 68%) 85 dan 115 gacha IQ darajasiga ega",
      imgSrc:AverageIq, 
      color: "text-blue-600",
    },
    {
      title: "IQ va Ta’lim Darajasi",
      description:
        "Oliy ma’lumotga ega bo‘lgan odamlarning o‘rtacha IQ darajasi 110-120 IQ oralig‘ida",
      imgSrc:KnowledgeIq, 
      color: "text-purple-600",
    },
    {
      title: "Moliyaviy Muvaffaqiyat",
      description:
        "IQ 130+ bo‘lganlar boshqalarga qaraganda 2-3 barobar yuqori daromad qilishadi",
      imgSrc:FinanceIq, 
      color: "text-green-600",
    },
  ];

  const stages = [
    {
      title: "Birinchi bosqich",
      description:
        "Musobaqaning birinchi bosqichi online tarzda quyida keltirilgan telegram botlar orqali o'tkaziladi. Musobaqada ishtirok etish uchun oldindan ro'yxatdan o'tib qo'yishingiz zarur!",
      type: "Online",
      date: "20.04.2025",
      buttonText: "Ro‘yxatdan o‘tish",
      bgColor: "bg-white",
    },
    {
      title: "Ikkinchi bosqich",
      description:
        "Musobaqaning ikkinchi bosqichi offline tarzda o'tkaziladi. Musobaqada ishtirok etish uchun oldindan ro'yxatdan o'tib qo'yishingiz zarur!",
      type: "Offline",
      date: "20.04.2025",
      buttonText: "Ro‘yxatdan o‘tish",
      bgColor: "bg-white",
    },
  ];

  const schedule = [
    { grades: <span className="font-bold text-black block">3-4-5</span>, description: "Sinf o’quvchilari", location: <span className="font-bold text-black block">Online</span>, date: <span className="font-bold text-black block">20-aprel</span>, time: "9:00dan 10:00gacha" },
    { grades: <span className="font-bold text-black block">6-7-8</span>, description: "Sinf o’quvchilari", location: <span className="font-bold text-black block">Online</span>, date: <span className="font-bold text-black block">20-aprel</span>, time: "11:00dan 12:00gacha" },
    { grades: <span className="font-bold text-black block">9-10-11</span>, description: "Sinf o’quvchilari", location: <span className="font-bold text-black block">Online</span>, date: <span className="font-bold text-black block">20-aprel</span>, time: "11:00dan 12:00gacha" },
    { grades: <span className="font-bold text-black block">1-2</span>, description: "Bosqich akademik litsey talabalari", location: <span className="font-bold text-black block">Online</span>, date: <span className="font-bold text-black block">20-aprel</span>, time: "11:00dan 12:00gacha" },
  ];

  const organizers = [
    {
      name: "Qashqadaryo Viloyati Hokimligi",
      logo:Symbol,
      link: "#",
    },
    {
      name: "Osiyo Texnologiyalar Universiteti",
      logo:OtuLogo,
      link: "#",
    },
  ];


  return (
    <main>
      <section className="custom-container">
        <div className="flex flex-col justify-center items-center gap-[20px] pt-[60px]">
          <div>
            <div className="flex justify-between items-end">
              <img src={YellowSpot} alt="yellow spot" />
              <img src={Brain} alt="brain" />
            </div>

            <h1 className="poppin text-[56px] text-center font-bold text-black">"Aql va zakovat sinovidan o‘tib, kelajak yetakchilariga aylaning!"</h1>
            <div className=" flex items-end px-[40px] justify-around ">
              <img src={Arrow} alt="arrow icon" />
              <p className=" text-[#00000099] text-lg text-[22px] font-[400] text-center poppins">Bilimingizni sinang, mantiqiy fikrlash qobiliyatingizni oshiring va kelajak yetakchilari qatoridan joy oling!
                Intellektual sinovlar orqali o‘z imkoniyatlaringizni kashf eting!</p>
              <img src={BlueSpot} alt="Blue spot" />
            </div>
          </div>
          <button className="relative h-12 w-40 overflow-hidden border-[2px] border-[#1E9FD9] text-[16px] rounded-[30px] text-[#1E9FD9] font-[500] poppin  transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#1E9FD9] before:duration-300 before:ease-out hover:text-white hover:shadow-[#1E9FD9] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
            <a href="https://t.me/Genius_cup_bot" target="_blank" rel="noopener noreferrer" className="relative z-10">
              Ro'yxatdan O'tish
            </a>
          </button>
        </div>
        <div className="bg-gradient-to-br from-[#E7ECFF]  to-[#dde3f8] p-[60px] rounded-[30px] my-[120px] flex items-center justify-center h-[608px] relative">
          <div className="absolute top-10 left-9 w-18 h-18 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          <div className="relative bg-transparent rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border-[4px] border-dashed border-[#FFFFFF]  w-full">
            {/* Dashed Border Effect */}
            
            <div className=" rounded-2xl p-6 md:p-10 flex flex-col bg-white relative gap-2">
              {/* Title */}
              <h4 className="text-[#1E9FD9] poppin font-medium text-sm md:text-base">
                Aql-idrokingizni sinovdan o‘tkazing
              </h4>
              <h2 className="text-[#061A40] text-[32px] md:text-3xl font-bold mt-2">
                IQ – darajangizni biz bilan o‘lchang.
              </h2>

              {/* Description */}
              <p className="text-[#01284099]  text-[18px] font-[400] poppins">
                IQ darajangiz – bu sizning fikrlash tezligingiz, muammolarni hal qilish qobiliyatingiz
                va intellektual salohiyatingizning kaliti. O‘z imkoniyatlaringizni kashf eting, yangi
                bilimlar bilan ongingizni charxlang va har kuni o‘zingizning eng yaxshi versiyangiz bo‘lishga
                intiling! Aql-u idrokingizni sinang – siz doim o‘ylaganingizdan ham aqilliroqsiz!
              </p>

              {/* Floating Images */}
              <img
                src={Iqnd}
                alt="Child with Abacus"
                className="absolute top-[-100px] right-[-90px] w-[300px] md:w-[240px]  md:h-[180px] object-cover rounded-xl shadow-lg"
              />
              <img
                src={IqSt}
                alt="Kids Experimenting"
                className="absolute bottom-[-150px] left-[-90px] w-[300px] md:w-[240px] md:h-[180px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          
        </div>
      </section>
      <section className="bg-[#F7FAFF] py-16 " >
        <div className="custom-container poppin">
          <div className=" text-center">
            {/* Section Title */}
            <h2 className="text-[#061A40] text-3xl md:text-4xl font-bold">
              IQ, Ta’lim va Muvaffaqiyat
            </h2>

            {/* Three Card Sections */}
            <div className="flex flex-col lg:flex-row items-center justif-center gap-5 mt-12">
              {iqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-transparent px-4 flex flex-col justify-baseline gap-3 h-[309px] w-[400px]  items-center text-center transition-transform transform hover:scale-105"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-[200px] h-[170px] object-cover"
                  />
                  <h3 className={`${item.color} text-[20px] font-bold`}>
                    {item.title}
                  </h3>
                  <p className="text-[#01284099] text-[17px] font-semibold mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="custom-container lg:my-[80px]">
        <div className=" py-10 poppin ">
          <h2 className="text-[40px] font-bold text-center text-[#012840] pb-5 ">
            Musobaqa Bosqichlari
          </h2>
          <p className="text-center text-[#01284099] text-[20px] lg:mb-[100px] lg:w-[600px] flex items-center justify-between mx-auto">
            «Genius Cup» IQ-turniri ikki bosqichda o'tkaziladi va quyida o'tkazish
            vaqtlari bilan tanishing
          </p>

          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} justify-between gap-10   items-start mt-[100px]`}
            >
              {/* Step table */}
              <div className="py-8  bg-transparent  flex flex-col gap-2 justify-between items-start">
                <h3 className="text-[#061A40] text-[42px]  font-bold mt-2">{stage.title}</h3>
                <p className="text-[#01284099] text-lg text-[18px] font-[400] poppins lg:w-[530px]">{stage.description}</p>

                <div className="grid grid-cols-2 gap-[80px]  mt-6 ">
                  <div>
                    <span className="text-[24px] font-bold text-[#012840]">{stage.type}</span>
                    <p className="text-[#01284099] ">O‘tish tartibi</p>
                  </div>
                  <div>
                    <span className="text-[28px] font-bold text-[#012840]">{stage.date}</span>
                    <p className="text-[#01284099] text-sm">O‘tkazilish sanasi</p>
                  </div>
                </div>
                <button className="relative mt-8 h-12 w-40 overflow-hidden border-[2px] border-[#1E9FD9] text-[16px] rounded-[30px] text-[#1E9FD9] font-[500] poppin  transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#1E9FD9] before:duration-300 before:ease-out hover:text-white hover:shadow-[#1E9FD9] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                  <a href="https://t.me/Genius_cup_bot" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    Ro'yxatdan O'tish
                  </a>
                </button>
              </div>

              {/* Step table */}
              <div className="bg-[#DCE1F899] px-6 py-5 rounded-3xl  poppin">
                <div className="grid grid-cols-3 gap-4 text-center font-semibold">
                  <span  className="bg-white rounded-2xl px-4 py-4">O‘tkazilish sanasi</span>
                  <span  className="bg-white rounded-2xl px-4 py-4">O‘tkazilish Manzili</span>
                  <span  className="bg-white rounded-2xl px-4 py-4">Vaqtlar</span>
                </div>
                {schedule.map((item, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 px-2 text-center mt-3 ">
                    <span>{item.grades} Sinf o‘quvchilari</span>
                    <span>{item.location} Telegram bot</span>
                    <span>{item.date} {item.time} gacha</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-tl from-blue-800 via-blue-500 to-blue-800 rounded-4xl p-10 text-white text-center custom-container ">
       <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-[32px] font-semibold poppin">Tashkilotchilar</h2>
          <p className="mt-4 text-[18px] font-[300] poppin lg:w-[600px] text-gray-50">
            Biz sizning kelajagingiz uchun qo'l uzatdik, siz buni javobsiz
            qoldirmaysiz degan umiddamiz!
          </p>
       </div>
       <div className="flex items-center gap-[20px] px-[90px] justify-between py-5 ">
        <img src={ArrowWhite} alt="arrow" />
          <div className="flex justify-center gap-10 mt-6 py-2 px-5  border-dashed border-[2px] border-white  rounded-3xl">
            {organizers.map((org, index) => (
              <div key={index} className="bg-transparent  p-6 text-center w-64 ">
                <img src={org.logo} alt={org.name} className="mx-auto w-16 h-16" />
                <h3 className="mt-4 mb-2 text-lg font-medium">{org.name}</h3>
                <button className="relative h-10  w-40 overflow-hidden border-[1px]  border-[#ffffff] text-[16px] rounded-[30px] text-[#ffffff] font-[400] poppin  transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-[#1E9FD9] hover:shadow-white hover:before:h-40 hover:before:w-40 ">
                  <a href="https://t.me/Genius_cup_bot" target="_blank" rel="noopener noreferrer" className="relative z-10">
                    Rasmiy sahifa ↗
                  </a>
                </button>
              </div>
            ))}
          </div>
          <div className="w-[140px]">
            <img src={WhiteSpot} alt="white spot"/>
        </div>
       </div>
        
      </section>
<section className="custom-container">
    <div className="flex justify-between items-center py-4">
        <div>
            <h2 className="text-3xl font-bold text-gray-900">So’nggi Yangiliklar</h2>
            <p className="text-gray-600 mt-2">
              «Genius Cup» IQ-turniri ikki bosqichda o‘tkaziladi va quyida o‘tkazish
              vaqtlari bilan tanishing
            </p>
        </div>
          <button className="relative h-12 w-40 overflow-hidden border bg-gradient-to-br rounded-[30px] from-sky-600 to-blue-800 text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40">
            <a href="maqolalar"  rel="noopener noreferrer" className="relative z-10">
              Barchasini ko'rish
            </a>
          </button>
    </div>
      
</section>

    </main>
  )
}

export default Index