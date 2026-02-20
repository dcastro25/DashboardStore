# Dashboard Store

Un dashboard moderno para tienda construido con **React 19**, **TypeScript**, **Tailwind CSS** y **Vite**.

## 📋 Características

- ✨ Interfaz moderna con componentes React
- 🎨 Estilizado con Tailwind CSS v3+
- 📱 Diseño responsive (adaptable a mobile y desktop)
- 🚀 Build rápido con Vite
- 🔧 TypeScript para seguridad de tipos
- 🎯 Sidebar navegable con iconos (react-icons)
- 📊 Estructura modular y escalable

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| React | ^19.2.0 | Framework UI |
| TypeScript | ~5.9.3 | Lenguaje tipado |
| Tailwind CSS | ^3.4.17 | Estilos CSS |
| Vite | ^7.3.1 | Build tool |
| react-icons | ^5.5.0 | Iconos SVG |
| Node | 20+ | Runtime |

## 📂 Estructura del Proyecto

```
dashboard-store/
├── src/
│   ├── components.tsx/
│   │   ├── dashboard-store.tsx      # Componente principal del dashboard
│   │   └── shared/
│   │       └── siderbar/
│   │           ├── siderbar.tsx     # Sidebar principal
│   │           ├── siderbarItems.tsx    # Items del sidebar
│   │           └── sidebarMobile.tsx    # Versión mobile del sidebar
│   ├── App.tsx                 # Componente raíz
│   ├── App.css                 # Estilos locales de App
│   ├── index.css               # Estilos globales + directivas Tailwind
│   ├── main.tsx                # Entry point
│   └── assets/                 # Recursos estáticos
├── index.html                  # HTML principal
├── tailwind.config.js          # Configuración Tailwind
├── postcss.config.js           # Configuración PostCSS
├── vite.config.ts              # Configuración Vite
├── tsconfig.json               # Configuración TypeScript
├── package.json                # Dependencias y scripts
├── eslint.config.js            # ESLint config
└── README.md                   # Este archivo
```

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 20+ y npm (o yarn/pnpm)

### Instalación

```bash
# Clonar el repositorio (si aplica)
git clone <repo-url>
cd dashboard-store

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

El servidor se abre en `http://localhost:5173/`

### Build para Producción

```bash
# Compilar y generar build optimizado
npm run build

# Previsualizar build (local)
npm run preview
```

### Linting

```bash
# Ejecutar ESLint
npm run lint
```

## 🎨 Configuración de Tailwind CSS

La configuración Tailwind está lista con:
- **Content paths**: `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
- **PostCSS integration**: Configurado con autoprefixer para compatibilidad
- **Directivas activadas**: `@tailwind base`, `@tailwind components`, `@tailwind utilities`

### IntelliSense en VS Code

Se incluye configuración para autocompletado de clases Tailwind:

```json
{
  "tailwindCSS.includeLanguages": {
    "typescriptreact": "html"
  },
  "tailwindCSS.validate": true,
  "css.lint.unknownAtRules": "ignore"
}
```

**Extensión recomendada**: [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

```bash
code --install-extension bradlc.vscode-tailwindcss
```

## 📝 Componentes Principales

### `App.tsx`
Componente raíz que renderiza el `DashboardStore`.

```tsx
import { DashboardStore } from './components.tsx/dashboard-store'

function App() {
  return <DashboardStore/>
}

export default App
```

### `DashboardStore`
Componente principal del dashboard con fondo oscuro (`bg-[#262837]`).
- Estado para gestionar órdenes (preparado para expansión)
- Contiene el `Siderbar`

### `Siderbar`
Navegación lateral con:
- Logo/Branding
- Navegación con iconos (home, gráficos, descuentos, correo, notificaciones, ajustes)
- Opción de logout
- **Responsive**: Se despliza con transición suave en mobile, fijo en desktop (lg)
- Iconos dinámicos con **react-icons**

## 🎯 Próximas Mejoras Planeadas

- [ ] Rutas dinámicas (React Router)
- [ ] Dashboard con gráficos y estadísticas
- [ ] Gestión de ordenes/productos
- [ ] Autenticación
- [ ] API integration
- [ ] Temas (dark/light mode)
- [ ] Más componentes compartidos

## 🛠️ Desarrollo

### Añadir Componentes Nuevos

```bash
# Crear carpeta de componente
mkdir -p src/components.tsx/feature-name

# Crear archivo TSX
touch src/components.tsx/feature-name/FeatureName.tsx
```

### Importar Iconos (react-icons)

```tsx
import { RiHome6Line, RiSettings6Line } from "react-icons/ri";

// Usar
<RiHome6Line className="w-6 h-6" />
```

### Usar Tailwind CSS

```tsx
<div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 transition">
  Contenido
</div>
```

## 🐛 Solución de Problemas

### Las clases Tailwind no se aplican

1. Comprueba que `src/index.css` importa las directivas `@tailwind`
2. Verifica que `src/main.tsx` importa `src/index.css`
3. Reinicia el servidor: `npm run dev`

### IntelliSense no sugiere clases Tailwind

1. Instala la extensión: `code --install-extension bradlc.vscode-tailwindcss`
2. Recarga VS Code
3. Comprueba que `.vscode/settings.json` está configurado (incluido en el proyecto)

### Build falla

```bash
# Limpiar cache y node_modules
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 Licencia

Privado

## 👨‍💻 Autor

Dashboard Store - Proyecto Personal

---

**Última actualización**: Febrero 2026
