import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection2() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">At Kymcode, we believe technology should be simple, secure, and smart. </h2>
                    <div className="space-y-6">
                        <p>Our team of developers, designers, and cybersecurity experts work hand-in-hand with clients to understand their goals and turn them into high-impact solutions that drive growth and innovation.</p>
                        <p><span className="font-bold">🔍 What We Do</span>     Website Development – Crafting fast, modern, and responsive websites that tell your brand’s story and convert visitors into loyal customers.

Custom Software Solutions – From automation tools to enterprise platforms, we build software tailored to your unique business needs.

Penetration Testing & Cybersecurity – We identify vulnerabilities before attackers do. Our ethical hacking services protect your systems and customer data.

AI & Automation – Leveraging machine learning and AI to supercharge your operations, customer service, and decision-making.

API Development & Integration – Seamlessly connect your services, applications, and third-party tools.
                        </p>
                        <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
