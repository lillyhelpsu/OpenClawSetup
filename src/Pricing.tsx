import React from 'react';

const C = {
  primary: "#10B981",
  primaryDark: "#059669", 
  primaryLight: "#D1FAE5",
  gradient: "linear-gradient(135deg, #10B981, #34D399)",
  gradientDark: "linear-gradient(135deg, #059669, #10B981)",
  shadow: "rgba(16,185,129,0.3)"
};

type IconType = "phone" | "pen" | "search" | "chart" | "zap" | "target" | "trending" | "settings" | "clipboard" | "cpu" | "send" | "check" | "clock" | "dollar" | "shield" | "cloud" | "users";

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
    cloud: <svg {...svgProps}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    users: <svg {...svgProps}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  };

  return <span style={s}>{icons[type]}</span>;
};

const pricingTiers = [
  {
    id: "foundation",
    title: "Cloud Foundation",
    subtitle: "Get OpenClaw Running",
    price: "$300",
    description: "Perfect for DIY marketers who want the technical setup handled",
    icon: "cloud" as IconType,
    features: [
      "OpenClaw installation & configuration in the cloud",
      "Basic prompt engineering setup",
      "1-hour consultation to understand your business",
      "Email support for 30 days",
      "Open claw setup documentation"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    id: "agent",
    title: "Marketing Agent",
    subtitle: "Single-Purpose Marketing Agent",
    price: "$500-$1,000",
    description: "Perfect for small businesses focusing on one key marketing channel",
    icon: "cpu" as IconType,
    features: [
      "Everything in Cloud Foundation, plus:",
      "1 custom marketing agent (social media OR blog writing OR research)",
      "Brand voice training & prompt optimization",
      "Platform integration (TikTok/Instagram/Facebook)",
      "Content calendar setup",
      "72-hour delivery"
    ],
    cta: "Build My Agent",
    popular: true
  },
  {
    id: "team",
    title: "Marketing Team",
    subtitle: "Complete Agent Swarm",
    price: "$1,000+",
    description: "Perfect for growing businesses ready to automate their entire content marketing",
    icon: "users" as IconType,
    features: [
      "Everything in Marketing Agent, plus:",
      "3-5 specialized agents (social + blog + research + strategy)",
      "Cross-agent coordination & workflow automation",
      "Advanced prompt chains & multi-step campaigns",
      "Priority support & monthly optimization calls"
    ],
    cta: "Scale My Marketing",
    popular: false
  }
];

const pricingFaqs = [
  { 
    q: "How much does OpenClaw marketing agent setup cost?", 
    a: "OpenClaw marketing agent setup starts at $300 for basic cloud configuration. A single custom marketing agent ranges from $500-$1,000, while our complete marketing team package starts at $1,000+. Final pricing depends on your specific needs, platforms, and complexity. No contracts required." 
  },
  { 
    q: "What's included in the OpenClaw setup service?", 
    a: "All packages include OpenClaw installation, configuration, prompt engineering, and testing. Higher tiers add custom agent development, brand voice training, platform integrations, and ongoing support. We handle all technical aspects so you don't need coding skills." 
  },
  { 
    q: "How long does OpenClaw agent setup take?", 
    a: "Cloud Foundation setup takes 24-48 hours. Custom marketing agents are delivered within 72 hours. Complete marketing teams typically take 5-7 days for full configuration and testing. We'll keep you updated throughout the process." 
  },
  { 
    q: "Do you offer refunds on OpenClaw setup?", 
    a: "Yes, we offer a 7-day satisfaction guarantee. If your OpenClaw agent doesn't meet expectations, we'll refund your setup fee. However, most clients see immediate value from their custom-configured agents." 
  },
  { 
    q: "Can I upgrade my OpenClaw package later?", 
    a: "Absolutely! You can start with Cloud Foundation and upgrade to a Marketing Agent or full Marketing Team later. We'll credit your initial investment toward the upgrade cost." 
  },
  { 
    q: "What platforms does your OpenClaw marketing agent support?", 
    a: "Our OpenClaw marketing agents support TikTok, Instagram, Facebook, blog content creation, and trend research. We can also integrate with custom platforms and APIs based on your specific needs." 
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    window.parent.postMessage({ type: 'scrollToForm' }, '*');
  };

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
          <span style={{ fontWeight: 600, fontSize: 16 }}>OpenClaw Marketing Agents</span>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href="../" style={{ color: "#666", textDecoration: "none", fontSize: 14 }}>← Back to Home</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ textAlign: "center", padding: "60px 24px 48px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "inline-block", padding: "5px 14px", borderRadius: 20, background: C.primaryLight, color: C.primaryDark, fontSize: 13, fontWeight: 600, marginBottom: 20 }}>Transparent OpenClaw Pricing</div>
        <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.02em" }}>OpenClaw Marketing Agent Setup Pricing<br/>— Plans from $300</h1>
        <p style={{ fontSize: 18, color: "#555", lineHeight: 1.6, margin: "0 0 32px", maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
          Choose the OpenClaw setup service that fits your business. Whether you need basic "open claw" installation or a complete marketing agent team, we have transparent pricing with no contracts or hidden fees.
        </p>
      </header>

      {/* Pricing Tiers */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "stretch" }}>
          {pricingTiers.map(tier => (
            <div key={tier.id} style={{ 
              background: "#fff", 
              borderRadius: 16, 
              border: tier.popular ? `2px solid ${C.primary}` : "2px solid #eee",
              padding: 32,
              textAlign: "left",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              height: "100%"
            }}>
              {tier.popular && (
                <div style={{ 
                  position: "absolute", 
                  top: -12, 
                  left: "50%", 
                  transform: "translateX(-50%)",
                  background: C.primary,
                  color: "#fff",
                  padding: "4px 16px",
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 600
                }}>
                  MOST POPULAR
                </div>
              )}
              
              <div style={{ marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon type={tier.icon} size={24} color={C.primaryDark} />
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 4px" }}>{tier.title}</h3>
                <p style={{ fontSize: 14, color: "#666", margin: "0 0 12px" }}>{tier.subtitle}</p>
                <div style={{ fontSize: 32, fontWeight: 800, color: C.primary, margin: "0 0 8px" }}>{tier.price}</div>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.5 }}>{tier.description}</p>
              </div>

              <div style={{ flex: 1, marginBottom: 24 }}>
                {tier.features.map((feature, i) => (
                  <div key={i} style={{ 
                    display: "flex", 
                    alignItems: "flex-start", 
                    gap: 8, 
                    marginBottom: 12,
                    fontSize: 14,
                    color: feature.includes("Everything in") ? "#888" : "#333",
                    fontWeight: feature.includes("Everything in") ? 500 : 400
                  }}>
                    <div style={{ width: 16, height: 16, flexShrink: 0, marginTop: 2 }}>
                      <Icon type="check" size={16} color={feature.includes("Everything in") ? "#888" : C.primary} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={scrollToContact}
                style={{ 
                  width: "100%",
                  padding: "14px 24px", 
                  borderRadius: 10, 
                  border: tier.popular ? "none" : `2px solid ${C.primary}`,
                  background: tier.popular ? C.gradient : "transparent", 
                  color: tier.popular ? "#fff" : C.primary, 
                  fontWeight: 700, 
                  fontSize: 16, 
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => {
                  if (!tier.popular) {
                    e.currentTarget.style.background = C.primaryLight;
                  }
                }}
                onMouseLeave={e => {
                  if (!tier.popular) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section style={{ background: "#fff", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px", textAlign: "center" }}>Why Choose Our OpenClaw Setup Service</h2>
          <p style={{ color: "#666", fontSize: 16, margin: "0 0 36px", textAlign: "center" }}>All pricing includes these guarantees</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {[
              { icon: "shield", title: "No Technical Skills Needed", text: "We handle all OpenClaw configuration, prompt engineering, and testing. You focus on your business." },
              { icon: "clock", title: "Setup in 72 Hours or Less", text: "From consultation to live agent, we deliver fast. Most clients see their first AI-generated content within 3 days." },
              { icon: "dollar", title: "No Long-Term Contracts", text: "Pay once for setup. No monthly platform fees, no recurring subscriptions. You own your OpenClaw agent." },
              { icon: "target", title: "Built for Your Brand Voice", text: "Every agent is custom-trained on your business, audience, and content style. Generic AI output doesn't work for marketing." }
            ].map(item => (
              <div key={item.title} style={{ textAlign: "center", padding: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Icon type={item.icon as IconType} size={22} color={C.primaryDark} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px" }}>OpenClaw Pricing FAQ</h2>
          <p style={{ color: "#666", fontSize: 16, margin: 0 }}>Common questions about our setup service pricing</p>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {pricingFaqs.map((faq, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, border: "1px solid #eee" }}>
              <div style={{ padding: "20px 24px" }}>
                <h3 style={{ fontWeight: 600, fontSize: 16, color: "#1a1a2e", margin: "0 0 12px" }}>{faq.q}</h3>
                <div style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "56px 24px", background: C.gradientDark }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>Ready to Get Your OpenClaw Marketing Agent?</h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", margin: "0 0 28px", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>Tell us your needs and we'll respond within 24 hours with a custom setup plan and final pricing. No commitment required.</p>
        <button onClick={scrollToContact} style={{ padding: "14px 36px", borderRadius: 10, border: "2px solid #fff", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>Get Your Custom Quote</button>
      </section>

      {/* Footer */}
      <footer style={{ padding: "32px 24px", textAlign: "center", fontSize: 13, color: "#999", borderTop: "1px solid #eee" }}>
        <p style={{ margin: "0 0 4px" }}>© 2026 OpenClaw Marketing Agents. OpenClaw Setup Service for Small and Medium Sized Businesses</p>
        <p style={{ margin: 0 }}>Custom OpenClaw social agents, content marketing automation, blog writing. OpenClaw pricing and open claw setup service available worldwide.</p>
      </footer>
    </div>
  );
}