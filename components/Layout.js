import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ChatbotScript from "./ChatScript";

export default function Layout({ children }) {
  return (
    // styled div which is whole screen
    <div className="flex flex-col justify-between min-h-screen">
      {/* nav component is wrapped around everything else so it is always displayed */}
      <Nav />

      <main>
        {/* all main content  */}
        {children}
      </main>

      <ChatbotScript
        chatbotId="201"
        domain="https://studio57-clothing-co.vercel.app/"
        env="production"
        islandType="button"
      />
      {/* same as nav */}
      <Footer />
    </div>
  );
}
