import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lakshmi IT Blog | Insights on Web, App & Cloud Trends",
  description: "Explore the latest insights, trends, and tips in web development, mobile apps, cloud computing, and digital marketing from Lakshmi IT.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  Top 10 Emerging Technologies in Web & App Development (2025 Edition)
                </h2>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      {/* <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-lakshmiit.png"
                            alt="Lakshmi IT Author"
                            fill
                          />
                        </div>
                      </div> */}
                      <div className="w-full">
                        <span className="text-body-color mb-1 text-base font-medium">
                          By <span>Lakshmi IT Editorial Team</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">📅</span>
                        05 July 2025
                      </p>
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">👁️</span>
                        124
                      </p>
                      <p className="text-body-color flex items-center text-base font-medium">
                        <span className="mr-3">💬</span>
                        20
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                    >
                      Technology
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
                    At Lakshmi IT, we believe in constant innovation. Our developers and tech leaders have rounded up 10 revolutionary technologies and trends reshaping the world of software development, cloud computing, and user-centric digital solutions.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                      width={400}
                      height={400}
                        src="/blogs/blog.png"
                        alt="Lakshmi IT Technology Trends"
                        
                        className="object-fill object-center lg:w-[850px] md:w-full lg:h-[500px] rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg">
                    From AI-powered development tools to serverless infrastructure and progressive web apps (PWA), our engineers are adopting these technologies to deliver cutting-edge web and app solutions. Cloud-native scalability, security-first designs, and real-time analytics are driving better user experiences across industries.
                  </p>
                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl dark:text-white">
                    Lakshmi IT: Your Partner in Innovation
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
                    Whether it{`'`}s building a secure, scalable mobile app or optimizing your online reach with SEO and digital marketing, we help businesses grow with technology. We use agile processes, cross-platform stacks, and the latest design systems to deliver robust, future-ready products.
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="mb-2">AI-assisted Web & App Development</li>
                    <li className="mb-2">Serverless Cloud Architecture (AWS, Azure, GCP)</li>
                    <li className="mb-2">Advanced UI/UX Prototyping Tools</li>
                    <li className="mb-2">Performance-first SEO and SEM techniques</li>
                  </ul>

                  <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8">
                    <p className="text-body-color text-center text-base font-medium italic">
                      Lakshmi IT is not just a service provider—we{`'`}re your digital transformation partner. Our commitment to quality, speed, and user-first design ensures every solution is business-ready from day one.
                    </p>
                  </div>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
                    Want to stay updated with our technology insights, case studies, and tutorials? Follow our blog and connect with us on LinkedIn and Twitter.
                  </p>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">Popular Tags :</h4>
                      <div className="flex items-center">
                        <TagButton text="Web Development" />
                        <TagButton text="Cloud" />
                        <TagButton text="Mobile Apps" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">Share this post :</h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
