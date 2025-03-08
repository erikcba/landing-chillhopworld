import "./globals.css";



export const metadata = {
  title: "Chillhop World",
  description: "Presenting the best of lofi",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" defer></script>
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
