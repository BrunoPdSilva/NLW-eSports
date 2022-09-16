interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number
}

export function GameBanner({ title, bannerUrl, adsCount }: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={title} />

      <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-[64px] px-4 pb-4">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-sm text-zinc-300">{adsCount} anúncio(s)</span>
      </div>
    </a>
  );
}
