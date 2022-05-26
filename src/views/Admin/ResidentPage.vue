<template>
   <div
    class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white"
  >
    <div
      class="fixed w-full flex items-center justify-between h-14 text-white z-10"
    >
      <div
        class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-yellow-400 border-none"
      >
        <img
          class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
        />
        <span class="hidden md:block">ADMIN</span>
      </div>
    </div>
    <div
      class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-zinc-800 h-full text-white transition-all duration-300 border-none z-10 sidebar"
    >
      <div
        class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow"
      >
        <ul class="flex flex-col py-4 space-y-1">
          <li class="px-5 hidden md:block">
            <div class="flex flex-row items-center h-8">
              <div
                class="text-sm font-light tracking-wide text-gray-400 uppercase"
              >
                Main
              </div>
            </div>
          </li>
          <li>
            <a
              @click="gtDashboard"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              @click="gtResidents"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span
               
                class="ml-2 text-sm tracking-wide truncate"
                >Residents
              </span>
            </a>
          </li>
          <li>
            <a
              @click="gtAppointment"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate"
                >Appointments</span
              >
              <span
                class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full"
                >New</span
              >
            </a>
          </li>
          <li>
            <a
              @click="gtRevenues"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate"
                >Revenue Records</span
              >
            </a>
          </li>
          <li class="px-5 hidden md:block">
            <div class="flex flex-row items-center mt-5 h-8">
              <div
                class="text-sm font-light tracking-wide text-gray-400 uppercase"
              >
                Settings
              </div>
            </div>
          </li>
          <li>
              <a
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span 
                @click="logout"
                class="ml-2 text-sm tracking-wide truncate"
                  >Logout</span
                >
              </a>
            </li>
        </ul>
      </div>
    </div>

    <!-- component -->
    <div class="h-full px-3 w-3/4 ml-14 mt-14 mb-10 md:ml-64">
        <div class="text-right mr-10">
            <button
              @click="addResident"
              type="button"
              class="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-amber-600 rounded-md bg-amber-500 hover:bg-yellow-400 font-semibold"
            >
              Add Resident 
            </button>
          </div>
        <h2 class="text-left ml-2 mt-1 mb-4 text-xl font-bold text-gray-700">
              Residents
            </h2>
            <table class="min-w-max w-full table-auto border-2 border-gray-200">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal flex">
                  <th class="w-2/6 py-3 px-6 text-left">FULLNAME</th>
                  <th class="w-1/6 py-3 px-6 text-left">AGE</th>
                  <th class="w-1/6 py-3 px-6 text-left">PUROK</th>
                  <th class="w-1/6 py-3 px-6 text-left">GENDER</th>
                  <th class="w-1/6 py-3 px-6 text-left">VOTER STATUS</th>
                  <th class="w-1/6 py-3 px-6 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light"
                  v-for="resident in residentAdmin" :key="resident.id">                  
                
                    <tr class="border-b border-gray-200 hover:bg-gray-100 flex">
                        
                    <td class="w-2/6 py-3 px-6 text-left">
                        <span>{{resident.residentFirstName+" "+resident.residentMiddleName+" "+resident.residentLastName+" "+resident.residentSuffix}}</span>
                        
                    </td>

                    <td class="w-1/6 py-3 px-6 text-left">
                         <span>{{resident.residentAge}}</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-left">
                         <span>{{resident.residentPurok}}</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-left">
                        <span>{{resident.residentGender}}</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-left">
                        <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">{{resident.residentVoter}}</span>
                    </td>
                    <td class="w-1/6 py-3 px-6 text-left">
                        <div class="flex item-center justify-center">
                        <div @click="editResident(resident.residentID)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                            </svg>
                        </div>
                        <div @click="deleteResident(resident.residentID)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </div>
                        </div>
                    </td>
                    </tr>
                
              
              </tbody>
            </table>
    </div>

    <!-- MODAL -->
    <div
              v-if="modal"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)"
            >
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
              >
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                      Add Resident
                    </p>
                    <div
                      class="modal-close cursor-pointer z-50"
                      onclick="modalClose('main-modal')"
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
                  <form >
                  <div class="my-5 flex justify-center">
                    <form
                      class="w-full"
                    >
                      <div class="">
                        <div class="flex justify-evenly">
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">First Name</label>
                            <input type="text" v-model="resident_fname" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Example: Trexcy Fe"/>
                          </div>
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Middle Name</label>
                            <input type="text" v-model="resident_mname" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Example: Manzano"/>
                          </div>
                        </div>
                        <div class="flex justify-evenly">
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Last Name</label>
                            <input type="text" v-model="resident_lname" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Example: Torrefiel"/>
                          </div>
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Suffix</label>
                            <input type="text" v-model="resident_suffix" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Enter  'n/a'  if none"/>
                          </div>
                        </div>
                        <div class="flex justify-evenly">
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Age</label>
                            <input type="text" v-model="resident_age" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Example: 18"/>
                          </div>
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Gender</label>
                          <select v-model="resident_gender" 
                            class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm">
                            <option value= "Male">Male</option>
                            <option value= "Female">Female</option>
                          </select>
                          </div>
                        </div>
                        <div class="flex justify-evenly">
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Purok</label>
                          <select v-model="resident_purok" 
                            class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm">
                            <option value= "Purok 1">Purok 1</option>
                            <option value= "Purok 2">Purok 2</option>
                            <option value= "Purok 3">Purok 3</option>
                          </select>
                          </div>
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Voter Status</label>
                          <select v-model="resident_voter" 
                            class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm">
                            <option value= "Yes">Yes</option>
                            <option value= "No">No</option>
                          </select>
                          </div>
                        </div>
                      </div>  
                    </form>
                  </div>
                  </form>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                      @click="close"
                    >
                      Cancel
                    </button>
                    <button
                      class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                      @click="createResident"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
    </div>

