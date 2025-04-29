import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import TeamPage from "./pages/Team";
import ContactPage from "./pages/Contact";
import BlogList from "./pages/BlogList";
import BlogPostPage from "./pages/BlogPost";
import NotFoundPage from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* Blog Routes */}
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />

            {/* Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
