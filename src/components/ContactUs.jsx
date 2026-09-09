function ContactUs() {
    return<>

    <div className="main-container w-full  mt-5 px-15 py-5 flex items-center gap-5">

        {/* Input-Section */}

        <div className="w-[50%] space-y-3">

            {/* Content-Section */}

            <h1 className="text-3xl text-[#001731] font-semibold">Let’s Get Your Appliance Fixed</h1>
            <h1 className="text-md text-[#001731] w-[75%] mt-2">Have an appliance issue? Tell us what’s wrong and our service team will get in touch with you.</h1>

            {/* Input Field */}

            <div className="flex item-center gap-2 space-y">
                <input type="text" className="border border-gray-200 w-[50%] p-1.5 rounded-lg shadow-md " placeholder="First name" />
                <input type="text" className="border border-gray-200 w-[50%] p-1.5 rounded-lg shadow-md" placeholder="Last name" />
            </div>
                <input type="number" className="border border-gray-200 w-full p-1.5 rounded-lg shadow-md" placeholder="Phone no"/>
                <input type="email" className="border border-gray-200 w-full p-1.5 rounded-lg shadow-md" placeholder="Email Address"/>

        </div>

        <div className="w-[50%] p-2">

        </div>

    </div>
    
    </>
}

export default ContactUs;