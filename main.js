
  // =============functuions==========================================








var patient_id ;
var mood ='create'
//  create data_patient======================================
let submit = document.getElementById('save');
let patient_name = document.getElementById('name');
let MRN = document.getElementById('MRN');
let address = document.getElementById('address');
let phone = document.getElementById('phone');
let Diagnosis = document.getElementById('Diagnosis');

// Kardex inputs============================
let date_of_operation = document.getElementById('date_of_operation');
let date_of_admission = document.getElementById('date_of_admission');
let age = document.getElementById('age');
let sex = document.getElementById('sex');
let occupation = document.getElementById('occupation');
let Diagnosis2 = document.getElementById('Diagnosis2');
let treating_doctor = document.getElementById('treating_doctor');

let temp = document.getElementById('temp');
let bp = document.getElementById('bp');
let pulse = document.getElementById('pulse');
let resp = document.getElementById('resp');

let Wt1 = document.getElementById('Wt1');

let Diet = document.getElementById('Diet');
let Path = document.getElementById('Path');
let Fluid = document.getElementById('Fluid');
let Allergy = document.getElementById('Allergy');

let Urine = document.getElementById('Urine');
let Stool = document.getElementById('Stool');
let wt_elim = document.getElementById('wt_elim');

let info = document.getElementById('info');
let hospital_no = document.getElementById('hospital_no');
let room_No = document.getElementById('room_No');
let Bed_No = document.getElementById('Bed_No');
let Signiture = document.getElementById('Signiture');


// Kardex inputs============================

// skin_assessment=====================

// limbs============
let hotness = document.getElementById('hotness');
let redness = document.getElementById('redness');
let oedema = document.getElementById('oedema');
let lax = document.getElementById('lax');
let regidity = document.getElementById('regidity');
// 
var burn=document.getElementById('burn');
var bedsors=document.getElementById('bedsors');
// fffffffffffffffffffffffff====history====fffffffffffffff
var DVT=document.getElementById('DVT');
var Operation=document.getElementById('Operation');

var Operation_comment=document.getElementById('Operation_comment');
var Hospitalization=document.getElementById('Hospitalization');
var Hospitalization_comment=document.getElementById('Hospitalization_comment');
var disease=document.getElementById('disease');
var medical_comment=document.getElementById('medical_comment');
var Allergy1=document.getElementById('Allergy1');
var Allergy_comment=document.getElementById('Allergy_comment');
var No_problems=document.getElementById('No_problems');
// =========================primary assessement ==============
var Airway=document.getElementById('Airway');
var Breathing=document.getElementById('Breathing');
var Circulation=document.getElementById('Circulation');
var Disability=document.getElementById('Disability');
var Pulmonary=document.getElementById('Pulmonary');
var Cardiovascular=document.getElementById('Cardiovascular');
var Neuro=document.getElementById('Neuro');
var Endocrine=document.getElementById('Endocrine');
var muscluskeletal=document.getElementById('muscluskeletal');
var General=document.getElementById('General');

// =============================Psychological=====================
var stress=document.getElementById('stress');
var Anxious=document.getElementById('Anxious');
var Depressed=document.getElementById('Depressed');
var Angery=document.getElementById('Angery');
var Others_psych_comment=document.getElementById('Others_psych_comment');

// ==============economical=============
var cash_able=document.getElementById('cash_able');
var cash_unable=document.getElementById('cash_unable');
var Insurance=document.getElementById('Insurance');

// =============------vital signs-----============--------------=======-
var Temprature1=document.getElementById('Temprature1');
var Temprature2=document.getElementById('Temprature2');
var Temprature3=document.getElementById('Temprature3');
var Temprature4=document.getElementById('Temprature4');

var blood_Pressure1=document.getElementById('blood_Pressure1');
var blood_Pressure2=document.getElementById('blood_Pressure2');
var blood_Pressure3=document.getElementById('blood_Pressure3');
var blood_Pressure4=document.getElementById('blood_Pressure4');

var Respiration1=document.getElementById('Respiration1');
var Respiration2=document.getElementById('Respiration2');
var Respiration3=document.getElementById('Respiration3');
var Respiration4=document.getElementById('Respiration4');

var Pulse1=document.getElementById('Pulse1');
var Pulse2=document.getElementById('Pulse2');
var Pulse3=document.getElementById('Pulse3');
var Pulse4=document.getElementById('Pulse4');

