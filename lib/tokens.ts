export const tokens = {
  colors: {
    bg: "#ffffff",
    ink: "#111111",
    inkMuted: "#666666",
    inkSubtle: "#888888",
    accent: "#A4C4C8",
    accentHover: "#8eb6bb",
    accentLight: "#EBF3F4",
    accentDark: "#6F979C",
    surface: "#FAFAFA",
    surfaceMuted: "#F5F7F7",
    border: "#E5E7EB",
  },
  radius: {
    base: "0.75rem",
    card: "1rem",
    full: "9999px",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  contact: {
    phone: "983 20 07 71",
    phoneTel: "+34983200771",
    email: "CLINICA@UNODENTAL.ES",
    address: "C/ López Gómez 14, 47002 Valladolid",
    sinceYear: "2010",
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Tratamientos", href: "/tratamientos-y-servicios" },
    { label: "Nosotros", href: "/el-equipo" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;
