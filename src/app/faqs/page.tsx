'use client'
import Header from '../Header'
import Footer from '../Footer'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Ardhisasa?",
    answer: "Ardhisasa is a national land information management system developed by the Ministry of Lands and Physical Planning in consultation with the National Lands Commission, County Governments and other stakeholders, for Kenyans by Kenyans. This platform enables the common mwananchi to access credible, reliable and efficient land and land-based services.\n\nSome of these services can only be performed by a professional once they upgrade their accounts. The process of registration and navigation is, however, the same. Simple and straightforward guidelines on how to register and navigate through the system have been provided."
  },
  {
    question: "How do I get register on Ardhisasa?",
    answer: "Registration on Ardhisasa involves a simple process. You'll need to provide basic information and follow the verification steps. Detailed registration guidelines are provided on the platform."
  },
  {
    question: "How do I login and navigate through Ardhisasa after registration?",
    answer: "After registration, you can login using your credentials. The platform features an intuitive interface with clear navigation menus and sections for different services."
  },
  {
    question: "Land Registration FAQs",
    answer: "This section covers frequently asked questions about land registration processes, requirements, and procedures."
  },
  {
    question: "Land Administration FAQs",
    answer: "Find answers to common questions about land administration, including management and governance of land resources."
  },
  {
    question: "Physical Planning FAQs",
    answer: "Learn about physical planning processes, zoning regulations, and development control."
  },
  {
    question: "Survey & Mapping FAQs",
    answer: "Get information about land surveying, mapping procedures, and related technical requirements."
  },
  {
    question: "Land Valuation FAQs",
    answer: "Understanding land valuation processes, methods, and requirements for different purposes."
  },
  {
    question: "National Land Commission FAQs",
    answer: "Information about the National Land Commission's role, responsibilities, and services."
  }
]

export default function FAQsPage() {
  return (
    <>
    
      <Header />
    <div className="min-h-screen bg-background-50">

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="bg-background border-b ">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-amber-900">Frequently Asked Questions</h1>
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-6 hover:no-underline hover:bg-background-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {faq.answer.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mt-4 text-amber-600 first:mt-0">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}