var Pain_scale1=document.getElementById('Pain_scale1');
var Pain_scale2=document.getElementById('Pain_scale2');
var Pain_scale3=document.getElementById('Pain_scale3');
var Pain_scale4=document.getElementById('Pain_scale4');

// =====================medication ===================
var medication1=document.getElementById('medication1');
var medication2=document.getElementById('medication2');
var medication3=document.getElementById('medication3');
var medication4=document.getElementById('medication4');
var medication5=document.getElementById('medication5');
var medication6=document.getElementById('medication6');
// ==============care_cheate==============================
var care1=document.getElementById('care1');
var care2=document.getElementById('care2');
var care3=document.getElementById('care3');
var care4=document.getElementById('care4');
var care5=document.getElementById('care5');
var care6=document.getElementById('care6');
// ============----------=======functions====
let skin_body =document.querySelector('.skin_body');
function show_skin(){
  skin_body.classList.toggle('active');
}
// =========================
let history_body =document.querySelector('.history_body');
function show_history(){
  history_body.classList.toggle('active');
}
// ==========================
let primary_assessment_body =document.querySelector('.primary_assessment_body');
function show_assement(){
  primary_assessment_body.classList.toggle('active');
}
// ======================
let psychology_body =document.querySelector('.psychology_body');
function show_psych(){
  psychology_body.classList.toggle('active');
}
// =====================================
let economical_body =document.querySelector('.economical_body');
function show_eco(){
  economical_body.classList.toggle('active');
}
// ====================================
let vital_signs_body =document.querySelector('.vital_signs_body');
function show_vit(){
  vital_signs_body.classList.toggle('active');
}
// ==============================================
let medication_body =document.querySelector('.medication_body');
function show_med(){
  medication_body.classList.toggle('active');
}
// ////////////////////////////////////////
let care_cheate_body =document.querySelector('.care_cheate_body');
function show_care(){
  care_cheate_body.classList.toggle('active');
}
// ==========++++++++++++++++++
let kardex_body =document.querySelector('.kardex_body');
function show_kardex(){
  kardex_body.classList.toggle('active');
}



function close_details(){
  document.getElementById('display_data1').style.display='none';
  document.getElementById('contaner_patient_add').style.display='block';
}







// ===========================//=======================//
let data_patient;
if(localStorage.patient != null){
  data_patient=JSON.parse(localStorage.patient);
}else{
let data_patient=[];}
// ==================save====================================//

