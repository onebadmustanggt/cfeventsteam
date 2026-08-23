# The CF Events Team

Public site for [cfeventsteam.com](https://cfeventsteam.com) — volunteer-led community events for Canterbury Farms and the CSRA (Grovetown–Augusta, GA).

## What’s on the page

- Hero, events, about, awards, services, FAQ, and contact
- Honey and Harvest Fall Festival (Oct 10, 2026) and Bloom and Buzz Spring Market (Apr 3, 2027)
- Contact form to `cf.vendorevents@gmail.com`
- Instagram [`@cf.events.team`](https://www.instagram.com/cf.events.team/), TikTok [`@cf.vendorevents`](https://www.tiktok.com/@cf.vendorevents), and [Facebook](https://www.facebook.com/CF.VendorEvents)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43147](http://127.0.0.1:43147).

## Go live (GitHub → Vercel → GoDaddy)

GitHub repo: [onebadmustanggt/cfeventsteam](https://github.com/onebadmustanggt/cfeventsteam)

### 1. Put this code on GitHub

From this project folder, with GitHub CLI logged in:

```bash
git remote add github https://github.com/onebadmustanggt/cfeventsteam.git
git push -u github main
```

If `github` is already added, just run `git push github main`.

### 2. Deploy on Vercel (free Hobby plan is enough)

1. Open [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import **onebadmustanggt/cfeventsteam**.
3. Leave the defaults (Next.js is detected). Click **Deploy**.
4. When the build finishes, open the `*.vercel.app` URL and confirm the site.

### 3. Point cfeventsteam.com at Vercel (GoDaddy)

The domain currently uses GoDaddy nameservers (`ns37.domaincontrol.com`) and forwarding IPs. Those forwarding records must come off before Vercel can serve the site.

1. In Vercel: Project → **Settings** → **Domains** → add `cfeventsteam.com` and `www.cfeventsteam.com`.
2. Copy the **exact** records Vercel shows (do not guess). Typical values:
   - **A** record, name `@`, value `76.76.21.21` (or the IP on the domain card)
   - **CNAME** record, name `www`, value from the domain card (often `cname.vercel-dns.com` or a project-specific `*.vercel-dns-*.com`)
3. In GoDaddy → **cfeventsteam.com** → **DNS**:
   - Turn **off** forwarding / parking if it is on.
   - Delete the existing **A** records on `@` that point at `13.248.243.5` and `76.223.105.230`.
   - Add the Vercel **A** and **www CNAME** records.
   - Keep the Google verification **TXT** and email **SPF** records.
4. Wait for Vercel to show the domain as valid (often a few minutes; SSL is automatic).

### 4. Activate the contact form

The first live submission sends an activation email to `cf.vendorevents@gmail.com` from FormSubmit. Open that inbox (and spam) and click **Activate**. After that, vendor / creator / sponsor messages go to the same Gmail.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
