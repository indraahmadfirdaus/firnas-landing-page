import Image from "next/image";
import Link from "next/link";
export default function Course() {
  let images = ["/girl.png", "/hand.png"]
  return (
    <section id="banner" className="container flex flex-col md:gap-[96px] gap-10 justify-center items-center md:items-start md:justify-start">
      <div className="flex flex-col gap-[10px] max-w-[90%] w-full">
        <p className="text-primary font-bold">Practice Advice</p>
        <p className="text-dark text-4xl font-bold">Watch our Courses</p>
        <p className="text-secondary">Problems trying to resolve the conflict between<br />the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2 gap-10 justify-between w-[90%] md:w-full">
        {
          images.map((el, i) => (
            <div key={i} className="grid grid-cols-7 md:w-[500px]">
              <div className="col-span-3 flex">
                <Image priority={true} src={el} height={378} width={210} alt={el} className="w-auto h-auto" />
              </div>
              <div className="col-span-4 flex flex-col gap-[10px] items-start md:p-6 p-3">
                <p className="text-primary font-bold md:self-center">English Departement</p>
                <p className="font-bold text-dark">Graphic Design</p>
                <p className="text-justify text-secondary">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <Link href="/" className="flex wrap border border-1 border-primary rounded p-2 md:py-[10px] md:px-[20px] rounded-full gap-[10px] justify-center items-center">
                  <p className="font-bold text-primary">Learn More</p>
                  <Image src="/icons/arrow-next.svg"
                    width="10"
                    height="16"
                    alt="next-arrow" />
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section >
  );
}
