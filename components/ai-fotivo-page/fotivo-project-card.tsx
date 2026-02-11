import Image, { StaticImageData } from "next/image";
import Link from "next/link";


interface FotivoProjectCardProps {
    image:StaticImageData;
    alt:string;
    projectTitle:string;
    category:string
    slug:string
}

export default function FotivoProjectCard({image,alt,projectTitle,category,slug  }: FotivoProjectCardProps) {
    return (
        <Link href={`/ai-fotivo/project/evening-living-room`} className="block group w-full h-full ">

            <div className="py-[24px] bg-white px-[80px] flex flex-col items-center justify-center min-h-[432px] border border-white/10 rounded-[6px]">
            <div>
            <Image
                    src={image}
                    alt={projectTitle}

                    className="object-contain w-[300px] h-[300px]  transition-transform duration-700 group-hover:scale-105"
                    width={300}
                    height={300}
                
                />
            </div>
          
             <div className="flex flex-col gap-2 justify-center items-center ">
                   <h3
                       className="
                           font-fraunces 
                           font-light 
                           text-[24px]
                           leading-[32px]
                           tracking-normal
                           text-center
                           text-[#171412]
                       "
                   >
                       {projectTitle}
                   </h3>
                <p
                    className="
                        font-instrument
                        font-normal
                        not-italic
                        text-[14px]
                        leading-[20px]
                        tracking-[0]
                        text-center
                        text-[#171412]
                    "
                >
                   {category}
                </p>
                </div>
             
            </div>

        </Link>
    );
}