submit.onclick=function(){
let basic_data={
 
  patient_name:patient_name.value,
  MRN:MRN.value,
  address:address.value,
  phone:phone.value,
  Diagnosis:Diagnosis.value,
  Kardex_data:{
    date_of_admission:date_of_admission.value,
age:age.value,
sex:sex.value,
    date_of_operation:date_of_operation.value,
    occupation:  occupation.value,
    Diagnosis2:  Diagnosis2.value,

    treating_doctor:  treating_doctor.value,
    temp:  temp.value,
    bp:  bp.value,
    pulse:  pulse.value,
    resp:  resp.value,
    Wt1:  Wt1.value,
    Diet:  Diet.value,
    Path:  Path.value,




    Fluid:  Fluid.value,
    Allergy:  Allergy.value,
    Urine:  Urine.value,
    Stool:  Stool.value,
    wt_elim:  wt_elim.value,
    info:  info.value,
    hospital_no:  hospital_no.value,
    room_No:  room_No.value,
    Bed_No:  Bed_No.value,
    Signiture:Signiture.value,
 
  
  },
  skin_assessment:{
    limbs:{hotness:hotness.value,
      redness:redness.value,
      oedema:oedema.value,
      lax:lax.value,
      regidity:regidity.value,
       },
       burn:burn.value,
       bedsors:bedsors.value
    
  },
  History:{
    DVT:DVT.value,
Operation:Operation.value,
Operation_comment:Operation_comment.value,
Hospitalization:Hospitalization.value,
Hospitalization_comment:Hospitalization_comment.value,
disease:disease.value,
medical_comment:medical_comment.value,
Allergy1:Allergy1.value,
Allergy_comment:Allergy_comment.value,


No_problems:No_problems,


  },
  primary_assessement:{
    Airway:Airway.value,
Breathing:Breathing.value,
Circulation:Circulation.value,
Disability:Disability.value,
Pulmonary:Pulmonary.value,
Cardiovascular:Cardiovascular.value,
Neuro:Neuro.value,
Endocrine:Endocrine.value,
muscluskeletal:muscluskeletal.value,
General:General.value,
    
  },
  Psychological:{
    stress:stress.value,
    Anxious:Anxious.value,
    Depressed:Depressed.value,
    Angery:Angery.value,
    Others_psych_comment:Others_psych_comment.value,
    
  },
economical:{
cash_able:cash_able.value,
    cash_unable:cash_unable.value,
    Insurance:Insurance.value,
},
vital_signs:{
  Temprature1:Temprature1.value,
Temprature2:Temprature2.value,
Temprature3:Temprature3.value,
Temprature4:Temprature4.value,

blood_Pressure1:blood_Pressure1.value,
blood_Pressure2:blood_Pressure2.value,
blood_Pressure3:blood_Pressure3.value,
blood_Pressure4:blood_Pressure4.value,

Respiration1:Respiration1.value,
Respiration2:Respiration2.value,
Respiration3:Respiration3.value,
Respiration4:Respiration4.value,

Pulse1:Pulse1.value,
Pulse2:Pulse2.value,
Pulse3:Pulse3.value,
Pulse4:Pulse4.value,

Pain_scale1:Pain_scale1.value,
Pain_scale2:Pain_scale2.value,
Pain_scale3:Pain_scale3.value,
Pain_scale4:Pain_scale4.value,

},
medication:{
  medication1:medication1.value,
medication2:medication2.value,
medication3:medication3.value,
medication4:medication4.value,
medication5:medication5.value,
medication6:medication6.value,
},
care_cheate:{
  care1:care1.value,
care2:care2.value,
care3:care3.value,
care4:care4.value,
care5:care5.value,
care6:care6.value,
}
}

if(mood === 'create'){data_patient.push(basic_data);
alert('Patient Saved Successfully !')
}
else{data_patient[patient_id]=basic_data;
  alert('Patient Updated Successfully !')
}

localStorage.setItem('patient', JSON.stringify(data_patient));

clear_data();
show_data();

 
}

