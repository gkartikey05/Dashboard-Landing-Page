<div align="center">
  <h1>LeadManager Admin Dashboard</h1>
  <p><b>Modern Next.js Admin Dashboard for Lead & Campaign Management</b></p>
  <a href="https://dashboard-landing-page-kartikey-gupta.vercel.app/" target="_blank"><b>Live Demo</b></a>
</div>

---

## 🚀 Project Highlights

- **Intuitive Dashboard**: Real-time analytics, lead acquisition trends, conversion rates, and campaign performance.
- **Campaign Management**: Create, track, and analyze marketing campaigns with advanced filtering and export options.
- **Lead Management**: View, filter, and bulk manage leads with customizable views and status updates.
- **Reports & Analytics**: Generate detailed reports, visualize metrics, and export data in various formats.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Dark/Light Theme**: Toggle between light and dark modes for a personalized experience.
- **Modern UI**: Built with Tailwind CSS and Radix UI for a sleek, accessible interface.

---

## ✨ Features

- **Dashboard Overview**: Key metrics (Total Leads, Conversion Rate, Active Campaigns, Cost Per Lead) and visual charts.
- **Campaigns**: List, filter, and manage campaigns. View campaign details, performance, and status.
- **Leads**: Search, filter, and bulk update leads. Assign leads to campaigns and export data.
- **Reports**: Analyze lead acquisition, campaign performance, ROI, and generate PDF reports.
- **Authentication**: Secure login page with modern design.
- **Sidebar Navigation**: Quick access to Dashboard, Campaigns, Leads, Reports, and Settings.
- **Customizable Charts**: Interactive charts for trends, comparisons, and breakdowns.
- **Accessibility**: Keyboard navigation and screen reader support.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **UI Components**: Radix UI, Lucide Icons
- **Charts**: Recharts, Embla Carousel
- **Form Handling**: React Hook Form, Zod
- **State Management**: React Hooks
- **Other Libraries**: clsx, date-fns, next-themes

---

## 📦 Folder Structure

```
├── app/                # Next.js app directory (pages, layouts, routes)
├── components/         # Reusable UI and content components
├── data-chart/         # Chart wrappers and chart types (bar, line, pie)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (logos, images)
├── styles/             # Global styles (Tailwind)
```

---

## 🔗 Live Demo

[https://dashboard-landing-page-kartikey-gupta.vercel.app/](https://dashboard-landing-page-kartikey-gupta.vercel.app/)

---

## 📝 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gkartikey05/Dashboard-Landing-Page.git
   cd Dashboard-Landing-Page
   ```
2. **Install dependencies** (using [pnpm](https://pnpm.io/))
   ```bash
   pnpm install
   ```
3. **Run the development server**
   ```bash
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)
4. **Build for production**
   ```bash
   pnpm build
   pnpm start
   ```

---

## ⚙️ Configuration

- **Environment Variables**: Add any required environment variables in a `.env.local` file.
- **Customizing Theme**: Edit `tailwind.config.ts` and `styles/globals.css` for custom colors and styles.
- **Adding Components**: Place new UI components in `components/ui/` for consistency.

---

## 📊 Main Pages & Navigation

- **Dashboard**: `/` — Overview, analytics, charts, recent activity
- **Campaigns**: `/campaigns` — List, filter, manage campaigns
- **Leads**: `/leads` — View, filter, bulk manage leads
- **Reports**: `/reports` — Generate and export reports
- **Login**: `/login` — Secure authentication
- **Settings**: `/settings` — (Extendable for user/config management)

---

## 🙌 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

---

## 📧 Contact & Support

- **Author**: Kartikey Gupta ([GitHub](https://github.com/gkartikey05))
- **Live Demo**: [dashboard-landing-page-kartikey-gupta.vercel.app](https://dashboard-landing-page-kartikey-gupta.vercel.app/)
- **Issues**: Please use the [GitHub Issues](https://github.com/gkartikey05/Dashboard-Landing-Page/issues) for bug reports and feature requests.
