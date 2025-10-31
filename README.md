# IELTS Mock Super Admin Panel

Super admin panel for the IELTS Mock Test platform. This panel allows you to manage tests, teachers, results, and statistics.

## 🚀 Tech Stack

- **React 18** - Core UI library
- **Vite** - Fast build tool
- **React Router v6** - Client-side routing
- **Redux Toolkit** - State management
- **TailwindCSS** - Styling framework
- **Radix UI** - Accessible UI components
- **TipTap** - Rich text editor
- **Axios** - HTTP client
- **Nivo** - Charts and data visualization
- **React Hot Toast** - Notifications
- **Lottie React** - Animations

## 📁 Project Structure

```
src/
├── api/              # API requests (auth, tests, users, etc.)
├── components/       # Reusable components
├── pages/            # Page components
├── layouts/          # Layout components
├── hooks/            # Custom React hooks
├── store/            # Redux store and slices
├── data/             # Static data
├── lib/              # Helper functions
├── styles/           # Global CSS
└── assets/           # Images, fonts, animations
```

## 🔑 Key Features

### 📊 Dashboard
- Real-time statistics and charts
- Weekly and monthly metrics
- User activity monitoring

### 👨‍🏫 Teacher Management
- Teacher list and profiles
- Permission and role management
- Statistics and reports

### 📝 Test Management
- Create and edit IELTS tests
- Reading, Writing, Listening modules
- Test templates
- Test preview functionality

### ✅ Submissions & Results
- View student submissions
- Grade results
- Detailed reports

### 🔗 Links
- Create and manage test links
- Link statistics

### 🛠 Tools
- PDF Viewer
- Other utility tools

## 🎨 Design System

- Built on **Shadcn UI** components
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Gradients and animations

## 🔐 Authentication

- JWT token-based authentication
- Session storage via LocalStorage
- Role-based access control (owner, admin)
- Automatic token refresh

## 🧩 Custom Hooks

- `useArrayStore` - Array state management
- `useObjectStore` - Object state management
- `useLocalStorage` - LocalStorage wrapper
- `useDebouncedState` - Debounced state
- `useMediaQuery` - Responsive hooks
- `useModal` - Modal management
- `usePermission` - Permission checks

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yaxyobekuz/ielts-mock-super-admin.git
cd ielts-mock-super-admin
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file and add the following variables:
```env
VITE_API_BASE_URL=https://api.example.com
```

4. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`.

## 🛠 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📤 Deployment

The project is configured for Netlify. The `netlify.toml` file is included.

```bash
npm run build
```

Built files will be saved in the `dist/` directory.

## 🔄 API Integration

API requests are organized by modules in the `src/api/` directory:

- `auth.api.js` - Authentication
- `tests.api.js` - Tests
- `users.api.js` - Users
- `teachers.api.js` - Teachers
- `results.api.js` - Results
- `submissions.api.js` - Submissions
- `stats.api.js` - Statistics
- `links.api.js` - Links
- `templates.api.js` - Templates

All requests automatically include tokens via axios interceptors.

## 🎯 Permission System

User roles:
- **owner** - Full access
- **admin** - Limited access

Permissions for each page and feature are defined in `src/data/permissions.js`.

## 📱 Responsive Design

- Mobile-first approach
- Tailwind breakpoints utilized
- Dynamic responsive features via `useMediaQuery` hook

## 🎨 Components

### Form Components
- `Input` - Input fields
- `Button` - Buttons
- `Select` - Dropdown select
- `Checkbox` - Checkboxes

### Question Components
- `CheckboxGroup` - Multiple choice questions
- `GridMatching` - Matching questions
- `Flowchart` - Flowchart questions

### Utility Components
- `Modal` - Modals
- `Pagination` - Pagination
- `Loader` - Loading animations
- `Icon` - Icons
- `Toast` - Notifications

## 🔧 Configuration

- **Vite** - `vite.config.js`
- **TailwindCSS** - `tailwind.config.js`
- **ESLint** - `eslint.config.js`
- **PostCSS** - `postcss.config.js`

## 📚 Libraries

### UI Components
- Radix UI (Dialog, Dropdown, Select, Switch)
- Shadcn UI components
- Lucide React (icons)

### Rich Text Editor
- TipTap (React)
- TipTap Starter Kit
- TipTap Extensions (Image, Table)

### Charts & Visualization
- Nivo Line Chart
- Lottie animations

### Utility Libraries
- Lodash
- UUID
- Class Variance Authority
- Tailwind Merge

## 🐛 Debugging

In development mode, all API requests and errors are displayed in the console.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for private use.

## 📞 Contact

For questions or suggestions, please contact the project owner.

---

**Built with ❤️ for IELTS Mock Test Platform**