// ==========clear inputs============
function clear_data(){
  patient_name.value='',
  MRN.value='',
address.value='',
phone.value='',
Diagnosis.value='',
date_of_operation.value='',
  occupation.value='',
  Diagnosis2.value='',
  treating_doctor.value='',
 temp.value='',
  bp.value='',
 pulse.value='',
  resp.value='',
  Wt1.value='',
  Path.value='',
  Fluid.value='',
 Allergy.value='',
  Urine.value='',
  Stool.value='',
  wt_elim.value='',
 info.value='',
 hospital_no.value='',
  room_No.value='',
  Bed_No.value=''
  date_of_admission.value='',
age.value='',
sex.value=''
Signiture.value=''
address.value='',
date_of_admission.value='',
age.value='',
hotness.value='',
redness.value='',
oedema.value='',
lax.value='',
regidity.value='',
burn.value='',
bedsors.value='',
DVT.value='',
Operation.value='',
Operation_comment.value='',
Hospitalization.value='',
Hospitalization_comment.value='',
disease.value='',
medical_comment.value='',
Allergy1.value='',
Allergy_comment.value='',
Airway.value='',
Breathing.value='',
Circulation.value='',
Disability.value='',
Pulmonary.value='',
Cardiovascular.value='',
Neuro.value='',
Endocrine.value='',
muscluskeletal.value='',
General.value='',
stress.value='',
Anxious.value='',
Depressed.value='',
Angery.value='',
Others_psych_comment.value='',
cash_able.value='',
cash_unable.value='',
Insurance.value='',
Temprature1.value='',
Temprature2.value='',
Temprature3.value='',
Temprature4.value='',
blood_Pressure1.value='',
blood_Pressure2.value='',
blood_Pressure3.value='',
blood_Pressure4.value='',
Respiration1.value='',
Respiration2.value='',
Respiration3.value='',
Respiration4.value='',
Pulse1.value='',
Pulse2.value='',
Pulse3.value='',
Pulse4.value='',
Pain_scale1.value='',
Pain_scale2.value='',
Pain_scale3.value='',
Pain_scale4.value='',
medication1.value='',
medication2.value='',
medication3.value='',
medication4.value='',
medication5.value='',
medication6.value='',
care1.value='',
care2.value='',
care3.value='',
care4.value='',
care5.value='',
care6.value=''
  }
  // ==================================show_data==========
  function show_data(){
    let table='';
    for(let i=0;i<data_patient.length;i++){
      table +=`
      <tr>
      <td>${i}</td>
      <td>${data_patient[i].patient_name}</td>
      <td>${data_patient[i].MRN}</td>
      <td>${data_patient[i].address}</td>
      <td>${data_patient[i].phone}</td>
      <td>${data_patient[i].Diagnosis}</td>
      <td><button onclick=(details(${i}))>Details</button>
      </td>
    
    </tr>
      `
      document.getElementById('tbody1').innerHTML=table;
      
    }
   }show_data();
  // /===============================delete_patient============

  function delete_patient(id){
data_patient.splice(id,1);
localStorage.patient=JSON.stringify(data_patient);
show_data();
document.getElementById('contaner_patient_add').style.display='block';
document.getElementById('display_data1').style.display='none';
alert('Patient data deleted successfully!')
  }
  // =============================show details===========
  window.jsPDF = window.jspdf.jsPDF;
  var docPDF = new jsPDF();
  
  function downloadPDF(i){
  
      var elementHTML = document.querySelector("#display_data1");
      docPDF.html(elementHTML, {
          callback: function(docPDF) {
              docPDF.save(data_patient[i].patient_name+'.pdf');
          },
          x: 15,
          y: 15,
          width: 170,
          windowWidth: 650
      });
  }
 
  function details(i){patient_id=i;
 scroll({top:0})
    document.getElementById('contaner_patient_add').style.display='none';
    document.getElementById('display_data1').style.display='block';
    let details='';
   details +=`
   <div class="personal_data">
   <div class="row">
  <h3>Name:${data_patient[i].patient_name}</h3>
  <button onclick="update(${i})" >Update Data</button>
  <button onclick="downloadPDF(${i})">print patient data</button>
  <i class="fa-solid fa-xmark" id="open" onclick="close_details()"></i></div>
  <h3>MRN:${data_patient[i].MRN}</h3>
<h3>Diagnosis:${data_patient[i].Diagnosis}</h3>
</div>
<!-- ===================== -->
<div class="row">
<div class="history_card" style="border: solid 1px #211951;width: 100%; padding: 7px;margin: 7px;border-radius: 7px;">
  <h3 style="text-align: center;background:#15F5BA;">History</h3>
<div class="details">
<h4>DVT?:${data_patient[i].History.DVT}</h4>
<h4>Previous Operation?:${data_patient[i].History.Operation},,${data_patient[i].History.Operation_comment}</h4>
<h4>Previous Hospitalization?:${data_patient[i].History.Hospitalization},,${data_patient[i].History.Hospitalization_comment}</h4>
<h4>any medical disease?:${data_patient[i].History.disease},,${data_patient[i].History.medical_comment}</h4>
<h4>Previous Allergy?:${data_patient[i].History.Allergy1},,${data_patient[i].History.Allergy_comment}</h4>
</div>

</div>
<!-- ============================= -->
<div class="skin_card" style="width: 100%;border: solid 1px #211951; padding: 7px;margin: 7px;border-radius: 7px;">
  <h3 style="text-align: center;background:#15F5BA;">Skin Assessment</h3>
<div class="details">
<h4>limbs:
  <h6>hotness:${data_patient[i].skin_assessment.limbs.hotness}</h6>
  <h6>redness:${data_patient[i].skin_assessment.limbs.redness}</h6>
  <h6>oedema:${data_patient[i].skin_assessment.limbs.oedema}</h6>
  <h6>lax:${data_patient[i].skin_assessment.limbs.lax}</h6>
  <h6>regidity:${data_patient[i].skin_assessment.limbs.regidity}</h6>
</h4>
<h4>Burns:${data_patient[i].skin_assessment.burn}</h4>
<h4>bed sors:${data_patient[i].skin_assessment.bedsors}</h4>
</div>
</div>
<!-- // -->
</div>

<!-- ============================================== -->
<div class="row">
  <div class="primary_assessment_card" style="border: solid 1px #211951;width: 100%; padding: 7px;margin: 7px;border-radius: 7px;">
    <h3 style="text-align:center;background:#15F5BA;">Primary Assessment</h3>
  <div class="details">
  <h4>Airway:${data_patient[i].primary_assessement.Airway}</h4>
  <h4>Breathing:${data_patient[i].primary_assessement.Breathing}</h4>
  <h4>Circulation:${data_patient[i].primary_assessement.Circulation}</h4>
  <h4>Disability:${data_patient[i].primary_assessement.Disability}</h4>
 
 
  </div>
  
  </div>
  <!-- ============================= -->
  <div class="secondary_assessment_card" style="width: 100%;border: solid 1px #211951; padding: 7px;margin: 7px;border-radius: 7px;">
    <h3 style="text-align: center;background:#15F5BA;">Secondary Assessment</h3>
  <div class="details">
  <h4>Pulmonary:${data_patient[i].primary_assessement.Pulmonary}</h4>
  <h4>Cardiovascular:${data_patient[i].primary_assessement.Cardiovascular}</h4>
  <h4>Neuro:${data_patient[i].primary_assessement.Neuro}</h4>
  <h4>Endocrine:${data_patient[i].primary_assessement.Endocrine}</h4>
  <h4>muscluskeletal:${data_patient[i].primary_assessement.muscluskeletal}</h4>  
  <h4>General:${data_patient[i].primary_assessement.General}</h4>
  </div>
  </div>
  <!-- // -->
  </div>
<!-- ================================ -->
<div class="row">
  <div class="Psychological_card" style="border: solid 1px #211951;width: 100%; padding: 7px;margin: 7px;border-radius: 7px;">
    <h3 style="text-align:center;background:#15F5BA;">Psychological Assessment</h3>
  <div class="details">
  <h4>stress?:${data_patient[i].Psychological.stress}</h4>
  <h4>Anxious?:${data_patient[i].Psychological.Anxious}</h4>
  <h4>Depressed?:${data_patient[i].Psychological.Depressed}</h4>
  <h4>Angery?:${data_patient[i].Psychological.Angery}</h4>
  <h4>Others? :${data_patient[i].Psychological.Others_psych_comment}</h4>
 
  </div>
  
  </div>
  <!-- ============================= -->
  <div class="Economical_assessment_card" style="width: 100%;border: solid 1px #211951; padding: 7px;margin: 7px;border-radius: 7px;">
    <h3 style="text-align: center;background:#15F5BA;">Economical Assessment</h3>
  <div class="details">
  <h4>cash and able to pay?:${data_patient[i].economical.cash_able}</h4>
  <h4>cash an unable to pay? :${data_patient[i].economical.cash_unable}</h4>
  <h4>Insurance? :${data_patient[i].economical.Insurance}</h4>
 
  </div>
  </div>
  <!-- // -->
  </div>
<!-- ///////////////////// -->
<div class="row">
  <div class="vital_signs_card" style="border: solid 1px #211951;width: 100%; padding: 7px;margin: 7px;border-radius: 7px;">
    <h3 style="text-align:center;background:#15F5BA;">vital signs</h3>
  <div class="details">
  
   <h4>Temprature:</h4> 
  <h6>at:6am=> ${data_patient[i].vital_signs.Temprature1}</h6>
  <h6>at:12am=>${data_patient[i].vital_signs.Temprature2}</h6>
  <h6>at:6pm=>${data_patient[i].vital_signs.Temprature3}</h6>
  <h6>at:12pm=>${data_patient[i].vital_signs.Temprature4}</h6>


  <h4>Blood pressure:</h4> 
  <h6>at:6am=>${data_patient[i].vital_signs.blood_Pressure1}</h6>
  <h6>at:12am=>${data_patient[i].vital_signs.blood_Pressure2}</h6>
  <h6>at:6pm=>${data_patient[i].vital_signs.blood_Pressure3}</h6>
  <h6>at:12pm=>${data_patient[i].vital_signs.blood_Pressure4}</h6>
<!-- ///////////// -->

<h4>Pulse:</h4> 
<h6>at:6am=>${data_patient[i].vital_signs.Respiration1}</h6>
<h6>at:12am=>${data_patient[i].vital_signs.Respiration2}</h6>
<h6>at:6pm=>${data_patient[i].vital_signs.Respiration3}</h6>
<h6>at:12pm=>${data_patient[i].vital_signs.Respiration4}</h6>
<!-- == -->

<h4>Respiration:</h4> 
<h6>at:6am=>${data_patient[i].vital_signs.Pulse1}</h6>
<h6>at:12am=>${data_patient[i].vital_signs.Pulse2}</h6>
<h6>at:6pm=>${data_patient[i].vital_signs.Pulse3}</h6>
<h6>at:12pm=>${data_patient[i].vital_signs.Pulse4}</h6>
<!--  -->

<h4>Pian scale:</h4> 
<h6>at:6am=>${data_patient[i].vital_signs.Pain_scale1}</h6>
<h6>at:12am=>${data_patient[i].vital_signs.Pain_scale2}</h6>
<h6>at:6pm=>${data_patient[i].vital_signs.Pain_scale3}</h6>
<h6>at:12pm=>${data_patient[i].vital_signs.Pain_scale4}</h6>


  </div>
  
  </div>
  <!-- ============================= -->
  <div class="medication_card" style="width: 100%;border: solid 1px #211951; padding: 7px;margin: 7px;border-radius: 7px;">
    <h3 style="text-align: center;background:#15F5BA;"> Medication</h3>
  <div class="details">
  <h4>1:${data_patient[i].medication.medication1}</h4>
  <h4>2:${data_patient[i].medication.medication2}</h4>
  <h4>3:${data_patient[i].medication.medication3}</h4>
  <h4>4:${data_patient[i].medication.medication4}</h4>
  <h4>5:${data_patient[i].medication.medication5}</h4>
  <h4>6:${data_patient[i].medication.medication6}</h4>
  </div>
  </div>
  <!-- // -->
  </div>
<!-- +++++++++++++++++++++++++ -->
<div class="row">
  <div class="care_cheate_card" style="border: solid 1px #211951;width: 100%; padding: 7px;margin: 7px;border-radius: 7px;">
    <h3 style="text-align:center;background:#15F5BA;">care cheate</h3>
  <div class="details">
  
   <h4>Care:</h4> 
  <h6>1: <h4>${data_patient[i].care_cheate.care1}</h4></h6>
  <h6>2:${data_patient[i].care_cheate.care2}</h6>
  <h6>3:${data_patient[i].care_cheate.care3}</h6>
  <h6>4:${data_patient[i].care_cheate.care4}</h6>
  <h6>5:${data_patient[i].care_cheate.care5}</h6>
  <h6>6:${data_patient[i].care_cheate.care6}</h6>

  </div>
  
  </div>
  <!-- ============================= -->
  <!-- // -->
  </div>
<!-- ////////////////////////// -->

<!-- kardex -->

<div class="row">
  <div class="kardex_card" style="border: solid 1px #211951;width: 100%; padding: 7px;margin: 7px;border-radius: 7px;">
    <h3 style="text-align:center;background:#15F5BA;">Kardex</h3>
  <div class="details">
    
    <div class="row">
      <h3>date_of_admission:${data_patient[i].Kardex_data.date_of_admission}</h3> 
      
      <h3>age:${data_patient[i].Kardex_data.age}</h3> 
      <h3>sex:${data_patient[i].Kardex_data.sex}</h3> 
      </div>
       <!-- row============================= -->
       <div class="row">
        <h3>date_of_operation:${data_patient[i].Kardex_data.date_of_operation}</h3>
        
        <h3>occupation:${data_patient[i].Kardex_data.occupation}</h3> 
       
        </div>
         <!-- row============================= -->
         <div class="row">
          <h3>Diagnosis:${data_patient[i].Kardex_data.Diagnosis2}</h3>
          



          <h3>treating_doctor:${data_patient[i].Kardex_data.treating_doctor}</h3> 
         
          </div>
           <!-- row============================= -->
           <div class="row">
            <h3>V/S:</h3> <small>T:</small>${data_patient[i].Kardex_data.temp}<small style="background-color:#836FFF;">C*</small>
           <small>B/P:</small>${data_patient[i].Kardex_data.bp}<small style="background-color:#836FFF;">mm/Hg</small>
        <small>P:</small>${data_patient[i].Kardex_data.pulse}<small style="background-color:#836FFF;">b/min</small>
       <small>R:</small>${data_patient[i].Kardex_data.resp}<small style="background-color:#836FFF;">c/min</small>
            
      
            <h3>Wt:${data_patient[i].Kardex_data.Wt1}</h3><small>Kg</small>
           
            </div>
             <!-- row============================= -->
             <div class="row">
              <h3>Diet:${data_patient[i].Kardex_data.Diet}</h3> 
              
              <h3>Path:${data_patient[i].Kardex_data.Path}</h3> 
             

              
              </div>
               <!-- row============================= -->
               <div class="row">
                <h3>Fluid:${data_patient[i].Kardex_data.Fluid}</h3> 
                
                <h3 style="color: crimson;">Allergy:${data_patient[i].Kardex_data.Allergy}</h3> 
               
                </div>
                 <!-- row============================= -->
                 <div class="row">
                  <h3>Elimination:</h3> <small>Urine:</small> ${data_patient[i].Kardex_data.Urine}
                  <small>Stool:</small>${data_patient[i].Kardex_data.Stool} 
                  <small>Wt:</small>${data_patient[i].Kardex_data.wt_elim} 
                 
                  </div>
                   <!-- row============================= -->
                   <h3>Spicial Information:${data_patient[i].Kardex_data.info}</h3>
      <!-- ===================== -->
      <div class="row">
        <h3>hospital_No:${data_patient[i].Kardex_data.hospital_no}</h3> 
        
        <h3>room_No:${data_patient[i].Kardex_data.room_No}</h3>
        <h3>Bed_No:${data_patient[i].Kardex_data.Bed_No}</h3> 
        </div>
      
         <!-- row============================= -->
        
          
           <!-- row============================= -->
         <div class="row">
          <h3>Signiture/${data_patient[i].Kardex_data.Signiture}</h3> 
          
          </div>
          <button style="position:relative;right:0;"      onclick=(delete_patient(${i}))>delete</button>
   

  </div>
  
  </div>
  <!-- ============================= -->
  <!-- // -->
  </div>

 `

   document.getElementById('display_data1').innerHTML=details;
      

      }

 


