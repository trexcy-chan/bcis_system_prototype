<template>
    <div main="requestcertpage">
        <div class="bg-white flex flex-col font-sans">
            <div class="w-screen shadow-md"> 
                <div class="container mx-auto px-8">
                    <header class="flex flex-col sm:flex-row items-center justify-between relative">
                        <h1 class="font-bold text-center text-2xl text-amber-500">
                         BCI <span class="text-teal-500">SYSTEM</span>
                        </h1>
                        <nav class="hidden md:flex text-md">
                        <a @click="gthome" class="text-gray-800 hover:text-teal-400 py-3 px-6">Home</a>
                        <a @click="gttrackcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Appointment</a>
                        <a @click="gtreqcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Schedule an Appointment</a>
                        <a @click="logout" class=" right-1 bg-amber-500 hover:bg-teal-300 rounded-full uppercase text-white py-3 px-6">Log out</a>
                        </nav>
                    </header>
                </div>
            </div>
            
            <div class="flex">                        
                <div class="w-1/4 mt-5 px-10 text-left">
                    <label class="font-bold text-amber-500 uppercase">Request Certificate</label>  
                    <div class="block mt-10  w-60">
                        <ul class="whitespace-nowrap">
                        <li v-if="dat1" @click="DateTime" class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500 px-1"> Date and Time</li>
                        <li v-if="dat2" class="bg-none hover:bg-teal-100 border border-gray-400 text-amber-500 px-1"> Date and Time</li>
                        <li v-if="ai1" class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500 px-1"> Application Information</li>
                        <li v-if="ai2" class="bg-none hover:bg-teal-100 border border-gray-400 text-amber-500 px-1"> Application Information</li>
                        <li v-if="rai1" class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500 px-1"> Review Application Information</li>
                        <li v-if="rai2" class="bg-none hover:bg-teal-100 border border-gray-400 text-amber-500 px-1"> Review Application Information</li>
                        </ul>
                    </div>                   
                </div>  
                <div class="w-3/4 h-screen">  
                    
                    <div v-if="start" class="relative w-3/4 mt-5">
                        <form class="">
                        <h1 class="text-2xl font-semibold text-left">Notes and Instructions: </h1>
                        <h2 class="text-lg text-left text-red-400 mt-7 font-medium">PLEASE BRING THE FOLLOWING: </h2>
                            <p class="font-semibold text-justify text-lg mt-4 text-cyan-600">Valid Resident ID</p>
                            <p class="font-normal text-justify ml-6">
                                Upon claiming the requested certificate, the resident must bring 1 valid ID in acquiring the requested certificate.
                            </p>
                            <p class="font-semibold text-justify text-lg mt-4 text-cyan-600">Resident Cedula</p>
                            <p class="font-normal text-justify ml-6">
                                Cedula is one of the requirements upon claiming the requested certificate. 
                                The resident may bring the physical and valid cedula in the brgy office, nonetheless, 
                                if the resident doesn't have it, the cedula will be added in the requested certificate with the prescribe amount.
                            </p>

                            <div class="w-full flex justify-evenly mt-10">
                            <div @click="DateTime" class="w-1/4 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Proceed</div>   
                            </div>        
                        </form>  
                    </div>            
                    <div v-if ="OptionDateTime" >
                        <div class="mt-5 ml-10 text-xl text-left font-bold text-cyan-500">Select Date & Time</div>
                        <div class="flex justify-evenly space-x-12 mt-5 px-5">
                            <div class="">
                                <text class="font-bold text-amber-500 uppercase">Date</text>
                                <Datepicker v-model="calendar" inline autoApply :minDate="new Date().toISOString().substr(0, 10)" 
                                    :disabledWeekDays="[0]"
                                    :enableTimePicker="false"></Datepicker>
                            </div>
                            <div class="">
                                <text class="font-bold text-amber-500 uppercase">Time</text>
                                <Datepicker v-model="time" timePicker :is24="false" 
                                    :minTime="{ hours: 8, minutes: 30 }" :maxTime="{ hours: 16, minutes: 50 }" />

                                    <div class="ml-4 mt-6 text-justify font-semibold">
                            <p class="text-red-500">Note: There is no office during these holidays:</p>
                            <ul class="mt-1.5">
                                <li>January 1- New Year's Day</li>
                                <li>April 9- Araw ng Kagitingan Day</li>
                                <li>June 12- Independence Day</li>
                                <li>November 30- Bonifacio Day</li>
                                <li>December 25- Christmas</li>
                                <li>December 31- Ney Year's Eve</li>
                            </ul>
                        </div>
                            </div>
                        </div>

                        

                        <div @click="savedate" class="absolute bottom-10 right-10 w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Request</div> 
                        <!---previewdate--> 
                        <div v-if="previewdate"
                        class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
                        style="background: rgba(0, 0, 0, 0.7)">
                        <div
                            class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                            <div class="modal-content py-4 text-left px-6">
                            <!--Title-->
                            <div class="flex justify-between items-center pb-3">
                                <p class="text-2xl font-bold text-gray-500">
                                Your Appointment Date and Time:
                                </p>
                                <div @click="closepreview"
                                class="modal-close cursor-pointer z-50">
                                <svg class="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                                </div>
                            </div>
                            <!--Body-->
                            <div class="my-5 mr-5 ml-5 flex justify-center">
                                <form class="w-full">
                                <div class="">
                                    <div class="flex">
                                        <p class="font-semibold">Date: </p>
                                        <p class="font-semibold text-justify ml-2">{{selectedDate }}</p>
                                    </div>
                                    <div class="flex">
                                    <p class="font-semibold">Time: </p>
                                        <p class="font-semibold text-justify ml-2">{{selectedTime}} </p>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <!--Footer-->
                            <div class="flex justify-end pt-2 space-x-14">
                                <button @click="closepreview"
                                class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold">
                                Cancel
                                </button>
                                <button @click="AppInfo"
                                class="px-4 bg-amber-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                                Confirm
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>                    
                    </div>
                    <div v-if ="OptionAppInfo" class="w-full"> 
                        <div class=" h-screen">
                            <div class="mt-5 mb-4 text-left">
                                <label class="font-bold text-amber-500 uppercase">Application Information</label>
                            </div>
                            <div class="flex px-5">
                                <div class="w-full flex">
                                        <label class="block mt-2 text-lg font-semibold text-gray-600 mx-3">Certificate Type:</label>
                                        <select v-model="ctype"
                                        class="py-2 px-3 rounded-lg border-2 font-semibold border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                            <option value= "BARANGAY CLEARANCE">BARANGAY CLEARANCE</option>
                                            <option value= "BUSINESS PERMIT">BUSINESS PERMIT</option>
                                            <option value= "CERTIFICATE OF INDIGENCY">CERTIFICATE OF INDIGENCY</option>
                                            <option value= "CERTIFICATE OF RESIDENCY">CERTIFICATE OF RESIDENCY</option>
                                        </select>
                                        <div @click="SelectCert" class="w-32 h-10 rounded-lg bg-amber-500 hover:bg-amber-300 text-center cursor-pointer text-xl text-white font-medium mx-3 mt-1 py-1">Continue</div>
                                </div>
                            </div>
                            <div v-if= "BrgyClearance" class="mt-3 px-5 w-full h-3/4 ">
                                <div class="w-full h-1/5 bg-teal-100 rounded text-left">
                                    <p class="font-bold text-blue-700 pt-3 ml-5 text-lg">BARANGAY CLEARANCE</p>
                                    <p class="font-bold text-neutral-800 pt-1 ml-10 text-base">Issued identification documents neededd for many important business job or personal transactions.</p>
                                </div>
                                <div class="mt-5 w-full px-2 rounded border-2">
                                    <div class="text-center">
                                        <p class="font-bold text-amber-500 pt-3 ml-5 text-lg">Please provide all the information below</p>
                                    </div>
                                    <div class="flex mt-5 text-left">
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</label>
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{first}}</text>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</label>
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{middle}}</text>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{last}}</text>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</label>
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{suffix}}</text>
                                        </div>
                                    </div>
                                    <div class="flex mt-5 text-left">
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purok</label>
                                            
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{purok}}</text>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Citizenship</label>
                                            <input v-model="iccitizenship" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Citizenship" />
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Status</label>
                                            <select v-model="icstatus" 
                                            class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                                <option value= "Single">Single</option>
                                                <option value= "Married">Married</option>
                                                <option value= "Widowed">Widowed</option>
                                                <option value= "Divorced">Divorced</option>
                                                <option value= "Separated">Separated</option>
                                            </select>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Age</label>
                                            <input v-model="icage" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Age" />
                                        </div>
                                    </div>
                                    <div class="flex mt-5 mb-5 text-left">
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Quantity</label>
                                            <select v-model="icquantity" 
                                            class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                                <option value= "1">1</option>
                                                <option value= "2">2</option>
                                            </select>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Include Cedula</label>
                                            <select v-model="icedula" 
                                            class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                                <option value= "Yes">Yes</option>
                                                <option value= "No">No</option>
                                            </select>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/2">
                                            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Purpose</label>
                                            <input v-model="icpurpose" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Purpose" />
                                        </div>   
                                    </div>
                                    <div class="flex justify-evenly mb-3">
                                        <div class="flex">
                                            <div @click="ClearanceInfo" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Request</div> 
                                            <div @click="DateTime" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Back</div> 
                                        </div>
                                    </div>    
                                </div>
                            </div> 
                            <div v-if= "BrgyPermit" class="mt-3 px-5 w-full h-3/4 ">
                                <div class="w-full h-1/5 bg-teal-100 rounded text-left">
                                    <p class="font-bold text-blue-700 pt-3 ml-5 text-lg">BARANGAY PERMIT</p>
                                    <p class="font-bold text-neutral-800 pt-1 ml-10 text-base">This certifies that your business complies with the requirements of the barangay where your business operates.</p>
                                </div>
                                <div class="mt-5 w-full px-2 rounded border-2">
                                    <div class="text-center">
                                        <p class="font-bold text-amber-500 pt-3 ml-5 text-lg">Please provide all the information below</p>
                                    </div>
                                    <div class="flex mt-5 text-left">
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</label>
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{first}}</text>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</label>
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{middle}}</text>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{last}}</text>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</label>
                                            <text class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" >{{suffix}}</text>
                                        </div>
                                    </div>
                                    <div class="flex mt-5 text-left">
                                        <div class="grid grid-cols-1 px-3 w-2/5">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Business Name</label>
                                            <input v-model="ipbname" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  placeholder="Name of Business"/>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/5">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Venue</label>
                                            <select v-model="ipvenue" 
                                            class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                                <option value= "purok1">purok1</option>
                                                <option value= "purok2">purok2</option>
                                                <option value= "purok3">purok3</option>
                                            </select>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-2/5">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Business Nature</label>
                                            <input v-model="ipnature" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  placeholder="Nature of Business"/>
                                        </div>
                                    </div>
                                    <div class="flex mt-5 mb-5 text-left">
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Effectivity</label>
                                            <Datepicker v-model="month" monthPicker :minDate="new Date().toISOString().substr(0, 10)"  />
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/4">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Include Cedula</label>
                                            <select v-model="ipcedula" 
                                            class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                                <option value= "Yes">Yes</option>
                                                <option value= "No">No</option>
                                            </select>
                                        </div>
                                        <div class="grid grid-cols-1 px-3 w-1/2">
                                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purpose</label>
                                            <input v-model="ippurpose" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Purpose" />
                                        </div>   
                                    </div>
                                    <div class="flex justify-evenly mb-3">
                                        <div class="flex">
                                            <div @click="PermitInfo" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Request</div> 
                                            <div @click="DateTime" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Back</div> 
                                        </div>
                                    </div>    
                                </div>
                            </div> 

                        </div>
                    </div>  
                    <div v-if ="OptionRevAppInfo" class="px-10 mt-5"> 
                        <div v-if ="clearance">
                                <h1 class="text-xl font-semibold text-left text-amber-600">Review Application Information</h1>
                                <form @submit.prevent="addclearance">
                                <div class="ml-10">
                                     <div class="flex mt-5">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Type of Certificate:</p>
                                        <p class="font-semibold text-justify text-lg ml-2">Barangay Clearance</p>
                                    </div>
                                    <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-lg text-cyan-600">Date and Time: </p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{selectedDate}} </text>
                                        <p class="font-semibold text-justify text-lg mx-2"> at </p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{selectedTime}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">First Name:</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{first}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Middle Name:</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{middle}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Last Name:</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{last}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Suffix :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{suffix}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Purok :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{purok}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Citizenship :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{iccitizenship}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Status :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{icstatus}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Age :</p>
                                        <text class="font-semibold text-justify text-lg ml-2">{{icage}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Quantity :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{icquantity}}</text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Purpose :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{icpurpose}}</text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">With Cedula :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{icedula}}</text>
                                    </div>   
                                     <div class="flex mt-1 ">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Total Cost :</p>
                                        <text class="font-bold text-red-500 text-justify text-lg ml-2"> {{totalcost}}</text>
                                    </div>                                    
                                     <div class="mt-10 flex">
                                        <input type="submit" value="Confirm" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"/> 
                                        <div @click="AppInfo" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Back</div> 
                                    </div>
                                </div>      
                            </form>
                        </div> 
                        <div v-if ="permit">
                                <h1 class="text-xl font-semibold text-left text-amber-600">Review Application Information</h1>
                                <form @submit.prevent="addpermit">
                                <div class="ml-10">
                                     <div class="flex mt-5">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Type of Certificate:</p>
                                        <p class="font-semibold text-justify text-lg ml-2">Barangay Permit</p>
                                    </div>
                                    <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-lg text-cyan-600">Date and Time: </p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{selectedDate}} </text>
                                        <p class="font-semibold text-justify text-lg mx-2"> at </p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{selectedTime}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">First Name:</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{first}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Middle Name:</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{middle}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Last Name:</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{last}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Suffix :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{suffix}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Business Name :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{ipbname}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Venue :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{ipvenue}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Business Nature :</p>
                                        <text class="font-semibold text-justify text-lg ml-2">{{ipnature}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Effectivity :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{ipeffectivity}} </text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">With Cedula :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{ipcedula}}</text>
                                    </div>
                                     <div class="flex mt-1">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Purpose :</p>
                                        <text class="font-semibold text-justify text-lg ml-2"> {{ippurpose}}</text>
                                    </div>
                                     <div class="flex mt-1 ">
                                        <p class="font-semibold text-justify text-cyan-600 text-lg">Total Cost :</p>
                                        <text class="font-bold text-red-500 text-justify text-lg ml-2"> {{totalcost}}</text>
                                    </div>                                    
                                     <div class="mt-10 flex">
                                        <input type="submit" value="Confirm" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"/> 
                                        <div @click="AppInfo" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Back</div> 
                                    </div>
                                </div>      
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';
import { app } from "../firebase";
// import { auth } from "../firebase";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
export default {
 components: { Datepicker },
    setup() {
        const calendar = ref(new Date());
        const time = ref({ hours: 8, minutes: 30 });
        const month  = ref({
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        });
        
        return {
            time,
            month,
            calendar,
        }
    },
    data(){
        return{

        recentdate: ref(new Date()),

        selectedDate:'', selectedTime:'',      
        first: '', middle: '', last: '', suffix: '', purok: '',
        ctype: '', ftype: '', totalcost: '',

        previewdate: false,
        BrgyClearance: false, 
        BrgyPermit: false, 
        Residency: false, 
        Indigency: false,
        start: true, 
        OptionAppInfo: false, 
        OptionDateTime: false, 
        OptionRevAppInfo: false,
        dat1: true, dat2: false, 
        ai1: true, ai2: false,
        rai1: true, rai2: false,   

        clearance: false, permit: false, ipeffectivity:'',
        iccitizenship: '', icstatus: '', icage: '', icquantity: '', icedula: '', icpurpose:'',
        
        }
    },
     created(){
       this.userID = this.$route.params.id;    
       this.loadresident();
     },
    methods:{
        async loadresident(){ 
           const db = getFirestore(app)
           const userid = this.userID;  
           const residentRef = doc(db, "residents",userid);
           const residentSnap = await getDoc(residentRef);  

           if(residentSnap.exists){
                if(residentSnap.data().logintoken=='Yes'){
                    console.log("Document data:", residentSnap.data());
                    this.first = residentSnap.data().first;
                    this.middle = residentSnap.data().middle;
                    this.last = residentSnap.data().last;
                    this.suffix = residentSnap.data().suffix;
                    this.purok = residentSnap.data().purok;
                                
                    this.phonenumber = residentSnap.data().phonenumber;
                    this.password = residentSnap.data().password;

                }
                else {
                    this.$router.push('/loginpage');
                }


           } else{
               console.log("No such document!");
           }

        },
        SelectCert(){
            
            if(this.ctype=='BARANGAY CLEARANCE'){
                this.ftype='BARANGAY CLEARANCE';
                this.BrgyClearance=true;
                this.BrgyPermit=false;
                this.Indigency=false;
                this.Residency=false;
            }
            else if (this.ctype=='BUSINESS PERMIT'){
                this.ftype='BUSINESS PERMIT';
                this.BrgyClearance=false;
                this.BrgyPermit=true;
                this.Indigency=false;
                this.Residency=false;
            }
            else if (this.ctype=='CERTIFICATE OF INDIGENCY'){
                this.ftype='CERTIFICATE OF INDIGENCY';
                this.BrgyClearance=false;
                this.BrgyPermit=false;
                this.Indigency=true;
                this.Residency=false;
            }
            else if (this.ctype=='CERTIFICATE OF RESIDENCY'){
                this.ftype='CERTIFICATE OF RESIDENCY';
                this.BrgyClearance=false;
                this.BrgyPermit=false;
                this.Indigency=false;
                this.Residency=true;
            }
            
        },
        DateTime(){
            this.OptionDateTime = true;
            this.OptionAppInfo = false;
            this.OptionRevAppInfo = false;
            this.start = false;

            this.dat1= false;
            this.ai1= true;
            this.rai1= true;
            this.dat2= true;
            this.ai2= false;
            this.rai2= false;

        },
        ClearanceInfo(){
            var cost = 0;
            if(this.icedula == 'Yes'){
                cost = cost + 60;
            }
                this.totalcost = cost + 70*this.icquantity;
                //alert(this.totalcost);
            if(
                this.iccitizenship == '' ||
                this.icstatus == '' ||
                this.icage == '' ||
                this.icquantity == '' ||
                this.icedula == ''
                ){
                    this.$toast.warning("Parameters cant be empty", {
                        position: "top"
                    });
                }
            else if(this.ftype==this.ctype){
                this.clearance = true;
                this.permit = false;
                this.OptionRevAppInfo = true;
                this.OptionDateTime = false;
                this.OptionAppInfo = false;
                this.start = false;

                this.dat1= true;
                this.ai1= true;
                this.rai1= false;
                this.dat2= false;
                this.ai2= false;
                this.rai2= true;        
            }
            else{
                this.$toast.info("Click Continue before proceeding");
            }
        },
        PermitInfo(){
            var cost = 70;
            if(this.ipcedula == 'Yes'){
                cost = cost + 60;
            }
                this.totalcost = cost;
                //alert(this.totalcost);
                this.yearadded = this.month.year + 1;
                //alert(this.month.year+'  '+this.yearadded);
                    if( this.month.month==0){ 
                        this.ipeffectivity = "January to December, " + this.month.year;
                    } else if( this.month.month==1){
                        this.ipeffectivity = "Febuary to January, " + this.yearadded;
                    } else if( this.month.month==2){
                        this.ipeffectivity = "March to Febuary, " + this.yearadded;
                    } else if( this.month.month==3){
                        this.ipeffectivity = "April to March, " + this.yearadded;
                    } else if( this.month.month==4){
                        this.ipeffectivity = "May to April, " + this.yearadded;
                    } else if( this.month.month==5){
                        this.ipeffectivity = "June to May, " + this.yearadded;
                    } else if( this.month.month==6){
                        this.ipeffectivity = "July to June, " + this.yearadded;
                    } else if( this.month.month==7){
                        this.ipeffectivity = "August to July, " + this.yearadded;
                    } else if( this.month.month==8){
                        this.ipeffectivity = "September to August, " + this.yearadded;
                    } else  if( this.month.month==9){
                        this.ipeffectivity = "October to September, " + this.yearadded;
                    } else  if( this.month.month==10){
                        this.ipeffectivity = "November to October, " + this.yearadded;
                    } else  if( this.month.month==11){
                        this.ipeffectivity = "December to November, " + this.month.year;
                    } 

            //
            if(
                this.ipbname == '' ||
                this.ipvenue == '' ||
                this.ipnature == '' ||
                this.ipcedula == '' ||
                this.ipeffectivity == '' ||
                this.ippurpose == ''
                ){
                    alert("Parameters cant be empty");  
                }
            else if(this.ftype==this.ctype){

                this.clearance = false;
                this.permit = true;
                this.OptionRevAppInfo = true;
                this.OptionDateTime = false;
                this.OptionAppInfo = false;
                this.start = false;

                this.dat1= true;
                this.ai1= true;
                this.rai1= false;
                this.dat2= false;
                this.ai2= false;
                this.rai2= true;        
            }
            else{
                alert("Click Continue before proceeding");
            }
        },
        AppInfo(){
            this.OptionDateTime = false;
            this.OptionAppInfo = true;
            this.OptionRevAppInfo = false;
            this.start = false;

            this.dat1= true;
            this.ai1= false;
            this.rai1= true;
            this.dat2= false;
            this.ai2= true;
            this.rai2= false;
        },
        savedate(){
            if(this.recentdate.getMonth()==this.calendar.getMonth() &&
                this.recentdate.getDate()==this.calendar.getDate() &&
                this.recentdate.getFullYear()==this.calendar.getFullYear()
                ){
                    this.$toast.warning("Select another Date");
                }   
                else{
                    if( this.calendar.getMonth()==0){ 
                       // alert("January " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "January " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else if( this.calendar.getMonth()==1){
                        //alert("Febuary" + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "Febuary" + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else if( this.calendar.getMonth()==2){
                        // alert("March " + this.calendar.getDate() + ", " +this.calendar.getFullYear() );
                        this.selectedDate = "March " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else if( this.calendar.getMonth()==3){
                        // alert("April " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "April " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else if( this.calendar.getMonth()==4){
                        // alert("May " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "May " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else if( this.calendar.getMonth()==5){
                        // alert("June " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "June " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else if( this.calendar.getMonth()==6){
                        // alert("July " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "July " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else if( this.calendar.getMonth()==7){
                        // alert("August " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "August " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else if( this.calendar.getMonth()==8){
                        // alert("September " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "September " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else  if( this.calendar.getMonth()==9){
                        // alert("October " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "October " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else  if( this.calendar.getMonth()==10){
                        // alert("November " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "November " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } else  if( this.calendar.getMonth()==11){
                        // alert("December " + this.calendar.getDate() + ", " +this.calendar.getFullYear());
                        this.selectedDate = "December " + this.calendar.getDate() + ", " +this.calendar.getFullYear();
                    } 
                    
                    this.previewdate = true;
                    if(this.time.hours >= 12){
                        this.ampm = ' PM';
                        this.selectedTime = this.time.hours-12 +":"+this.time.minutes+this.ampm;
                    } else { 
                        this.ampm = ' AM';
                        this.selectedTime = this.time.hours +":"+this.time.minutes+this.ampm;
                    }     
                    
                    if(this.time.hours<10){
                       this.quehr = "0"+this.time.hours;
                    } else {
                       this.quehr = ''+this.time.hours;
                    }
                    alert(this.quehr);  
                    if(this.time.minutes<10){
                       this.quemin = "0"+this.time.minutes;
                    } else {
                       this.quemin = ''+this.time.minutes;
                    }
                    alert(this.quemin);

                       
                    
                }
        },
        async addclearance(){
            const BCdate = this.selectedDate;
            const BCtime = this.selectedTime;  
            const BCfirst = this.first;
            const BCmiddle = this.middle;
            const BClast = this.last;
            const BCsuffix = this.suffix;
            const BCpurok = this.purok;
            const BCcitizenship = this.iccitizenship;
            const BCstatus = this.icstatus;
            const BCage = this.icage;
            const BCquantity = this.icquantity;
            const BCcedula = this.icedula;
            const BCpurpose = this.icpurpose;
            const BCtotalcost = this.totalcost;
            const BCreqstat = "Pending";
            const m = this.calendar.getMonth();
            const d = this.calendar.getDate();
            const y = this.calendar.getFullYear();  
            if(m<10){ this.mo = '0'+m; } else{this.mo = m;}
            if(d<10){ this.da = '0'+d; } else{this.da = d;}
            const stringque =''+y+this.mo+this.da+this.quehr+this.quemin; 
            const que = parseInt(stringque);
            

            const db = getFirestore(app);
            const currendID = this.userID;
            console.log("Creating Data");
            const addedDocs = await setDoc(doc(db, "Clearance Requests",currendID ),{currendID, BCdate, BCtime, BCfirst, BCmiddle, BClast, BCsuffix, BCpurok, BCcitizenship, BCstatus, BCage, BCquantity, BCcedula, BCtotalcost, BCpurpose,BCreqstat,m,d,y,que});
            this.$toast.success("Request Successful", {
                position: "top"
            });
            console.log(addedDocs);

            const userID = this.userID;
            this.$router.push(`/homepage/${userID}`);
        },
        async addpermit(){

            const BPdate = this.selectedDate;
            const BPtime = this.selectedTime;  
            const BPfirst = this.first;
            const BPmiddle = this.middle;
            const BPlast = this.last;
            const BPsuffix = this.suffix;
            const BPbname = this.ipbname;
            const BPvenue = this.ipvenue;
            const BPnature = this.ipnature;
            const BPeffectivity = this.ipeffectivity;
            const BPcedula = this.ipcedula;
            const BPpurpose = this.ippurpose;
            const BPtotalcost = this.totalcost;
            const BPreqstat = "Pending";
            const BPedate = this.month;
            const m = this.calendar.getMonth();
            const d = this.calendar.getDate();
            const y = this.calendar.getFullYear(); 
            if(m<10){ this.mo = '0'+m; } else{this.mo = m;}
            if(d<10){ this.da = '0'+d; } else{this.da = d;}
            const stringque =''+y+this.mo+this.da+this.quehr+this.quemin;  
            const que = parseInt(stringque);

            const db = getFirestore(app);
            const currendID = this.userID;
            console.log("Creating Data");
            const addedDocs = await setDoc(doc(db, "Permit Requests",currendID ),{currendID, BPdate, BPtime, BPfirst, BPmiddle, BPlast, BPsuffix, BPbname, BPvenue, BPnature, BPcedula, BPpurpose, BPtotalcost, BPreqstat, BPeffectivity, BPedate,m,d,y,que});
            this.$toast.success("Request Successful", {
                position: "top"
            });
            console.log(addedDocs);

            const userID = this.userID;
            this.$router.push(`/homepage/${userID}`);
        },
        closepreview(){
           this.previewdate = false;
        },

        gthome(){
            const userID = this.userID;
            this.$router.push(`/homepage/${userID}`);
        },
        gttrackcert(){
            const userID = this.userID;
            this.$router.push(`/trackcertpage/${userID}`);
        },
        gtreqcert(){
            const userID = this.userID;
            this.$router.push(`/requestcertpage/${userID}`);
        },
        logout(){
        
            const first = this.first; 
            const middle = this.middle;
            const last = this.last; 
            const suffix = this.suffix; 
            const purok = this.purok; 
            const phonenumber = this.phonenumber;
            const password = this.password;
            const logintoken = 'No';

            const db = getFirestore(app);
            const userID = this.userID;
            console.log("Creating Data");
            const addedDocs = setDoc(doc(db, "residents",userID ),{ userID, first, middle, last, suffix, purok, phonenumber,password,logintoken})
            this.$toast.success("Logged Out!", {position: "top"});
            console.log(addedDocs);
            this.$router.push('/loginpage');
    
        },
    }
}
</script>
