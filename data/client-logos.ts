/**
 * Home “Our clients” logo strip. Add SVG or PNG files under `public/`
 * and reference them here (`logoSrc` is the URL path from site root).
 */
export type ClientLogo = {
  id: string;
  /** Display name (accessibility + optional caption). */
  name: string;
  /** e.g. `/clients/acme.svg` or `/clients/acme.png` */
  logoSrc: string;
  /** If omitted, inferred from `logoSrc` (`.svg` → svg, else png). */
  format?: "svg" | "png";
};

export function inferLogoFormat(logoSrc: string): "svg" | "png" {
  const path = logoSrc.split("?")[0]?.toLowerCase() ?? "";
  if (path.endsWith(".svg")) return "svg";
  return "png";
}

/** Replace with your own assets under `public/clients/` or any `/public` path. */
export const clientLogos: ClientLogo[] = [
  {
    id: "sample-svg-1",
    name: "Avani",
    logoSrc: "/clients/avani-seeklogo.com.svg",
    format: "svg",
  },
  {
    id: "sample-svg-2",
    name: "Hilton",
    logoSrc: "https://digital.ihg.com/is/content/ihg/hi_logo",
    format: "svg",
  },
  {
    id: "sample-svg-3",
    name: "Marriott",
    logoSrc: "/clients/marriott.png",
    format: "png",
  },
  {
    id: "sample-svg-4",
    name: "Client brand",
    logoSrc: "https://www.hilton.com/modules/assets/svgs/logos/DT.svg",
    format: "svg",
  },
  {
    id: "sample-svg-5",
    name: "JW Marriott",
    logoSrc: "https://jw-marriott.marriott.com/wp-content/uploads/sites/8/2019/08/JWM_Logo_Vertical_wRMark_4C.png",
    format: "png",
  },
  // PNG example (drop file in `public/clients/` first):
  // { id: "client-png", name: "Acme", logoSrc: "/clients/acme.png", format: "png" },
];
