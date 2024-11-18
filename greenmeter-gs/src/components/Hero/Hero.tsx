import Cabecalho from "../Cabecalho/Cabecalho";

export default function Hero() {
  return (
    <div className="bg-hero bg-cover h-[27vh] sm:h-[35vh] lg:h-[40vh] shadow-md">
      <div className="h-full w-full bg-black/50">
        <Cabecalho/>
        <div className="flex flex-col gap-3 justify-center font-semibold text-white  px-4 text-xs sm:text-base sm:gap-7 sm:px-7 md:text-lg md:px-[6%] h-[22vh] sm:h-[28vh] lg:h-[31vh] ">
          <div className="w-[60%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
          <div className="rounded text-musgo text-center px-3 py-1 bg-slate-200 w-fit">
            Saiba mais
          </div> 
        </div>
      </div>
    </div>
  );
}
