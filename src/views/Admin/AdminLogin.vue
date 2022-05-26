<template>
  <div class="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
    <div class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
      <h1 class="font-bold text-center text-4xl text-yellow-500">BC<span class="text-blue-500">IS</span></h1>
      <form @submit.prevent="adminlogin">
        <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
          <h1 class="font-bold text-xl text-center">Sign in to your account</h1>

          <div class="flex flex-col space-y-1">
            <input type="text" name="username" v-model="username" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Username" />
          </div>

          <div class="flex flex-col space-y-1">
            <input type="password" name="password" v-model="password" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
          </div>

          <div class="flex-col-reverse sm:flex-row sm:justify-between items-center">
            <input type="submit" value="Login" class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"/>
          </div>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { app } from "../../firebase";
import { getFirestore, getDoc, doc,setDoc} from "firebase/firestore";
export default {
data(){
  return{
    username:'',
    password:'',
    checkusername:'',
    checkpassword:'',
    checkadmintoken:'',
    
  }
},
methods:{
  
      async verifyadmin() {

        const db = getFirestore(app);
        const userid = this.username;
        const adminRef = doc(db, "Admin", userid);
        const adminSnap = await getDoc(adminRef);
        
        const string = this.password;
        const encodedString=window.btoa(string);

        if(adminSnap.exists()){
          if(adminSnap.data().username == this.username && adminSnap.data().password == encodedString){
            if(adminSnap.data().admintoken == 'Yes'){
              this.$toast.success("Admin is already Logged In", {position: "top"});
            } else {

                const db = getFirestore(app);
                const adminID = adminSnap.data().adminID;
                const admintoken = 'Yes';
                const username = adminSnap.data().username;
                const password = adminSnap.data().password;
                const addedDocs = setDoc(doc(db, "Admin",adminID ),{ adminID,admintoken,username,password})
                console.log(addedDocs);
                this.$toast.success("Logged in!", {position: "top"});

                this.$router.push(`/adminhomepage/${adminID}`);




            }
          } else {
            this.$toast.success("Wrong Credentials", {position: "top"});
          }
        } else {
          this.$toast.success("Admin Not Found", {position: "top"});
        }

      },    
      adminlogin(){

        if(this.username == '' || this.password == ''){
          alert(' Enter Username and Password');
        }
        else { 

          this.verifyadmin();
        } 
      },
},


}
</script>

<style>

</style>


 <!-- //generate random string
      var length = 10;
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      alert(result);
 -->