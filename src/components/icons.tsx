import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" /></svg>;
}

export function WhatsAppIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8.1 7.4c-.4 0-1 1-1 1.6 0 2.6 4.8 7.1 7.2 7.1.9 0 2-1.2 2-1.7 0-.3-2.1-1.5-2.4-1.4l-1 1c-.9-.3-2.5-1.6-3.4-3.2l.8-1.1c.1-.2-1-2.3-1.3-2.3H8.1Z" fill="currentColor"/></svg>;
}

export function PinIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>;
}
