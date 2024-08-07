"use client";
import Image from "next/image";
import Header from "@/views/components/Header";
import Footer from "@/views/components/Footer";

import ScrollTop from "@/views/components/ScrollTop";
import ScrollToTop from "@/views/components/ScrollToTop";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/views/Home";
import Members from "@/views/Members";
import ResearchTopic from "@/views/ResearchTopic";
import Publications from "@/views/Publications";
import AboutUs from "@/views/AboutUs";
import Contact from "@/views/Contact";
import MarkdownPage from "@/views/MarkdownPage";
// import dynamic from 'next/dynamic';

// const Home = dynamic(() => import('@/views/Home'), { ssr: false });
// const Members = dynamic(() => import('@/views/Members'), { ssr: false });
// const ResearchTopic = dynamic(() => import('@/views/ResearchTopic'), { ssr: false });
// const Publications = dynamic(() => import('@/views/Publications'), { ssr: false });
// const AboutUs = dynamic(() => import('@/views/AboutUs'), { ssr: false });
// const Contact = dynamic(() => import('@/views/Contact'), { ssr: false });
// const MarkdownPage = dynamic(() => import('@/views/MarkdownPage'), { ssr: false });

import "./globals.css";
import { useState, useEffect } from "react";

export default function Page() {
  const [elementContent, setElementContent] = useState("No element");

  useEffect(() => {
    const element = document.getElementById("root");
    if (element) {
      setElementContent(element.textContent);
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/research-topic" element={<ResearchTopic />} />
        <Route path="/publication" element={<Publications />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:filename" element={<MarkdownPage />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </div>
  );
}
