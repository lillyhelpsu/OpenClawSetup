import React, { useState, useRef } from "react";

const C = {
  primary: "#10B981",
  primaryDark: "#059669", 
  primaryLight: "#D1FAE5",
  gradient: "linear-gradient(135deg, #10B981, #34D399)",
  gradientDark: "linear-gradient(135deg, #059669, #10B981)",
  shadow: "rgba(16,185,129,0.3)"
};

const STEPS = ["Services", "Details", "Goals", "Contact"];

type IconType = "phone" | "pen" | "search" | "chart" | "zap" | "target" | "trending" | "settings" | "clipboard" | "cpu" | "send" | "check" | "clock" | "dollar" | "shield";

interface IconProps {
  type: IconType;
  size?: number;
  color?: string;
}

const Icon = ({ type, size = 28, color = C.primary }: IconProps) => {
  const s = { width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center" };
  const svgProps = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  const icons: Record<IconType, React.ReactElement> = {
    phone: <svg {...svgProps}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>,
    pen: <svg {...svgProps}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    search: <svg {...svgProps}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    chart: <svg {...svgProps}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    zap: <svg {...svgProps}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="none"/></svg>,
    target: <svg {...svgProps}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    trending: <svg {...svgProps}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    settings: <svg {...svgProps}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    clipboard: <svg {...svgProps}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>,
    cpu: <svg {...svgProps}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
    send: <svg {...svgProps}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
    check: <svg {...svgProps}><polyline points="20 6 9 17 4 12"/></svg>,
    clock: <svg {...svgProps}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    dollar: <svg {...svgProps}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    shield: <svg {...svgProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  };

  return <span style={s}>{icons[type]}</span>;
};

const serviceOptions: Array<{ id: string; label: string; desc: string; icon: IconType }> = [
  { id: "social", label: "Social Media Content", desc: "TikTok, Instagram, Facebook posts, reels, and stories", icon: "phone" },
  { id: "blog", label: "Blog Writing", desc: "SEO-optimized articles that drive organic traffic", icon: "pen" },
  { id: "research", label: "Topic & Trend Research", desc: "Data-driven content ideas tailored to your audience", icon: "search" },
  { id: "strategy", label: "Full Content Strategy", desc: "End-to-end planning, creation, and calendar management", icon: "chart" },
];

const platformOptions = ["TikTok", "Instagram", "Facebook", "Blog / Website", "All of the above"];
const cadenceOptions = ["A few posts per week", "Daily posting", "Multiple posts per day", "Not sure, help me decide"];
const goalOptions = ["Brand awareness", "Lead generation", "Drive foot traffic", "Online sales / conversions", "Ecommerce", "Community building", "Thought leadership"];

const features = [
  { icon: "settings", title: "Agent Setup Is Still Technical. We Handle It.", text: "Building a marketing agent that actually works means wiring together LLMs, prompt chains, APIs, and output formatting. Most businesses hit a wall trying to do this themselves. We've done it dozens of times, so you skip straight to results." },
  { icon: "dollar", title: "Cheaper Than a Platform Subscription", text: "Third-party AI marketing platforms charge monthly seats, per-post fees, and lock you into their ecosystem. We build you an agent you own. No recurring platform tax, no feature gates, no surprise invoices as you scale. Setup starts at just $300." },
  { icon: "cpu", title: "Deep Prompt Engineering & AI Expertise", text: "The difference between generic AI output and content that sounds like your brand comes down to how the agent is built. Our team has deep expertise in prompt architecture, model tuning, and agent orchestration, the kind of work that turns a chatbot into a content team." },
  { icon: "target", title: "The Right Models for Your Goals & Budget", text: "Not every task needs the most expensive model. We match each part of your workflow (writing, image generation, video, research) to the most cost-effective LLM and tooling available, so you get quality output without overspending." },
  { icon: "clock", title: "Stop Wasting Weeks on Trial and Error", text: "Every hour you spend testing prompts, comparing tools, and troubleshooting broken workflows is an hour you're not running your business. We compress months of experimentation into a 72-hour setup that works from day one." },
  { icon: "shield", title: "Built to Your Brand, Not a Generic Template", text: "Off-the-shelf tools produce off-the-shelf content. Your agent is configured around your voice, your audience, and your industry, so the output doesn't read like it came from the same machine as your competitor's." },
];

const faqs = [
  { q: "What is an AI marketing agent?", a: "An AI marketing agent is an autonomous system that handles content marketing tasks like writing social media posts, blog articles, researching trending topics, and managing content calendars, all without requiring constant human input. OpenClaw agents are custom-configured for each business, so they produce content that matches your brand voice and speaks directly to your audience." },
  { q: "How is an OpenClaw agent different from ChatGPT or other AI tools?", a: "Generic AI tools give you one response at a time and require you to write every prompt. An OpenClaw marketing agent is a configured system built around your business. It knows your brand, your audience, your platforms, and your goals. It works as a content marketing team member, not a chatbot you have to babysit." },
  { q: "What platforms does the social media agent support?", a: "Our AI social agent creates platform-native content for TikTok, Instagram, and Facebook. Each post is formatted and written specifically for how that platform's algorithm and audience behaves. TikTok hooks, Instagram carousel copy, Facebook community posts. Not one-size-fits-all content." },
  { q: "How much does it cost?", a: "Setup starts at just $300, depending on how many platforms you need covered, your posting cadence, and whether you need blog content and topic research. After you submit your needs through our intake form, we'll respond within 24 hours with a custom proposal and transparent pricing. No hidden fees, no long-term contracts required." },
  { q: "Will the content sound like AI wrote it?", a: "No, and that's the point. We configure your OpenClaw agent with your brand voice, tone, and real examples of how your business communicates. The output reads like it came from someone who knows your business inside and out, because the agent is trained on your specific context." },
  { q: "How long does it take to set up?", a: "Most OpenClaw marketing agents are configured and producing content within 48 to 72 hours of onboarding. We handle the setup. You just provide your brand info, goals, and preferences through our intake process, and we build the agent around it." },
];

const stats = [
  { num: "$300", label: "Starting setup cost" },
  { num: "24hr", label: "Turnaround on your custom proposal" },
  { num: "72hr", label: "Average time from signup to first content" },
  { num: "0", label: "Long-term contracts required" },
];

interface FormData {
  services: string[];
  platforms: string[];
  cadence: string;
  budget: string;
  goals: string[];
  businessName: string;
  industry: string;
  website: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export default function App() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>({
    services: [],
    platforms: [],
    cadence: "",
    budget: "",
    goals: [],
    businessName: "",
    industry: "",
    website: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

  const submitToSheet = async () => {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          businessName: form.businessName,
          industry: form.industry,
          website: form.website,
          services: form.services.map(s => serviceOptions.find(o => o.id === s)?.label).join(", "),
          platforms: form.platforms.join(", "),
          cadence: form.cadence,
          goals: form.goals.join(", "),
          notes: form.notes,
        }),
      });
    } catch (err) {
      console.error("Submission error:", err);
    }
    setSubmitted(true);
  };

  const toggle = (key: keyof FormData, val: string) => {
    setForm(f => ({
      ...f,
      [key]: Array.isArray(f[key]) && (f[key] as string[]).includes(val)
        ? (f[key] as string[]).filter((v: string) => v !== val)
        : [...(f[key] as string[]), val]
    }));
  };

  const canNext = () => {
    if (step === 0) return form.services.length > 0;
    if (step === 1) return form.platforms.length > 0 && form.cadence;
    if (step === 2) return form.goals.length > 0;
    if (step === 3) return form.name && form.email && form.businessName;
    return true;
  };

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  interface ChipProps {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
    sub?: string;
    icon?: IconType;
  }

  const Chip: React.FC<ChipProps> = ({ selected, onClick, children, sub, icon }) => (
    <button onClick={onClick} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: sub ? "14px 18px" : "10px 16px", borderRadius: 10, border: selected ? `2px solid ${C.primary}` : "2px solid #E2E2E2", background: selected ? C.primaryLight : "#fff", cursor: "pointer", textAlign: "left", transition: "all 0.15s", width: "100%" }}>
      {icon && <span style={{ marginTop: 1 }}><Icon type={icon} size={20} /></span>}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>{children}</span>
        {sub && <span style={{ fontSize: 13, color: "#666", lineHeight: 1.4 }}>{sub}</span>}
      </div>
    </button>
  );

  interface RadioBtnProps {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }

  const RadioBtn: React.FC<RadioBtnProps> = ({ selected, onClick, children }) => (
    <button onClick={onClick} style={{ padding: "10px 16px", borderRadius: 10, border: selected ? `2px solid ${C.primary}` : "2px solid #E2E2E2", background: selected ? C.primaryLight : "#fff", cursor: "pointer", fontWeight: 500, fontSize: 14, color: "#1a1a2e", transition: "all 0.15s", width: "100%", textAlign: "left" }}>{children}</button>
  );

  interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    required?: boolean;
    placeholder?: string;
  }

  const Input: React.FC<InputProps> = ({ label, value, onChange, type = "text", required, placeholder }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>{label} {required && <span style={{ color: C.primary }}>*</span>}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{ padding: "10px 14px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 15, outline: "none", fontFamily: "inherit" }} onFocus={e => e.target.style.borderColor = C.primary} onBlur={e => e.target.style.borderColor = "#ddd"} />
    </div>
  );

  const stepContent = [
    <div key={0} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div><h2 style={{ margin: 0, fontSize: 22, color: "#1a1a2e" }}>What do you need help with?</h2><p style={{ margin: "6px 0 0", color: "#666", fontSize: 15 }}>Select the AI marketing agent services you need.</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{serviceOptions.map(s => <Chip key={s.id} selected={form.services.includes(s.id)} onClick={() => toggle("services", s.id)} sub={s.desc} icon={s.icon}>{s.label}</Chip>)}</div>
    </div>,
    <div key={1} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div><h2 style={{ margin: 0, fontSize: 22, color: "#1a1a2e" }}>Configure your social agent</h2><p style={{ margin: "6px 0 0", color: "#666", fontSize: 15 }}>Tell us where and how often your AI agent should post.</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><label style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>Which platforms?</label>{platformOptions.map(p => <Chip key={p} selected={form.platforms.includes(p)} onClick={() => toggle("platforms", p)}>{p}</Chip>)}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><label style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>Posting cadence</label>{cadenceOptions.map(c => <RadioBtn key={c} selected={form.cadence === c} onClick={() => setForm(f => ({ ...f, cadence: c }))}>{c}</RadioBtn>)}</div>
    </div>,
    <div key={2} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div><h2 style={{ margin: 0, fontSize: 22, color: "#1a1a2e" }}>What should your marketing agent optimize for?</h2><p style={{ margin: "6px 0 0", color: "#666", fontSize: 15 }}>Pick the outcomes that matter most to your business.</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{goalOptions.map(g => <Chip key={g} selected={form.goals.includes(g)} onClick={() => toggle("goals", g)}>{g}</Chip>)}</div>
    </div>,
    <div key={3} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div><h2 style={{ margin: 0, fontSize: 22, color: "#1a1a2e" }}>Get your custom agent proposal</h2><p style={{ margin: "6px 0 0", color: "#666", fontSize: 15 }}>We'll respond within 24 hours with your AI marketing agent setup plan and pricing.</p></div>
      <Input label="Your name" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} required placeholder="Jane Smith" />
      <Input label="Email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} type="email" required placeholder="jane@business.com" />
      <Input label="Phone (optional)" value={form.phone} onChange={v => setForm(f => ({ ...f, phone: v }))} placeholder="(555) 123-4567" />
      <Input label="Business name" value={form.businessName} onChange={v => setForm(f => ({ ...f, businessName: v }))} required placeholder="Jane's Bakery" />
      <Input label="Industry" value={form.industry} onChange={v => setForm(f => ({ ...f, industry: v }))} placeholder="e.g. Retail, Fitness, Real Estate" />
      <Input label="Website (optional)" value={form.website} onChange={v => setForm(f => ({ ...f, website: v }))} placeholder="https://yourbusiness.com" />
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>Anything else?</label>
        <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={3} placeholder="Current pain points, things you've tried, what success looks like..." style={{ padding: "10px 14px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 15, fontFamily: "inherit", resize: "vertical", outline: "none" }} onFocus={e => e.target.style.borderColor = C.primary} onBlur={e => e.target.style.borderColor = "#ddd"} />
      </div>
    </div>,
  ];

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #f0fdf9 0%, #ecfdf5 100%)", fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", padding: 20 }}>
        <div style={{ textAlign: "center", maxWidth: 480, padding: 40 }}>
          <div style={{ width: 64, height: 64, borderRadius: 20, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}><Icon type="check" size={32} color={C.primaryDark} /></div>
          <h1 style={{ fontSize: 26, color: "#1a1a2e", margin: "0 0 12px" }}>We're on it, {form.name.split(" ")[0]}.</h1>
          <p style={{ fontSize: 16, color: "#555", lineHeight: 1.6 }}>Our team is building a custom AI marketing agent proposal for <strong>{form.businessName}</strong>. You'll hear from us at <strong>{form.email}</strong> within 24 hours with your setup plan and pricing.</p>
          <div style={{ marginTop: 32, padding: 20, background: "#fff", borderRadius: 12, border: "1px solid #eee", textAlign: "left" }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: 0.5 }}>Your request summary</p>
            <div style={{ marginTop: 12, fontSize: 14, color: "#444", lineHeight: 1.8 }}>
              <div><strong>Services:</strong> {form.services.map(s => serviceOptions.find(o => o.id === s)?.label).join(", ")}</div>
              <div><strong>Platforms:</strong> {form.platforms.join(", ")}</div>
              <div><strong>Cadence:</strong> {form.cadence}</div>
              <div><strong>Goals:</strong> {form.goals.join(", ")}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const SS = { section: { maxWidth: 800, margin: "0 auto", padding: "64px 24px" } };

  return (
    <div style={{ minHeight: "100vh", background: "#fafdfb", fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", color: "#1a1a2e" }}>
      {/* Nav */}
      <nav style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: C.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 18c0 2 1.5 5 3 6.5 1 1 2 1.5 3 1.5s2-.5 3-1.5c1.5-1.5 3-4.5 3-6.5"/>
              <path d="M10 18c0-2 1-4 2.5-5.5.8-.8 2-.5 3.5-.5s2.7-.3 3.5.5C21 14 22 16 22 18"/>
              <path d="M10 18c-1.5 0-3-.5-4-2s-1.5-3.5-1-5c.5-1.5 2-2 3.5-1.5s2.5 2 2.5 3.5"/>
              <path d="M22 18c1.5 0 3-.5 4-2s1.5-3.5 1-5c-.5-1.5-2-2-3.5-1.5s-2.5 2-2.5 3.5"/>
              <path d="M5 11c-1-2-1-4.5 0-6 .7-.7 1.5-.5 2 .5.4.8.5 2 0 3"/>
              <path d="M27 11c1-2 1-4.5 0-6-.7-.7-1.5-.5-2 .5-.4.8-.5 2 0 3"/>
            </svg>
          </div>
        </div>
        <button onClick={scrollToForm} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: C.primary, color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Get Started</button>
      </nav>

      {/* Hero */}
      <header style={{ textAlign: "center", padding: "60px 24px 48px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "inline-block", padding: "5px 14px", borderRadius: 20, background: C.primaryLight, color: C.primaryDark, fontSize: 13, fontWeight: 600, marginBottom: 20 }}>AI Marketing Agents for small to medium sized businesses</div>
        <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.02em" }}>Your AI Marketing Agent<br/>Custom Built and Always On</h1>
        <p style={{ fontSize: 18, color: "#555", lineHeight: 1.6, margin: "0 0 32px", maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
          OpenClaw sets up autonomous marketing agents that create social media posts, write blog content, and research trending topics for your business across TikTok, Instagram, and Facebook. Tell us what you need, and we'll build your agent in 72 hours. Setup starts at just $300.
        </p>
        <button onClick={scrollToForm} style={{ padding: "14px 36px", borderRadius: 10, border: "none", background: C.gradient, color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: `0 4px 16px ${C.shadow}` }}>
          Build My Marketing Agent
        </button>
      </header>

      {/* Stats */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {stats.map(s => (
            <div key={s.num} style={{ textAlign: "center", padding: "20px 8px", background: "#fff", borderRadius: 12, border: "1px solid #eee" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: C.primary }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "#777", marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ ...SS.section, paddingTop: 48, paddingBottom: 48, textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px" }}>How OpenClaw Marketing Agents Work</h2>
        <p style={{ color: "#666", fontSize: 16, margin: "0 0 36px" }}>Three steps from signup to your first AI-generated content.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {[
            { n: "1", title: "Tell Us Your Needs", text: "Fill out the intake form with your platforms, goals, posting cadence, and brand details. Takes about 2 minutes.", icon: "clipboard" },
            { n: "2", title: "We Build Your Agent", text: "Our team configures a custom OpenClaw AI marketing agent trained on your brand voice, audience, and content strategy.", icon: "cpu" },
            { n: "3", title: "Content Starts Flowing", text: "Your agent produces platform-native social posts, blog articles, and topic research, ready for review or auto-publish.", icon: "send" },
          ].map(s => (
            <div key={s.n} style={{ padding: 24, background: "#fff", borderRadius: 14, border: "1px solid #eee", textAlign: "left" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}><Icon type={s.icon} size={20} color={C.primaryDark} /></div>
              <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 14, color: "#666", lineHeight: 1.6 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "#fff", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ ...SS.section }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px", textAlign: "center" }}>Why Trust Us to Set Up Your Marketing Agent</h2>
          <p style={{ color: "#666", fontSize: 16, margin: "0 0 36px", textAlign: "center" }}>Agent setup is the hard part. We've already figured it out so you don't have to.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {features.map(f => (
              <div key={f.title} style={{ padding: 24, borderRadius: 14, border: "1px solid #eee", background: "#fafdfb" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}><Icon type={f.icon} size={22} color={C.primaryDark} /></div>
                <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 700 }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: "#555", lineHeight: 1.65 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section ref={formRef} style={{ ...SS.section, paddingBottom: 32 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px" }}>Get Your Custom AI Marketing Agent</h2>
          <p style={{ color: "#666", fontSize: 16, margin: 0 }}>Tell us what you need. We'll respond in 24 hours with a setup plan and pricing.</p>
        </div>
        <div style={{ maxWidth: 520, margin: "0 auto 16px", display: "flex", gap: 6 }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ height: 4, width: "100%", borderRadius: 4, background: i <= step ? C.gradient : "#ddd", transition: "background 0.3s" }} />
              <span style={{ fontSize: 11, fontWeight: i === step ? 700 : 500, color: i <= step ? C.primary : "#aaa" }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px 24px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0" }}>
            {stepContent[step]}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28 }}>
              {step > 0 ? <button onClick={() => setStep(s => s - 1)} style={{ padding: "10px 20px", borderRadius: 8, border: "1.5px solid #ddd", background: "#fff", fontSize: 14, fontWeight: 600, color: "#666", cursor: "pointer" }}>Back</button> : <div />}
              <button onClick={() => { step < 3 ? setStep(s => s + 1) : submitToSheet(); }} disabled={!canNext()} style={{ padding: "10px 28px", borderRadius: 8, border: "none", background: canNext() ? C.gradient : "#ddd", color: "#fff", fontSize: 14, fontWeight: 700, cursor: canNext() ? "pointer" : "not-allowed", boxShadow: canNext() ? `0 4px 12px ${C.shadow}` : "none" }}>
                {step < 3 ? "Continue" : "Get My Custom Proposal"}
              </button>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 16, display: "flex", justifyContent: "center", gap: 24, fontSize: 12, color: "#999" }}>
            {["From $300", "24hr response", "No contracts"].map(t => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 4 }}><Icon type="check" size={14} color="#999" /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#fff", borderTop: "1px solid #eee" }}>
        <div style={{ ...SS.section }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px", textAlign: "center" }}>Frequently Asked Questions About AI Marketing Agents</h2>
          <p style={{ color: "#666", fontSize: 16, margin: "0 auto 36px", textAlign: "center", maxWidth: 560 }}>Everything you need to know about how OpenClaw marketing agents work, what they cost, and what to expect.</p>
          <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                  <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>{f.q}</span>
                  <span style={{ fontSize: 18, color: "#999", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: 14, color: "#555", lineHeight: 1.7 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ textAlign: "center", padding: "56px 24px", background: C.gradientDark }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>Ready to Put Your Content Marketing on Autopilot?</h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", margin: "0 0 28px", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>Get a custom AI marketing agent built for your business. Setup starts at $300, no contracts, no commitment. Just a proposal and a price.</p>
        <button onClick={scrollToForm} style={{ padding: "14px 36px", borderRadius: 10, border: "2px solid #fff", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>Build My Agent</button>
      </section>

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", fontSize: 13, color: "#999", borderTop: "1px solid #eee" }}>
        <p style={{ margin: "0 0 4px" }}>© 2026 OpenClaw. AI-Powered Marketing Agents for Small and Medium Sized Businesses</p>
        <p style={{ margin: 0 }}>Custom AI social agents, content marketing automation, blog writing, and social media management powered by OpenClaw.</p>
      </footer>
    </div>
  );
}