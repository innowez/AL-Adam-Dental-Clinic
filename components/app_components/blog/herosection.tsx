import Image from "next/image";
import titleImage from "@/assets/blogs/titleblog.png";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import blogList from "@/lib/blog.json";

export default function HeroSection() {
  const articleList = blogList.articleList;

  const t = useTranslations("blogPage");
  const topicList = [
    t("topicList.0"),
    t("topicList.1"),
    t("topicList.2"),
    t("topicList.3"),
    t("topicList.4"),
    t("topicList.5"),
    t("topicList.6"),
  ];
  return (
    <div className="mt-[76px] lg:mt-[126px]">
      <section className="mb-7 lg:mb-12">
        <h1 className="text-center text-[16px] lg:text-[48px] lg:leading-[69px] font-semibold text-secondary">
          {t("title")}
        </h1>
        <p className="text-center text-[12px] lg:text-[20px] lg:leading-[29px] font-normal leading-[17px] text-secondary/75 mb-4 lg:mb-12 ">
          {t("desc1")} <br className="lg:hidden" />
          {t("desc2")}, <br className="hidden lg:block" />
          {t("disc3")} <br className="lg:hidden" />
          {t("disc4")}.
        </p>
        <div className="flex justify-left lg:justify-center gap-2 overflow-x-scroll w-full no-scrollbar px-4 lg:px-0">
          {topicList.map((topic, index) => (
            <button
              key={index}
              className="border border-primary text-primary px-3 py-2 rounded-full text-[14px] lg:text-[20px] "
            >
              <span className="whitespace-nowrap">{topic}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-7 px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row mb-5 lg:mb-12">
          <div className="w-full lg:w-1/2 h-[253px] lg:h-[446px] rounded-[12px] lg:rounded-[20px] overflow-hidden mb-5 lg:mb-0">
            <Image
              src={articleList[1].image}
              width={709}
              height={446}
              alt=""
              className="object-cover h-[253px] lg:h-[446px] rounded-[12px] lg:rounded-[20px] "
            />
          </div>
          <div className="w-full lg:w-1/2 lg:py-[31px] lg:pl-12 flex flex-col justify-between">
            <div className="mb-6">
              <div className="mb-4 lg:mb-5">
                <span className="bg-secondary/20 text-secondary px-2 py-1 rounded-full text-[12px] lg:text-[20px]">
                  {t("trending")}
                </span>
              </div>
              <div className="mt-2">
                <h2
                  className="text-secondary text-[16px] lg:text-[36px] font-semibold leading-[23px] lg:leading-[52px]"
                  dangerouslySetInnerHTML={{ __html: t(articleList[1].title) }}
                ></h2>
                <p className="text-secondary/75 text-[12px] lg:text-[20px] leading-[17px] lg:leading-[29px]">
                  {t(articleList[1].description).length > 200
                    ? t(articleList[1].description).slice(0, 200) + "..."
                    : t(articleList[1].description)}
                </p>
              </div>
            </div>
            <div>
              <Link href="/blog/2">
                <button className="cursor-pointer px-4 py-2 rounded-full bg-primary text-white text-[12px] lg:text-[20px] ">
                  {t("readMore")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <hr className="w-full border-primary/30 lg:border-primary" />
      </section>
    </div>
  );
}
