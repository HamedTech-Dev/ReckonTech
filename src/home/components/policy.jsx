import { forwardRef } from "react";

const Policy = forwardRef((props, ref) => {
  return (
    <div
      className="w-full min-h-full bg-[var(--grey)] flex flex-col px-10 items-end mobile:items-center snap-start"
      ref={ref}
      id="policy"
    >
      <h1 className="text-[4vw] text-[var(--light)] mobile:text-[10vw] text-center w-full mt-12 mb-5">
        Policy
      </h1>
      <article className="mobile:flex-col mobile:flex-nowrap mobile:overflow-y-auto flex flex-wrap mobile:px-0 px-20 h-5/6">
        <section className="mb-3 w-1/2 px-5 mobile:p-0 mobile:text-start mobile:w-full mobile:h-max">
          <h3 className="text-[2vw] mobile:text-[7.3vw] text-[var(--dark)] font-semibold mb-3">
            Quality Assurance Policy
          </h3>
          <p className="text-[var(--light)] text-[1.3vw] mobile:text-[5vw]">
            At ReckonTech, we are committed to delivering high-quality software
            solutions. We follow rigorous quality assurance processes to ensure
            that our products meet or exceed industry standards. We regularly
            review and improve our development practices to maintain the highest
            level of quality.
          </p>
        </section>
        <section className="mb-3 w-1/2 0x-5 mobile:p-0 mobile:text-start mobile:w-full mobile:h-max">
          <h3 className="text-[2vw] mobile:text-[7.3vw] text-[var(--dark)] font-semibold mb-3">
            Privacy Policy
          </h3>
          <p className="text-[var(--light)] text-[1.3vw] mobile:text-[5vw]">
            We take data privacy and security seriously. Our privacy policy
            outlines how we handle and protect sensitive information. We
            strictly adhere to data protection laws and will never misuse or
            disclose your data without your explicit consent.
          </p>
        </section>
        <section className="mb-3 w-1/2 0x-5 mobile:p-0 mobile:text-start mobile:w-full mobile:h-max">
          <h3 className="text-[2vw] mobile:text-[7.3vw] text-[var(--dark)] font-semibold mb-3">
            Data Security Policy
          </h3>
          <p className="text-[var(--light)] text-[1.3vw] mobile:text-[5vw]">
            We implement the latest security measures to safeguard your data.
            Our team follows best practices for data encryption, access control,
            and vulnerability assessments to keep your information secure from
            threats and breaches.
          </p>
        </section>
        <section className="mb-3 w-1/2 0x-5 mobile:p-0 mobile:text-start mobile:w-full mobile:h-max">
          <h3 className="text-[2vw] mobile:text-[7.3vw] text-[var(--dark)] font-semibold mb-3">
            Communication and Transparency Policy
          </h3>
          <p className="text-[var(--light)] text-[1.3vw] mobile:text-[5vw]">
            Open and transparent communication is fundamental to a successful
            client relationship. We keep our clients informed about project
            progress, challenges, and changes. You will have access to regular
            updates and be able to reach out to our team at any time.
          </p>
        </section>
      </article>
    </div>
  );
});

export default Policy;
