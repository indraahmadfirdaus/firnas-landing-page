import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section id="banner" className="container flex md:flex-row flex-col justify-start md:justify-between gap-5 justify-center items-center">
      <Image src="/image150nochart.png"
        priority={true}
        width="508"
        height="430"
        className="max-w-[90%] w-[500px] h-auto"
        style={{
          maxWidth: '90%',
          objectFit: "cover",
        }}
        alt="mom and kid" />

      <div className="flex flex-col md:w-[380px] md:gap-[35px] w-[90%] gap-2">
        <hr className="border border-2 w-[50px] border-danger" />
        <p className="text-dark text-4xl font-bold">Make online educa</p>
        <p className="text-secondary">Problems trying to resolve the conflict between
          the two major realms of Classical physics:
          Newtonian mechanics </p>
        <Link href="/" className="flex gap-[10px] items-center">
          <p className="font-bold text-primary">Learn More</p>
          <Image src="/icons/arrow-next.svg"
            width="10"
            height="16"
            alt="next-arrow" />
        </Link>
      </div>
    </section>
  );
}
