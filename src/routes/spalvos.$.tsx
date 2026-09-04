import { createFileRoute } from "@tanstack/react-router";
import { ServiceView } from "@/components/service/service-view";

export const Route = createFileRoute("/spalvos/$")({
  component: SpalvosSplat,
});

function SpalvosSplat() {
  const { _splat } = Route.useParams();
  return <ServiceView path={`spalvos/${_splat ?? ""}`} />;
}
