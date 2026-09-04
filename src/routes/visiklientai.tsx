import { createFileRoute } from "@tanstack/react-router";
import { ClientGroupPage } from "@/routes/klientas.$";

export const Route = createFileRoute("/visiklientai")({
  component: () => <ClientGroupPage slug="abc" />,
});
