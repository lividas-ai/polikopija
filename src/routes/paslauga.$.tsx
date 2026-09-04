import { createFileRoute } from "@tanstack/react-router";
import { ServiceView } from "@/components/service/service-view";

export const Route = createFileRoute("/paslauga/$")({
  component: PaslaugaSplat,
});

function PaslaugaSplat() {
  const { _splat } = Route.useParams();
  return <ServiceView path={_splat ?? ""} />;
}