<!--EDIT MODAL-->
    <div
              v-if="edit_modal"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)"
            >
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
              >
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                      Edit Resident
                    </p>
                    <div
                      class="modal-close cursor-pointer z-50"
                      onclick="modalClose('main-modal')"
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
                  <form >
                  <div class="my-5 flex justify-center">
                    <form
                      class="w-full"
                    >
                      <div class="">
                        <div class="flex justify-evenly">
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">First Name</label>
                            <input type="text" v-model="resident_fname" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Example: Trexcy Fe"/>
                          </div>
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Middle Name</label>
                            <input type="text" v-model="resident_mname" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Example: Manzano"/>
                          </div>
                        </div>
                        <div class="flex justify-evenly">
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Last Name</label>
                            <input type="text" v-model="resident_lname" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Example: Torrefiel"/>
                          </div>
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Suffix</label>
                            <input type="text" v-model="resident_suffix" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Enter  'n/a'  if none"/>
                          </div>
                        </div>
                        <div class="flex justify-evenly">
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Age</label>
                            <input type="text" v-model="resident_age" class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm" placeholder="Example: 18"/>
                          </div>
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Gender</label>
                          <select v-model="resident_gender" 
                            class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm">
                            <option value= "Male">Male</option>
                            <option value= "Female">Female</option>
                          </select>
                          </div>
                        </div>
                        <div class="flex justify-evenly">
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Purok</label>
                          <select v-model="resident_purok" 
                            class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm">
                            <option value= "Purok 1">Purok 1</option>
                            <option value= "Purok 2">Purok 2</option>
                            <option value= "Purok 3">Purok 3</option>
                          </select>
                          </div>
                          <div class="w-1/2 mx-1">
                            <label class="text-sm text-gray-600">Voter Status</label>
                          <select v-model="resident_voter" 
                            class="px-2 w-full border-2 border-gray-300 mb-5 rounded-md text-sm">
                            <option value= "Yes">Yes</option>
                            <option value= "No">No</option>
                          </select>
                          </div>
                        </div>
                      </div>  
                    </form>
                  </div>
                  </form>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                      @click="close"
                    >
                      Cancel
                    </button>
                    <button
                      class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                      @click="createResident"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
    </div>
<!--DELETE MODAL-->
<div v-if="delete_modal" class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white px-16 py-14 rounded-md text-center">
    <h1 class="text-xl mb-4 font-bold text-slate-500">Do you Want Delete</h1>
    <button @click="close" class="bg-indigo-500 px-4 py-2 rounded-md text-md text-white">Cancel</button>
    <button @click="deleteRes" class="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Delete</button>
  </div>
</div>

  </div>
</template>

