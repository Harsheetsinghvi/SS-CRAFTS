# SS Crafts &mdash; Premium MDF Products E-Commerce & Catalogue

> **“Crafting Ideas Into Beautiful MDF Products”**  
> A modern, minimalist, and responsive catalogue website built for **SS Crafts**, an Indian MDF manufacturer specializing in custom laser-cutting and precision wooden products. Engineered for smooth product presentation, real-time specifications (mm/cm, thickness, finishes), and direct **WhatsApp enquiries** (+91 93132 29609) without complicated checkout friction.

---

## 🌟 Business Contact Details
- **Brand Name**: SS Crafts
- **Direct Phone / WhatsApp**: +91 93132 29609 (`919313229609`)
- **Official Email**: sscrafts104@gmail.com
- **Admin Email**: admin@sscrafts.com

---

## 📦 10 Core Product Categories
1. **Piggy Banks** &mdash; MDF Coin Vaults & Savings Boxes (with laser-cut slots & lock clasps)
2. **Diwali Boxes** &mdash; Festive Dry Fruit, Sweets & Shubh Labh Gift Boxes
3. **Rakshabandhan Boxes** &mdash; Rakhi Gift, Roli-Chawal & Festive Hamper Boxes
4. **Hamper Boxes** &mdash; Luxury Mughal Jali & Trousseau Celebration Hampers
5. **Phone Stands** &mdash; Laser-Cut Desktop Mobile & Tablet Ergonomic Stands
6. **MDF Boxes** &mdash; Plain, Hinged, Acrylic-Lid & Compartmentalized Packaging Boxes
7. **Awards & Trophies** &mdash; Recognition Plaques, Corporate Shields & Mementos
8. **Drawing Sheets for Colour** &mdash; Pre-Marked MDF Art Bases for Acrylic, Resin & Kids Colouring
9. **MDF Games** &mdash; Laser-Cut Tic-Tac-Toe, Tangram Puzzles & Wooden Board Games
10. **Cake Toppers** &mdash; Laser-Cut Birthday, Anniversary & Wedding Acrylic/MDF Toppers

---

## 🌟 Key Highlights & Architecture

1. **Design & Visual Aesthetics**:
   - Palette: Warm Ivory (`#F7F3EC`), Sand Beige (`#E8DED0`), Espresso (`#29231F`), Walnut Brown (`#8A6045`), Caramel (`#B88963`), Cream White (`#FFFDF9`), WhatsApp Green (`#4F7658`).
   - Clean Indian craftsmanship aesthetic with generous whitespace, rounded product cards, and smooth micro-interactions.
   - Elegant typography pairing Google's **Playfair Display** (headings) and **Plus Jakarta Sans** (body).

2. **Dynamic WhatsApp Product Enquiry System**:
   - Every product card, modal, and dedicated detail page features a **dynamic WhatsApp enquiry button**.
   - Generates the exact prefilled message format with product ID, dimensions, thickness, material, finish, selected quantity, and customization notes routed to **919313229609**.
   - Fully URL-encoded and dispatched via `https://wa.me/919313229609?text=[encodedMessage]`.
   - Live editable WhatsApp number inside the Admin Settings.
   - Built-in enquiry lead logger recording click statistics and customer requirements in the database.

3. **Catalogue & Filtering**:
   - Live debounced keyword and SKU search.
   - Category filtering across all 10 product lines.
   - Min/Max price filters.
   - MDF thickness filters (2.5mm, 3.0mm, 3.2mm, 4.0mm, 5.5mm, 6.0mm, 8.0mm, 12.0mm).
   - Dynamic sorting: Featured, Bestsellers, Newest Arrivals, Price Low-to-High, Price High-to-Low.
   - Responsive modal view with multi-image gallery, mm/cm unit converter, live batch total calculator, and "Copy Enquiry Message" helper.

4. **Product Management Admin Dashboard**:
   - Real server-side JWT authentication with `bcryptjs` password hashing and secure cookies.
   - Product Manager: Add, Edit, Delete, Toggle Publish/Hide, and upload product images.
   - Category Manager: Add, Edit, Delete, and reorder categories.
   - Store Settings: Live update business WhatsApp number, announcement banner, contact details, and admin password without redeploying.
   - Enquiries Tracker: Review visitor WhatsApp enquiry clicks and quotes with status tracking (`New`, `In Discussion`, `Order Confirmed`, `Archived`).

---

## 📁 Project Structure

```
MDF Product/
├── data/
│   └── db.json               # Persistent JSON database (products, categories, settings, leads)
├── public/
│   └── uploads/              # Uploaded product imagery
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── admin/        # Authentication routes (login, logout, me)
│   │   │   ├── categories/   # Category CRUD API
│   │   │   ├── custom-quote/ # Custom quote requests API
│   │   │   ├── enquiries/    # Enquiry analytics & leads API
│   │   │   ├── products/     # Products CRUD and filtering API
│   │   │   ├── settings/     # Store settings API
│   │   │   └── upload/       # Image upload handler
│   │   ├── admin/            # Secure admin dashboard pages
│   │   ├── catalogue/        # Complete catalogue page with sidebar filters
│   │   ├── product/[id]/     # SEO-friendly dedicated product pages
│   │   ├── custom-orders/    # Custom sizing & laser cutting calculator
│   │   ├── bulk-gifting/     # Corporate hampers & wholesale quotes
│   │   ├── about/            # Story & material engineering
│   │   ├── contact/          # Factory location & contact form
│   │   ├── shipping/         # Crate packaging & transit guidelines
│   │   ├── privacy/          # Privacy policy
│   │   ├── terms/            # Terms of service & MDF care guide
│   │   ├── layout.tsx        # Global layout with Header, Footer, and Floating WhatsApp
│   │   └── page.tsx          # Master Home Page with all 8 specified sections
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Database service, auth, types, and WhatsApp URL generator
│   └── styles/
│       └── globals.css       # Design tokens, luxury color palette, reset, and utilities
├── index.html            # Vite HTML entry point
├── vite.config.ts        # Vite configuration & dev API middleware
├── tsconfig.json         # TypeScript configuration
├── package.json          # Vite scripts & dependencies
├── server.ts             # Production Express + Vite static server
├── server/               # Express API backend router
└── README.md
```

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🔐 Administrator Access

- **Admin Login URL**: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- **Default Email**: `admin@sscrafts.com`
- **Default Password**: `Admin@MDF2025`

> **Note**: For production deployments, log into the Admin Dashboard, navigate to **Store & WhatsApp Settings**, and update both the WhatsApp phone number and your administrator password.

---

## 📱 WhatsApp Number Configuration

To change the phone number where WhatsApp enquiries are sent:
1. Log into `/admin/login`
2. Navigate to **Store & WhatsApp** (`/admin/settings`)
3. Update the **WhatsApp Number** field (enter with country code without spaces or `+`, e.g., `919313229609` for +91 93132 29609).
4. Click **Save All Settings**. The updated number takes effect immediately across all product cards, detail modals, custom order forms, and floating buttons.
