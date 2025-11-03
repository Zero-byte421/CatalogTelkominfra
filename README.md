# AppCatalog - Modern Interactive Application Catalog

Katalog website interaktif dan modern untuk menampilkan aplikasi-aplikasi internal dengan tampilan yang elegan, animasi smooth, dan responsif di semua perangkat.

![AppCatalog](https://img.shields.io/badge/React-18.x-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.x-blue) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.x-purple)

## ✨ Fitur Utama

- **🎨 Desain Modern & Responsif** - Tampilan yang clean dan profesional, responsif untuk mobile, tablet, dan desktop
- **✨ Animasi Smooth** - Menggunakan Framer Motion untuk page transitions, scroll animations, dan hover effects
- **🔐 Login SSO** - Halaman login dengan integrasi Single Sign-On
- **📱 Application Catalog** - Grid layout untuk menampilkan aplikasi dengan search functionality
- **🌓 Dark Mode** - Dukungan tema gelap dengan toggle yang smooth
- **⚡ Performance Optimized** - Lazy loading, code splitting, dan fast initial load
- **♿ Accessibility** - WCAG AA compliant dengan semantic HTML dan ARIA labels

## 📋 Daftar Aplikasi

Website ini menampilkan katalog aplikasi internal termasuk:

1. **KEPO** - Platform digital terintegrasi untuk dokumen acceptance dan pengelolaan penagihan
2. **Dashboard Dismantle Radio IP** - Dashboard monitoring infrastruktur radio IP
3. **Presensi** - Sistem manajemen kehadiran modern dengan GPS tracking
4. **Approval** - Sistem workflow approval dengan routing otomatis
5. **Poket** - Platform manajemen expense dan reimbursement

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x atau lebih tinggi
- npm atau yarn

### Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd appcatalog
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:5000
```

## 📁 Struktur Project

```
appcatalog/
├── client/                      # Frontend application
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── ui/            # Shadcn UI components
│   │   │   ├── AnimatedPage.tsx    # Page transition wrapper
│   │   │   ├── ScrollReveal.tsx    # Scroll animation wrapper
│   │   │   ├── Header.tsx          # Navigation header
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   ├── AppCard.tsx         # Application card component
│   │   │   └── FeatureCard.tsx     # Feature showcase component
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx           # Homepage dengan hero section
│   │   │   ├── Applications.tsx   # Application list page
│   │   │   ├── ApplicationDetail.tsx  # Detail aplikasi
│   │   │   └── Login.tsx          # SSO login page
│   │   ├── data/               # Data dan configuration
│   │   │   └── applications.ts    # Data aplikasi dan features
│   │   ├── App.tsx             # Root component dengan routing
│   │   ├── index.css           # Global styles dan Tailwind
│   │   └── main.tsx            # Entry point
│   └── index.html              # HTML template
├── server/                      # Backend server
│   ├── routes.ts               # API routes
│   └── storage.ts              # Data storage interface
├── shared/                      # Shared types dan schemas
│   └── schema.ts               # TypeScript interfaces
├── attached_assets/            # Generated images
│   └── generated_images/       # AI-generated app icons
├── design_guidelines.md        # Design system documentation
├── package.json                # Dependencies
└── README.md                   # Dokumentasi (file ini)
```

## 🎨 Komponen Utama

### Header
Navigasi fixed dengan:
- Logo dan brand name
- Navigation links (Home, Applications, Login)
- Dark mode toggle
- Responsive hamburger menu untuk mobile

### Footer
Footer konsisten dengan:
- Brand information
- Quick links
- Support links
- Copyright information

### AppCard
Card component untuk menampilkan aplikasi dengan:
- App icon/logo
- Application name dan category
- Description
- "View Details" dan "Open App" buttons
- Hover effects dengan elevation

### FeatureCard
Showcase fitur dengan:
- Icon centered
- Feature title
- Description text
- Minimal design

### AnimatedPage
Wrapper untuk page transitions:
- Fade in/out effects
- Slide animations
- Smooth transition 0.4s

### ScrollReveal
Intersection Observer-based animations:
- Fade in saat scroll
- Staggered delays untuk multiple items
- Once trigger (tidak repeat)

## 🎬 Animasi

Website menggunakan beberapa jenis animasi:

### 1. Page Transitions
- Fade + slide saat pindah halaman
- Duration: 0.4s
- Easing: ease-out

### 2. Scroll Animations
- Cards fade in saat masuk viewport
- Staggered animation (delay bertahap)
- Intersection Observer untuk performance

### 3. Hover Effects
- Card elevation dengan shadow
- Button brightness changes
- Smooth transitions 0.2-0.3s

## 🌈 Color Palette

Theme menggunakan HSL color system yang mendukung light & dark mode:

**Light Mode:**
- Primary: `217 91% 60%` (Blue)
- Background: `0 0% 100%` (White)
- Card: `0 0% 98%` (Light Gray)

**Dark Mode:**
- Primary: `217 91% 60%` (Blue - sama)
- Background: `222 47% 11%` (Dark Blue-Gray)
- Card: `220 39% 13%` (Darker Gray)

## 🔧 Build Commands

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Grid layouts otomatis menyesuaikan:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

## 🔐 SSO Integration

Halaman login mendukung Single Sign-On dengan:
- Email input field
- SSO authentication button
- Loading states
- Toast notifications

> **Note**: Implementasi SSO saat ini adalah mock/prototype. Untuk production, integrasikan dengan provider SSO Anda (Azure AD, Okta, dll).

## ⚡ Performance

Website dioptimasi untuk performa:
- ✅ Lazy loading untuk images
- ✅ Code splitting per route
- ✅ Minimal bundle size dengan tree shaking
- ✅ Framer Motion dengan will-change optimization
- ✅ CSS animations hardware-accelerated

## ♿ Accessibility

- ✅ Semantic HTML (header, nav, main, footer, section)
- ✅ ARIA labels untuk icon buttons
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Color contrast WCAG AA compliant
- ✅ Alt text untuk semua images
- ✅ Min 44x44px touch targets

## 🎯 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization

### Menambah Aplikasi Baru

Edit file `client/src/data/applications.ts`:

```typescript
{
  id: "app-id",
  name: "Application Name",
  description: "Description here...",
  url: "https://app-url.com",
  icon: appIcon,
  category: "Category",
  features: [
    "Feature 1",
    "Feature 2"
  ]
}
```

### Mengubah Warna Theme

Edit file `client/src/index.css` pada bagian `:root` dan `.dark`:

```css
:root {
  --primary: 217 91% 60%; /* HSL values */
  --background: 0 0% 100%;
  /* ... */
}
```

### Menambah Halaman Baru

1. Buat file di `client/src/pages/PageName.tsx`
2. Import dan tambahkan route di `client/src/App.tsx`
3. Tambahkan link di Header dan Footer

## 🚢 Deployment

Website siap di-deploy ke platform hosting modern:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect repository dan deploy
- **Railway**: Connect dan auto-deploy
- **Replit**: Klik "Publish" button

## 🤝 Contributing

Untuk berkontribusi:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Credits

- **Design**: Based on modern SaaS catalog patterns
- **Icons**: Lucide React
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Fonts**: Inter & DM Sans via Google Fonts

## 📞 Support

Untuk bantuan atau pertanyaan:
- Email: support@appcatalog.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

---

Made with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion
