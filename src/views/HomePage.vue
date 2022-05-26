  <template>
    <main class="homepage">
      <content :fullscreen="true">
        <div class="bg-white flex flex-col font-sans">
          <div class="w-screen shadow-md">
            <div class="container mx-auto px-8">
              <header
                class="flex flex-col sm:flex-row items-center justify-between relative"
              >
                <h1 class="font-bold text-center text-2xl text-amber-500">
                  BCI <span class="text-teal-500">SYSTEM</span>
                </h1>
                <nav class="hidden md:flex text-md">
                  <a
                    @click="gthome"
                    class="text-gray-800 hover:text-teal-400 py-3 px-6"
                    >Home</a
                  >
                  <a
                    @click="gttrackcert"
                    class="text-gray-800 hover:text-teal-400 py-3 px-6"
                    >Appointment</a
                  >
                  <a
                    @click="gtreqcert"
                    class="text-gray-800 hover:text-teal-400 py-3 px-6"
                    >Schedule an Appointment</a
                  >
                  <a
                    @click="logout"
                    class="right-1 bg-amber-500 hover:bg-teal-300 rounded-full uppercase text-white py-3 px-6"
                    >Log out</a
                  >
                </nav>
              </header>
            </div>
          </div>

          <body class="container mx-auto px-8 mt-10">
            <div class="float-left text-left">
              <label class="text-5xl text-amber-400 indent-0.5">WELCOME! </label>
              <br />
              <text
                class="text-4xl text-gray-700 font-bold uppercase indent-0.5 mt-2"
              >
                {{ residentname }}</text
              >
              <hr class="mb-1 border-t border-teal-400 w-3/4" />
              <text class="text-lg text-stone-400 uppercase indent-0.5 mt-2">
                {{ purok }}
              </text>
              <br />
              <br />
              <label class="text-6xl font-bold indent-0.5 text-amber-400"
                >BARANGAY PANALIWAD-ON</label
              >
              <br />
              <label class="text-6xl font-bold indent-0.5 text-amber-400"
                >SALVADOR</label
              >
              <br />
              <label class="text-6xl font-bold indent-0.5 text-teal-400"
                >LANAO DEL NORTE</label
              >
              <br />
              <label class="text-2xl text-gray-500"
                >We're here to serve you in a fast, safe, and easy way</label
              >
              <br />
              <br />
              <a @click="gtabout"
                class="text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-amber-500 hover:bg-green-800 mt-8 sm:mt-16"
                >About Us</a
              >
            </div>
          </body>

          <div class="mt-10 text-center">
            <ion-label class="text-6xl text-teal-200"
              >How can we help you?</ion-label
            >
          </div>
          <div class="flex justify-evenly block my-10">
            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
              <a @click="gtreqcert">
                <div class="w-52 h-52">
                  <img
                    class="scale-75 mx-auto w-52 h-52"
                    src="../assets/images/requestcert.png"
                  />
                </div>
                <label
                  class="text-xl text-teal-400 font-bold block text-center uppercase"
                  >Request Certificate</label
                >
              </a>
            </div>

            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
              <a @click="gttrackcert">
                <div class="w-52 h-52">
                  <img
                    class="scale-95 mx-auto w-52 h-52"
                    src="../assets/images/trackcert.png"
                  />
                </div>
                <label
                  class="text-lg text-teal-400 font-bold block text-center uppercase"
                  >Track your Certificate</label
                >
              </a>
            </div>

            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
              <a @click="gteditprofile">
                <div class="w-52 h-52">
                  <img
                    class="scale-75 mx-auto w-52 h-52"
                    src="../assets/images/editprofile.png"
                  />
                </div>
                <label
                  class="text-lg text-teal-400 font-bold block text-center uppercase"
                  >Edit Profile</label
                >
              </a>
            </div>
          </div>
        </div>
      </content>
    </main>
</template>

<script>
import { app } from "../firebase";
// import { auth } from "../firebase";
import { getFirestore, getDoc, doc ,setDoc} from "firebase/firestore";
export default {
  data() {
    return {
      first: null,
      last: null,
      purok: null,
      residentname: null,
      userID:'',
    };
  },
  mounted() {

    this.userID = this.$route.params.id;
    this.loadresident();
  },
  methods: {




    async loadresident() {
      const db = getFirestore(app);
      const userid = this.userID;
      const residentRef = doc(db, "residents", userid);
      const residentSnap = await getDoc(residentRef);

      if (residentSnap.exists()) {
        console.log("Document data:", residentSnap.data());
        if(residentSnap.data().logintoken=='Yes'){
          this.first = residentSnap.data().first;
          this.last = residentSnap.data().last;
          this.purok = residentSnap.data().purok;
          this.residentname = this.first + " " + this.last;

          this.middle = residentSnap.data().middle;
          this.suffix = residentSnap.data().suffix;
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
    gteditprofile() {
      const userID = this.userID;
      this.$router.push(`/editprofile/${userID}`);
    },
    gtreqcert() {
      const userID = this.userID;
      this.$router.push(`/requestcertpage/${userID}`);
    },
    gttrackcert() {
      const userID = this.userID;
      this.$router.push(`/trackcertpage/${userID}`);
    },
    gthome() {
      const userID = this.userID;
      this.$router.push(`/homepage/${userID}`);
    },
    gtabout() {
      const userID = this.userID;
      this.$router.push(`/about/${userID}`);
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
    
  },
};
</script>

<style scoped>
body {
  background-image: url(../assets/images/landing.png);
  background-repeat: no-repeat;
  background-position: right;
}
</style>
