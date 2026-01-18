"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    if (status === "submitting") return false;
    return (
      form.name.trim().length > 1 &&
      form.email.trim().length > 3 &&
      form.message.trim().length > 5
    );
  }, [form, status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || "Request failed");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-instrument text-[14px] leading-[20px] text-[#1C1917]/70 mb-2">
            Name *
          </label>
          <Input
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Your name"
            className="font-instrument"
            required
          />
        </div>

        <div>
          <label className="block font-instrument text-[14px] leading-[20px] text-[#1C1917]/70 mb-2">
            Email *
          </label>
          <Input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="you@company.com"
            type="email"
            className="font-instrument"
            required
          />
        </div>

        <div>
          <label className="block font-instrument text-[14px] leading-[20px] text-[#1C1917]/70 mb-2">
            Phone
          </label>
          <Input
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            placeholder="+971 ..."
            className="font-instrument"
          />
        </div>

        <div>
          <label className="block font-instrument text-[14px] leading-[20px] text-[#1C1917]/70 mb-2">
            Company
          </label>
          <Input
            value={form.company}
            onChange={(e) =>
              setForm((p) => ({ ...p, company: e.target.value }))
            }
            placeholder="Company name"
            className="font-instrument"
          />
        </div>
      </div>

      <div>
        <label className="block font-instrument text-[14px] leading-[20px] text-[#1C1917]/70 mb-2">
          Message *
        </label>
        <Textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="Tell us about your project, quantities, timeline, and preferred finishes."
          className="font-instrument min-h-[140px]"
          required
        />
      </div>

      {status === "success" && (
        <div className="rounded-[8px] border border-[#E7E5E4] bg-[#FAFAFA] px-4 py-3">
          <p className="font-instrument text-[14px] leading-[20px] text-[#1C1917]">
            Thanks — we received your enquiry and will contact you soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3">
          <p className="font-instrument text-[14px] leading-[20px] text-red-900">
            Couldn’t submit. {errorMessage}
          </p>
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button
          type="submit"
          disabled={!canSubmit}
          className="font-instrument"
        >
          {status === "submitting" ? "Sending..." : "Send enquiry"}
        </Button>
        <p className="font-instrument text-[14px] leading-[20px] text-[#1C1917]/60">
          Fields marked * are required.
        </p>
      </div>
    </form>
  );
}

