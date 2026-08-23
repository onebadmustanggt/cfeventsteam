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

To preview the Cloudflare Workers build on your machine:

```bash
npm run preview
```

## Go live (GitHub → Cloudflare)

Hosting is **Cloudflare Workers** (OpenNext). The domain stays registered at GoDaddy; DNS moves to Cloudflare.

GitHub repo: [onebadmustanggt/cfeventsteam](https://github.com/onebadmustanggt/cfeventsteam)

### 1. Put this code on GitHub

From this project folder, with GitHub logged in:

```bash
git remote add github https://github.com/onebadmustanggt/cfeventsteam.git
git push -u github main
```

If `github` is already added, run `git push github main`.

### 2. Add cfeventsteam.com to Cloudflare

1. Create a free account at [dash.cloudflare.com](https://dash.cloudflare.com/sign-up).
2. **Add a domain** → enter `cfeventsteam.com`.
3. Choose the **Free** plan.
4. Cloudflare will show two nameservers (they look like `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com` — yours will differ).
5. In **GoDaddy** → **cfeventsteam.com** → **DNS** / **Nameservers** → change from GoDaddy (`ns37.domaincontrol.com` / `ns38.domaincontrol.com`) to the two Cloudflare nameservers.
6. Turn **off** GoDaddy forwarding / parking if it is still on. After nameservers switch, GoDaddy DNS records no longer apply.
7. Wait until Cloudflare shows the zone as **Active** (often 15–30 minutes, sometimes longer).

Keep the Google verification TXT and email SPF records that Cloudflare copied over.

### 3. Connect the GitHub repo to a Worker

1. In Cloudflare: **Workers & Pages** → **Create** → **Import a repository**.
2. Sign in with GitHub and select **onebadmustanggt/cfeventsteam**, branch `main`.
3. Set:
   - **Build command:** `npx opennextjs-cloudflare build`
   - **Deploy command:** `npx opennextjs-cloudflare deploy`
4. Save and deploy. When it finishes you get a `*.workers.dev` URL — open that first and confirm the site.

### 4. Attach the real domain

1. Open the `cfeventsteam` Worker → **Settings** → **Domains & Routes**.
2. Add custom domains `cfeventsteam.com` and `www.cfeventsteam.com`.
3. Cloudflare will create the DNS records. SSL is automatic.

If the apex still shows GoDaddy’s old parking IPs (`13.248.243.5` / `76.223.105.230`), delete those A records in the Cloudflare DNS tab so only the Worker records remain.

### 5. Activate the contact form

The first live submission sends an activation email to `cf.vendorevents@gmail.com` from FormSubmit. Open that inbox (and spam) and click **Activate**. After that, vendor / creator / sponsor messages go to the same Gmail.

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui, and OpenNext on Cloudflare Workers.
