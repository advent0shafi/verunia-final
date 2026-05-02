


import Image from "next/image";
import Link from "next/link";

interface Props {
    imageUrl: string;
    title: string;
    category: string;
    slug: string;
}

export default function FotivoProjectCard({
    imageUrl,
    title,
    category,
    slug,
}: Props) {
    return (
        <Link href={`/bespoke/project/${slug}`} className="block group w-full h-full ">
            <div className="py-[24px] bg-white  flex flex-col items-center justify-center min-h-[432px] border border-white/10 rounded-[6px]">
                <div>
                    <Image
                        src={imageUrl}
                        alt={title}

                        className="object-contain w-[300px] h-[300px]  transition-transform duration-700 group-hover:scale-105"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center ">
                    <h3 className=" font-helvetica 
                           font-light 
                           text-[24px]
                           leading-[32px]
                           tracking-normal
                           text-center
                           text-[#171412]">
                        {title}
                    </h3>

                    <p className="    font-instrument
                        font-normal
                        not-italic
                        text-[14px]
                        leading-[20px]
                        tracking-[0]
                        text-center
                        text-[#171412]">
                        {category}
                    </p>
                </div>
            </div>
        </Link>
    );
}
