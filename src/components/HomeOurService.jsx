import { AirVent, Award, BadgeDollarSign, ClipboardList, Refrigerator, TvMinimal, UsersRound, WashingMachine, BadgeCheck, ShieldCheck, Wrench} from 'lucide-react'
import acRepair from '../assets/ac-repair.jpeg'
import tvRepair from '../assets/tv-repair.jpeg'
import fridgeRepair from '../assets/fridge-repair.jpeg'
import washingMachineRepair from '../assets/washing-machine-repair.jpeg'
import Image from 'next/image'

function HomeOurService() {
  return <>

  
    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-4 py-1.5">
      <Wrench  className="h-4 w-4 text-[#0B2545]" />
      <span className="text-sm font-semibold text-[#0B2545]">
        Our Services
      </span>
    </div>

    <h1 className="text-4xl font-bold text-[#1b2c46] text-center mt-5">We Repair <br /> What Keeps Your Home Running</h1>

    {/*---------------------------------------- Hero Section-------------------------------- */}
    
    <div className="main-container flex items-center gap-14 mx-16 mt-15 ">

        <div className="first-section w-[50%] grid grid-cols-1 divide-y divide-stone-400 border-y border-stone-400  py-2 md:grid-cols-2 md:divide-y-0 md:divide-x md:border-y-0 md:py-0">

      <div className="first-card grid gap-0 pr-10">
       
        <div className="flex items-start gap-5 border-b border-stone-400 py-8">
          <BadgeDollarSign className="mt-1 h-10 w-10 shrink-0 text-[#0236A4]" strokeWidth={1.7} />
          <div>
            <h2 className="text-xl font-bold text-[#121D2D]">Competitive Pricing</h2>
            <p className="mt-3 max-w-xs text-md leading-6 text-[#2F3E50]">
              Experience quality without breaking the bank-we offer fair and competitive pricing.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 py-8">
          <Award className="mt-1 h-10 w-10 shrink-0 text-[#0236A4]" strokeWidth={1.7} />
          <div>
            <h2 className="text-xl font-bold text-[#121D2D]">Certified Experts</h2>
            <p className="mt-3 max-w-xs text-md leading-6 text-[#2F3E50]">
              Choose Razor for proven excellence backed by certified professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="second-card grid gap-0 md:pl-10">

        <div className="flex items-start gap-5 border-b border-stone-400">
          <ClipboardList className="mt-1 h-10 w-10 shrink-0 text-[#0236A4]" strokeWidth={1.7} />
          <div>
            <h2 className="text-xl font-bold text-[#121D2D]">Easy Financing</h2>
            <p className="mt-3 max-w-xs text-md leading-6 text-[#2F3E50]">
              Don't let budget constraints stop you-explore our hassle-free financing options.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 py-8">
          <UsersRound className="mt-1 h-10 w-10 shrink-0 text-[#0236A4]" strokeWidth={1.7} />
          <div>
            <h2 className="text-xl font-bold text-[#121D2D]">100% Satisfaction</h2>
            <p className="mt-3 max-w-xs text-md leading-6 text-[#2F3E50]">
              Don't just take our word for it-see what Homepro Saskatoon say about Razor.
            </p>
          </div>
        </div>

      </div>

        </div>

        <div className="second-section w-[50%] h-[470px] relative ">

            <div className="w-[450px] h-[350px] border-2 border-gray-200 bg-gray-200 p-1 rounded-xl absolute right-0">
              
              <Image src={acRepair} alt="AC Repair" className="w-full h-full rounded-xl" />

            </div>

            <div className="w-[210px] h-[180px] border-2 border-gray-200 bg-gray-200  p-1 rounded-xl absolute top-72 left-85">

              <Image src={tvRepair} alt="AC Repair" className="w-full h-full rounded-xl" />

            </div>

            <div className="w-[300px] h-[240px] border-2 border-gray-200 bg-gray-200  p-1 rounded-xl absolute top-50 left-10">

              <Image src={fridgeRepair} alt="AC Repair" className="w-full h-full rounded-xl" />

            </div>

            <div className="w-[200px] h-[200px] border-2 border-gray-200 bg-gray-200 bg-gray-200  p-1 rounded-xl absolute top-10 left-20">

              <Image src={washingMachineRepair} alt="AC Repair" className="w-full h-full rounded-xl" />

            </div>

        </div>
        
    </div>

    {/*------------------------------------- Guarantee-Container----------------------------- */}

    <div className="guarantee-container mt-5">

      <h1 className="text-xl text-[#2F3E50] font-semibold text-center">Unmatched Reliability Guarantee</h1>

      <div className="guarantee-card-container w-full px-15 py-8 flex items-center gap-8">

        {/*------------------------------------ 3-Month-Waranty-Container-------------------------------- */}

        <div className="3-month-container w-[50%] p-6 border border-gray-300 border-t-3 border-t-[#0236A4]/50 rounded-2xl flex gap-5 shadow-md">

          <div className="icon p-5 bg-[#0236A4]/20 h-fit w-fit rounded-full text-[#0236A4]">
            <BadgeCheck />

          </div>

          <div className="content">
            <h1 className="text-2xl text-[#1b2c46] font-semibold">"3 Months" Service Warranty</h1>
            <p className="text-[16px] text-[#2F3E50] mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit inventore quas deserunt in atque totam ab voluptate ipsam id consequuntur! adipisicing elit. Suscipit inventore quas deserunt in atque totam ab voluptate ipsam id consequuntur!</p>
          </div>

        </div>

        {/*------------------------------------ 6-Month-Spare-Part-Container-------------------------------- */}

       <div className="6-month-container w-[50%] p-6 border border-gray-300 border-t-3 border-t-[#2F3E50]/50 rounded-2xl flex gap-5 shadow-md">

          <div className="icon p-5 bg-[#2F3E50]/20 h-fit w-fit rounded-full text-[#2F3E50]">
            <ShieldCheck />

          </div>

          <div className="content">
            <h1 className="text-2xl text-[##1b2c46] font-semibold">"6 Months" Spare Part Warranty</h1>
            <p className="text-[16px] text-[#2F3E50] mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit inventore quas deserunt in atque totam ab voluptate ipsam id consequuntur! adipisicing elit. Suscipit inventore quas deserunt in atque totam ab voluptate ipsam id consequuntur!</p>
          </div>

        </div>

        

      </div>
    </div>

  
  </>
}

export default HomeOurService;
