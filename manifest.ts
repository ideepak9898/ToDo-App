import type { ManifestOptions } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  name: "Todo App",
  short_name: "Todo App",
  display: "standalone",
  scope: "/",
  start_url: "/",
  theme_color: "#7764E8",
  background_color: "#171D34",
  description:
    "Todo app with many features",
  icons: [
    {
      src: "/logo.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "pwa/logoMaskable.png",
      sizes: "256x256",
      type: "image/png",
      purpose: "maskable",
    },
  ],


  shortcuts: [
    {
      name: "Add Task",
      description: "Add Task",
      url: "/add",
      icons: [
        {
          src: "pwa/add.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    {
      name: "Categories",
      description: "Task Categories",
      url: "/categories",
      icons: [
        {
          src: "pwa/categories.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    {
      name: "Clear",
      description: "Clear Tasks",
      url: "/clear",
      icons: [
        {
          src: "pwa/clear.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    {
      name: "Profile",
      description: "User Profile",
      url: "/user",
      icons: [
        {
          src: "pwa/profile.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
  ],
};
export default manifest;
