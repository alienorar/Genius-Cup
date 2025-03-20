import YellowSpot from "../../assets/Ellipse 2.svg"
import Brain from "../../assets/brain.png"
import Arrow from "../../assets/arrow.png"
import BlueSpot from "../../assets/ellipse1.png"
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

            <h1 className="poppin text-[56px] text-center font-bold bg-gradient-to-br from-purple-500 via-indigo-500 to-violet-400 bg-clip-text text-transparent ">"Aql va zakovat sinovidan o‘tib, kelajak yetakchilariga aylaning!"</h1>
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
<div className="bg-gradient-to-br from-indigo-200 via-rose-50 to-violet-200 h-[60vh] rounded-[30px] my-[100px]">
<div>
  
</div>
</div>
      </section>
    </main>
  )
}

export default Index