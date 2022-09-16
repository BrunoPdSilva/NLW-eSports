import * as Dialog from "@radix-ui/react-dialog";

import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
    <div className="self-stretch pt-1 bg-nlw-gradient rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2A2634] px-8 py-6 h-28 flex items-center justify-between">
        <div>
          <h2 className="text-white font-black text-2xl">
            Não encontrou seu duo?
          </h2>
          <span className="text-zinc-300">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="bg-violet-500 hover:bg-violet-600 rounded py-3 px-4 text-white font-medium flex gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
