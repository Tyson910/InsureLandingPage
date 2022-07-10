import React from "react";
export function Hero() {
  const familyPicDesktop = "/assets/image-intro-desktop.jpg";
  const familyPicMobile = "/assets/image-intro-mobile.jpg";

  return (
    <>
      <header className="bg-dark-violet text-white grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:px-36">
        <div className="p-20 lg:p-0 items-center flex flex-col gap-y-16 lg:gap-y-5 lg:pt-36">
          <h1 className="font-semibold text-8xl lg:text-5xl font-serif">
            Humanizing your insurance.
          </h1>
          <h2 className="text-5xl font-extralight lg:text-base lg:font-normal">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </h2>
          <a
            className={`mt-7 border-white border-2 lg:border p-8
    lg:px-4 lg:py-2 max-w-max uppercase text-4xl lg:text-base lg:self-start
    hover:bg-white hover:text-dark-violet no-underline`}
            href="#"
          >
            View plans
          </a>
        </div>

        <img
          src={familyPicDesktop}
          className="hidden lg:block -mb-40 mt-20"
          alt=""
        />
        <img
          src={familyPicMobile}
          className="block w-full row-start-1 lg:hidden"
          alt=""
        />
      </header>
    </>
  );
}
