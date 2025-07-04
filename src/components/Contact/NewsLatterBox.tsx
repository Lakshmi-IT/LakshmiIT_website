"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Why Choose Lakshmi IT?
      </h3>
      <p className="text-body-color border-body-color/25 mb-8 border-b pb-6 text-base leading-relaxed dark:border-white/25">
        Lakshmi Information Technology provides cutting-edge solutions in web
        development, app development, cloud, and digital marketing.
        <br />
        We{`'`}re passionate about accelerating your digital growth.
      </p>

      <ul className="mb-8 list-disc space-y-2 pl-5 text-base text-body-color dark:text-body-color-dark">
        <li>✅ Expert Team with Industry Experience</li>
        <li>✅ Tailored Business Solutions</li>
        <li>✅ 24/7 Customer Support</li>
      </ul>

      

      <p className="text-body-color dark:text-body-color-dark text-center text-base leading-relaxed">
        Ready to take your business digital? Let{`’`}s build your success story
        together.
      </p>

      {/* Optional: Background SVGs can stay if you'd like */}
    </div>
  );
};

export default NewsLatterBox;
