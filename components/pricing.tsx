import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section id='pricing' className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p>Gemini is evolving to be more than just the models. It supports an entire suite of APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {/* Website Development Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-medium">Website development services</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Custom Pricing</span>
                            <CardDescription className="text-sm">Tailored to your needs</CardDescription>
                            <Button asChild variant="outline" className="mt-4 w-full">
                                <Link href="mailto:kimanigeff2@gmail.com">Email Us</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Custom UI/UX Design',
                                    'Responsive Web Design',
                                    'SEO Optimization',
                                    'Content Management Integration (WordPress, Strapi, etc)',
                                    'Performance Optimization',
                                    'Free Hosting Setup',
                                    'Free SSL & Security Hardening',
                                    'Contact Forms & Integrations',
                                    'Google Analytics Setup',
                                    'Ongoing Maintenance (optional)'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Software Development Card */}
                    <Card className="relative">
                        <span className="bg-gradient-to-br from-purple-400 to-amber-300 absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>
                        <CardHeader>
                            <CardTitle className="font-medium">Software developing services</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Let’s Talk</span>
                            <CardDescription className="text-sm">Pricing based on project scope</CardDescription>
                            <Button asChild className="mt-4 w-full">
                                <Link href="mailto:kimanigeff2@gmail.com">Email Us</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Custom Software Architecture',
                                    'API Design & Integration',
                                    'Database Design (SQL/NoSQL)',
                                    'Mobile/Desktop App Development',
                                    'Authentication & User Management',
                                    'Admin Panel or Dashboard',
                                    'Testing & QA Services',
                                    'Documentation & Deployment',
                                    'Cross-platform Compatibility',
                                    'Ongoing Support & Feature Updates'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Pentesting Services Card */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Pentesting services</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">Get a Quote</span>
                            <CardDescription className="text-sm">Pricing varies with scope</CardDescription>
                            <Button asChild variant="outline" className="mt-4 w-full">
                                <Link href="mailto:kimanigeff2@gmail.com">Email Us</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Vulnerability Assessment',
                                    'Manual & Automated Testing',
                                    'Web & Mobile App Pentesting',
                                    'Network Security Analysis',
                                    'OWASP Top 10 Compliance',
                                    'Report with Risk Ratings',
                                    'Remediation Guidance',
                                    'Social Engineering Simulation',
                                    'API Security Testing',
                                    'Retesting After Fixes'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
