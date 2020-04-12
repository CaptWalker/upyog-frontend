
async function submitNGORegisterForm(){

    const firstNameNGOContactPerson = document.getElementById("firstNameNGOContactPerson").value;
    const lastNameNGOContactPerson = document.getElementById("lastNameNGOContactPerson").value;
    const ngoName = document.getElementById("ngoName").value;
    const ngoContact = document.getElementById("ngoContact").value;
    const ngoEmail = document.getElementById("ngoEmail").value;
    const ngoPassword = document.getElementById("ngoPassword").value;
    const ngoPasswordVerify = document.getElementById("ngoPasswordVerify").value;
    const ngoID = document.getElementById("ngoID").value;
    const ngoAddress = document.getElementById("ngoAddress").value;
     
  }
  
  async function resetNGORegisterForm(){
  
    document.getElementById("firstNameNGOContactPerson").value="";
    document.getElementById("lastNameNGOContactPerson").value="";
    document.getElementById("ngoName").value="";
    document.getElementById("ngoContact").value="";
    document.getElementById("ngoEmail").value="";
    document.getElementById("ngoPassword").value="";
    document.getElementById("ngoPasswordVerify").value="";
    document.getElementById("ngoID").value="";
    document.getElementById("ngoAddress").value="";
  
  }