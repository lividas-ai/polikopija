import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import appCss from "../styles.css?url";

const APP_NAME = "Polikopija";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} · nestandartinė gamyba` },
      {
        name: "description",
        content:
          "UAB Polikopija – metalo, plastiko, stiklo ir akmens apdirbimas nuo 1998 m. Tiražas nuo 1 vnt., terminas nuo 20 min. Juodšiliai, Vilniaus raj.",
      },
      { name: "theme-color", content: "#181B1F" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootShell,
});

function RootShell() {
  return (
    <html lang="lt" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Header />
          <Outlet />
          <Footer />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