function update(i){
document.getElementById('display_data1').style.display='none';
  document.getElementById('contaner_patient_add').style.display='block';
  submit.value='Update';
mood='update';
  patient_name.value=data_patient[i].patient_name,
  MRN.value=data_patient[i].MRN,
  address.value=data_patient[i].address,
  phone.value=data_patient[i].phone,
  Diagnosis.value=data_patient[i].Diagnosis,
  date_of_admission.value=data_patient[i].Kardex_data.date_of_admission
  age.value=data_patient[i].Kardex_data.age,
  sex.value=data_patient[i].Kardex_data.sex,
  date_of_operation.value=data_patient[i].Kardex_data.date_of_operation,
  occupation.value=data_patient[i].Kardex_data.occupation,
  Diagnosis2.value=data_patient[i].Kardex_data.Diagnosis2,
   treating_doctor.value=data_patient[i].Kardex_data.treating_doctor,
  temp.value=data_patient[i].Kardex_data.temp,
  bp.value=data_patient[i].Kardex_data.bp,
  pulse.value=data_patient[i].Kardex_data.pulse,
  resp.value=data_patient[i].Kardex_data.resp,
   Wt1.value=data_patient[i].Kardex_data.Wt1,
  Diet.value=data_patient[i].Kardex_data.Diet,
  Path.value=data_patient[i].Kardex_data.Path,
  Fluid.value=data_patient[i].Kardex_data.Fluid,
  Allergy.value=data_patient[i].Kardex_data.Allergy,
  Urine.value=data_patient[i].Kardex_data.Urine,
  Stool.value=data_patient[i].Kardex_data.Stool,
  wt_elim.value=data_patient[i].Kardex_data.wt_elim,
  info.value=data_patient[i].Kardex_data.info,
  hospital_no.value=data_patient[i].Kardex_data.hospital_no,
  room_No.value=data_patient[i].Kardex_data.room_No,
  Bed_No.value=data_patient[i].Kardex_data.Bed_No,
  Signiture.value=data_patient[i].Kardex_data.Signiture,
  hotness.value=data_patient[i].skin_assessment.limbs.hotness,
  redness.value=data_patient[i].skin_assessment.limbs.redness,
  oedema.value=data_patient[i].skin_assessment.limbs.oedema,
  lax.value=data_patient[i].skin_assessment.limbs.lax,
  regidity.value=data_patient[i].skin_assessment.limbs.regidity,
  burn.value=data_patient[i].skin_assessment.burn,
  bedsors.value=data_patient[i].skin_assessment.bedsors,
  DVT.value=data_patient[i].History.DVT,
  Operation.value=data_patient[i].History.Operation,
  Operation_comment.value=data_patient[i].History.Operation_comment,
  Hospitalization.value=data_patient[i].History.Hospitalization,
  Hospitalization_comment.value=data_patient[i].History.Hospitalization_comment,
  disease.value=data_patient[i].History.disease,
  medical_comment.value=data_patient[i].History.medical_comment,
  Allergy1.value=data_patient[i].History.Allergy1,
  Allergy_comment.value=data_patient[i].History.Allergy_comment,
  Airway.value=data_patient[i].primary_assessement.Airway,
  Breathing.value=data_patient[i].primary_assessement.Breathing,
  Circulation.value=data_patient[i].primary_assessement.Circulation,
  Disability.value=data_patient[i].primary_assessement.Disability,
  Pulmonary.value=data_patient[i].primary_assessement.Pulmonary,
  Cardiovascular.value=data_patient[i].primary_assessement.Cardiovascular,
  Neuro.value=data_patient[i].primary_assessement.Neuro,
  Endocrine.value=data_patient[i].primary_assessement.Endocrine,
  muscluskeletal.value=data_patient[i].primary_assessement.muscluskeletal,
  General.value=data_patient[i].primary_assessement.General,
  stress.value=data_patient[i].Psychological.stress,
  Anxious.value=data_patient[i].Psychological.Anxious,
  Depressed.value=data_patient[i].Psychological.Depressed,
  Angery.value=data_patient[i].Psychological.Angery,
  Others_psych_comment.value=data_patient[i].Psychological.Others_psych_comment,
  cash_able.value=data_patient[i].economical.cash_able,
  cash_unable.value=data_patient[i].economical.cash_unable,
  Insurance.value=data_patient[i].economical.Insurance,
  Temprature1.value=data_patient[i].vital_signs.Temprature1,
  Temprature2.value=data_patient[i].vital_signs.Temprature2,
  Temprature3.value=data_patient[i].vital_signs.Temprature3,
  Temprature4.value=data_patient[i].vital_signs.Temprature4,
  blood_Pressure1.value=data_patient[i].vital_signs.blood_Pressure1,
  blood_Pressure2.value=data_patient[i].vital_signs.blood_Pressure2,
  blood_Pressure3.value=data_patient[i].vital_signs.blood_Pressure3,
  blood_Pressure4.value=data_patient[i].vital_signs.blood_Pressure4,
  Respiration1.value=data_patient[i].vital_signs.Respiration1,
  Respiration2.value=data_patient[i].vital_signs.Respiration2,
  Respiration3.value=data_patient[i].vital_signs.Respiration3,
  Respiration4.value=data_patient[i].vital_signs.Respiration4,
  Pulse1.value=data_patient[i].vital_signs.Pulse1,
  Pulse2.value=data_patient[i].vital_signs.Pulse2,
  Pulse3.value=data_patient[i].vital_signs.Pulse3,
  Pulse4.value=data_patient[i].vital_signs.Pulse4,
  Pain_scale1.value=data_patient[i].vital_signs.Pain_scale1,
  Pain_scale2.value=data_patient[i].vital_signs.Pain_scale2,
  Pain_scale3.value=data_patient[i].vital_signs.Pain_scale3,
  Pain_scale4.value=data_patient[i].vital_signs.Pain_scale4,
  medication1.value=data_patient[i].medication.medication1,
  medication2.value=data_patient[i].medication.medication2,
  medication3.value=data_patient[i].medication.medication3,
  medication4.value=data_patient[i].medication.medication4,
  medication5.value=data_patient[i].medication.medication5,
  medication6.value=data_patient[i].medication.medication6,
  care1.value=data_patient[i].care_cheate.care1,
  care2.value=data_patient[i].care_cheate.care2,
  care3.value=data_patient[i].care_cheate.care3,
  care4.value=data_patient[i].care_cheate.care4,
  care5.value=data_patient[i].care_cheate.care5,
  care6.value=data_patient[i].care_cheate.care6
  
}



function search_patient(value){
for(var i=0; i<data_patient.length;i++){
  
   let table='';
  
if(data_patient[i].patient_name.includes(value)){
 
 
    table =`
    <tr>
    <td>${i}</td>
    <td>${data_patient[i].patient_name}</td>
    <td>${data_patient[i].MRN}</td>
    <td>${data_patient[i].address}</td>
    <td>${data_patient[i].phone}</td>
    <td>${data_patient[i].Diagnosis}</td>
    <td><button onclick=(details(${i}))>Details</button>
    <button onclick=(delete_patient(${i}))>delete</button></td>
  </tr>
    `}
    
    else{console.log('no')}
   

 document.getElementById('tbody1').innerHTML=table;
}

}