import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 h-[44vh] my-32 px-5 md:px-0 text-white text-xs md:text-base">
        <div className="font-bold md:text-5xl gap-2 flex md:gap-5 justify-center items-center text-3xl">Buy Me A Chai <span><img width={65} className="rounded-full" src="/img.gif" alt="" /></span></div>
        <p className="text-center md:text-left">A crowdfundig platform for creator to fund their projects.</p> <p className="text-center md:text-left">A place where your fan can you buy a chai. Unleash the power of your fans and get your projects funded.</p>
        <div>
          <Link href={"/login"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5 mx-2">Starts Here</button>
          </Link>
          <Link href={"/about"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5 ">Read More</button>
          </Link>
        </div>
      </div>


      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto py-32 md:px-10 px-5">
        <h2 className="text-3xl font-bold text-center mb-14 ">Your fans can buy you a Chai</h2>
        <div className="flex gap-5  justify-around items-center">
          <div className="items space-y-3 flex flex-col items-center justify-center">
            <img className=" rounded-full bg-teal-100 " width={160} src="man.gif" alt="" />
            <p className="font-bold text-center">Fans wants to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="items space-y-3 flex flex-col items-center justify-center">
            <img className=" rounded-full bg-teal-100 " width={140} src="coin.gif" alt="" />
            <p className="font-bold text-center ">Fans wants to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="items space-y-3 flex flex-col items-center justify-center">
            <img className=" rounded-full bg-teal-100 " width={140} src="group.gif" alt="" />
            <p className="font-bold text-center">Fans wants to collobrate</p>
            <p className="text-center">Your fans are ready to collobrate with you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        <div className="w-[85%] h-[40vh] md:w-[25%] md:h-[40vh] lg:w-[25%] lg:h-[40vh] xl:w-[25%] xl:h-[40vh]">
       <iframe  className="w-full h-fit" src="https://www.youtube.com/embed/4BWuxIzlaQ8?si=UUYtF4A80q2MqQzz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       </div>
      </div>
    </>
  );
}
