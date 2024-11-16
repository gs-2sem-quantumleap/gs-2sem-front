import Cabecalho from "../Cabecalho/Cabecalho";

export default function Hero() {
  return (
    <div className="bg-hero bg-cover h-[27vh]">
      <div className="h-full w-full bg-black/50">
        <Cabecalho/>
        <div className="flex flex-col gap-3 justify-center font-semibold text-white h-[22vh] px-4 text-xs">
          <div className="w-[60%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
          <div className="rounded text-musgo text-center px-1 py-1 bg-slate-200 w-[30%] ">
            Saiba mais
          </div> 
        </div>
      </div>
    </div>
  );
}
