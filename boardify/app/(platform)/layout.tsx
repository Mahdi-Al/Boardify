import { ClerkProvider } from "@clerk/nextjs";
import "../../app/globals.css";
export default function platformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center h-full">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
