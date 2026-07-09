import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { profile } from "@/lib/resume";
import { MagneticButton } from "./MagneticButton";
import { Mail, Github, Linkedin, MapPin, Send, Check } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100)
      e.name = "Please add your name (max 100 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255)
      e.email = "Please enter a valid email.";
    if (form.message.trim().length < 10 || form.message.length > 1500)
      e.message = "Message must be 10–1500 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const body = `Hi Mesa,%0D%0A%0D%0A${encodeURIComponent(
      form.message,
    )}%0D%0A%0D%0A— ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      "Portfolio · " + form.name,
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="08 · Contact"
      title={
        <>
          Let's build something{" "}
          <span className="italic text-gradient-sakura">wonderful.</span>
        </>
      }
      intro="Open to full-time roles, internships and interesting AI / full-stack collaborations."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-sakura relative overflow-hidden rounded-2xl p-7"
        >
          <h3 className="font-display text-2xl text-foreground">
            Say hi — I read every message.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Fastest way is email, but LinkedIn works too. Based in {profile.location}, working IST.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="Connect"
              href={profile.linkedin}
            />
            <ContactRow
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value="See my code"
              href={profile.github}
            />
            <ContactRow
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={profile.location}
            />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          onSubmit={onSubmit}
          className="glass rounded-2xl p-7"
          noValidate
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Your name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                maxLength={100}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-[color:var(--glass-border)] bg-[color:var(--bg-elevated)] px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--sakura)] focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_oklch,var(--sakura)_25%,transparent)]"
                placeholder="Ada Lovelace"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                maxLength={255}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-[color:var(--glass-border)] bg-[color:var(--bg-elevated)] px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--sakura)] focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_oklch,var(--sakura)_25%,transparent)]"
                placeholder="you@company.com"
              />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Message" error={errors.message}>
              <textarea
                value={form.message}
                maxLength={1500}
                rows={6}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-[color:var(--glass-border)] bg-[color:var(--bg-elevated)] px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--sakura)] focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_oklch,var(--sakura)_25%,transparent)]"
                placeholder="Tell me a little about the project or role…"
              />
            </Field>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <MagneticButton
              variant="primary"
              onClick={() =>
                onSubmit(new Event("submit") as unknown as React.FormEvent)
              }
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Opening your mail app…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </MagneticButton>
            <button type="submit" className="sr-only">
              Send
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border border-[color:var(--glass-border)] bg-[color:color-mix(in_oklch,var(--bg-elevated)_60%,transparent)] px-4 py-3 transition-colors hover:border-[color:var(--sakura)]">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-[color:color-mix(in_oklch,var(--sakura)_15%,transparent)] text-[color:var(--sakura-deep)]">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="truncate text-foreground/90">{value}</div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        {error && <span className="text-[11px] text-[color:var(--sakura-deep)]">{error}</span>}
      </div>
      {children}
    </label>
  );
}
