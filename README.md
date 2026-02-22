
# 🍽️ Patacón Express - Restaurant Dashboard

Dashboard web para restaurante desarrollado con React, TypeScript y Tailwind CSS, enfocado en la gestión visual del menú y carrito de pedidos en una interfaz moderna, elegante y totalmente responsive.

Este proyecto simula el sistema de pedidos de un restaurante llamado **Patacón Express**, con una experiencia tipo POS (Point of Sale) donde el usuario puede explorar platos, navegar por categorías y visualizar el carrito de compras con animaciones suaves.

---

## 🚀 Demo en vivo

🔗 [https://dashboard-store-gamma.vercel.app](https://dashboard-store-gamma.vercel.app)

---

## 🧠 Objetivo del proyecto

Este proyecto fue desarrollado como práctica para fortalecer habilidades en desarrollo Frontend moderno, arquitectura escalable en React y construcción de interfaces profesionales orientadas a negocios reales (restaurantes).

Simula una aplicación real de restaurante con diseño elegante, animaciones suaves y enfoque en experiencia de usuario.

---

## ✨ Características principales

### 🍛 Menú dinámico de platos

* Visualización de comidas en tarjetas (Food Cards)
* Organización por categorías (Hot dishes, Cold dishes, Soup, Grill)
* Interfaz limpia y atractiva
* Datos simulados desde mockData

### 🛒 Carrito de compras interactivo

* Panel lateral deslizable en móvil
* Carrito fijo en escritorio (layout dashboard)
* Transiciones suaves con Tailwind (`transform` y `transition`)
* Estado vacío con diseño UX amigable
* Botón de compra y tipo de pedido (Para llevar / En sitio)

### 📱 Diseño 100% Responsive

* Mobile First
* Navbar inferior en dispositivos móviles
* Sidebar lateral en escritorio
* Adaptación automática del layout con Grid

### 🎨 UI/UX moderna

* Paleta elegante acorde a la identidad de Patacón Express
* Sombras suaves y hover effects
* Transiciones fluidas en menú, carrito y tabs
* Tipografía clara y jerarquía visual profesional

---

## 🏗️ Estructura del proyecto

Basada en arquitectura modular por features (escalable y mantenible):

```bash
src/
│
├── features/
│   ├── car/
│   │   └── shoppingCar.tsx
│   │
│   ├── menu/
│   │   ├── cardMenu.tsx
│   │   ├── menu.tsx
│   │   └── menuSelect.tsx
│   │
│   └── sidebar/
│       ├── sidebar.tsx
│       ├── sidebarMobile.tsx
│       ├── sidebarItems.tsx
│       └── sidebarMobileItem.tsx
│
├── mockData/
│   └── mockData.tsx
│
├── assets/
├── App.tsx
├── main.tsx
└── dashboard-store.tsx
```

Esta organización permite:

* Separación clara de responsabilidades
* Escalabilidad futura
* Mantenimiento más sencillo
* Código más limpio y profesional

---

## ⚙️ Funcionalidades técnicas destacadas

* Manejo de estado con `useState`
* Componentización reutilizable
* Layout tipo dashboard con CSS Grid
* Animaciones con Tailwind CSS
* Transiciones suaves del carrito (`translate-x`)
* Props tipadas con TypeScript
* Arquitectura por dominio (features)

---

## 🛠️ Tecnologías utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* React Icons
* CSS Grid & Flexbox

---

## 🎯 Arquitectura de la interfaz

El layout principal está dividido en:

* Sidebar de navegación
* Sección de menú (platos)
* Carrito de compras lateral

En escritorio:

* Grid de 8 columnas
* Menú: 6 columnas
* Carrito: 2 columnas

En móvil:

* Carrito deslizable
* Navbar inferior interactiva

---

## 📦 Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/dashboard-store
```

Entrar al proyecto:

```bash
cd dashboard-store
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

---

## 🌎 Deploy

El proyecto está desplegado en producción con Vercel:
🔗 [https://dashboard-store-gamma.vercel.app](https://dashboard-store-gamma.vercel.app)

---

## 🚧 Futuras mejoras (Roadmap)

* Integración con backend real (API de pedidos)
* Persistencia del carrito (LocalStorage)
* Sistema de autenticación
* Panel de administración del restaurante
* Filtros avanzados por categorías
* Animaciones con Framer Motion
* Conexión a base de datos

---

## 👨‍💻 Autor

**Oscar Castro**
Desarrollador de Software en formación 💻
Enfocado en Frontend, UI/UX y aplicaciones escalables con React.

GitHub: [https://github.com/dcastro25](https://github.com/dcastro25)

---

## 📌 Nota

Este proyecto forma parte de mi portafolio como desarrollador y representa una simulación realista de un sistema de pedidos para restaurantes, aplicando buenas prácticas de arquitectura, diseño responsive y experiencia de usuario moderna.
