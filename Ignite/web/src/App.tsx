// TOOLS
import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";

// COMPONENTS
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import { GameController } from "phosphor-react";
import { GameBanner } from "./components/GameBanner";
import { Input } from "./components/Form/Input";

// StyleSheet and Assets
import logoImg from "./assets/logo.svg";
import "./styles/main.css";
import axios from "axios";

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games")
      .then(res => setGames(res.data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-[80px]">
      <img src={logoImg} alt="Logo Image" />

      <h1 className="text-6xl text-white font-black mt-[80px] mb-[64px]">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6">
        {games.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

       <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