<script>
import { app,resident_adminColRef } from "../../firebase";
import {setDoc, doc, getFirestore,getDocs, getDoc, deleteDoc} from "firebase/firestore";
export default {
data(){
  return{
    editID:'',
    deleteID:'',

    residentAdmin:[],
    number:'',
    resident_fname: '',
    resident_mname: '',
    resident_lname: '',
    resident_suffix: '',
    resident_age: '',
    resident_gender: '',
    resident_purok: '',
    resident_voter: '',
    modal: false,
    edit_modal: false,
    delete_modal:false
  }
},
async created(){
      const db = getFirestore(app);
        const userid = this.$route.params.id;
        const adminRef = doc(db, "Admin", userid);
        const adminSnap = await getDoc(adminRef);
        if(adminSnap.exists()){
            if(adminSnap.data().admintoken == 'Yes'){
              this.readres();
            } else {
              this.$router.push("/admin-login");
            }
        } else {
          this.$router.push("/admin-login");
        }



        // if(this.$route.params.id == 'adminauthorized'){
        //   this.readres();
        // } else {
        //   this.$router.push("/admin-login");
        // }
},
methods:{
  async readres(){
    let residentSnapshot = await getDocs(resident_adminColRef);
    let residentAdmin = [];
    residentSnapshot.forEach((resident) =>{
    let residentData = resident.data();
    residentData.id = resident.id;
    residentAdmin.push(residentData);

    if(residentData.residentSuffix=="n/a"){
      residentData.residentSuffix='';
    }

    });
      console.log(residentAdmin);
      this.residentAdmin = residentAdmin;
  },
  async deleteRes(){
    let res = doc(resident_adminColRef,this.deleteID);
    await deleteDoc(res);
    alert("deleted");
    console.log("deleted");
    this.close();
  },

  async createResident(){

    let residentaminSnapshot = await getDocs(resident_adminColRef);
        var count = 1;
        residentaminSnapshot.forEach((residentadmin) =>{
            let residentadminData = residentadmin.data();
            residentadminData.id = residentadmin.id;
            count = count +1;  
        });
        this.number = count;
        if(this.editID != ''){
        this.number  = ""+this.editID;
        }

        const residentID = ""+this.number;
    


    const residentFirstName = this.resident_fname;
    const residentMiddleName = this.resident_mname;
    const residentLastName = this.resident_lname;
    const residentSuffix = this.resident_suffix;
    const residentAge = this.resident_age;
    const residentGender = this.resident_gender;
    const residentPurok = this.resident_purok;
    const residentVoter = this.resident_voter;


    const db = getFirestore(app);
    console.log ("Creating Document");
    const addedDoc = await setDoc(doc(db, "Residents Admin",residentID),{residentID, residentFirstName, residentMiddleName, residentLastName, residentSuffix, residentAge, residentGender, residentPurok, residentVoter});
    alert("Document Created Succesfully");
    console.log(addedDoc);



    this.readres();
    this.close();
  },
  addResident(){
    this.modal = true;
  },  
  deleteResident(currentID){
    this.deleteID = currentID;
    this.delete_modal =true;
  },
  close(){
    this.modal = false;
    this.edit_modal= false;
    this.delete_modal=false;
    this.editID = '';
    this.deleteID = '';

    this.resident_fname = '';
    this.resident_mname = '';
    this.resident_lname = '';
    this.resident_suffix = '';
    this.resident_age = '';
    this.resident_gender = '';
    this.resident_purok = '';
    this.resident_voter = '';

  },
  async editResident(residentID){
    alert(residentID);
    this.editID=residentID;
    const db = getFirestore(app)
    const userid = residentID;  
    const residentreference = doc(db, "Residents Admin",userid);
    const residentSnap = await getDoc(residentreference);

    if(residentSnap.exists()){
      this.resident_fname = residentSnap.data().residentFirstName;
      this.resident_mname = residentSnap.data().residentMiddleName;
      this.resident_lname = residentSnap.data().residentLastName;
      this.resident_suffix = residentSnap.data().residentSuffix;
      this.resident_age = residentSnap.data().residentAge;
      this.resident_gender = residentSnap.data().residentGender;
      this.resident_purok = residentSnap.data().residentPurok;
      this.resident_voter = residentSnap.data().residentVoter;
    }
    else {
      alert('User does not exist');
    }
    this.edit_modal = true;

  },
        gtAppointment(){
          const adminID = this.$route.params.id;
          this.$router.push(`/appointmentpage/${adminID}`);
        },
        gtRevenues(){
          const adminID = this.$route.params.id;
          this.$router.push(`/revenue/${adminID}`);
        },
        gtResidents(){
          const adminID = this.$route.params.id;
          this.$router.push(`/resident/${adminID}`);
        },
        gtDashboard(){
          const adminID = this.$route.params.id;
          this.$router.push(`/adminhomepage/${adminID}`);
        },
        async logout(){
        const db = getFirestore(app);
        const userid = this.$route.params.id;
        const adminRef = doc(db, "Admin", userid);
        const adminSnap = await getDoc(adminRef)
        if(adminSnap.exists()){
          const adminID = adminSnap.data().adminID;
          const admintoken = 'No';
          const username = adminSnap.data().username;
          const password = adminSnap.data().password;

          const addedDocs = setDoc(doc(db, "Admin",adminID ),{ adminID,admintoken,username,password})
          console.log(addedDocs);
          this.$toast.success("Logged out!", {position: "top"});

          this.$router.push('/admin-login');
        }
        }
}
}
</script>
