"use client";

import { FormEvent, ReactNode, useState } from "react";
import { Check, Clipboard, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function EnquiryForm() {
  const [brief, setBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "BOURBON ENERGY SERVICES — PROJECT BRIEF",
      "",
      `Name: ${data.get("name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Work email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Service: ${data.get("service") || ""}`,
      `Operating region: ${data.get("region") || ""}`,
      `Expected start: ${data.get("start") || "Not confirmed"}`,
      "",
      "Requirement:",
      String(data.get("message") || ""),
    ];
    setBrief(lines.join("\n"));
    setCopied(false);
  }

  async function copyBrief() {
    if (!brief) return;
    await navigator.clipboard.writeText(brief);
    setCopied(true);
  }

  if (brief) {
    return (
      <div className="bg-white p-7 shadow-[0_18px_60px_rgba(4,19,33,0.08)] sm:p-10">
        <div className="grid h-12 w-12 place-items-center bg-primary text-white">
          <Check className="h-5 w-5" />
        </div>
        <p className="eyebrow mt-7 text-secondary">Project brief prepared</p>
        <h2 className="mt-3 font-heading text-2xl font-bold text-primary">
          Your requirement is ready to share.
        </h2>
        <p className="mt-4 text-sm leading-7 text-on-surface-variant">
          This tool prepares your brief but does not send it. Copy the details
          below and share them through the company&apos;s approved commercial
          contact channel once published.
        </p>
        <pre className="mt-7 max-h-[360px] overflow-auto whitespace-pre-wrap bg-surface-container-low p-5 font-body text-xs leading-6 text-on-surface">
          {brief}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button type="button" variant="dark" onClick={copyBrief}>
            <Clipboard className="h-4 w-4" />
            {copied ? "Copied" : "Copy project brief"}
          </Button>
          <Button
            type="button"
            variant="outlinePrimary"
            onClick={() => setBrief(null)}
          >
            <RotateCcw className="h-4 w-4" /> Start again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-7 shadow-[0_18px_60px_rgba(4,19,33,0.08)] sm:p-10"
    >
      <p className="eyebrow text-secondary">Project brief builder</p>
      <h2 className="mt-3 font-heading text-2xl font-bold text-primary">
        Structure your requirement
      </h2>
      <p className="mt-3 text-sm leading-6 text-on-surface-variant">
        Provide the commercial and operating context needed for a useful first
        conversation.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Full name" required>
          <Input name="name" autoComplete="name" placeholder="Your name" required />
        </Field>
        <Field label="Company" required>
          <Input
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            required
          />
        </Field>
        <Field label="Work email" required>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            required
          />
        </Field>
        <Field label="Phone">
          <Input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Country code + number"
          />
        </Field>
        <Field label="Service area" required>
          <Select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a capability
            </option>
            <option>Marine operations support</option>
            <option>Project logistics</option>
            <option>Technical &amp; industrial support</option>
            <option>Asset access &amp; deployment support</option>
            <option>Other / to be defined</option>
          </Select>
        </Field>
        <Field label="Operating region" required>
          <Input name="region" placeholder="Country, port, or field area" required />
        </Field>
        <Field label="Expected start">
          <Input name="start" type="date" />
        </Field>
      </div>
      <Field label="Requirement" required className="mt-6">
        <Textarea
          name="message"
          placeholder="Describe the operating need, assets or cargo involved, timing, key interfaces, and any known constraints."
          rows={7}
          required
        />
      </Field>

      <div className="mt-6 border-l-2 border-secondary bg-surface-container-low p-4 text-xs leading-5 text-on-surface-variant">
        Do not include confidential, export-controlled, personal, or
        security-sensitive information in this initial brief.
      </div>

      <Button type="submit" variant="dark" size="lg" className="mt-7 w-full sm:w-auto">
        Prepare project brief
      </Button>
    </form>
  );
}

function Field({
  label,
  required = false,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={className}>
      <span className="eyebrow text-on-surface-variant">
        {label} {required && <span className="text-secondary">*</span>}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
