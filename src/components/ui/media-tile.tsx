import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { pageSplat, pageTo } from "@/data/pages";
import { cn } from "@/lib/utils";

const FALLBACK = "/images/process/cutting.png";

export function MediaTile({
  path,
  src,
  title,
  text,
  dark = false,
  square = false,
}: {
  path: string;
  src: string;
  title: string;
  text?: string;
  dark?: boolean;
  square?: boolean;
}) {
  const [img, setImg] = useState(src || FALLBACK);
  useEffect(() => {
    setImg(src || FALLBACK);
  }, [src]);
  return (
    <Link to={pageTo(path)} params={{ _splat: pageSplat(path) }} className="tile-lift group block">
      <span className={cn("tile-frame", dark ? "bg-header-2" : "bg-wash")}>
        <img
          src={img}
          alt={title}
          className={square ? "tile-img-sq" : "tile-img"}
          loading="lazy"
          decoding="async"
          onError={() => {
            if (img !== FALLBACK) setImg(FALLBACK);
          }}
        />
      </span>
      <span className="tile-title mt-3 block group-hover:text-red">{title}</span>
      {text ? (
        <span className={cn("tile-blurb mt-1 block", dark && "text-accent")}>{text}</span>
      ) : null}
    </Link>
  );
}
