import Image from "next/image";

function Card({ el }) {
  let stars = new Array(5).fill(null)
  return (
    <div className="flex flex-col md:w-[500px] items-center p-[25px] pb-0">
      <Image className="rounded-full" src={el.photo} height={128} width={128} alt={el.name} />
      <div className="flex flex-col p-8 items-center gap-4">
        <p className="text-center text-secondary md:w-[350px] tracking-[0.2px]">Slate helps you see how many more days
          you need to work to reach your financial
          goal for the month and year.</p>
        <div className="flex">
          {
            stars.map((e, i) => <Image key={i} src={i < el.rating ? "/icons/starfull.svg" : "/icons/starempty.svg"} height={22} width={22} alt={i + "-star"} className="h-auto w-auto" />)
          }
        </div>
        <p className="font-bold text-dark">{el.name}</p>
        <p className="font-bold text-secondary">{el.job}</p>
      </div>
    </div>
  )
}

export default function Testimony() {
  let users = [
    {
      photo: "/profile.png",
      name: "Regina Miles",
      job: "Designer",
      rating: 4
    },
    {
      photo: "/profile.png",
      name: "Regina Miles",
      job: "Designer",
      rating: 5
    }
  ]
  return (
    <section id="banner" className="container flex flex-col md:gap-[96px] gap-10 justify-center items-center md:items-start md:justify-start">
      <div className="flex flex-col gap-[10px] max-w-[90%] w-full">
        <p className="text-primary font-bold">Practice Advice</p>
        <p className="text-dark text-4xl font-bold">Each and every client is important</p>
        <p className="text-secondary">Problems trying to resolve the conflict between<br />the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2 gap-10 justify-between md:w-full">
        {
          users.map((el, i) => <Card key={i} el={el} />)
        }
      </div>
    </section>
  );
}
