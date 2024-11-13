import Navbar from "../navbar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={'antialiased'}
      >
        
        <Navbar />
        
        <div className="w-full ">
          {children}          
        </div>

      </body>
    </html>
  );
}
