import {
    BadgeCheck,
    CircleHelp,
    Headphones,
    ShieldCheck,
    Wrench,
} from "lucide-react";

const warrantyBenefits = [
    {
        icon: ShieldCheck,
        title: "Warranty-Backed Repairs",
        description: "Coverage that gives you peace of mind long after we leave.",
    },
    {
        icon: Wrench,
        title: "Quality Parts",
        description: "We use premium, certified components for every fix.",
    },
    {
        icon: BadgeCheck,
        title: "Expert Technicians",
        description: "Trained, vetted professionals handling your appliances.",
    },
    {
        icon: Headphones,
        title: "After-Service Support",
        description: "Dedicated help desk ready to assist post-repair.",
    },
];

function ServiceWarranty() {
    return <>

        <div className="text-center">

            <div className="inline-flex items-center rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-5 py-1.5 mt-16">
         <span className="text-sm font-semibold text-[#0B2545] ">Warranty</span>
        </div>

        <h1 className="faq-title text-4xl font-bold text-center text-[#1b2c46] mt-5">
          Guaranteed Quality, <br /> Reliable Service
        </h1>

        </div>


        <section className="main-container mx-5 mt-7 overflow-hidden rounded-[28px] bg-[#26344a] px-6 py-12 text-white sm:mx-8 sm:px-10 lg:mx-15 lg:px-16 lg:py-16">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 ">

                <div className="max-w-xl">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8098d5]/40 bg-[#5068a0]/30 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#b5c8ff]">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        TRUSTED PROTECTION
                    </div>

                    <h2 className="max-w-md text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                        Your Repair.
                        <span className="block text-[#aebfff]">Our Guarantee.</span>
                    </h2>

                    <p className="mt-5 max-w-lg text-sm leading-6 text-[#d3ddec] sm:text-base">
                        We stand behind the quality of our eligible repair services with
                        warranty-backed support. Rest easy knowing your home appliances are
                        in expert hands.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                        <button className="rounded-xl bg-[#1749c7] px-7 py-3 text-sm font-semibold shadow-lg shadow-[#122d78]/30 transition hover:bg-[#2459da]">
                            Know Your Warranty
                        </button>
                        <a
                            href="#terms"
                            className="text-xs font-semibold text-[#b5c8ff] transition hover:text-white"
                        >
                            Terms &amp; Conditions
                        </a>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7d93d7]/30 blur-[1px]" />

                    {warrantyBenefits.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="relative min-h-36 rounded-2xl border border-[#71809b]/25 bg-[#2d3b51]/75 p-5 shadow-lg shadow-[#172235]/20 backdrop-blur-sm"
                        >
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#41557d] text-[#b5c8ff]">
                                <Icon className="h-4 w-4" />
                            </div>
                            <h3 className="text-lg font-semibold leading-tight text-[#f4f7ff]">
                                {title}
                            </h3>
                            <p className="mt-2 text-xs leading-5 text-[#c1ccdd]">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}

export default ServiceWarranty;