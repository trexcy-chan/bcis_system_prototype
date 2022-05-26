<template>
  <div main="trackcertpage">
        <div class="bg-white flex flex-col font-sans">
            <div class="w-screen shadow-lg"> 
                <div class="container mx-auto px-8">
                    <header class="flex flex-col sm:flex-row items-center justify-between relative">
                        <h1 class="font-bold text-center text-2xl text-amber-500">
                        BCI <span class="text-teal-500">SYSTEM</span>
                        </h1>
                        <nav class="hidden md:flex text-md">
                        <a @click="gthome" class="text-gray-800 hover:text-teal-400 py-3 px-6">Home</a>
                        <a @click="gttrackcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Appointment</a>
                        <a @click="gtreqcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Schedule an Appointment</a>
                        <a @click="logout" class="bg-amber-500 hover:bg-teal-300 rounded-full uppercase text-white py-3 px-6">Log out</a>
                        </nav>
                    </header>
                </div>
            </div>
            <div class="bg-gray-200 mt-3 h-screen">
                <div v-if="clearanceExist" class="flex justify-evenly mt-1 py-10 bg-gray-200">
                    <div v-if="currentClearance" class="relative w-1/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500">
                        <div class="absolute right-3 top-3 ">
                            <text @click="editc(creqstat)" class="text-4xl material-icons text-amber-500 cursor-pointer mr-2 hover:text-amber-300">edit</text>                        
                            <text @click="Cdelete(creqstat)" class="text-4xl material-icons text-amber-500 cursor-pointer hover:text-amber-300">cancel</text>
                            
                        </div>
                        <div class="flex relative">
                            <h1 class="text-xl font-semibold text-left">Barangay Clearance</h1>
                        </div>
                        <hr class="mb-1 border-t border-teal-400 w-3/4" />
                        <div class="flex">
                            <p class="font-semibold text-justify text- mt-4 text-cyan-600">Name: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{cname}}</text>
                        </div>
                        <div class="flex">
                            <p class="font-semibold text-justify text-md mt-4 text-cyan-600">Appointment Date: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{cdate+" at "+ctime}}</text>
                        </div>
                        <div class="flex">
                            <p class="font-semibold text-justify text-md mt-4 text-cyan-600">Total Cost: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{ctotalcost}}</text>
                        </div>
                        <div class="flex">
                            <p class="font-semibold text-justify text-md mt-4 text-cyan-600">Satus: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{cstatus}}</text>
                        </div>
                        <div v-if="cdissapproved" class="flex">
                            <p class="font-semibold text-justify text-md mt-4 text-cyan-600">Reason: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{creason}}</text>
                        </div>
                    </div>  
                    <div v-if="editClearance" class="relative w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500">
                        <h1 class="text-xl font-semibold text-left">Barangay Clearance</h1> 
                        <div class="absolute right-3 top-3 ">                       
                            <text @click="canceleditc" class="text-4xl material-icons text-amber-500 cursor-pointer hover:text-amber-300">cancel</text>
                        </div>
                            <div class="flex mt-5 text-left">
        
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</label>
                                        <input v-model="newcfirst" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name"/>
                                    </div>
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</label>
                                        <input v-model="newcmiddle" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name"/>
                                    </div>
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
                                        <input v-model="newclast" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name"/>
                                    </div>
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</label>
                                        <input v-model="newcsuffix" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix"/>
                                    </div>
                            </div>
                            <div class="flex mt-5 text-left">
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purok</label> 
                                        <select v-model="newcpurok" 
                                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                            <option value= "purok1">Purok 1</option>
                                            <option value= "purok2">Purok 2</option>
                                            <option value= "purok3">Purok 3</option>
                                        </select>
                                    </div>
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Citizenship</label>
                                        <input v-model="newccitizenship" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Citizenship" />
                                    </div>
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Status</label>
                                        <select v-model="newcstatus" 
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
                                        <input v-model="newcage" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Age" />
                                    </div>
                            </div>
                            <div class="flex mt-5 text-left">
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Quantity</label>
                                        <select v-model="newcquantity" 
                                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                            <option value= "1">1</option>
                                            <option value= "2">2</option>
                                        </select>
                                    </div>
                                    <div class="grid grid-cols-1 px-3 w-1/4">
                                        <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Include Cedula</label>
                                        <select v-model="newccedula" 
                                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                            <option value= "Yes">Yes</option>
                                            <option value= "No">No</option>                                            
                                        </select>
                                    </div>
                                    <div class="grid grid-cols-1 px-3 w-1/2">
                                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purpose</label>
                                        <input v-model="newcpurpose" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Purpose" />
                                    </div>
                            </div>
                            <div class="flex justify-evenly">
                                    <div class="mt-5">
                                        <div @click="SaveClearanceInfo" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Save</div> 
                                    </div>
                            </div>
                    </div>  
                    <div v-if="deleteclearance" class="relative w-1/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500">
                        
                        <div class="flex relative">
                            <h1 class="text-xl font-semibold text-left">Delete Barangay Clearance?</h1>
                        </div>
                        <hr class="mb-1 border-t border-teal-400 w-3/4" />
                        <div class="justify-evenly right-10 mt-10 flex">
                            <div @click="confirmdelete" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Delete</div> 
                            <div @click="canceldelete" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Cancel</div> 
                        </div>
                    </div>
                </div> 
                <div v-if="permitExist" class="flex justify-evenly mt-1 py-10 bg-gray-200">
                    <div v-if="currentPermit" class="relative w-1/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500">
                        <div class="absolute right-3 top-3 ">
                            <text @click="editp(pstatus)" class="text-4xl material-icons text-amber-500 cursor-pointer mr-2 hover:text-amber-300">edit</text>                        
                            <text @click="Pdelete(pstatus)" class="text-4xl material-icons text-amber-500 cursor-pointer hover:text-amber-300">cancel</text>
                            
                        </div>
                        <div class="flex relative">
                            <h1 class="text-xl font-semibold text-left">Barangay Permit</h1>
                        </div>
                        <hr class="mb-1 border-t border-teal-400 w-3/4" />
                        <div class="flex">
                            <p class="font-semibold text-justify text- mt-4 text-cyan-600">Name: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{pname}}</text>
                        </div>
                        <div class="flex">
                            <p class="font-semibold text-justify text-md mt-4 text-cyan-600">Appointment Date: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{pdate+" at "+ptime}}</text>
                        </div>
                        <div class="flex">
                            <p class="font-semibold text-justify text-md mt-4 text-cyan-600">Total Cost: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{ptotalcost}}</text>
                        </div>
                        <div class="flex">
                            <p class="font-semibold text-justify text-md mt-4 text-cyan-600">Satus: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{pstatus}}</text>
                        </div>
                        <div v-if="pdissapproved" class="flex">
                            <p class="font-semibold text-justify text-md mt-4 text-cyan-600">Reason: </p>
                            <text class=" ml-3 font-semibold text-justify text-md mt-4 text-gray-800">{{preason}}</text>
                        </div>
                    </div>  
                    <div v-if="editPermit" class="relative w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500">
                    <h1 class="text-xl font-semibold text-left">Barangay Permit</h1> 
                        <div class="absolute right-3 top-3 ">                       
                            <text @click="canceleditp" class="text-4xl material-icons text-amber-500 cursor-pointer hover:text-amber-300">cancel</text>
                        </div>
                                
                        <div class="flex mt-5 text-left">
        
                            <div class="grid grid-cols-1 px-3 w-1/4">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</label>
                                <input v-model="newpfirst" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name"/>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</label>
                                <input v-model="newpmiddle" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name"/>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
                                <input v-model="newplast" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name"/>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</label>
                                <input v-model="newpsuffix" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix"/>
                            </div>
                        </div>
                        <div class="flex mt-5 text-left">
                            <div class="grid grid-cols-1 px-3 w-2/5">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Business Name</label>
                                <input v-model="newpbname" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  placeholder="Name of Business"/>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/5">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Venue</label>
                                <select v-model="newpvenue" 
                                class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    <option value= "purok1">purok1</option>
                                    <option value= "purok2">purok2</option>
                                    <option value= "purok3">purok3</option>
                                </select>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-2/5">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Business Nature</label>
                                <input v-model="newpnature" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text"  placeholder="Nature of Business"/>
                            </div>
                        </div>
                        <div class="flex mt-5 mb-5 text-left">
                            <div class="grid grid-cols-1 px-3 w-1/4">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Effectivity</label>
                                <Datepicker v-model="month" monthPicker :minDate="new Date().toISOString().substr(0, 10)"  />
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Include Cedula</label>
                                <select v-model="newpcedula" 
                                class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    <option value= "Yes">Yes</option>
                                    <option value= "No">No</option>
                                </select>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/2">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purpose</label>
                                <input v-model="newppurpose" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Purpose" />
                            </div>   
                        </div>
                        <div class="flex justify-evenly">
                            <div class="mt-5">
                                <div @click="SavePermitInfo" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Save</div> 
                            </div>
                        </div>
                    </div>  
                    <div v-if="deletepermit" class="relative w-1/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500">
                        
                        <div class="flex relative">
                            <h1 class="text-xl font-semibold text-left">Delete Barangay Permit?</h1>
                        </div>
                        <hr class="mb-1 border-t border-teal-400 w-3/4" />
                        <div class="justify-evenly right-10 mt-10 flex">
                            <div @click="confirmdeletep" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Delete</div> 
                            <div @click="canceldeletep" class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2">Cancel</div> 
                        </div>
                    </div>
                </div> 
                <div v-if="empty" class="flex justify-evenly mt-1 py-10 h-screen object-center">
                    <div class=" w-1/2 px-10 py-10 object-center">
                        <text class=" text-4xl text-amber-500 cursor-pointer mr-2 hover:text-amber-300">You have no pending transactions at the moment</text>
                    </div>    
                </div> 
            </div>
        </div>
  </div>
