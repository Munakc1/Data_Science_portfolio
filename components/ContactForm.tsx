"use client";

import { useState } from "react";
import { site } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\nName: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-[6px] border border-border bg-card px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted focus:border-accent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-[6px] border border-border bg-card px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted focus:border-accent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-[6px] border border-border bg-card px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted focus:border-accent resize-y"
          placeholder="What would you like to discuss?"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium rounded-[6px] px-6 py-3 hover:bg-accent-dark transition-colors"
      >
        Send Message
      </button>

      <p className="text-xs text-muted pt-1">
        Submitting opens your email client, addressed to {site.email}. Email
        integration can be configured for direct form submissions.
      </p>
    </form>
  );
}
