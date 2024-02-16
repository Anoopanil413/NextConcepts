import React from "react";




export default function RootLayout({
  children,
  analytics,
  team
}: Readonly<{
  children: React.ReactNode;
  analytics:React.ReactNode;
  team:React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body >

        {children}
        <section>
        {analytics}
            {team}
        </section>

        </body>
        
    </html>
  );
}