</template>

<script>

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { app } from "../firebase";
import { ref } from 'vue';
import { clearanceColRef,permitColRef } from "../firebase";
import { getFirestore, getDoc, doc, setDoc,deleteDoc} from "firebase/firestore";

export default {
    components: { Datepicker },
    setup(){
        const month  = ref({
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        });
        return{
            month
        }
    },
    data(){        
        return {
        
        ReqType:'',emonth:'',eyear:'',

        cname:'', cstatus:'', ctime:'', cdate:'',ctotalcost:'',
        newcfirst:'', newcmiddle:'', newclast:'', newcsuffix:'', newcpurok:'', newccitizenship:'',newcstatus:'',newcage:'',newcquantity:'',newccedula:'', newcpurpose:'',

        clearanceExist:false, currentClearance:false, editClearance:true, deleteclearance:false,
        permitExist:false, currentPermit:false, editPermit:true, deletePermit:false,
        empty:true, cdissapproved:false, pdissapproved:false, 
        };
    },
     mounted(){
        this.userID = this.$route.params.id;
        this.loadrequests();
     },
    methods:{
        async loadrequests(){ 
            



           const db = getFirestore(app)
           const userid = this.userID;  

            //Load Resident Details
            const residentRef = doc(db, "residents", userid);
            const residentSnap = await getDoc(residentRef);
            if (residentSnap.exists()) {
                console.log("Document data:", residentSnap.data());
                if(residentSnap.data().logintoken=='Yes'){
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
            } else {
                console.log("No such document!"); 
            }


           const clearanceRef = doc(db, "Clearance Requests",userid);
           const clearanceSnap = await getDoc(clearanceRef); 
           const permitRef = doc(db, "Permit Requests",userid);
           const permitSnap = await getDoc(permitRef); 

           if(clearanceSnap.exists() || permitSnap.exists()){
               if(clearanceSnap.exists()){
                console.log("Document data:", clearanceSnap.data());
                this.clearanceExist=true;
                this.currentClearance=true;
                this.editClearance=false;
                this.empty=false;
                this.cname = clearanceSnap.data().BCfirst + " " +clearanceSnap.data().BCmiddle+ " " +clearanceSnap.data().BClast;
                this.cstatus = clearanceSnap.data().BCreqstat;
                this.cdate = clearanceSnap.data().BCdate;
                this.ctime = clearanceSnap.data().BCtime;
                this.creqstat = clearanceSnap.data().BCreqstat;
                this.ctotalcost = clearanceSnap.data().BCtotalcost;

                this.m = clearanceSnap.data().m;
                this.d = clearanceSnap.data().d;
                this.y = clearanceSnap.data().y;
                this.cque = clearanceSnap.data().que;

                if(this.creqstat=='Disapproved'){
                    this.cdissapproved = true;
                    this.creason = clearanceSnap.data().BCreason;
                } else{
                    this.cdissapproved = false;
                }

                this.newcfirst = clearanceSnap.data().BCfirst;
                this.newcmiddle = clearanceSnap.data().BCmiddle;
                this.newclast = clearanceSnap.data().BClast;
                this.newcsuffix = clearanceSnap.data().BCsuffix;
                this.newcpurok = clearanceSnap.data().BCpurok;
                this.newccitizenship = clearanceSnap.data().BCcitizenship;
                this.newcstatus = clearanceSnap.data().BCstatus;
                this.newcage = clearanceSnap.data().BCage
                this.newcquantity = clearanceSnap.data().BCquantity;
                this.newccedula = clearanceSnap.data().BCcedula;
                this.newcpurpose = clearanceSnap.data().BCpurpose;
               }
               if(permitSnap.exists()){
                console.log("Document data:", permitSnap.data());
                this.permitExist=true;
                this.currentPermit=true;
                this.editPermit=false;
                this.empty=false;
                this.pname = permitSnap.data().BPfirst+ " " +permitSnap.data().BPmiddle + " " +permitSnap.data().BPlast;
                this.pstatus = permitSnap.data().BPreqstat;
                this.pdate = permitSnap.data().BPdate;
                this.ptime = permitSnap.data().BPtime;
                this.ptotalcost = permitSnap.data().BPtotalcost;

                this.m = permitSnap.data().m;
                this.d = permitSnap.data().d;
                this.y = permitSnap.data().y;
                this.pque = permitSnap.data().que;

                if(this.pstatus=='Disapproved'){
                    this.pdissapproved = true;
                    this.preason = permitSnap.data().BPreason;
                } else {
                    this.pdissapproved = false;
                }

                this.month = permitSnap.data().BPedate;
                this.newpfirst = permitSnap.data().BPfirst;
                this.newpmiddle = permitSnap.data().BPmiddle;
                this.newplast = permitSnap.data().BPlast;
                this.newpsuffix = permitSnap.data().BPsuffix;
                this.newpbname = permitSnap.data().BPbname;
                this.newpvenue = permitSnap.data().BPvenue;
                this.newpnature = permitSnap.data().BPnature;
                this.newpcedula = permitSnap.data().BPcedula;
                this.newppurpose = permitSnap.data().BPpurpose;
                

               }

           } else{
                console.log("No such document!"); 
                this.empty=true;
           }
       },

        //Barangay Clearance

        Cdelete(status){
            if(status == 'Pending' || status == 'Disapproved'){
           this.deleteclearance = true;
           this.currentClearance = false;
           } else {
                this.$toast.warning("Can only delete Pending or Disapproved Requests", {
                    position: "top"
                });
           }
        },
        editc(status){
            if(status == 'Pending'){
            this.clearanceExist=true;
            this.currentClearance=false;
            this.editClearance=true;
            } else {
                this.$toast.warning("Can only Edit Pending Requests", {
                    position: "top"
                });
            }
        },
        async SaveClearanceInfo(){
            
            var cost = 0;
            if(this.newccedula == 'Yes'){
                cost = cost + 60;
            }
                
            const BCtotalcost = cost + 70*this.newcquantity;
            const BCdate = this.cdate;
            const BCtime = this.ctime;   
            const BCfirst = this.newcfirst;
            const BCmiddle = this.newcmiddle;
            const BClast = this.newclast;
            const BCsuffix = this.newcsuffix;
            const BCpurok = this.newcpurok;
            const BCcitizenship = this.newccitizenship;
            const BCstatus = this.newcstatus;
            const BCage = this.newcage;
            const BCquantity = this.newcquantity;
            const BCcedula = this.newccedula;
            const BCpurpose = this.newcpurpose;
            const BCreqstat = "Pending";

            const m = this.m;
            const d = this.d;
            const y = this.y;
            const que = this.cque;

            const db = getFirestore(app);
            const currendID = this.userID;
            console.log("Creating Data");
            const addedDocs = await setDoc(doc(db, "Clearance Requests",currendID ),{currendID, BCdate, BCtime, BCfirst, BCmiddle, BClast, BCsuffix, BCpurok, BCcitizenship, BCstatus, BCage, BCquantity, BCcedula, BCtotalcost,BCpurpose,BCreqstat,m,d,y,que});
            alert("Changes Saved");
            console.log(addedDocs)
            this.loadrequests();
            
        },
        canceleditc(){
            this.clearanceExist=true;
            this.currentClearance=true;
            this.editClearance=false;
        },
        canceldelete(){
            this.deleteclearance = false;
            this.loadrequests();
        },
        async confirmdelete(){
            let cleRef = doc(clearanceColRef,this.userID);
            await deleteDoc(cleRef);
            alert("deleted");
            this.deleteclearance = false;
            console.log("deleted");
            this.loadrequests();

        },

        // Barangay Permit
        Pdelete(status){
            
            if(status == 'Pending' || status == 'Disapproved'){
                this.deletepermit = true;
                this.currentPermit = false;
           } else {
                this.$toast.warning("Can only delete Pending or Disapproved Requests", {
                    position: "top"
                });
           }
        },
        editp(status){
            if(status == 'Pending'){
            this.permitExist=true;
            this.currentPermit=false;
            this.editPermit=true;
            } else{
                this.$toast.warning("Can only edit Pending Requests", {
                    position: "top"
                });
            }
        },
        async SavePermitInfo(){
            
            var cost = 70;
            if(this.newpcedula == 'Yes'){
                cost = cost + 60;
            }
            
                    if( this.month.month==0){ 
                        alert("January, " + this.month.year);
                        this.newpeffectivity = "January, " + this.month.year;
                    } else if( this.month.month==1){
                        alert("Febuary, " + this.month.year);
                        this.newpeffectivity = "Febuary, " + this.month.year;
                    } else if( this.month.month==2){
                        alert("March, " + this.month.year);
                        this.newpeffectivity = "March, " + this.month.year;
                    } else if( this.month.month==3){
                        alert("April, " + this.month.year);
                        this.newpeffectivity = "April, " + this.month.year;
                    } else if( this.month.month==4){
                        alert("May, " + this.month.year);
                        this.newpeffectivity = "May, " + this.month.year;
                    } else if( this.month.month==5){
                        alert("June, " + this.month.year);
                        this.newpeffectivity = "June, " + this.month.year;
                    } else if( this.month.month==6){
                        alert("July, " + this.month.year);
                        this.newpeffectivity = "July, " + this.month.year;
                    } else if( this.month.month==7){
                        alert("August, " + this.month.year);
                        this.newpeffectivity = "August, " + this.month.year;
                    } else if( this.month.month==8){
                        alert("September, " + this.month.year);
                        this.newpeffectivity = "September, " + this.month.year;
                    } else  if( this.month.month==9){
                        alert("October, " + this.month.year);
                        this.newpeffectivity = "October, " + this.month.year;
                    } else  if( this.month.month==10){
                        alert("November, " + this.month.year);
                        this.newpeffectivity = "November, " + this.month.year;
                    } else  if( this.month.month==11){
                        alert("December, " + this.month.year);
                        this.newpeffectivity = "December, " + this.month.year;
                    }
                
            const BPdate = this.pdate;
            const BPtime = this.ptime;  
            const BPfirst = this.newpfirst;
            const BPmiddle = this.newpmiddle;
            const BPlast = this.newplast;
            const BPsuffix = this.newpsuffix;
            const BPbname = this.newpbname;
            const BPvenue = this.newpvenue;
            const BPnature = this.newpnature;
            const BPeffectivity = this.newpeffectivity;
            const BPcedula = this.newpcedula;
            const BPpurpose = this.newppurpose;
            const BPtotalcost = cost;
            const BPreqstat = "Pending";
            const BPedate = this.month;

            const m = this.m;
            const d = this.d;   
            const y = this.y;
            const que = this.pque;

            const db = getFirestore(app);
            const currendID = this.userID;
            console.log("Creating Data");
            const addedDocs = await setDoc(doc(db, "Permit Requests",currendID ),{currendID, BPdate, BPtime, BPfirst, BPmiddle, BPlast, BPsuffix, BPbname, BPvenue, BPnature, BPcedula, BPpurpose, BPtotalcost, BPreqstat, BPeffectivity, BPedate,m,d,y,que});
            alert("Document Added Successfully");
            console.log(addedDocs);
            this.loadrequests();
            
        },
        canceleditp(){
            this.permitExist=true;
            this.currentPermit=true;
            this.editPermit=false;
        },
        canceldeletep(){
            this.deletepermit = false;
            this.loadrequests();
        },
        async confirmdeletep(){
            let perRef = doc(permitColRef,this.userID);
            await deleteDoc(perRef);
            alert("deleted");
            this.deletepermit = false;
            console.log("deleted");
            this.loadrequests(); 
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
