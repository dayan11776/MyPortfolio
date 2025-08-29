import BlurText from "../others/BlurText"
import { Link } from "react-router-dom"
import RotatingText from "../others/RotatingText"
import Orb from "../others/Orb"

export const Content = () => {
  return (
      <section className="px-4 pt-12" id="Home">
        <div className="flex justify-around mt-12 max-sm:flex-col max-sm:w-full  max-sm:items-center max-lg:flex-col max-lg:w-full  max-lg:items-center">
            <div className="h-96 w-2/5 relative flex justify-center items-center max-sm:w-full max-lg:w-full">
                <div className="h-96 w-full relative">
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                </div>
                <img className="rounded-full border-blue-950 border-2 shadow-lg shadow-blue-950 h-40 w-40 absolute" src="./assets/profile/profile.jpg" alt="profile" />
            </div>
            <div className="w-3/5 flex flex-col justify-center max-sm:w-full max-sm:items-center max-lg:w-full max-lg:items-center">
                <BlurText
                    text="Hi ,I'm Bryan Tapel"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl mb-4 dark:text-gray-500 font-medium"
                />
                <h1 className="text-7xl flex dark:text-white mb-3 max-sm:text-5xl max-lg:text-5xl">
                    <span className="mr-3">Software</span>
                    <RotatingText
                        texts={['Developer', 'Engineer']}
                        mainClassName="h-24"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </h1>
                <div className="flex max-sm:mb-7 max-lg:mb-7">
                    <Link to="https://www.linkedin.com/in/bryan-tapel-876271198/" target="_blank" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 ">
                        <svg className="w-4 h-4 me-2 max-sm:me-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                        </svg>
                        LinkeIn
                    </Link>
                    <Link to="https://github.com/dayan11776" target="_blank" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-gray-500 me-2 mb-2 ">
                        <svg className="w-4 h-4 me-2 max-sm:me-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                       Github
                    </Link>
                    <Link to="https://www.facebook.com/bryan.tapel" target="_blank" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 ">
                        <svg className="w-4 h-4 me-2 max-sm:me-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                        </svg>
                        Facebook
                    </Link>
                    <Link to="https://mail.google.com/mail/u/0/?fs=1&to=bryantapel619@gmail.com&su=Hey+Bryan!&tf=cm" target="_blank" className="text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 max-sm:me-0">
                        <svg className="w-4 h-4 me-2 max-sm:me-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                        </svg>
                        Gmail
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
