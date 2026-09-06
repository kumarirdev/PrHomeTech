import { MessageCircleDashedCheck } from 'lucide-react'
import Image from "next/image";
import acRepair from '../assets/ac-repair.jpeg'
import tvRepair from '../assets/tv.jpg'
import fridgeRepair from '../assets/fridge-repair.jpeg'
import washingMachineRepair from '../assets/washing-machine-repair.jpeg'

function AllService() {

    const data = [
        {
            image: tvRepair,
            heading: "TV Repair",
            description: "We provide comprehensive TV repair services, including screen replacement, power supply repair, and software troubleshooting.",
            firstList: "Screen Replacement",
            secondList: "Power Supply Repair",
            thirdList: "Software Troubleshooting",
            fourthList: "Audio/Video Issues"
        },
        {
            image: acRepair,
            heading: "AC Service",
            description: "Our AC service includes cleaning, maintenance, and repair of air conditioning units. We ensure your AC operates efficiently.",
            firstList: "Cleaning and Maintenance",
            secondList: "Refrigerant Recharge",
            thirdList: "Compressor Repair",
            fourthList: "Thermostat Calibration"
        },
        {
            image: fridgeRepair,
            heading: "Refrigerator Repair",
            description: "We offer refrigerator repair services, including compressor replacement, thermostat repair, and leak detection.",
            firstList: "Compressor Replacement",
            secondList: "Thermostat Repair",
            thirdList: "Leak Detection",
            fourthList: "Cooling Efficiency Restoration"
        },
        {
            image: washingMachineRepair,
            heading: "Washing Machine Repair",
            description: "Our washing machine repair services cover drum replacement, motor repair, and electronic control troubleshooting.",
            firstList: "Drum Replacement",
            secondList: "Motor Repair",
            thirdList: "Electronic Control Troubleshooting",
            fourthList: "Performance Optimization"
        },
    ];
  return <>

       <div className="inline-flex items-center rounded-full bg-gradient-to-r m-auto from-[#1d73a8] via-[#85c1e9d1] to-[#fdfdfd00] px-5 py-1.5 mt-16">
         <span className="text-sm font-semibold text-[#0B2545] ">All Services</span>
        </div>

        <h1 className="faq-title text-4xl font-bold text-center text-[#1b2c46] mt-5">
          All Services, <br /> Under One Roof
        </h1>

        <div className="grid grid-cols-4 p-5 gap-4 mt-7 px-15">

            {data.map((item)=>{
                return <div className="card border border-gray-200 rounded-xl p-5">

                    <div className="image-parent-container p-5 rounded-lg bg-gray-100">
                        <div className="image-container">
                        <Image src={item.image} className="rounded-xl" />
                        </div>
                    </div>

                    <div className="content-container">
                        <h1 className="mt-3 text-xl font-medium text-[#121D2D]">{item.heading}</h1>
                        <p className="text-[#2F3E50] text-sm mt-3">{item.description}</p>
                    </div>

                    <div className="list-container bg-gray-100 p-2 mt-5 rounded-lg">
                        <h1 className="text-[#121D2D] text-sm font-medium">We Handle :</h1>
                        <div className="flex  items-center gap-2 p-1">
                            <MessageCircleDashedCheck className="w-4 h-4 text-[#0236A4]"/>
                            <h1 className="text-[#606873] text-[13px] font-medium">{item.firstList}</h1>
                        </div>

                        <div className="flex  items-center gap-2 p-1">
                            <MessageCircleDashedCheck className="w-4 h-4 text-[#0236A4]"/>
                            <h1 className="text-[#606873] text-[13px] font-medium">{item.secondList}</h1>
                        </div>

                        <div className="flex  items-center gap-2 p-1">
                            <MessageCircleDashedCheck className="w-4 h-4 text-[#0236A4]"/>
                            <h1 className="text-[#606873] text-[13px] font-medium">{item.thirdList}</h1>
                        </div>

                        <div className="flex  items-center gap-2 p-1">
                            <MessageCircleDashedCheck className="w-4 h-4 text-[#0236A4]"/>
                            <h1 className="text-[#606873] text-[13px] font-medium">{item.fourthList}</h1>
                        </div>
                    </div>

                    <div className="text-center mt-5 ">
                       <p className="bg-[#0236A4] text-white px-7 py-2 rounded-xl font-medium">Book Now</p>
                    </div>


                </div>
            })}

        </div>
       
          
      

  </>
}

export default AllService;