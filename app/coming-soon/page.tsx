"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";

function EnquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // fake submit: set submitted, could send API here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      onClose();
    }, 1400);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-[12px] border border-[#E7E5E4] w-full max-w-md mx-4 shadow-lg relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1C1917]/40 hover:text-[#1C1917] font-bold text-2xl focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="px-8 py-10 md:px-10 md:py-12">
          <h2 className="font-instrument font-medium text-[28px] leading-[36px] text-[#1C1917] mb-4">
            Enquiry Form
          </h2>
          <p className="font-instrument text-[15px] leading-[25px] text-[#1C1917]/70 mb-6">
            Let us know your requirements and we’ll get back to you.
          </p>
          {submitted ? (
            <div className="text-[#1C1917] font-instrument text-lg text-center py-8">
              Thank you! <br /> Your enquiry has been submitted.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-instrument text-[15px] text-[#1C1917] mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full border border-[#E7E5E4] rounded-[7px] px-3 py-2 text-[16px] font-instrument outline-none bg-[#FAFAFA] focus:border-[#A3A3A3] transition-colors"
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-instrument text-[15px] text-[#1C1917] mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full border border-[#E7E5E4] rounded-[7px] px-3 py-2 text-[16px] font-instrument outline-none bg-[#FAFAFA] focus:border-[#A3A3A3] transition-colors"
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-instrument text-[15px] text-[#1C1917] mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full border border-[#E7E5E4] rounded-[7px] px-3 py-2 text-[16px] font-instrument outline-none bg-[#FAFAFA] focus:border-[#A3A3A3] transition-colors min-h-[90px]"
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="font-instrument"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button type="submit" className="font-instrument">
                  Submit
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ComingSoonPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      {/* <Header /> */}

      <section className="bg-white flex items-center justify-center h-screen">
        <div className="max-w-[1253px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="rounded-[12px] border border-[#E7E5E4] bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              <div className="lg:col-span-5 flex items-center">
                <div className="px-8 py-10 md:px-10 md:py-12">
                  <p className="font-instrument font-medium text-[#1C1917]/70 text-[14px] leading-[20px] tracking-[0.12em] uppercase">
                    Verunia
                  </p>
                  <h1 className="mt-3 font-instrument font-medium text-[44px] leading-[56px] md:text-[56px] md:leading-[64px] [-letter-spacing:-0.02em] text-[#1C1917]">
                    Coming soon
                  </h1>
                  <p className="mt-3 font-instrument font-normal text-[#1C1917]/80 text-[18px] leading-[28px] tracking-normal">
                    We’re preparing something new. In the meantime, send us your
                    requirements and we’ll get back to you.
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <Button
                      className="font-instrument"
                      type="button"
                      onClick={() => setModalOpen(true)}
                    >
                      Make an enquiry
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="font-instrument"
                    >
                      <Link href="/">Back to home</Link>
                    </Button>
                  </div>

                  <p className="mt-6 font-instrument text-[#1C1917]/60 text-[14px] leading-[20px]">
                    Or email:{" "}
                    <a
                      className="underline underline-offset-4 hover:opacity-80"
                      href="mailto:info@veruniagroup.com"
                    >
                      info@veruniagroup.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative w-full h-[280px] md:h-[360px] lg:h-full min-h-[320px] bg-[#FAFAFA]">
                  <Image
                    src="/modern-minimalist-office-space-white-desks-contemp.jpg"
                    alt="Modern workspace"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    priority={false}
                  />
                </div>
              </div>
            </div>
            {/* Enquiry Modal */}
            <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </div>
        </div>
      </section>
    </main>
  );
}
