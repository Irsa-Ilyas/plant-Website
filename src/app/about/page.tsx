import React from "react";

const About = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-3xl text-[#333333] font-semibold  ml-[-80px] text-center md:mb-8 ">
          About US
        </h1>
      </div>
      <section className="flex justify-center flex-wrap w-full">
        <div>
          <iframe
            className="mt-3"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wY8DMF8nlw0?si=-vXd1Z9SAerIgbM3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
        <div className="w-full lg:w-[50%]">
          <p className="lg:ml-6 mx-auto">
            At Plant Harmony, we&apos;re all about transforming how you
            experience the world of plants! Whether you&apos;re a seasoned green
            thumb or just starting out, we provide everything you need to
            cultivate lush, thriving plants and build a deep connection with
            nature from the comfort of your home. Our easy-to-follow care guides
            and unique plant care tips make nurturing plants a fulfilling and
            accessible journey. As a pioneering digital platform for plant
            enthusiasts, we understand the challenge of finding reliable
            information and practical advice tailored for your greenery.
            That&apos;s why we bring you detailed video guides and resources
            that simplify the care process, allowing you to watch and learn how
            to grow vibrant, healthy plants at every stage. We believe plant
            care is for everyone, no matter your experience level or background.
            So, join us in our mission to bring more green into your life and to
            cultivate a community that values the joy and tranquility plants
            bring.
          </p>
        </div>
      </section>
    </div>
  );
};
export default About;
