import Image from "next/image";
import Link from "next/link";
export default function VeruniaFooter() {
    return (
        <footer className="bg-[#171412]  relative w-full h-full " >
            <div className="hidden md:block">
            <Image src="/ui/Footer.svg" alt="footer background" width={1440} height={1024} className="w-full h-full object-contain" />

            </div>
            <div className="md:max-w-[1440px] md:bg-transparent  bg-[#171412] h-full mx-auto px-4 md:px-8 pt-10 md:pt-16 md:absolute md:inset-0 top-0 left-0 b ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 ">
                    {/* Left Side - Logo and Image */}
                    <div className="relative">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <Image
                                src="/logo/logo-and-text.png"
                                alt="Verunia"
                                width={287.1154479980469}
                                height={48}
                                className="w-[287.1154479980469] md:w-[287.1154479980469px] h-[48px] md:h-[48px] object-contain"
                            />

                        </div>
                        {/* Office Image */}
                        <div className="overflow-hidden max-w-full md:max-w-[500px]">

                        </div>
                    </div>

                    {/* Right Side - Navigation and Contact */}
                    <div className="flex flex-col justify-between">
                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-12">
                            <Link
                                href="/interiors"
                                className="text-white font-fraunces font-light text-[30px] leading-[38px] tracking-normal align-middle hover:text-[#D4A853] transition-colors md:text-[48px] md:leading-[60px] md:-tracking-[0.02em]"
                            >
                                Verunia Interiors
                            </Link>
                            <Link
                                href="/furniture"
                                className="text-white font-fraunces font-light text-[30px] leading-[38px] tracking-normal align-middle hover:text-[#D4A853] transition-colors md:text-[48px] md:leading-[60px] md:-tracking-[0.02em]"
                            >
                                Verunia Furniture
                            </Link>
                            <Link
                                href="/al-fotivo"
                                className="text-white font-fraunces font-light text-[30px] leading-[38px] tracking-normal align-middle hover:text-[#D4A853] transition-colors md:text-[48px] md:leading-[60px] md:-tracking-[0.02em]"
                            >
                                Al Fotivo
                            </Link>
                            <Link
                                href="/about"
                                className="text-white font-fraunces font-light text-[30px] leading-[38px] tracking-normal align-middle hover:text-[#D4A853] transition-colors md:text-[48px] md:leading-[60px] md:-tracking-[0.02em]"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white font-fraunces font-light text-[30px] leading-[38px] tracking-normal align-middle hover:text-[#D4A853] transition-colors md:text-[48px] md:leading-[60px] md:-tracking-[0.02em]"
                            >
                                Contact
                            </Link>
                        </nav>

                        {/* Social and Contact Info */}
                        <div className="grid grid-cols-2 gap-4 md:gap-8 ">
                            {/* Social Links */}
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="#"
                                    className="text-white/80 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle hover:text-[#D4A853] transition-colors"
                                >
                                    Facebook
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white/80 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle hover:text-[#D4A853] transition-colors"
                                >
                                    LinkedIn
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white/80 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle hover:text-[#D4A853] transition-colors"
                                >
                                    Instagram
                                </Link>
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-2">
                                <p className="text-white/80 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle">438 837-5531</p>
                                <p className="text-white/80 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle break-all md:break-normal">info@veruniagroup.com</p>
                                <p className="text-white/80 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle">
                                    Block 3, Shop 18, 19, 20<br />
                                    Nad Al Sheba 3, Dubai, U.A.E.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full  md:pt-20 pt-10 ">
                    <Image src="/logo/white-logo-verunia.svg" alt="Verunia" width={1440} height={197.03543090820312} className="md:w-full w-[348.7171936035156px]  md:h-full h-[56.7646484375px] object-contain" />
                    <div className="flex items-center justify-between py-8">
                        <div>
                            <Link
                                href="#"
                                className="text-white/60 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle hover:text-white transition-colors"
                            >
                                Verunia Furniture Trading LLC
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="#"
                                className="text-white/60 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle hover:text-white transition-colors"
                            >
                                Legal mentions
                            </Link>
                            <Link
                                href="#"
                                className="text-white/60 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle hover:text-white transition-colors"
                            >
                                Cookies preferences
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="#"
                                className="text-white/60 font-instrument-sans font-normal text-base leading-6 tracking-normal align-middle hover:text-white transition-colors"
                            >
                                © 2026
                            </Link>
                        </div>

                    </div>
                    <div  className="">
                        <Image src="/ui/divider-sections-mobile.svg" alt="Verunia Group" width={1000} height={48} className="block md:hidden w-full h-full md:object-cover pt-[30px]" />
                        <Image src="/ui/divider-section-white.svg" alt="Verunia Group" width={1000} height={48} className="md:block hidden w-full h-full md:object-cover pt-[30px]" />

                    </div>

                </div>
            </div>



        </footer>
    )
}