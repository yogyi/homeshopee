import Image from "next/image";

export function BrandLogo({
  variant = "white",
  className = "brand-logo",
  priority = false,
}: {
  variant?: "white" | "black";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-white.png" : "/brand/logo-black.png"}
      alt="Home Shopee"
      width={580}
      height={675}
      className={className}
      priority={priority}
    />
  );
}
