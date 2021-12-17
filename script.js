//months days..
let months=[31,28,31,30,31, 30, 31,31,30,31,30,31]

//GET Today - Input 
let today = new Date();
let today_month = today.getMonth();
let today_year  = today.getFullYear();
let today_date  = today.getDate();

//GET Elements
let current_date = document.querySelector(".current_date");
let DOB          = document.querySelector(".dob_date");
let year_msg     = document.querySelector(".show-box .year h3");
let month_msg    = document.querySelector(".show-box .month h3");
let day_msg      = document.querySelector(".show-box .day h3");
let alert_box    = document.querySelector(".alert-box");
let alert2_box   = document.querySelector(".alert2-box");

//print CURRENT DATE
current_date.innerHTML+=` ${today_date}-${today_month+1}-${today_year}`;

//GET calculated Btn

let btn_cal=document.querySelector("button");
btn_cal.addEventListener("click",cal);

function cal(){
//calculated age

      DOB.innerHTML="";
     //GET User -Input DOB
     let dob       = new Date(document.querySelector("input").value);
     let dob_month = dob.getMonth();
     let dob_year  =  dob.getUTCFullYear();
     let dob_date  =  dob.getDate();

     // Dsiplay age details
     let age_day,age_month,age_year;

     //whether input is empty
 if (document.querySelector("input").value ==""||document.querySelector("input").value==null) {

     alert_box.classList.add("hide-alert-box"); 
     setInterval(function(){
          alert_box.classList.remove("hide-alert-box");   
     },2000);

    } 

 else{
     // check the DOB year is less 
   if(dob_year==today_year) {
          alert2_box.classList.add("hide-alert-box"); 
          setInterval(function(){
               alert2_box.classList.remove("hide-alert-box");   
          },2000); 
     }  

   else{
     DOB.innerHTML+=`${dob_date}-${dob_month+1}-${dob_year}`; 

      if (today_date<dob_date){
         
           age_day   = (today_date+months[today_month])-dob_date;
           age_month =  today_month-1;
     
            //if month smaller then current month
          if(today_month<dob_month){ 
               //10<12
               age_month =(today_month+12)-dob_month;
               age_year  =(today_year-1)-dob_year;
          }
          else{
               //10<03
               age_month = (today_month)-dob_month;
               age_year  = (today_year)-dob_year;
          }
      } 
       else {
      
             age_day = today_date - dob_date;

           if(today_month<dob_month){ 
               //10<12
               age_month =(today_month+12)-dob_month;
               age_year  =(today_year-1)-dob_year;
          }
          else{
               //10<03
               age_month =(today_month)-dob_month;
               age_year  =(today_year)-dob_year;
          }

       }
     day_msg.textContent    = age_day;
     month_msg.textContent  = age_month;
     year_msg.textContent   = age_year;
     }
    
 }
//  end the cal()fun
};

