import "./styles/main.css";
import logoImg from "./assets/logo.svg";
import  { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-[80px]">
      <img src={logoImg} alt="Logo Image" />

      <h1 className="text-6xl text-white font-black mt-[80px] mb-[64px]">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-1.png" alt="" />

          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-[64px] px-4 pb-4">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-2.png" alt="" />

          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-[64px] px-4 pb-4">
            <strong className="font-bold text-white block">DOTA 2</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-3.png" alt="" />

          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-[64px] px-4 pb-4">
            <strong className="font-bold text-white block">Counter Strike</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-4.png" alt="" />

          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-[64px] px-4 pb-4">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-5.png" alt="" />

          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-[64px] px-4 pb-4">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./game-6.png" alt="" />

          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-[64px] px-4 pb-4">
            <strong className="font-bold text-white block">World of Warcraft</strong>
            <span className="text-sm text-zinc-300">4 anúncios</span>
          </div>
        </a>
      </div>

        <div className="self-stretch pt-1 bg-nlw-gradient rounded-lg overflow-hidden mt-8">
          <div className="bg-[#2A2634] px-8 py-6 h-28 flex items-center justify-between">
            <div>
              <h2 className="text-white font-black text-2xl">Não encontrou seu duo?</h2>
              <span className="text-zinc-300">Publique um anúncio para encontrar novos players!</span>
            </div>

            <button className="bg-violet-500 hover:bg-violet-600 rounded py-3 px-4 text-white font-medium flex gap-3">
              <MagnifyingGlassPlus size={24}/>
              Publicar anúncio
            </button>
          </div>
        </div>

    </div>
  );
}

export default App;
