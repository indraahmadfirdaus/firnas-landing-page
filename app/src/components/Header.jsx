import Image from "next/image";

function Card({ el }) {
  const baseClass = "font-bold md:text-base text-sm";
  const activeClass = el.active ? "text-white" : "text-dark";
  const paragraphClass = `${baseClass} ${activeClass}`;

  const border = "border border-2 w-[50px]"
  const borderActive = el.active ? "border-white" : "border-danger";
  const borderClass = `${border} ${borderActive}`;

  const textClass = `text-sm overflow-hidden h-6 md:h-auto ${el.active ? 'text-white' : 'text-secondary'}`
  return (
    <div className={"cursor-pointer grid grid-cols-4  md:px-10 md:py-9 md:flex md:flex-col md:gap-5 max-w-sm  rounded-lg shadow-md md:w-[328px] md:h-[292px] md:items-start items-center h-auto " + (el.active ? "bg-primary text-white" : "bg-white")}>
      <div className="col-span-1 grow flex md:justify-center items-center">
        <div className={el.active ? "bg-white rounded" : "bg-primary rounded"}>
          <Image src={el.active ? el.logo + '-active.svg' : el.logo + '.svg'}
            className="my-[22px] mx-[19px] h-auto w-auto"
            width={32}
            height={32}
            alt={el.title} />
        </div>

      </div>
      <div className="col-span-3 flex flex-col md:gap-[20px] h-[70px] md:h-auto justify-around">
        <p className={paragraphClass}>{el.title}</p>
        <hr className={borderClass} />
        <p className={textClass}>{el.desc}</p>
      </div>

    </div>
  )
}

export default function Header() {
  let cards = [
    {
      title: "Biaya Terjangkau",
      logo: "./icons/lifetime",
      active: false,
      desc: 'Biaya investasi untuk karir anda dalam bidang digital cukup terjangkau.'
    },
    {
      title: "Mentor dan Pendamping",
      logo: "./icons/heart",
      active: false,
      desc: 'Support dari mentor handal akan mendampingi proses pembelajaran anda.'

    },
    {
      title: "Kurikulum Ter-Update",
      logo: "./icons/photo",
      active: true,
      desc: 'Kurikulum terkini industri IT, dan belajar menggunakan metode praktik yang lebih efisien.'

    }
  ]
  return (
    <section id="header" className="flex flex-col md:pb-[80px] md:gap-[80px] gap-[40px] md:px-0">
      <div className="container flex flex-col justify-between gap-9 w-[90%] md:w-full ">
        <p className="text-primary font-bold">Sekolah IT Berbasis Islami</p>
        <p className="text-dark md:text-[58px] text-4xl font-bold max-w-lg md:leading-[80px] leading-[40px]">Firnas Technology School</p>
        <p className="text-secondary md:text-xl leading-[30px]">Bangun keterampilan digital<br /> dan Raih Karier IT mu segera</p>
        <div className="flex gap-2.5">
          <button className="bg-primary px-10 py-[15px] rounded">
            <p className='text-sm font-bold text-white'>Hubungi Kami</p>
          </button>
          <button className="border border-1 border-primary px-10 py-[15px] rounded">
            <p className='text-sm font-bold text-primary'>Lihat Program</p>
          </button>
        </div>
      </div>
      <div className="container flex justify-between flex-col md:flex-row md:items-center gap-6  w-[90%] md:w-full ">
        {
          cards.map((el, i) => <Card el={el} key={i} />)
        }
      </div>
    </section>
  );
}
