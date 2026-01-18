import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="items-center bg-white flex flex-col justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] h-full max-md:max-w-full py-8 md:py-10 relative overflow-hidden">
        {children}
      </div>
    </section>
  );
}
