import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp flex md:flex-col " data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[50px] w-[50px] items-center justify-center rounded-md md:h-[70px] md:w-[70px] md:mr-0 mr-5">
          {icon}
        </div>
        <div>
          <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
            {title}
          </h3>
          <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
