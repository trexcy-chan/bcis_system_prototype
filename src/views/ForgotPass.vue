<template>
		<!-- Container -->
		<div class="h-screen content mx-auto bg-gray-200">
			<div class="flex justify-center px-10">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style="background-image: url('./assets/icon/forgot.png')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div class="px-8 mb-4 text-center">
							<h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
							<p class="mb-4 text-sm text-gray-700">
								We get it, stuff happens. Just enter your email address below and we'll send you a
								link to reset your password!
							</p>
						</div>
						<form v-if="phase1" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700">
									Phone Number
								</label>
								<input v-model="phonenumber"
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="number"
									placeholder="Enter Phone Number..."/>
							</div>   
                            <div class="flex justify-evenly mb-5">
                                <div id="recaptcha-container" class="w-full">
                                </div>
                            </div>
							<div class="mb-6 text-center">
								<button @click="gtphase2"
									class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Reset Password
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"> Create an Account!</a>
							</div>
							<div class="text-center">
								<a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
									Already have an account? Login!
								</a>
							</div>
						</form>
						<form v-if="phase2" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700">
									Enter OTP Code
								</label>
								<input v-model="otpcode"
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="number"
									placeholder="Enter OTP Code..."/>
							</div>
							<div class="mb-6 text-center">
								<button  @click="gtphase3"
									class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Submit
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"> Create an Account!</a>
							</div>
							<div class="text-center">
								<a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
									Already have an account? Login!
								</a>
							</div>
						</form>
						<form v-if="phase3" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700">
									Enter New Password
								</label>
								<input v-model="newpassword"
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="password" 
									placeholder="Enter new Password..."/>
							</div>
                            <div class="mb-4">
								<input  v-model="newpassword2"
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="password"
									placeholder="Confirm New Password..."/>
							</div>
							<div class="mb-6 text-center">
								<button @click="confirm"
									class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Confirm
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"> Create an Account!</a>
							</div>
							<div class="text-center">
								<a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
									Already have an account? Login!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>


</template>

<script>
import { auth,app } from "../firebase";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier,} from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
export default {
    data(){
        return{
            phonenumber:'',
            otpcode:'',
            userID:'',
            newpassword:'',
            newpassword2:'',

            phase1:true,
            phase2:false,
            phase3:false,
        }
    },
    methods:{
        gtphase1(){
                this.phase1 = true;
                this.phase2 = false;
                this.phase3 = false;
        },
        gtphase2(){
            if(this.phonenumber == ''){
                alert('Invalid Number');
            } else{
                this.submit();
            }
        },
        gtphase3(){
            this.verifyOtp();
        },
        async confirm(){
            if(this.newpassword == ''){
                alert('Please enter new password');
            } else if(this.newpassword2 == ''){
                alert('Please confirm new password');
            } else if(this.newpassword2 != this.newpassword){
                alert('Pasword do not match');
            } else{
                const db = getFirestore(app)
                const userid = this.userID;  
                const residentRef = doc(db, "residents",userid);
                const residentSnap = await getDoc(residentRef);  

                if(residentSnap.exists()){
                    console.log("Document data:", residentSnap.data());
                        
                    const first = residentSnap.data().first;
                    const middle = residentSnap.data().middle;
                    const last = residentSnap.data().last;
                    const purok = residentSnap.data().purok;
                    const suffix = residentSnap.data().suffix;
                    const phonenumber = residentSnap.data().phonenumber;
                    const password =  window.btoa(this.newpassword);//encrypt
                    const logintoken = 'No';

                    const db = getFirestore(app);
                    const userID = this.userID;
                    console.log("Saving Data");
                    const addedDocs = await setDoc(doc(db, "residents",userID ),{ userID, phonenumber, first, middle, last, suffix, purok, password,logintoken })
                    console.log(addedDocs);
                    this.$toast.success ("Changes Saved");
                    this.gtlogin();

                } else{
                    console.log("No such document!");
                }

            }
        },

        
        gtlogin(){
        this.$router.push("/loginpage");
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
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult);  

                this.phase1 = false;
                this.phase2 = true;
                this.phase3 = false;


            })
            .catch((error) => {
                console.log(error);
                alert("Error ! SMS not sent");
                this.gtphase1();
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
            this.userID = auth.currentUser.uid;
            this.phase1 = false;
            this.phase2 = false;
            this.phase3 = true;
            // alert(auth.currentUser.uid);
            })
            .catch((error) => {
            console.log(error);
            alert('Invalid OTP');
            
            this.otpcode='';
            this.phonenumber='';
            this.gtphase1();
            });
        },
    }
}
</script>

<style>

</style>