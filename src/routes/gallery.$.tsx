import { createFileRoute } from "@tanstack/react-router";
import { ServiceView } from "@/components/service/service-view";

export const Route = createFileRoute("/gallery/$")({
  component: GalleryAlias,
});

function GalleryAlias() {
  const { _splat } = Route.useParams();
  return <ServiceView path={_splat ?? ""} />;
}
