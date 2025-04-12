'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'briefcase',
            question: 'What services does Kymcode offer?',
            answer: 'Kymcode specializes in custom software development, web design, penetration testing, API integrations, and SaaS product development tailored to businesses of all sizes.'
        },
        {
            id: 'item-2',
            icon: 'layers',
            question: 'Can Kymcode build solutions for my specific industry?',
            answer: 'Yes! Kymcode builds tailored solutions for industries like finance, healthcare, education, logistics, e-commerce, and more. We analyze your needs and deliver custom systems that fit your goals.'
        },
        {
            id: 'item-3',
            icon: 'shield-check',
            question: 'How does Kymcode ensure cybersecurity?',
            answer: 'Kymcode follows industry best practices in security, including secure coding, regular vulnerability testing, pentesting services, and encryption for sensitive data across all systems.'
        },
        {
            id: 'item-4',
            icon: 'rocket',
            question: 'Can Kymcode scale with my growing business?',
            answer: 'Absolutely. Our solutions are designed to be scalable from day one. Whether you’re a startup or enterprise, we ensure that your software grows with your operations.'
        },
        {
            id: 'item-5',
            icon: 'user-check',
            question: 'How can I get started with Kymcode?',
            answer: 'Simply reach out to us via email or our contact form. We’ll schedule a consultation to understand your needs, discuss your project scope, and provide a custom quote or proposal.'
        }
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
