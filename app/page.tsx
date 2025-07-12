"use client"

import { useEffect } from "react"
import Head from "next/head"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Star,
  Mail,
  Shield,
  Zap,
  Code,
  Users,
  Clock,
  Youtube,
  Rocket,
  Brain,
  Edit3,
  VenetianMaskIcon as Masks,
  Route,
} from "lucide-react"
import { XIcon } from "@/components/x-icon"
import Image from "next/image"

export default function ElizaTemplatesLanding() {
  useEffect(() => {
    // Enhanced ConvertKit script loading
    const loadConvertKitScript = () => {
      // Remove existing script if present
      const existingScript = document.querySelector('script[data-uid="2090eb7684"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }

      // Create and load new script
      const script = document.createElement("script")
      script.async = true
      script.setAttribute("data-uid", "2090eb7684")
      script.src = "https://snapperai.kit.com/2090eb7684/index.js"
      
      // Add error handling
      script.onerror = () => {
        console.error("Failed to load ConvertKit script")
      }
      
      script.onload = () => {
        console.log("ConvertKit script loaded successfully")
        // Try to initialize forms after script loads
        if (window.formkit) {
          window.formkit.init()
        }
      }
      
      document.head.appendChild(script)
    }

    // Load script with a small delay to ensure DOM is ready
    const timer = setTimeout(loadConvertKitScript, 100)

    return () => {
      clearTimeout(timer)
      const existingScript = document.querySelector('script[data-uid="2090eb7684"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>ElizaOS Character Creation System - Create AI Personalities in 12 Minutes | SnapperAI</title>
        <meta name="description" content="Transform AI agent development from 2+ hours to 12 minutes with our complete ElizaOS character creation templates. Get 6 professional templates including guides, prompts, and automation tools." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://snapperai.io/" />
        <meta property="og:title" content="ElizaOS Character Creation System - Create AI Personalities in 12 Minutes" />
        <meta property="og:description" content="Transform AI agent development from 2+ hours to 12 minutes with our complete ElizaOS character creation templates." />
        <meta property="og:image" content="https://snapperai.io/og-image.png" />
        <meta property="og:site_name" content="SnapperAI" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://snapperai.io/" />
        <meta property="twitter:title" content="ElizaOS Character Creation System - Create AI Personalities in 12 Minutes" />
        <meta property="twitter:description" content="Transform AI agent development from 2+ hours to 12 minutes with our complete ElizaOS character creation templates." />
        <meta property="twitter:image" content="https://snapperai.io/og-image.png" />
        <meta property="twitter:creator" content="@SnapperSol" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="ElizaOS, AI agents, character creation, AI personality, TypeScript, Claude, AI development, templates" />
        <meta name="author" content="SnapperAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://snapperai.io/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-[#2D1B69] via-[#1A0F3A] to-[#0F0A1F] text-white">
      {/* Header */}
      <header className="border-b border-purple-700/30 bg-[#1A0F3A]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="https://www.snapperai.io" className="flex items-center gap-3">
            <Image src="/snapper-logo.png" alt="SnapperAI Logo" width={40} height={40} className="pixelated" />
            <span className="text-2xl font-bold text-white">SnapperAI</span>
          </a>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <a
                href="https://www.youtube.com/@snapperAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/SnapperSol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Master </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ElizaOS Character Creation
            </span>
            <span className="text-white"> in 12 Minutes</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
            Transform AI agent development from 2+ hours of trial-and-error to 12 minutes of proven, professional
            results
          </p>

          <div className="max-w-md mx-auto mb-6">
            {/* Direct ConvertKit Form */}
            <form 
              action="https://app.convertkit.com/forms/8284178/subscriptions" 
              method="post"
              className="space-y-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30"
            >
              <input
                name="fields[first_name]"
                type="text"
                placeholder="Your first name"
                required
                className="w-full px-4 py-3 bg-[#1A0F3A] border border-purple-500 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-cyan-400"
              />
              <input
                name="email_address"
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-[#1A0F3A] border border-purple-500 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-cyan-400"
              />
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Get the Complete System
              </button>
            </form>

            <p className="text-sm text-purple-300 text-center mt-4">No spam ever. Unsubscribe anytime.</p>
            <p className="text-cyan-300 font-medium text-center mt-2">
              🎁 BONUS: Regular ElizaOS development insights + template updates
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-[#1A0F3A]/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            How It Works: 4 Simple Steps to Amazing AI Personalities
          </h2>
          <p className="text-xl text-purple-200 text-center mb-16">From idea to working AI personality in 12 minutes</p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: "📚",
                title: "Set Context",
                description:
                  "Choose manual customization or AI automation, then send the context prompt to teach your AI assistant the ElizaOS framework",
                time: "2 minutes",
              },
              {
                step: "2",
                icon: "📝",
                title: "Fill Template",
                description:
                  "Fill in your agent's purpose, personality type, and unique traits using our structured template",
                time: "5 minutes",
              },
              {
                step: "3",
                icon: "⚡",
                title: "Generate Code",
                description: "Receive working TypeScript character configuration in minutes",
                time: "3 minutes",
              },
              {
                step: "4",
                icon: "🚀",
                title: "Deploy Agent",
                description: "Copy the TypeScript code into your ElizaOS project and start your new AI personality",
                time: "2 minutes",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-purple-600 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{item.title}</h3>
                <p className="text-purple-200 mb-2">{item.description}</p>
                <p className="text-sm text-cyan-300 font-medium">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Cards Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            What You'll Get: The Complete ElizaOS Character Creation System
          </h2>
          <p className="text-xl text-purple-200 text-center mb-16">
            Everything you need to create engaging AI personalities in 12 minutes instead of 2+ hours
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Getting Started Guide",
                description:
                  "Complete workflow overview that transforms AI agent creation from 2+ hours to 12 minutes. Includes master methodology, quality control checklists, and troubleshooting.",
                benefit: "Your roadmap to professional AI personalities",
                badge: "Start Here",
                badgeColor: "bg-blue-600",
              },
              {
                icon: Brain,
                title: "Context Setting Prompts",
                description:
                  "Two specialized prompts: one for browser Claude and one for Claude Code. Teaches AI assistants the complete ElizaOS framework and character requirements.",
                benefit: "Sets the foundation for professional-quality results",
                badge: "Foundation",
                badgeColor: "bg-green-600",
              },
              {
                icon: Edit3,
                title: "Fill-in-the-Blank Character Template",
                description:
                  "Structured template with 12+ personality types, communication styles, and unique traits. Just fill in brackets with your specific requirements and generate characters.",
                benefit: "Turns complex character design into simple form completion",
                badge: "Core Template",
                badgeColor: "bg-purple-600",
              },
              {
                icon: Zap,
                title: "Automated Template Filler",
                description:
                  "AI-powered template completion for any character concept - famous personalities, professional roles, business concepts. Just name the character and get instant results.",
                benefit: "From concept to character in seconds",
                badge: "AI-Powered",
                badgeColor: "bg-orange-600",
              },
              {
                icon: Masks,
                title: "Context-Aware Style Guide",
                description:
                  "Deep dive into creating communication patterns that adapt to different contexts (chat vs professional) while maintaining consistent personality across all platforms.",
                benefit: "Makes your agent feel authentic in every situation",
                badge: "Advanced",
                badgeColor: "bg-red-600",
              },
              {
                icon: Route,
                title: "Two Creation Pathways",
                description:
                  "Choose manual customization for unique requirements or automated filling for quick prototypes. Both paths deliver professional TypeScript code ready for your ElizaOS project.",
                benefit: "Perfect for any skill level or time constraint",
                badge: "Flexible",
                badgeColor: "bg-teal-600",
              },
            ].map((template, index) => (
              <Card
                key={index}
                className="bg-[#1A0F3A]/50 border-purple-600/50 hover:border-cyan-400 transition-colors backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <template.icon className="w-8 h-8 text-cyan-400" />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${template.badgeColor}`}>
                      {template.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{template.title}</h3>
                  <p className="text-purple-200 mb-4">{template.description}</p>
                  <div className="bg-[#0F0A1F]/50 p-3 rounded-lg">
                    <p className="text-cyan-300 text-sm font-medium">{template.benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1A0F3A]/50 to-[#2D1B69]/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Get All 6 Templates Instantly</h2>
          <p className="text-xl text-purple-200 mb-8">
            Enter your email below and I'll send you the complete ElizaOS Character Creation System within 60 seconds.
          </p>

          <div className="max-w-md mx-auto">
            {/* Direct ConvertKit Form */}
            <form 
              action="https://app.convertkit.com/forms/8284178/subscriptions" 
              method="post"
              className="space-y-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30"
            >
              <input
                name="fields[first_name]"
                type="text"
                placeholder="Your first name"
                required
                className="w-full px-4 py-3 bg-[#1A0F3A] border border-purple-500 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-cyan-400"
              />
              <input
                name="email_address"
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-[#1A0F3A] border border-purple-500 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-cyan-400"
              />
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Get the Complete System
              </button>
            </form>

            <div className="mt-6 space-y-2">
              <p className="text-sm text-purple-300 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                No spam ever. Unsubscribe anytime.
              </p>
              <p className="text-cyan-300 font-medium">
                🎁 BONUS: Regular ElizaOS development insights + template updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Everything You Need to Create Engaging AI Personalities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Proven Templates",
                description: "Tested on real ElizaOS projects with thousands of users",
              },
              {
                icon: Clock,
                title: "12-Minute Results",
                description: "Go from blank file to working personality in 12 minutes",
              },
              {
                icon: Code,
                title: "TypeScript Ready",
                description: "Generated code drops directly into your ElizaOS project",
              },
              {
                icon: Zap,
                title: "Context Aware",
                description: "Personalities that adapt appropriately to different situations",
              },
              {
                icon: Star,
                title: "Professional Quality",
                description: "Results that rival expensive agency character development",
              },
              {
                icon: Users,
                title: "Beginner Friendly",
                description: "No personality design experience required",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-[#1A0F3A]/50 border-purple-600/50 text-center backdrop-blur-sm">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-purple-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect with SnapperAI Section */}
      <section className="py-20 px-4 bg-[#1A0F3A]/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Connect with SnapperAI</h2>
          <p className="text-xl text-purple-200 mb-12">Stay updated with the latest ElizaOS tutorials and tips</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.youtube.com/@snapperAI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors min-w-[200px] justify-center"
            >
              <Youtube className="w-6 h-6" />
              Subscribe on YouTube
            </a>
            <a
              href="https://x.com/SnapperSol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors min-w-[200px] justify-center border border-purple-600"
            >
              <XIcon className="w-6 h-6" />
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>

          <div className="space-y-8">
            {[
              {
                question: "Do I need AI experience to use these templates?",
                answer:
                  "No! The templates are designed for developers new to AI personality creation. Just fill in the blanks and send to Claude.",
              },
              {
                question: "Will this work with my existing ElizaOS project?",
                answer: "Yes, the generated TypeScript code integrates directly with any ElizaOS setup.",
              },
              {
                question: "How long does it take to create a character?",
                answer: "About 12 minutes from start to finished TypeScript code.",
              },
              {
                question: "Can I customize the generated personalities?",
                answer: "The templates include guidance for iterating and refining characters.",
              },
              {
                question: "Is this only for ElizaOS?",
                answer:
                  "The templates are optimized for ElizaOS but the personality design principles work for any AI framework.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-[#1A0F3A]/50 border-purple-600/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{faq.question}</h3>
                  <p className="text-purple-200">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-700/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-300">© 2025 SnapperAI. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center space-x-4">
                <span className="text-purple-300">Follow Us:</span>
                <a
                  href="https://www.youtube.com/@snapperAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/SnapperSol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white transition-colors"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-purple-300 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Questions? Email snapperdotsol@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
