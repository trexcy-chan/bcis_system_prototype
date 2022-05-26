<template>
<div  v-if="fillup" class="grid min-h-screen place-items-center">
    <div class="w-full p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
     <h1 class="text-xl font-semibold">Hello there 👋, <span class="font-normal">Please fill in your information to register</span></h1>
     <form class="">
        <div class="flex w-full">
            <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">First Name 
                    <span class="text-red-500">*</span></label>
                <input v-model="first" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
            </div>
            <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Middle Name 
                    <span class="text-red-500">*</span></label>
                <input v-model="middle" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name" />
            </div>
        </div>
        <div class="flex w-full">
            <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Last Name 
                    <span class="text-red-500">*</span></label>
                <input v-model="last" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
            </div>
            <div class="grid grid-cols-1 px-3 w-1/2 text-left">
                <label class="block mt-2 text-xs font-semibold text-gray-600 ml-2">SUFFIX (n/a if none)</label>
                <input v-model="suffix" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix" />
            </div>
        </div>
        <div class="grid grid-cols-1 px-3 w-1/2 text-left">
            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Purok 
                <span class="text-red-500">*</span></label>
            <select v-model="purok"
             class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option value= "purok1">Purok 1</option>
                <option value= "purok2">Purok 2</option>
                <option value= "purok3">Purok 3</option>
            </select>
        </div>
        <div class="grid grid-cols-1 px-3 w-3/5 text-left">
            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Email Address 
                <span class="text-red-500">*</span></label>
            <input v-model="email" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Email Address" />
        </div>
        
        <div class="grid grid-cols-1 px-3 w-3/5 text-left">
                    <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Phone Number 
                    <span class="text-red-500">*</span></label>
                <div class="flex">
                    <input v-model="phonenumber" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="Phone Number" />
                    <label class="ml-4 px-3 mt-2 mb-1 pt-1 rounded-lg bg-blue-500 hover:bg-blue-300 text-white text-center cursor-pointer " @click="close">Verify</label>
                </div>
        </div>
        
        <div class="grid grid-cols-1 px-3 w-3/5 text-left">
            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Password 
                <span class="text-red-500">*</span></label>
            <input v-model="password" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password" placeholder="Password" />
        </div>
        
        <div class="grid grid-cols-1 px-3 w-3/5 text-left">
            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2">Confirm Password 
                <span class="text-red-500">*</span></label>
            <input v-model="password2" class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password" placeholder="Confirm Password" />
        </div>
        <div class="w-full grid place-items-center">
         <p @click="encrypt" class="w-3/4 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Sign Up</p>         
         <p @click="gtlogin" class="flex justify-between inline-block mt-2 text-xs text-blue-500 cursor-pointer hover:text-gray-500">Already registered?</p>
        </div> 
        
     </form>
    </div>
</div>
<div  v-if="termscond" class="grid min-h-screen place-items-center">
    <div class="w-full p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
     <form @submit.prevent="agree">
     <h1 class="text-2xl font-semibold">Terms and Conditions</h1>

     <p class="font-normal text-justify ml-6">
            The application for a barangay certificate request may be forfeited if
             the information provided is incorrect or inaccurate. 
        </p>
        <br>
         <p class="font-normal text-justify ml-6">
            As such, by using the Barangay Certificate Issuance System for barangay certificate requests and 
            by using our services, you acknowledge and agree that the information you provide will be used and 
            disclosed by the BCIS Web App in accordance with any legal and regulatory standards and compliance
             with the <span class="font-semibold text-cyan-500">Data Privacy Act of 2012. </span>

        </p>
        <br>
        <p class="font-normal text-justify ml-6">
        Upon clicking the <span class="font-semibold text-red-500">“Accept”</span> button, users agree to 
        furnish, check, and verify the authenticity and correctness of the 
        information they provide on this system in connection with their application.</p>

        <div class="w-full flex justify-evenly">
         <input type="submit"  value="Accept" class="w-2/5 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"/>   
         <div @click="gtlogin" class="w-2/5 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1">Disagree</div>   
        </div>
        
     </form>
    </div>
</div>

<div v-if="verify_modal"
    class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
    style="background: rgba(0, 0, 0, 0.7)">
    
    <div
        class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
        >
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                      Verify Phone Number
                    </p>
                    <div @click="close"
                      class="modal-close cursor-pointer z-50"
                    >
                      <svg
                        class="fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <!--Body-->
                    <div class="flex justify-evenly">
                        <div class="w-3/4 mx-1">
                            <label class="text-sm text-gray-600">Phone Number</label>
                            <div class="flex">
                                <label class="px-2 w-2/3 py-2 border-2 border-gray-300 rounded-md text-sm"> {{phonenumber}} </label>
                            <button @click="submit" id="sendotp" class="w-1/3 px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"> Send OTP </button>
                            </div>
                        </div>
                    </div>     
                    <div class="flex justify-evenly mb-5">
                        <div id="recaptcha-container" class="w-full">
                        </div>
                    </div>
                    <div class="flex justify-evenly mb-5">
                    <div class="w-3/4 mx-1">
                            <label class="text-sm text-gray-600">Verification Code</label>
                            <div class="flex">
                                <input v-model="otpcode" type="number" class="px-2 w-2/3 border-2 border-gray-300 rounded-md text-sm"/>
                                <button @click="verifyOtp" class="w-1/3 px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"> Verify </button>
                            </div>
                        </div>
                    </div>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                      @click="close"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
