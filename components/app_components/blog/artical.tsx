import Image from "next/image";
// import blogimg1 from "@/assets/blogs/blog1.png";
// import blogimg2 from "@/assets/blogs/blog2.png";
// import blogimg3 from "@/assets/blogs/blog3.png";
import blogList from "@/lib/blog.json";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Artical() {
  const t = useTranslations("blogPage");
  const articleList = blogList.articleList;
  return (
    <section className="px-4 lg:px-12 mb-7 lg:mb-12">
      <h1 className="text-[20px] lg:text-[48px] font-semibold leading-[29px] lg:leading-[69px] text-secondary mb-6">
        {t("articles")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-4 lg:gap-y-8">
        {articleList.slice(0, 6).map((article, index) => (
          <div key={index + 1}>
            <Image
              src={article.image}
              alt=""
              width={437}
              height={330}
              className="rounded-[12px] lg:rounded-[20px] h-[253px] lg:h-[330px] object-cover mb-5 lg:mb-4"
            />
            <div className="min-h-[125px] lg:min-h-[208px] flex flex-col justify-between">
              <div>
                <h2
                  className="text-[16px] lg:text-[24px] font-semibold leading-[23px] lg:leading-[35px] text-secondary mb-2"
                  dangerouslySetInnerHTML={{ __html: t(article.title) }}
                />
                <p className="text-[12px] lg:text-[16px] font-normal leading-[17px] lg:leading-[23px] text-secondary/75 mb-2">
                  {t(article.description).length > 100
                    ? t(article.description).slice(0, 100) + "..."
                    : t(article.description)}
                </p>
              </div>
              <div>
                <Link href={`/blog/${article.id}`}>
                  <button className="cursor-pointer px-4 py-2 rounded-full bg-primary text-white text-[12px] lg:text-[20px] ">
                    {t("readMore")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
