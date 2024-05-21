import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  let footerList = [
    {
      headline: "Company Info",
      list: [
        { text: "About Us", link: "/" },
        { text: "Carrier", link: "/" },
        { text: "We are hiring", link: "/" },
        { text: "Blog", link: "/" }
      ]
    },
    {
      headline: "Features",
      list: [
        { text: "Business Marketing", link: "/" },
        { text: "User Analytic", link: "/" },
        { text: "Live Chat", link: "/" },
        { text: "Unlimited Support", link: "/" }
      ]
    },
    {
      headline: "Resources",
      list: [
        { text: "IOS & Android", link: "/" },
        { text: "Watch a Demo", link: "/" },
        { text: "Customers", link: "/" },
        { text: "API", link: "/" }
      ]
    }
  ]
  return (
    <section className="flex flex-col">
      <div className="container md:h-96 flex items-center justify-center py-[50px]">
        <div className="flex justify-between w-full flex-col md:flex-row gap-8 max-w-[90%]">
          <div className="flex flex-col gap-4 md:gap-6 w-60">
            <p className="text-dark font-bold text-2xl">Get In Touch</p>
            <p className="text-secondary text-sm">the quick fox jumps over the
              lazy dog</p>
            <div className="flex md:gap-5 gap-4">
              <Image className="object-contain h-6 w-6" width="24" height="24" src="./icons/facebook.svg" alt="facebook" />
              <Image className="object-contain h-6 w-6" width="24" height="24" src="./icons/instagram.svg" alt="instagram" />
              <Image className="object-contain h-6 w-6" width="24" height="24" src="./icons/twitter.svg" alt="twitter" />
            </div>
          </div>
          {
            footerList.map((el, i) => (
              <div key={i} className="flex flex-col gap-4 md:gap-6 w-60">
                <p className="text-dark font-bold text-2xl">{el.headline}</p>
                <div className="flex flex-col md:gap-5 gap-4">
                  {
                    el.list.map((e, j) => <Link key={j} className="text-secondary font-bold text-sm" href={e.link}>{e.text}</Link>)
                  }
                </div>
              </div>
            ))
          }
        </div>


      </div>
      <div className="flex justify-center items-center bg-lightgray h-20 w-full">
        <p className="font-bold text-secondary text-center">Made With Love By Figmaland All Right Reserved</p>
      </div>
    </section>
  );
}
