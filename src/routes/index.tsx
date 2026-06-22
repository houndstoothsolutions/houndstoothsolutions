import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "../assets/houndstooth-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Houndstooth Solutions — Websites Built for Local Businesses" },
      { name: "description", content: "We build modern, high-converting websites for local businesses in Metro Atlanta. Free demo in 48 hours. No upfront cost." },
      { property: "og:title", content: "Houndstooth Solutions — Websites for Local Businesses" },
      { property: "og:description", content: "Free demo in 48 hours. No upfront cost. Serving Acworth, Kennesaw, Marietta and Metro Atlanta." },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#how", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Portfolio" },
  { href: "#about", label: "About" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <div className="grid h-9 w-9 place-items-center rounded-md bg-ink text-cream">
        <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M0 0h4v4H0zM4 4h4v4H4zM0 8h4v4H0zM4 12h4v4H4zM8 0h4v4H8zM12 4h4v4h-4zM8 8h4v4H8zM12 12h4v4h-4z" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-bold tracking-tight text-ink">Houndstooth</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Solutions</div>
      </div>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-10">
          <Logo />
          <nav className="hidden items-center justify-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/75 transition hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#demo" className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 sm:inline-flex">
              Get a Demo
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-ink transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-ink transition ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-ink transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="border-b border-border/60 py-3 text-sm font-medium">
                  {n.label}
                </a>
              ))}
              <a href="#demo" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
                Get a Demo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute right-[-10%] top-[10%] hidden h-[520px] w-[520px] rounded-full bg-primary/5 blur-3xl lg:block" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Metro Atlanta · Acworth · Kennesaw · Marietta
            </div>
            <h1 className="mt-6 font-display text-[2.5rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Your business deserves a website that actually{" "}
              <em className="font-display italic text-primary">works.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Houndstooth Solutions builds modern, high-converting websites for local businesses —
              fast, affordable, and built by a dedicated team that knows your market. No agencies.
              No bloat. Just results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-pop transition hover:brightness-110">
                Request a Free Demo
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-md border border-ink/20 bg-card px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40">
                See Our Work
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "48hr", l: "Average delivery time", accent: true },
                { k: "$0", l: "Upfront cost to see a demo" },
                { k: "100%", l: "Local — we know your market", accent: true },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-bold sm:text-4xl">
                    <span className="text-ink">{s.k.replace(/[a-z%]+$/i, "")}</span>
                    <span className={s.accent ? "text-primary" : "text-ink"}>{s.k.match(/[a-z%]+$/i)?.[0]}</span>
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero card */}
          <div className="relative lg:col-span-5">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-primary/10" />
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Client Overview — June 2026
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Active client sites</span>
                  <span className="font-display text-xl font-semibold text-ink">19</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avg. turnaround time</span>
                  <span className="font-display text-xl font-semibold text-ink">48 hrs</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-muted p-4">
                  <div className="font-display text-2xl font-bold text-ink">4.8<span className="text-primary">★</span></div>
                  <div className="mt-1 text-xs text-muted-foreground">Avg. client rating</div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="font-display text-2xl font-bold text-ink">48<span className="text-primary">h</span></div>
                  <div className="mt-1 text-xs text-muted-foreground">Avg. build time</div>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  { name: "Caribbean Vibes", status: "Live", live: true },
                  { name: "Clanton Auto & AC", status: "Live", live: true },
                  { name: "New Client", status: "Demo Sent", live: false },
                ].map((c) => (
                  <li key={c.name} className="flex items-center justify-between border-t border-border/60 pt-2.5">
                    <span className="flex items-center gap-2 font-medium text-ink">
                      <span className={`h-1.5 w-1.5 rounded-full ${c.live ? "bg-emerald-500" : "bg-muted-foreground/40"}`} />
                      {c.name}
                    </span>
                    <span className={`text-xs font-semibold ${c.live ? "text-emerald-600" : "text-muted-foreground"}`}>
                      {c.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Service area strip */}
        <div className="border-y border-border bg-cream">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:px-6 sm:text-sm lg:px-10">
            <span className="text-ink">Serving businesses in</span>
            {["Acworth, GA", "Kennesaw, GA", "Marietta, GA", "Cumming, GA", "Canton, GA", "Metro Atlanta"].map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Process</div>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            From idea to live in <em className="italic text-primary">days — not months.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We handle everything. You just show up, approve, and go live. No technical knowledge required.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "You Send Us Your Info", d: "Business name, services, photos, and anything else you want on your site. A quick call or email is all it takes." },
            { t: "We Build a Custom Demo", d: "Within 48 hours, we deliver a fully designed, live demo site built specifically for your business. No templates, no guesswork." },
            { t: "You Review and Approve", d: "We revise until it's exactly right. Your feedback shapes the final product — you don't pay until you're satisfied." },
            { t: "We Launch and Support", d: "We handle hosting, your domain, and ongoing updates every month. Your site stays fresh without any effort on your end." },
          ].map((s, i) => (
            <li key={s.t} className="group relative rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
              <div className="font-display text-5xl font-bold text-primary/20 transition group-hover:text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pricing</div>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Simple pricing. <em className="italic text-primary">No surprises.</em>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every plan includes a custom-built site, hosting, and ongoing support. Pick the tier that fits your business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { tag: "Starter", name: "Essential", price: "$499", sub: "one-time setup + $79/mo", features: ["Custom designed website", "Up to 4 pages", "Mobile responsive", "Google Maps integration", "Contact form", "Hosting included", "1 monthly update"] },
              { tag: "Most Popular", name: "Growth", price: "$799", sub: "one-time setup + $129/mo", features: ["Everything in Essential", "Up to 8 pages", "Social media integration", "Reviews showcase", "Photo gallery", "SEO optimization", "Unlimited monthly updates"], featured: true },
              { tag: "Premium", name: "Authority", price: "$1,299", sub: "one-time setup + $199/mo", features: ["Everything in Professional", "Unlimited pages", "Online booking / contact forms", "Blog or news section", "Custom domain + SSL", "Monthly performance report", "Priority support"] },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-7 transition ${
                  p.featured
                    ? "border-primary bg-ink text-cream shadow-pop lg:-translate-y-3"
                    : "border-border bg-card hover:border-ink/40"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                    {p.tag}
                  </span>
                )}
                <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}>
                  {p.featured ? "Plan" : p.tag}
                </div>
                <div className={`mt-1 font-display text-2xl font-bold ${p.featured ? "text-cream" : "text-ink"}`}>{p.name}</div>
                <div className={`mt-6 font-display text-5xl font-bold ${p.featured ? "text-cream" : "text-ink"}`}>{p.price}</div>
                <div className={`mt-1 text-sm ${p.featured ? "text-cream/60" : "text-muted-foreground"}`}>{p.sub}</div>
                <ul className={`mt-6 space-y-3 text-sm ${p.featured ? "text-cream/90" : "text-foreground"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg viewBox="0 0 20 20" className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-primary" : "text-primary"}`} fill="currentColor" aria-hidden>
                        <path d="M8.5 13.5 5 10l-1.5 1.5L8.5 16.5 17 8l-1.5-1.5z" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "border border-ink/20 text-ink hover:border-ink/40 hover:bg-muted"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Work</div>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Built for real <em className="italic text-primary">local businesses.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every site we build is custom — designed around the business, not a template. Here's a sample of what we deliver.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Caribbean Vibes", loc: "Acworth, GA", desc: "Multi-page restaurant site with real menu, photo gallery, social integration, and Google reviews showcase.", tag: "Restaurant", grad: "from-amber-400 via-orange-500 to-rose-600" },
            { name: "Clanton Fast Brake Auto", loc: "Cumming, GA", desc: "Professional auto shop site with service listings, customer reviews, hours, and map integration.", tag: "Auto Repair", grad: "from-slate-700 via-slate-800 to-slate-900" },
            { name: "Your Business Could Be Next", loc: "Metro Atlanta", desc: "We build sites for restaurants, auto shops, salons, contractors, retail stores, and more. Request a free demo today.", tag: "All Industries", grad: "from-primary via-rose-600 to-ink" },
          ].map((c) => (
            <article key={c.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-card">
              <div className={`aspect-[4/3] bg-gradient-to-br ${c.grad} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                <div className="absolute bottom-4 left-4 right-4 font-display text-2xl font-bold text-white drop-shadow">
                  {c.name}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{c.tag}</span>
                  <span className="text-xs text-muted-foreground">{c.loc}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT / TESTIMONIALS */}
      <section id="about" className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Houndstooth</div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                We're local. We're fast. <em className="italic text-primary">We deliver.</em>
              </h2>
              <p className="mt-4 text-cream/70">
                Based in Metro Atlanta — we know the market, we know the businesses, and we know what it takes to win online locally.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div>
                  <div className="font-display text-3xl font-bold">48<span className="text-primary">h</span></div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-cream/60">Avg. build time</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold">$0</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-cream/60">Cost to see a demo</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold">100<span className="text-primary">%</span></div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-cream/60">Custom built</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold">Local</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-cream/60">Metro Atlanta based</div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:col-span-7">
              {[
                { q: "They built us a beautiful site in less than 48 hours. It looks more professional than anything we could have gotten from a big agency — for a fraction of the price.", who: "Caribbean Vibes", role: "Restaurant · Acworth, GA" },
                { q: "Our old website was embarrassing. The new one actually makes us look like the professional shop we are. Customers mention it all the time.", who: "Auto Repair Client", role: "Auto Shop · Cumming, GA" },
                { q: "No contracts, no confusion. They showed me the demo and I was sold. The monthly updates keep everything fresh without me having to lift a finger.", who: "Local Business Owner", role: "Retail · Metro Atlanta" },
              ].map((t) => (
                <figure key={t.who} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
                  <div className="font-display text-4xl leading-none text-primary">"</div>
                  <blockquote className="mt-2 text-base leading-relaxed text-cream/90">{t.q}</blockquote>
                  <figcaption className="mt-4 border-t border-white/10 pt-4 text-sm">
                    <div className="font-semibold text-cream">{t.who}</div>
                    <div className="text-cream/60">{t.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / DEMO */}
      <section id="demo" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Request a Demo</div>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              See what your business could look like <em className="italic text-primary">online.</em>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We'll build a custom demo site for your business — free, no obligation. If you love it, we'll talk. If not, you owe us nothing.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                ["Delivered in 48 hours", "We move fast so you can see results before committing to anything."],
                ["Built for your business", "Not a template. Your name, your services, your photos."],
                ["Zero pressure", "We'll show you the demo and answer your questions. You decide from there."],
                ["Serving Metro Atlanta", "Acworth, Kennesaw, Marietta, Cumming, and surrounding areas."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor" aria-hidden>
                      <path d="M8.5 13.5 5 10l-1.5 1.5L8.5 16.5 17 8l-1.5-1.5z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-ink">{t}</div>
                    <div className="text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <DemoForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-10">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Custom-built websites for local businesses across Metro Atlanta. Built with care. Roll Tide.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Explore</div>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-muted-foreground hover:text-primary">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:gavinjonesua@gmail.com" className="hover:text-primary">gavinjonesua@gmail.com</a></li>
              <li>Metro Atlanta, GA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-10">
            <div>© {new Date().getFullYear()} Houndstooth Solutions. All rights reserved.</div>
            <div>Built in Metro Atlanta.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card sm:p-12">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
          <svg viewBox="0 0 20 20" className="h-7 w-7" fill="currentColor" aria-hidden>
            <path d="M8.5 13.5 5 10l-1.5 1.5L8.5 16.5 17 8l-1.5-1.5z" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">Request sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks — we'll be in touch within 24 hours at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formsubmit.co/gavinjonesua@gmail.com"
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      {/* formsubmit config */}
      <input type="hidden" name="_subject" value="New Houndstooth demo request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <h3 className="font-display text-2xl font-bold text-ink">Request Your Free Demo</h3>
      <p className="mt-1 text-sm text-muted-foreground">Fill out the form and we'll be in touch within 24 hours.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="First Name" name="first_name" required />
        <Field label="Last Name" name="last_name" required />
        <Field label="Business Name" name="business_name" required wide />
        <Field label="Email Address" type="email" name="email" required />
        <Field label="Phone Number" type="tel" name="phone" />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Type of Business
          </label>
          <select
            name="business_type"
            required
            defaultValue=""
            className="w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>Select your industry...</option>
            {["Restaurant / Food & Beverage","Auto Repair / Mechanic","Salon / Barbershop / Spa","Contractor / Home Services","Retail / Boutique","Medical / Dental","Fitness / Gym","Other"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Anything else we should know?
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-pop transition hover:brightness-110 sm:w-auto"
      >
        Request My Free Demo
      </button>
      <p className="mt-3 text-xs text-muted-foreground">No commitment required. We'll reach out within 24 hours.</p>
    </form>
  );
}

function Field({ label, name, type = "text", required, wide }: { label: string; name: string; type?: string; required?: boolean; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
