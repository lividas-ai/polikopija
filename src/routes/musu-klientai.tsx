import { createFileRoute } from "@tanstack/react-router";
import { KlientaiPage } from "@/routes/klientai";

export const Route = createFileRoute("/musu-klientai")({
  component: KlientaiPage,
});
