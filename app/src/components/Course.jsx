import Image from "next/image";
import Link from "next/link";
export default function Course() {
  const data = [
    {
      image:"/smp.jpg",
      title: 'Program Reguler SMP',
      header: 'SPP: Rp 1.000.000/bulan',
      description: 'Program PKBM yang disesuaikan untuk level Sekolah Menengah Pertama.'
    }, 
    {
      image: "/sma2.jpg",
      title: 'Program Reguler SMA',
      header: 'SPP: Rp 1.300.000/bulan',
      description: 'Program PKBM yang disesuaikan untuk level Sekolah Menengah Atas.'
    },
    {
      image: "/prep.jpg",
      title: 'Preparation Class',
      header: 'Silahkan hubungi kami.',
      description: 'Kursus yang dirancang untuk belajar mengenai persiapan mendalami kurikulum IT dan Bahasa Jepang.'
    }
  ]
  let images = ["/girl.png", "/hand.png"]
  return (
    <section id="banner" className="container flex flex-col md:gap-[96px] gap-10 justify-center items-center md:items-start md:justify-start">
      <div className="flex flex-col gap-[10px] max-w-[90%] w-full">
        <p className="text-primary font-bold">Dedikasi Terhadap Keilmuan</p>
        <p className="text-dark text-4xl font-bold">Pilihan Program</p>
        <p className="text-secondary">Penyelenggaraan pembelajaran dari Firnas Technology School yang dapat dipilih berdasarkan ketersediaan anda.</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2 gap-10 justify-between w-[90%] md:w-full">
        {
          data.map((el, i) => (
            <div key={i} className="grid grid-cols-7 md:w-[500px]">
              <div className="col-span-3 flex">
                <Image priority={true} src={el.image} height={378} width={210} alt={el} className="w-auto h-auto object-contain" />
              </div>
              <div className="col-span-4 flex flex-col gap-[10px] items-start md:p-6 p-3">
                <p className="text-primary font-bold md:self-center">{el.title}</p>
                <p className="font-bold text-dark">{el.header}</p>
                <p className="text-justify text-secondary">{el.description}</p>
                <Link href="https://wa.me/6289510380067" className="flex wrap border border-1 border-primary rounded p-2 md:py-[10px] md:px-[20px] rounded-full gap-[10px] justify-center items-center">
                  <p className="font-bold text-primary">Daftar</p>
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
