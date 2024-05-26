export default function SubscribeEmail() {
  return (
    <section id="subscribe" className="flex flex-col md:gap-[80px] gap-10 justify-center items-center bg-[#FFDCD1] md:py-0 py-16">
      <div className="container flex flex-col gap-[10px] max-w-[90%] w-full items-center justify-center">
        {/* <p className="text-primary font-bold text-center">Practice Advice</p> */}
        <p className="text-dark text-4xl font-bold text-center">Bergabung di Newsletter Kami</p>
        <p className="text-secondary text-center">Beberapa update mengenai promo akan kami beritahukan lewat email!</p>
      </div>
      <form className="container flex w-[90%] max-w-[688px]">
        <div className="relative w-full ">
          <input type="email" className="h-[40px] md:h-[58px] rounded-s-md block p-2.5 w-full z-20 text-sm text-gray-900  rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-[#E6E6E6] focus:border-[#E6E6E6] focus:ring-0 pl-5" placeholder="Your Email" required />
          <button type="submit" className="h-[40px] md:h-[58px] absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-primary rounded-e-md border border-[#E6E6E6] focus:border-[#E6E6E6] focus:ring-0">Subscribe</button>
        </div>
      </form>
    </section>
  );
}
