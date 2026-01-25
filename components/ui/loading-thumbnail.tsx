import Image from "next/image"
import veruniaThumbnailLogo from "@/public/logo/verunia-thumbnail-logo.svg"
export default function LoadingThumbnail() {
    return (
        <div className="w-full h-full bg-white flex justify-center items-center fixed top-0 left-0 z-[9999]">
            <div className="h-screen w-screen flex justify-center items-center  ">
                <Image src={veruniaThumbnailLogo} alt="Loading Thumbnail" width={300} height={300} className="md:max-w-[300px] md:max-h-[300px] max-w-[100px] max-h-[100px] object-contain animate-pulse" priority quality={100} />
            </div>
        </div>
    )
}