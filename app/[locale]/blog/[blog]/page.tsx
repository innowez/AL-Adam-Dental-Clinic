import Image from "next/image";
import blogImage from "@/assets/blogs/blog1.png";
import Contactus from "@/components/app_components/contactus";
import blogList from "@/lib/blog.json";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Markdown from "react-markdown";
import blogData from "@/lib/blog";

export default async function BlogDetail({
  params,
}: {
  params: { blog: string; locale: "en" | "ar" };
}) {
  const { blog, locale } = await params;

  const t = await getTranslations("blogPage");

  const articleList = blogList.articleList;

  const article = articleList.find((article) => article.id === Number(blog));

  return (
    <section className="mt-[76px] lg:mt-[126px]">
      <div className="px-4 lg:px-52 mb-7 lg:mb-12 ">
        <h1
          className="text-secondary text-xl lg:text-[48px] leading-[29px] lg:leading-[69px] font-semibold mb-3 lg:mb-6"
          dangerouslySetInnerHTML={{
            __html: t(article?.title || "title"),
          }}
        ></h1>

        <div className="flex justify-between w-full mb-6 text-[16px] lg:text-[20px] font-normal leading-[23px] lg:leading-[29px] text-secondary/75 ">
          <p>
            {t("readTime")}: 4 {t("min")}
          </p>
          <p>
            {t("published")}: {t("march")}
          </p>
        </div>

        <div className="relative h-[352px] lg:h-[446px] w-full mb-[16px] lg:mb-[55px] ">
          <Image
            src={article?.image || blogImage}
            alt=""
            fill
            className="object-cover absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-[20px] "
          />
        </div>

        {/* <div className="flex flex-col gap-5 lg:gap-12">
          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              {t("whatIsToothAnatomy")}
            </h2>
            <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
              {t("blogdis1")}
            </p>
          </div>

          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              {t("mainParts")}
            </h2>
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] lg:text-2xl font-semibold">
                  {t("enamel")}:
                </span>{" "}
                {t("enamilDis")}
              </p>

              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] lg:text-2xl font-semibold">
                  {t("dentin")}:
                </span>{" "}
                {t("dentinDis")}
              </p>

              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] lg:text-2xl font-semibold">
                  {t("pulp")}:
                </span>{" "}
                {t("pulpdis")}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              {t("supportingStructures")}
            </h2>
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] lg:text-2xl font-semibold">
                  {t("gums")}:
                </span>{" "}
                {t("gumsDis")}
              </p>

              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] lg:text-2xl font-semibold">
                  {t("root")}:
                </span>
                {t("rootDis")}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              {t("anatomyMatters")}
            </h2>
            <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
              {t("anatomyMattersDis")}
            </p>
          </div>

          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              {t("preventiveCareTips")}
            </h2>

            <ul className="list-disc text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] font-semibold pl-6">
              <li>{t("toothpaste")}</li>
              <li>{t("floss")}</li>
              <li>{t("sugaryFoods")}</li>
              <li>{t("dentistVisit")}</li>
            </ul>
          </div>
        </div> */}

        <Markdown
          components={{
            h2: ({ node, ...props }) => (
              <h2
                className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 "
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="text-secondary text-[16px] lg:text-[20px] font-normal leading-[23px] lg:leading-[29px] mb-3 lg:mb-6 "
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="list-disc text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] font-semibold pl-6 mb-3 lg:mb-6"
                {...props}
              />
            ),
          }}
        >
          {blogData[locale as keyof typeof blogData][Number(blog) - 1]}
        </Markdown>
      </div>

      <div>
        <section className="px-4 lg:px-12 mb-7 lg:mb-12">
          <hr className="w-full border-primary mb-6 lg:mb-12 " />
          <h1 className="text-[20px] lg:text-[48px] font-semibold leading-[29px] lg:leading-[69px] text-secondary mb-6">
            {t("youMayAlsoLike")}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-4 lg:gap-y-8 mb-6 lg:mb-12">
            {articleList.slice(0, 3).map((article, index) => (
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
                    ></h2>
                    <p
                      className="text-[12px] lg:text-[16px] font-normal leading-[17px] lg:leading-[23px] text-secondary/75 mb-2"
                      dangerouslySetInnerHTML={{
                        __html:
                          t(article.description).length > 100
                            ? t(article.description).slice(0, 100) + "..."
                            : t(article.description),
                      }}
                    ></p>
                  </div>
                  <div>
                    <Link href={`/blog/${article.id}`}>
                      <button className=" px-4 py-2 rounded-full bg-primary text-white text-[12px] lg:text-[20px] ">
                        {t("readMore")}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Contactus />
        </section>
      </div>
    </section>
  );
}
