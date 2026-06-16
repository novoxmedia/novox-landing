# NovoX Media — Landing Page

A fast, attractive, **standalone** marketing landing page for the NovoX Media (AI Social Media Agency) business. Pure HTML/CSS/JS — **no build step, no dependencies**. Deploy it anywhere for free.

## Files
- `index.html` — the page (hero, services, how-it-works, Nova section, pricing, testimonials, FAQ, CTA, footer)
- `styles.css` — all styling + animations (uses the same brand tokens as the app)
- `script.js` — scroll-reveal, animated counters, mobile menu, sticky nav, pricing toggle

## View it locally
Just open `index.html` in your browser (double-click it).

Or serve it (recommended, so relative paths behave like production):
```bash
# from the landing-page folder
npx serve .
# or
python -m http.server 8080
```
Then open http://localhost:8080

## Connect the buttons to your app
All **"Start free"** and **"Log in"** buttons point at your dashboard. Set the URL in one place — the top of `script.js`:
```js
const APP_URL = 'http://localhost:5174';   // ← change to your live app domain
```
For production, set it to your deployed user-frontend (e.g. `https://app.yourdomain.com`).

## Deploy free
Drag-and-drop the `landing-page` folder onto **Netlify Drop** (app.netlify.com/drop), or push to GitHub and enable **GitHub Pages**, or deploy with **Vercel**. It's a static site, so any host works.

## Customise
- **Text/offers:** edit `index.html`.
- **Colours/fonts:** edit the `:root` tokens at the top of `styles.css`.
- **Prices:** in `index.html`, each plan's `.amt` has `data-m` (monthly) and `data-y` (yearly) values.

## Animations
Smooth and tasteful (and respects `prefers-reduced-motion`):
- Fade-up **scroll reveal** with a subtle stagger
- **Count-up** number animations
- Floating hero mockups + drifting gradient aurora
- Hover lifts, animated nav underline, FAQ accordion, pricing toggle
