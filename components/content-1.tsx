import Image from 'next/image'

export default function ContentSection() {
    return (
        <section id='about' className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Kymcode .</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/payments.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">Kymcode is a forward-thinking <span className="text-accent-foreground font-bold">software and cybersecurity solutions company</span> dedicated to helping businesses thrive in the digital age. We specialize in building powerful, scalable, and secure digital experiences—from custom websites and applications to AI-driven platforms and enterprise-grade security services.</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Kymcode team is fast cooperative and reliable. They made my business life easier with invoice and inventory software</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">John Mwirigi, Manager</cite>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
