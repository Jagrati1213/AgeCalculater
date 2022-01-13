//months days..
let months=[31,28,31,30,31, 30, 31,31,30,31,30,31]

//GET Today - Input 
let today = new Date();
let today_month = today.getMonth();
let today_year  = today.getFullYear();
let today_date  = today.getDate();

//GET Elements
let year_msg     = document.querySelector(".show-box .year h3");
let month_msg    = document.querySelector(".show-box .month h3");
let day_msg      = document.querySelector(".show-box .day h3");

//GET calculated Btn

let btn_cal  = document.querySelector("button");
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
      alert("ENTER THE DOB...")

    } 

 else{
     // check the DOB year is less 
   if(dob_year==today_year) {
      alert("NOT BORN YET")
     }  

   else{

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

