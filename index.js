let input = document.querySelector("form");
let main = document.querySelector(".main1");
let btn = document.querySelector(".btn")



input.addEventListener("submit",
(event)=>{
  let name = event.target.uname.value;
  let email =event.target.email.value;
  let phone =event.target.phone.value;
  var checkStatus =0;

  



  var userData = JSON.parse(localStorage.getItem("userDetails"))??[];

  for(let v of userData){
    if(v.email == email || v.phone == phone){
            checkStatus =1; 
            break;
    }
  }

  if(checkStatus == 1 ){
    alert("Your email or phone already exist")
  }else{

    userData.push({
        "name":name,
        "email":email,
        "phone":phone
      })
      localStorage.setItem("userDetails",JSON.stringify(userData));
      event.target.reset();
  }


  displayData();
event.preventDefault();
})

let displayData =()=>{
    var userData = JSON.parse(localStorage.getItem("userDetails"))??[];
    console.log(userData)
    let finalData = ''
   userData.forEach((element,index)=> {
    finalData += `
    <main>
        <p onclick='remove(${index})'>&times;</p>
        <h5>Name</h5>
        <div>${element.name}</div><br/>

        <h5>Email</h5>
        <div>${element.email}</div> <br/>

        <h5>Phone</h5>
        <div>${element.phone}</div><br/>
    </main>`
    console.log(finalData)
   });
   main.innerHTML = finalData;
   
}

let remove = (i)=>{
    var userData = JSON.parse(localStorage.getItem("userDetails"))??[];
     userData.splice(i,1)
     localStorage.setItem("userDetails",JSON.stringify(userData));
     displayData()
   }

   btn.addEventListener("click",
   ()=>{
    localStorage.clear("userDetails")
    displayData();
   })


