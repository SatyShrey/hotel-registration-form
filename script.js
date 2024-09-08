
    var input=document.querySelectorAll('input');
    for(var i=0;i<input.length;i++){
   input[i].setAttribute('class',"cls"+i);
   input[i].addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
    event.preventDefault();
    var num=parseInt((event.target.className).substr(3))+1;
    if(document.querySelector('.cls'+num)){
    document.querySelector('.cls'+num).focus();}
    if(num===input.length){document.querySelector('.register').focus();}
   }
  });
 }        

        function register(){
            var tabContent= document.getElementById('tabContent');
            var error=document.getElementById('error');
            error.style.display='block';
            document.getElementById('d-shade').style.display="block";
            var nam=document.getElementById("customerName").value;
                var dateStr=document.getElementById("checkinDate").value;
                var day=dateStr.split('-')[2];var month=dateStr.split('-')[1];var year=dateStr.split('-')[0];
                var date=day+'/'+month+'/'+year;
                var days=document.getElementById("days").value;
                var persons=document.getElementById("totalPerson").value;
                var advance=document.getElementById('adv').value;
                var delux;var suite;var ac;var locker;
                var billAmount;var amenities;var room;

                if(document.getElementById("delux").checked==true){
                    delux=2500;
                }else{delux=0;}

                if(document.getElementById("suite").checked==true){
                    suite =4000;
                }else{suite=0;}

                if(document.getElementById("ac").checked==true){
                    ac=1000;
                }else{ac=0;}

                if(document.getElementById("locker").checked==true){
                    locker=300;
                }else{locker=0;}

                if(delux==2500){room='Delux'}
                else{room='Suite'}

                if(ac==1000 && locker==300){amenities='AC and Locker';}
                else if(ac==1000){amenities='AC';}
                else if(locker==300){amenities='Locker'}
                else{amenities='<i class="text-danger">not selected...</i>'}

                if(persons==1 || persons==2){
                billAmount=(delux*days+suite*days+ac*days+locker*days-advance);
                }else billAmount=((delux*days+suite*days+ac*days+locker*days-advance)+(persons-2)*1000*days);

               var back='<br><button onclick="ok()" class="btn btn-dark btn-sm ok">ok</button>';

               if(nam==undefined || nam==''){error.innerHTML= (`Please enter name.`+back);}
               else if(date===undefined || date==''){error.innerHTML=(`Please add checkin date.`+back);}
               else if(days==undefined || days==''){error.innerHTML=(`Please add days.`+back);}
               else if(persons==undefined || persons==''){error.innerHTML=(`Please add total number of persons.`+back);}
               else if(delux==0 && suite==0){error.innerHTML=(`Please select room type.`+back);}
               else if(advance < 500 || advance==undefined){error.innerHTML=(`Minimmum advance amount is Rs.500/-.`+back);}

               else{
                error.style.display='none';
                document.getElementById('d-shade').style.display="none";
                document.getElementById('receipt').style.display='block';
                document.getElementById('tabContent').style.display="none";
                document.getElementById("regname").innerText=nam;
                document.getElementById("regdate").innerHTML=date;
                document.getElementById("regdays").innerHTML=days;
                document.getElementById("regpersons").innerHTML=persons;
                document.getElementById("regroom").innerText=room;
                document.getElementById("regamenities").innerHTML=amenities;
                document.getElementById("regadvance").innerText='₹'+advance;
                document.getElementById("regbal").innerText='₹'+billAmount;}
            }
        function back(){
            document.getElementById('tabContent').style.display='block';
            document.getElementById('receipt').style.display='none';
        }
        function ok(){
            document.getElementById('error').style.display='none';
            document.getElementById('tabContent').style.display='block';
            document.getElementById('d-shade').style.display="none";
        }


        function suiteRoom(){
            document.getElementById("suite").checked=true;
        }
        function deluxRoom(){
            document.getElementById("delux").checked=true;
        }
        function AC(){
            var aC=document.getElementById("ac");
            if(aC.checked==true){aC.checked=false}else{aC.checked=true}
        }
        function LOCKER(){
            var lockeR=document.getElementById("locker");
            if(lockeR.checked==true){lockeR.checked=false}else{lockeR.checked=true}
        }