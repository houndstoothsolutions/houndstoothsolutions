## Plan: Final logo tweak + launch readiness review

### 1. Logo size bump
In `src/routes/index.tsx` (line 30), increase the logo size one more step:
- From: `h-16 w-auto sm:h-20` (64px mobile / 80px desktop)
- To: `h-20 w-auto sm:h-24` (80px mobile / 96px desktop)

### 2. Pre-launch readiness check
Before publishing, I'll verify:
- **SEO / meta tags** — title, description, og:title, og:description are set on the home route (already in place). I'll add `og:type` and Twitter card meta (`twitter:card`, `twitter:title`, `twitter:description`) so social previews look right.
- **Favicon** — confirm the favicon link in `__root.tsx` points at a real asset.
- **Build health** — confirm the project builds clean with no TypeScript errors after the logo change.
- **Security scan** — run the security scanner; address any critical findings before publishing.
- **Routes** — confirm `/` renders correctly and there are no placeholder/blank-page leftovers.

### 3. Publish
Once the above is green, publish to the Lovable URL (`responsive-wow-site.lovable.app`). Your site will be live ~1 minute after the publish call.

### About the Vercel deploy failure
Vercel deployments from a Lovable GitHub export usually fail because Vercel doesn't auto-detect TanStack Start's Cloudflare Worker build, and any environment variables (Lovable Cloud / Supabase keys) aren't carried over. **The simplest, supported path is to publish through Lovable** — the `.lovable.app` URL works out of the box, and you can attach a custom domain from Project Settings → Domains. I'd recommend going that route unless you specifically need Vercel hosting; troubleshooting Vercel would be a separate task.

### What I need from you
- Approve this plan to proceed with the logo bump + readiness check + publish.
- Confirm you want to publish to the existing URL `responsive-wow-site.lovable.app` (or tell me a new slug).
