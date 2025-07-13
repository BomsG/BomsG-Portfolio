import React, { useEffect, useState, useRef } from "react";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}
export const HeroSection: React.FC<HeroSectionProps> = ({
  setActiveSection,
}) => {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Frontend Developer";
  const typingSpeed = 100;
  const cursorRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;
    if (!isTypingComplete) {
      typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, typingSpeed);
    }
    return () => clearInterval(typingInterval);
  }, [isTypingComplete]);
  useEffect(() => {
    // Blinking cursor animation
    let blinkInterval: NodeJS.Timeout;
    if (isTypingComplete && cursorRef.current) {
      blinkInterval = setInterval(() => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity =
            cursorRef.current.style.opacity === "0" ? "1" : "0";
        }
      }, 500);
    }
    return () => clearInterval(blinkInterval);
  }, [isTypingComplete]);
  const scrollToSkills = () => {
    setActiveSection("skills");
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-400/20 text-cyan-400 text-sm font-medium mb-4 transform hover:scale-105 transition-transform duration-300">
            Welcome to my portfolio
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
          <span className="animate-fadeIn">Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient">
            Boma George
          </span>
        </h1>
        <div className="text-3xl md:text-4xl font-medium text-gray-300 mb-8 h-12">
          <span>{"Software developer"}</span>
          <span
            ref={cursorRef}
            className="inline-block w-[3px] h-[30px] bg-cyan-400 ml-1 align-middle"
          ></span>
        </div>
        <p
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeIn opacity-0"
          style={{
            animationDelay: "1s",
            animationFillMode: "forwards",
          }}
        >
          I create engaging, responsive, and interactive Web / Mobile app
          experiences with modern technologies. Let's build something amazing
          together.
        </p>
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn opacity-0"
          style={{
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection("contact");
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection("projects");
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View my work
          </a>
        </div>
        <div
          className="flex justify-center gap-6 mb-16 animate-fadeIn opacity-0"
          style={{
            animationDelay: "2s",
            animationFillMode: "forwards",
          }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <TwitterIcon size={24} />
          </a>
        </div>
      </div>
      <button
        onClick={scrollToSkills}
        className="absolute bottom-10 transform -translate-x-1/2 flex flex-col justify-center items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <span className="mb-2 text-sm">Scroll down</span>
        <ArrowDownIcon size={20} />
      </button>
    </section>
  );
};
