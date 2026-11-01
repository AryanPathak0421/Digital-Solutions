# Rozsewa Digital — Web & Digital Solutions Agency Platform

A modern, production-level, premium React frontend website designed for an India-focused web development and digital solutions agency that delivers affordable websites, dynamic web applications, role-based admin panels, and mobile apps to local Indian businesses.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAryanPathak0421%2FDigital-Solutions)

---

## 🚀 How to Deploy on Vercel

### Option 1: Automatic 1-Click Import (Recommended)

1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and select the **`Digital-Solutions`** repository.
3. Vercel will automatically detect the settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**.
5. Your website will be live with full SSL, global CDN, and automatic continuous deployment on every Git push!

> **Note on SPA Routing:** The repository includes [`vercel.json`](./vercel.json) configured with rewrites so all routes (`/pricing`, `/services`, `/portfolio`, `/industries/:slug`, etc.) reload cleanly without 404 errors.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/) (Lazy-loaded routes with scroll restoration)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Linting:** [Oxlint](https://oxc.rs/)

---

## 💡 Core Features & Business Highlights

1. **Transparent Pricing Models:**
   - **Static Website:** Starts at ₹7,000 (8 pages included, additional pages ₹600/page).
   - **Dynamic Web Application:** Starts at ₹30,000 (includes 1-year maintenance, admin panel, backend support).
   - **Operational Panels:** Starts at ₹10,000/panel (Staff, Manager, Vendor, Delivery).
   - **Companion Mobile Apps:** Starts at ₹15,000+.
   - **Custom Modules:** Quoted per scope & complexity.

2. **Interactive Cost Estimator (`PricingCalculator`):**
   - Live interactive price computation with page counters, dynamic module selectors, and mobile toggles.
   - 1-click WhatsApp quote generator prefilling calculated requirements.

3. **8-Step Interactive Quote Builder (`QuoteBuilder`):**
   - Multi-step wizard allowing local business owners to customize their specifications and receive an itemized quote.

4. **Lead Generation Consultation Form:**
   - Indian mobile number validation, business categorization, budget brackets, and contact preference.

5. **Case Studies & Portfolio:**
   - Filterable projects across Retail, Restaurants, Healthcare, Education, and Services.
   - Interactive case study modal (Problem $\to$ Strategy $\to$ Design $\to$ Development $\to$ Qualitative Outcomes).

6. **Industry Blueprints (`/industries/:industry`):**
   - Tailored problem/solution models for Jewellery, Beauty, Dining, Clinics, Real Estate, and Academies.

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/AryanPathak0421/Digital-Solutions.git

# Enter project directory
cd Digital-Solutions

# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License & Ownership

© 2026 Rozsewa Digital. All rights reserved.
Made for businesses that want to grow digitally.
