import "@/app/ui/globals.css";
import "@/app/ui/services.css";
import "@/app/ui/case-study.css";
import "@/app/ui/contact-us.css";
import "@/app/ui/about-us.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
