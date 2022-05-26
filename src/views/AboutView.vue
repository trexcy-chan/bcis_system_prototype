<template>
   <div class="bg-white flex flex-col font-sans">

        <div class="w-screen shadow-md"> 
            <div class="container mx-auto px-8">
                <header class="flex flex-col sm:flex-row items-center justify-between relative">
                    <h1 class="font-bold text-center text-2xl text-amber-500">BCI
                <span class="text-teal-500">SYSTEM</span></h1>
                    <nav class="hidden md:flex text-md"> 
                        <a @click="gthome" class="text-gray-800 hover:text-teal-400 py-3 px-6">Home</a>
                        <a @click="gttrackcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Appointment</a>
                        <a @click="gtreqcert" class="text-gray-800 hover:text-teal-400 py-3 px-6">Schedule an Appointment</a>
                        <a @click="logout" class=" right-1 bg-amber-500 hover:bg-teal-300 rounded-full uppercase text-white py-3 px-6">Log out</a>
                    </nav>
                </header>     
            </div>
        </div> 

    <div class="text-left ml-11 ">
      <h1 class="text-teal-500 text-4xl font-extrabold mt-12">ABOUT</h1>
      <p class="mt-4 ">Panaliwad-on is a barangay municipality of Salvador, in the province of Lanao del Norte. 
        <br>
        Its population as determined by the 2020 Cencus was 1, 148. This represented 3.57% of the total
        population of Salvador.
      </p>
    </div>

    <div class="text-left ml-11 ">
      <h1 class="text-teal-500 text-4xl font-extrabold mt-12">VISION</h1>
      <p class="mt-4 ">We envision Barangay Panaliwad-on to be a community of law-abiding, diligent, and healthy
        individual;
        <br>
        A citizenry that is morally and socially innovative; pleasant, drug-free, tidy, ecologically conscious, and always ready to help.
      </p>
    </div>

     <div class="text-left ml-11 ">
      <h1 class="text-teal-500 text-4xl font-extrabold mt-12">MISSION</h1>
      <p class="mt-4 ">To ensure that all persons have equitable access to the government's services, to assist community members 
        with any difficulties
        <br>
        or grievances they may have, and to assure each individual's continuous productivity so that he/she can contribute to the common good.
      </p>
    </div>

   </div>
</template>

<script>
import { app } from "../firebase";
import { getFirestore, getDoc, doc ,setDoc} from "firebase/firestore";
export default{
  async mounted() {
      this.userID = this.$route.params.id;
    
      const db = getFirestore(app);
      const userid = this.userID;
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
  },
  methods: {
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
