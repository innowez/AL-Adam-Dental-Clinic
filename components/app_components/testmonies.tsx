import Image from 'next/image'
import testimonial1 from "@/assets/landing/testm1.png";
import testimonial2 from "@/assets/landing/testm2.png";
import testimonial3 from "@/assets/landing/testm3.png";

export default function Testmonies() {
    return (
        <section className="mb-6">
            <div className="flex flex-col items-center gap-2 mb-4 lg:mb-12">
                <h1 className="text-tertiary text-[12px] lg:text-[20px] lg:leading-[29px] rounded-full border border-tertiary px-2 py-0.5 mb-2 inline-block ">
                    Testimonials
                </h1>

                <h2 className="text-[16px] lg:text-[48px] font-semibold text-secondary leading-6 lg:leading-[69px] mb-4">
                    What Our Patients Say
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
                <div
                    className="rounded-[44px] py-[51px] px-[24px] lg:h-[332px]"
                    style={{
                        background:
                            "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
                    }}
                >
                    <p className="text-[14px] lg:text-[20px] font-normal text-white leading-5 lg:leading-[29px] text-center">
                        From the first consultation, the team was professional and reassuring. The dentist explained everything clearly and made me feel comfortable throughout the treatment.
                    </p>
                </div>

                <div className="rounded-[44px] overflow-hidden">
                    <Image
                        src={testimonial1.src}
                        alt="testimonial1"
                        width={361}
                        height={172}
                        className="object-fit lg:object-cover max-h-[172px] lg:max-h-[332px] lg:w-full"
                    />
                </div>

                <div
                    className="rounded-[44px] py-[51px] px-[24px]"
                    style={{
                        background:
                            "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
                    }}
                >
                    <p className="text-[14px] lg:text-[20px] font-normal text-white leading-5 lg:leading-[29px] text-center">
                        I was nervous before my visit, but the doctors and staff were very
                        patient and supportive. The treatment was smooth and handled with
                        great care.
                    </p>
                </div>

                <div className="rounded-[44px] overflow-hidden">
                    <Image
                        src={testimonial2.src}
                        alt="testimonial2"
                        width={361}
                        height={172}
                        className="object-cover object-bottom max-h-[172px] lg:max-h-[332px] lg:w-full"
                    />
                </div>

                <div
                    className="rounded-[44px] py-[51px] px-[24px]"
                    style={{
                        background:
                            "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
                    }}
                >
                    <p className="text-[14px] lg:text-[20px] font-normal text-white leading-5 lg:leading-[29px] text-center">
                        The clinic is clean, well-organized, and the doctors are highly experienced. I’m satisfied with the care I received and would recommend them to others.
                    </p>
                </div>

                <div className="rounded-[44px] overflow-hidden">
                    <Image
                        src={testimonial3.src}
                        alt="testimonial3"
                        width={361}
                        height={172}
                        className="object-cover max-h-[172px] lg:max-h-[332px] lg:w-full"
                    />
                </div>
            </div>
        </section>
    )
}
