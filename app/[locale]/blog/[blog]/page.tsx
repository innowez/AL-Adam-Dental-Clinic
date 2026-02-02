import Image from "next/image";
import blogImage from "@/assets/blogs/blog1.png";
import Contactus from "@/components/app_components/contactus";
import blogList from "@/lib/blog.json";
import { Link } from "@/i18n/navigation";

export default async function BlogDetail({
  params,
}: {
  params: { blog: string };
}) {
  const { blog } = await params;

  console.log(blog, "sdafas");

  const articleList = blogList.articleList;

  const article = articleList.find((article) => article.id === Number(blog));

  return (
    <section className="mt-[76px] lg:mt-[126px]">
      <div className="px-4 lg:px-52 mb-7 lg:mb-12 ">
        <h1 className="text-secondary text-xl lg:text-[48px] leading-[29px] lg:leading-[69px] font-semibold mb-3 lg:mb-6">
          {/* Understanding Tooth Anatomy: <br />
          Inside and Out */}
          {article?.title}
        </h1>

        <div className="flex justify-between w-full mb-6 text-[16px] lg:text-[20px] font-normal leading-[23px] lg:leading-[29px] text-secondary/75 ">
          <p>Read Time: 4 min</p>
          <p>Published: March 2026</p>
        </div>

        <div className="relative h-[352px] lg:h-[446px] w-full mb-[16px] lg:mb-[55px] ">
          <Image
            src={article?.image || blogImage}
            alt=""
            fill
            className="object-cover absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-[20px] "
          />
        </div>

        <div className="flex flex-col gap-5 lg:gap-12">
          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              What Is Tooth Anatomy?
            </h2>
            <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
              A tooth is a complex structure composed of multiple layers, each
              serving a unique and vital function. While we typically only
              observe the outer enamel surface, there are several crucial
              structures that lie beneath it. These layers work together to
              protect the tooth from decay and damage, while also providing the
              necessary support for the chewing process. The inner layers, such
              as dentin and pulp, play significant roles in maintaining the
              health and functionality of the tooth, ensuring that we can
              effectively bite and grind our food.
            </p>
          </div>

          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              Main Parts of a Tooth
            </h2>
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] lg:text-2xl font-semibold">
                  Enamel:
                </span>{" "}
                Enamel is the hard outer layer of the tooth. It protects against
                daily wear, bacteria, and temperature changes.
              </p>

              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] text-2xl font-semibold">
                  Dentin:
                </span>{" "}
                Dentin lies beneath the enamel and is less hard but more
                sensitive. It supports the enamel and transmits sensations like
                heat and cold.
              </p>

              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] text-2xl font-semibold">
                  Pulp:
                </span>{" "}
                The pulp is the soft inner tissue containing nerves and blood
                vessels. It keeps the tooth alive and responsive.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              Supporting Structures
            </h2>
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] text-2xl font-semibold">
                  Gums (Gingiva):
                </span>{" "}
                Gums protect the base of the teeth and help keep them securely
                in place.Gums protect the base of the teeth and help keep them
                securely in place.
              </p>

              <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
                <span className="text-[14px] text-2xl font-semibold">
                  Root & Jawbone:
                </span>
                The root anchors the tooth into the jawbone, providing stability
                and strength for biting and chewing.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              Why Tooth Anatomy Matters
            </h2>
            <p className="text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] ">
              Understanding the structure of a tooth is crucial for grasping the
              significance of maintaining good dental hygiene, scheduling
              regular check-ups, and seeking early treatment when necessary.
              Each layer of a tooth plays a vital role in its overall health,
              and if damage occurs to one layer, it can have a cascading effect
              on the entire tooth if not addressed promptly. This
              interconnectedness highlights the importance of proactive dental
              care to prevent more serious issues down the line.
            </p>
          </div>

          <div>
            <h2 className="text-secondary text-[16px] lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] mb-3 lg:mb-6 ">
              Preventive Care Tips
            </h2>

            <ul className="list-disc text-secondary text-[14px] leading-[20px] lg:text-[20px] lg:leading-[29px] font-semibold pl-6">
              <li>Brush twice daily with fluoride toothpaste</li>
              <li>Floss to remove plaque between teeth</li>
              <li>Avoid excessive sugary foods</li>
              <li>Visit your dentist regularly for check-ups</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <section className="px-4 lg:px-12 mb-7 lg:mb-12">
          <hr className="w-full border-primary mb-6 lg:mb-12 " />
          <h1 className="text-[20px] lg:text-[48px] font-semibold leading-[29px] lg:leading-[69px] text-secondary mb-6">
            You May Also Like
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
                    <h2 className="text-[16px] lg:text-[24px] font-semibold leading-[23px] lg:leading-[35px] text-secondary mb-2">
                      {article.title}
                    </h2>
                    <p className="text-[12px] lg:text-[16px] font-normal leading-[17px] lg:leading-[23px] text-secondary/75 mb-2">
                      {article.description}
                    </p>
                  </div>
                  <div>
                    <Link href={`/blog/${article.id}`}>
                      <button className=" px-4 py-2 rounded-full bg-primary text-white text-[12px] lg:text-[20px] ">
                        Read More
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
