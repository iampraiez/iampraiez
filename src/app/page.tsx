"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Home: any = () => {
  const Div = "div" as any;
  const Main = "main" as any;
  const Nav = Navbar as any;
  const H = Hero as any;
  const A = About as any;
  const P = Projects as any;
  const E = Experience as any;
  const C = Certificates as any;
  const Con = Contact as any;
  const F = Footer as any;

  return (
    <Div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-mono">
      <Nav />
      <Main>
        <H />
        <A />
        <P />
        <E />
        <C />
        <Con />
      </Main>
      <F />
    </Div>
  ) as unknown as React.ReactElement;
};

export default Home;
