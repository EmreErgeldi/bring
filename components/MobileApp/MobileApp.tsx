import Image from "next/image";
export default function MobileApp() {
  return (
    <div className="bg-brand-primary flex flex-col md:flex-row justify-between items-center bg-mobile-app md:rounded-lg text-white">
      <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
        <h3 className="text-2xl font-bold tracking-tight">Download Getir!</h3>
        <p className="font-semibold">
          Let us deliver your order to your door in <br /> minutes.
        </p>
        <nav className="mt-5 flex flex-wrap lg:flex-nowrap justify-center gap-2">
          <a href="#" className="transition-all transform hover:scale-105">
            <Image
              src="/images/app-store.svg"
              className="md:h-8 lg:h-auto"
              width={160}
              height={48}
              alt="app store app"
            />
          </a>
          <a href="#" className="transition-all transform hover:scale-105">
            <Image
              src="/images/google-play.svg"
              className="md:h-8 lg:h-auto"
              width={160}
              height={48}
              alt="google play app"
            />
          </a>
        </nav>
      </div>
      <div className="pt-6 hidden md:block md:self-end">
        <Image
          src="/images/phoneLanding.png"
          width={605}
          height={208}
          alt="phone landing"
        />
      </div>
    </div>
  );
}
