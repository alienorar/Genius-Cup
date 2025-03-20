import YellowSpot from "../../assets/Ellipse 2.svg"
import Brain from "../../assets/brain.png"
import Arrow from "../../assets/arrow.png"
import BlueSpot from "../../assets/ellipse1.png"
import IqSt from "../../assets/iq-st.png"
import Iqnd from "../../assets/iq-nd.png"
const Index = () => {
  return (
    <main className="custom-container">
      <section>
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
          <button className="relative h-12 w-40 overflow-hidden border-[2px] border-[#1E9FD9] text-[16px] rounded-[30px] text-[#1E9FD9] font-[500] poppin  transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
            <a href="https://t.me/Genius_cup_bot" target="_blank" rel="noopener noreferrer" className="relative z-10">
              Ro'yxatdan O'tish
            </a>
          </button>
        </div>
        <div className="bg-gradient-to-br from-[#E7ECFF]  to-[#dde3f8] h-[60vh] rounded-[30px] my-[100px] flex items-center justify-center px-6 md:px-12">
          <div className="relative bg-transparent rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border-[4px] border-dashed border-[#FFFFFF]  w-full">
            {/* Dashed Border Effect */}
            <div className=" rounded-2xl p-6 md:p-10 bg-white relative">
              {/* Title */}
              <h4 className="text-[#1E9FD9] poppin font-medium text-sm md:text-base">
                Aql-idrokingizni sinovdan o‘tkazing
              </h4>
              <h2 className="text-[#061A40] text-[32px] md:text-3xl font-bold mt-2">
                IQ – darajangizni biz bilan o‘lchang.
              </h2>

              {/* Description */}
              <p className="text-[#01284099] text-lg text-[16px] font-[400] poppins">
                IQ darajangiz – bu sizning fikrlash tezligingiz, muammolarni hal qilish qobiliyatingiz
                va intellektual salohiyatingizning kaliti. O‘z imkoniyatlaringizni kashf eting, yangi
                bilimlar bilan ongingizni charxlang va har kuni o‘zingizning eng yaxshi versiyangiz bo‘lishga
                intiling! Aql-u idrokingizni sinang – siz doim o‘ylaganingizdan ham aqilliroqsiz!
              </p>

              {/* Floating Images */}
              <img
                src={Iqnd}
                alt="Child with Abacus"
                className="absolute top-[-100px] right-[-20px] w-[200px] md:w-[200px] rounded-xl shadow-lg"
              />
              <img
                src={IqSt}
                alt="Kids Experimenting"
                className="absolute bottom-[-140px] left-[-90px] w-[200px] md:w-[200px] rounded-xl shadow-lg"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-10 h-10 bg-gradient-to-r from-blue-300 to-transparent rounded-full"></div>
           
          </div>
        </div>
      </section>
    </main>
  )
}

export default Index