</div>
</template>

<script>
import {createUserWithEmailAndPassword,} from "firebase/auth";
import { app } from "../firebase";
import { auth,  } from "../firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore"; 
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
export default {
    data(){
        return{
            first:'',
            middle:'',
            last:'',
            suffix:'',
            purok:'',
            email:'',
            password:'',
            password2:'',
            fillup: false,
            termscond: true,
            verify_modal: false,
            userID:'',
            verification:'',
        }
    },
    methods:{
        async signup() {
        try {
            await createUserWithEmailAndPassword(auth, this.email, this.password);
                       
            const email =this.email; const first = this.first; const middle = this.middle;
            const last = this.last; const suffix = this.suffix; const purok = this.purok; const phonenumber = this.phonenumber;
            const db = getFirestore(app);
            const userID = auth.currentUser.uid;
            console.log("Creating Data");
            const addedDocs = setDoc(doc(db, "residents",userID ),{ userID, email, first, middle, last, suffix, purok, phonenumber})
            this.$toast.success("Registered!", {position: "top"});
            console.log(addedDocs);
            this.$router.push(`/homepage/${auth.currentUser.uid}`);
        } catch (error) {
            switch (error.code) {
            case "auth/email-already-in-use":
                this.$toast.error("Email already in use", {
                    position: "top"
                });
                break;
            case "auth/operation-not-allowed":
                this.$toast.error("Operation not allowed", {
                    position: "top"
                });
                break;
            default:
                this.$toast.error("Something went wrong",{
                    position: "top"
                });
            }

        return;
      }            
        },
        register(){

            if(this.first==''){
                this.$toast.warning("Enter First Name", {
                    position: "top"
                });
            } else if(this.middle==''){
                this.$toast.warning("Enter Middle Name", {
                    position: "top"
                });
            }else if(this.last==''){
                this.$toast.warning("Enter Last Name", {
                    position: "top"
                });
            }else if(this.purok==''){
                this.$toast.warning("Choose Purok", {
                    position: "top"
                });
            }else if(this.email==''){
                this.$toast.warning("Enter Email Address", {
                    position: "top"
                });
            }else if(!this.validEmail(this.email)){
                this.$toast.error("Invalid Email Address", {
                    position: "top"
                });
            }else if(this.password.length < 7){
                this.$toast.warning("Please use at least 7 characters", {
                    position: "top"
                });
            }else if(this.password==''){
                this.$toast.warning("Enter Password", {
                    position: "top"
                });
            }else if(this.password2==''){
                this.$toast.warning("Confirm password", {
                    position: "top"
                });
            }else if(this.password!=this.password2){
                this.$toast.warning("Passwords do not Match", {
                    position: "top"
                });
            }else if(this.verification!='true'){
                this.$toast.warning("Phone Number not Verified", {
                    position: "top"
                });
            }
            else{
                this.signup();
            }
            
        },
        agree(){
            this.fillup = true;
            this.termscond = false;
        },
        gtlogin(){
        this.$router.push("/loginpage");
        },
        validEmail(email){
           const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(email)
       },
        close(){
            if(this.verify_modal == false){
            this.verify_modal = true;
            } else if (this.verify_modal == true){
            this.verify_modal = false;
            }
            this.verification = '';
        },
        async submit() {
            let phoneNumber = '+63'+this.phonenumber;
            console.log(phoneNumber);
            const auth = getAuth(app);
            window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "normal",
                callback: () => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
                },
            },
            auth
            );

            const appVerifier = window.recaptchaVerifier;
            console.log(appVerifier);

            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                console.log(confirmationResult);
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult);  
                //  const value = prompt("message")
                //  console.log(value)
                // alert("type the code below");
                // this.$data.otp = value;
                
                // ...
            })
            .catch((error) => {
                // Error; SMS not sent
                console.log(error);
                alert("Error ! SMS not sent");
            this.verification = '';
            this.otpcode='';
            this.phonenumber='';
            this.close();

                // ...
            });
        },
        verifyOtp() {
            const code = this.otpcode;
            window.confirmationResult
            .confirm(code)
            .then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user);
            alert('Verified!');
            
            this.verification = 'true';
            this.verify_modal = false;
            alert(auth.currentUser.uid);
            })
            .catch((error) => {
            console.log(error);
            alert('Invalid OTP');
            
            alert(auth.currentUser.uid);
            this.verification = '';
            this.otpcode='';
            this.phonenumber='';
            this.close();

            });
        },
        encrypt(){
            const string = this.password;
            const encodedString=window.btoa(string);
            alert(encodedString);
            const decodedString =window.atob(encodedString);
            alert(decodedString);
        }
    }

}
</script>
