<template>
<main class="editprofile">
    <content :fullscreen="true">
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
        
            <div class="w-full px-20">
                <div class="px-10 py-5 w-full mt-10 rounded-lg border-2 border-gray-500 ">
                    <form v-if="viewing" class="relative">
                        <label class="block mb-1 text-xl text-amber-500 font-semibold">Resident Information</label>
                        <hr class="border-b mb-2 border-teal-400" />
                        <div>
                            <div class="flex w-full text-center">
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">First Name: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{first}}</text>
                            </div>
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Middle Name: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{middle}}</text>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Last Name: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"> {{last}}</text>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4 text-left ">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Suffix: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{suffix}}</text>
                            </div>
                            </div> 
                            <div class="flex w-full mt-3">                               
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Purok: </label>
                                    <text class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{purok}}</text>
                                </div>                               
                                <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Phone Number: </label>
                                    <div class="flex">
                                        <text class="font-semibold text-justify text-lg rounded-xl bg-white px-2 py-2 mt-1">+63</text>
                                        <text class="w-1/2 font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">{{phonenumber}}</text>
                                    </div>
                                </div>                               
                                <div class="flex absolute right-3 bottom-3 bg-cyan-400 rounded-full border-2 border-cyan-400 text-white  hover:text-cyan-500 hover:bg-cyan-100">
                                    <text @click="edit" class="text-xl cursor-pointer mx-3">Edit
                                        <text class="text-xl material-icons cursor-pointer">edit</text> 
                                    </text>         
                                </div> 
                            </div> 
                        <hr class="border-b mt-10 border-teal-400" /> 
                        </div>              
                    </form>  
                    <form v-if="editing" class="relative">
                        <label class="block mb-1 text-xl text-amber-500 font-semibold">Update Resident Information</label>
                        <hr class="border-b mb-2 border-teal-400" />
                        <div>
                            <div class="flex w-full text-center">
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">First Name: </label>
                                    <input v-model="newfirst" class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"/>
                            </div>
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Middle Name: </label>
                                    <input v-model="newmiddle" class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"/>
                            </div>
                            <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Last Name: </label>
                                    <input v-model="newlast" class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"/>
                            </div>
                            </div> 
                            <div class="flex w-full mt-3">  
                                     
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Suffix: </label>
                                    <input v-model="newsuffix" class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"/>
                                </div>                              
                                <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                                    <label class="block mt-2 text-sm text-cyan-600 font-semibold">Purok: </label>
                                    <select v-model="newpurok"
                                    class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1">
                                        <option value= "purok1">purok 1</option>
                                        <option value= "purok2">purok 2</option>
                                        <option value= "purok3">purok 3</option>
                                    </select>
                                </div>       
                                <div class="flex absolute right-3 bottom-4 ">                   
                                    <div class="bg-cyan-400 rounded-full border-2 border-cyan-400 text-white  hover:text-cyan-500 hover:bg-cyan-100">
                                        <text @click="save" class="text-xl cursor-pointer mx-3">Save
                                            <text class="text-xl material-icons cursor-pointer">save</text> 
                                        </text>   
                                    </div>
                                    <div class="ml-2 bg-cyan-400 rounded-full border-2 border-cyan-400 text-white  hover:text-cyan-500 hover:bg-cyan-100">
                                        <text @click="cancel" class="text-xl cursor-pointer mx-3">Cancel
                                            <text class="text-xl material-icons cursor-pointer">cancel</text> 
                                        </text>   
                                    </div>      
                                </div> 
                            </div> 
                        </div>
                        <hr class="border-b mt-10 border-teal-400" />                    
                    </form>     
                </div> 
            
            </div>
        

   


      </div>
    </content>
</main>
</template>


<script>
import { app } from "../firebase";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
export default {
    data(){
        return{
            viewing: true,
            editing: false,
            newfirst: '',
            newmiddle: '',
            newlast: '',
            newsuffix: '',
            newpurok: '',
            phonenumber: '',
            password: '',
        }
    },
     mounted(){
        this.userID = this.$route.params.id;    
        this.loadresident();
     },
    methods:{
        async loadresident(){ 
           const db = getFirestore(app)
           const userid = this.userID;  
           const residentRef = doc(db, "residents",userid);
           const residentSnap = await getDoc(residentRef);  

           if(residentSnap.exists()){
               console.log("Document data:", residentSnap.data());
               if(residentSnap.data().logintoken=='Yes'){
                this.first = residentSnap.data().first;
                this.middle = residentSnap.data().middle;
                this.last = residentSnap.data().last;
                this.purok = residentSnap.data().purok;
                this.suffix = residentSnap.data().suffix;
                if(this.suffix == ''){
                    this.suffix ='n/a';
                }
                this.phonenumber = residentSnap.data().phonenumber;
                this.password =  residentSnap.data().password;

                this.newfirst = this.first;
                this.newmiddle = this.middle;
                this.newlast = this.last;
                this.newpurok = this.purok;
                this.newsuffix = this.suffix;
               }
                else {
                this.$router.push('/loginpage');
                }
           } else{
               console.log("No such document!");
           }

       },
        edit(){
            this.viewing = false;
            this.editing = true; 
        },
        async save(){
            const phonenumber =this.phonenumber; const first = this.newfirst; const middle = this.newmiddle;
            const last = this.newlast; const suffix = this.newsuffix; const purok = this.newpurok; const password = this.password;
            const logintoken = 'Yes';

            this.first =this.newfirst;
            this.middle = this.newmiddle;
            this.last = this.newlast ;
            this.purok = this.newpurok;
            this.suffix = this.newsuffix;

            const db = getFirestore(app);
            const userID = this.userID;
            console.log("Saving Data");
            const addedDocs = await setDoc(doc(db, "residents",userID ),{ userID, phonenumber, first, middle, last, suffix, purok, password,logintoken })
            console.log(addedDocs);
            this.$toast.success ("Changes Saved");
            this.viewing = true;
            this.editing = false;  
            this.loadresident();
        },
        cancel(){
            this.viewing = true;
            this.editing = false;            
        },
       gteditprofile(){
            const userID = this.userID;
            this.$router.push(`/editprofile/${userID}`);
       },
       gtreqcert(){
            const userID = this.userID;
            this.$router.push(`/requestcertpage/${userID}`);
       },
       gttrackcert(){
            const userID = this.userID;
            this.$router.push(`/trackcertpage/${userID}`);
       },
        gthome(){
            const userID = this.userID;
            this.$router.push(`/homepage/${userID}`);
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

<style>

</style>