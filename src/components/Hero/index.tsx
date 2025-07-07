import Link from "next/link";

const Hero = () => {
  return (
    <>
      

      <section className="font-philosopher mt-5 text-gray-600 px-2">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <p className="font-philosopher my-2 text-[18px] font-bold dark:text-white">
              Welcome to LakshmiIT
            </p>
            <h1 className="font-philosopher   mb-4 lg:text-[55px] text-[40px] font-bold text-gray-900 sm:text-4xl dark:text-white">
              {" "}
              Best in Web Developement
            </h1>
            <p className="text-body-color dark:text-body-color-dark mb-12 text-base leading-relaxed sm:text-lg md:text-xl">
              Lakshmi Information Technology Private Limited offers tailored
              solutions in Web & App Development, Digital Marketing, and Cloud
              Services. Whether you{`'`}re a startup or scaling enterprise, we
              help you build, grow, and transform in the digital world.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/80 rounded-md px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
              >
                🚀 Get a Quote
              </Link>
              <Link
                href="/services/web-development"
                className="inline-block rounded-md bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="w-[300px] md:w-1/2 lg:w-full lg:max-w-2xl">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src="/images/hero/home-danner.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
