    <template>
    <main class="loginpage">
            <div class=" h-screen content mx-auto bg-gray-200">
            <div class="flex justify-center py-10">
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div class="bg-orange-300 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-auto bg-no-repeat bg-center"
                    style="background-image: url(./assets/icon/image.png)">
                </div>

                    <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                     <h1 class="font-bold text-center text-4xl text-amber-500">BC<span class="text-cyan-500">IS</span></h1>
                    <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>  
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded"  @submit.prevent="login">
                        <div class="mb-4 text-left">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Phone Number</label>
                        <input v-model="phonenumber" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shsadow appearance-none focus:outline-none focus:shadow-outline" 
                        type="number" placeholder="Phone Number" required/>
                        </div>

                        <div class="mb-4 text-left">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Password</label>
                        <input v-model="password" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="password" placeholder="Password" required/>
                        </div>

                        <div class="mb-2 text-center">
                        <input type="submit" value="Login" class="text-white py-2 w-full bg-orange-500 hover:bg-orange-400 rounded-lg"/>
                        </div>

                        <hr class="mb-6 border-t"/>

                        
                        <div class="text-center">
                        <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" @click="signup">	Create an Account	</a>
                        </div>
                        <div class="text-center">
                        <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" @click="forgot" >Forgot Password?</a>
                        </div>

                    </form> 
                    </div>
                </div>  
            </div>
            </div>
    </main>
</template>

<script>
import { residentsColRef,app } from "../firebase";
import { getFirestore,getDocs, getDoc, doc, setDoc } from "firebase/firestore";
export default {
    data(){
        return{
            phonenumber: '',
            password: '',
            result: 'no-match',
            issue:'none'
        }
    },
    methods:{
        async login() {
            
            let residentSnapshot = await getDocs(residentsColRef);
            residentSnapshot.forEach((resident) =>{
                let residentData = resident.data();
                residentData.id = resident.id;
                const password=window.btoa(this.password);//encrypt
                if(residentData.phonenumber == this.phonenumber){
                        this.result = 'match';
                    if(residentData.password == password){
                        this.checklogintoken(residentData.userID);
                    } else {
                        this.issue = 'wrongpassword';
                    }
                }
                  
            });


            if(this.result == 'match' && this.issue == 'wrongpassword'){
                    this.$toast.success("Wrong Password", {position: "top"});
                     this.result = 'no-match';
                     this.issue = 'none';
            }
            else if (this.result == 'no-match'){
                    this.$toast.success("User not found", {position: "top"});   
            }

            
            

        },
        async checklogintoken(userID) {
        const db = getFirestore(app);
        const userid = userID;
        const residentRef = doc(db, "residents", userid);
        const residentSnap = await getDoc(residentRef);

        if (residentSnap.exists()) {
            console.log("Document data:", residentSnap.data());
            if(residentSnap.data().logintoken=='Yes'){
                this.result = 'no-match';
                this.$toast.success("User already Logged In", {position: "top"});  
                //alert('User already Logged In');
            }
            else if(residentSnap.data().logintoken=='No'){

                const first = residentSnap.data().first; 
                const middle = residentSnap.data().middle;
                const last = residentSnap.data().last; 
                const suffix = residentSnap.data().suffix; 
                const purok = residentSnap.data().purok; 
                const phonenumber = residentSnap.data().phonenumber;
                const password = residentSnap.data().password;
                const logintoken = 'Yes'
                const db = getFirestore(app);
                const userID = residentSnap.data().userID
                const addedDocs = setDoc(doc(db, "residents",userID ),{ userID, first, middle, last, suffix, purok, phonenumber,password,logintoken})
                this.$toast.success("Logged in!", {position: "top"});
                console.log(addedDocs);
                this.$router.push(`/homepage/${residentSnap.data().userID}`);
            }
        } else {
            console.log("No such document!"); 
        }
        },
        signup(){
        this.$router.push("/residentsignuppage");    
        },
        forgot(){
        this.$router.push("/forgot-pass");    
        },
    
    },
}
</script>



            
