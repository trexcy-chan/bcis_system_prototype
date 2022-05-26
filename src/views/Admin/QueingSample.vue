<template>
  <table class="min-w-max w-full table-auto">
    <thead>
      <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal flex">
        <th class="w-1/6 py-3 px-6 text-left">Name</th>
        <th class="w-1/6 py-3 px-6 text-left">Appointment Date</th>
        <th class="w-1/6 py-3 px-6 text-center">Purpose</th>
        <th class="w-1/6 py-3 px-6 text-center">Type</th>
        <th class="w-1/6 py-3 px-6 text-center">Status</th>
        <th class="w-1/6 py-3 px-6 text-center">Action</th>
      </tr>
    </thead>
    <tbody class="text-gray-600 text-sm font-light">  
      <tr class="border-b border-gray-200 hover:bg-gray-100 flex"
        v-for="permit in permitRequest" :key="permit.id">
            
        <td class="w-1/6 py-3 px-6 text-left">
            <span>{{permit.BPfirst+" "+permit.BPmiddle+" "+permit.BPlast+" "+permit.BPsuffix}}</span>                     
        </td>

        <td class="w-1/6 py-3 px-6 text-left">
            <span>
              <p>{{permit.BPdate}}</p>
              <p>{{permit.BPtime}}</p>
            </span>
        </td>
        <td class="w-1/6 py-3 px-6 text-center">
            <span>{{permit.BPpurpose}}</span>
        </td>
        <td class="w-1/6 py-3 px-6 text-center">
            <span>Barangay Permit</span>
        </td>
        <td class="w-1/6 py-3 px-6 text-center">
            <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">{{permit.BPreqstat}}</span>
        </td>
        
       </tr>    
    </tbody>
  </table>
</template>

<script>
import { permitColRef } from "../../firebase";
import { getDocs} from 'firebase/firestore';
export default {
data(){
  return{
    permitRequest: [],
  }
},
async created(){
    let permitSnapshot = await getDocs(permitColRef);
    var max = 0;
    var min = 9999999999999;
    permitSnapshot.forEach((permit) =>{  
      let permitData = permit.data();  
      if(permitData.que > max){
        max = permitData.que;
      } else if (permitData.que < min)
       min = permitData.que; 
    });
    alert(min);
    alert(max);
    let permitRequest =[];
    for(min;max>=min;min++){
      permitSnapshot.forEach((permit) =>{
      let permitData = permit.data();
      permitData.id = permit.id;
      if(permitData.que == min){
        permitRequest.push(permitData);
        if (permitData.BPcedula=="Yes"){
            permitData.BPcedula = ', Cedula'
        } else{
            permitData.BPcedula = ''
        }
        if(permitData.BPsuffix=='n/a'){
          permitData.BPsuffix='';
        }
      }
    });
    }
    console.log(permitRequest);
    this.permitRequest = permitRequest;



}
}
</script>

<style>

</style>