import Link from "next/link";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import EnquiryForm from "@/components/enquiry/enquiry-form";
import { Button } from "@/components/ui/button";

export default function EnquiryPage() {
  return (
    <main>
      <Header />

      <section className="bg-white">
        <div className="max-w-[1253px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
            <h1 className="font-instrument font-medium text-[44px] leading-[56px] [-letter-spacing:-0.02em] text-[#1C1917]">
              Enquiry
            </h1>
            <Button asChild variant="outline" className="font-instrument">
              <Link href="/coming-soon">Coming soon</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="lg:col-span-5">
              <div className="rounded-[12px] border border-[#E7E5E4] bg-white p-6 md:p-8">
                <h2 className="font-instrument font-medium text-[20px] leading-[30px] text-[#1C1917]">
                  Tell us what you need
                </h2>
                <p className="mt-2 font-instrument font-normal text-[16px] leading-[24px] text-[#1C1917]/75">
                  Share your project details and we’ll respond with options,
                  lead times and next steps.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-[10px] border border-[#E7E5E4] bg-[#FAFAFA] p-4">
                    <p className="font-instrument text-[14px] leading-[20px] text-[#1C1917]/70">
                      Phone
                    </p>
                    <p className="font-instrument text-[16px] leading-[24px] text-[#1C1917]">
                      438 837-5531
                    </p>
                  </div>
                  <div className="rounded-[10px] border border-[#E7E5E4] bg-[#FAFAFA] p-4">
                    <p className="font-instrument text-[14px] leading-[20px] text-[#1C1917]/70">
                      Email
                    </p>
                    <a
                      className="font-instrument text-[16px] leading-[24px] text-[#1C1917] underline underline-offset-4 hover:opacity-80"
                      href="mailto:info@veruniagroup.com"
                    >
                      info@veruniagroup.com
                    </a>
                  </div>
                  <div className="rounded-[10px] border border-[#E7E5E4] bg-[#FAFAFA] p-4">
                    <p className="font-instrument text-[14px] leading-[20px] text-[#1C1917]/70">
                      Address
                    </p>
                    <p className="font-instrument text-[16px] leading-[24px] text-[#1C1917]">
                      Block 3, Shop 18, 19, 20
                      <br />
                      Nad Al Sheba 3, Dubai, U.A.E.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[12px] border border-[#E7E5E4] bg-white p-6 md:p-8">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

