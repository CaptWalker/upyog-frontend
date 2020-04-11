// Login form

async function submitForm() {
    clearErrors();
    const url = "https://bijliman-backend.herokuapp.com/api/login";
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const isError = errorCheck(email);
    if (!isError) {
        document.getElementById("submit").disabled = true;
      
        var loginCred = {
            email:email,
            password: password
        }
      
        const options = {
            method: "POST",
            body: loginCred
        };
        fetch(url, options)
        .then(res => {
            res.json()
            .then(data => ({
                  data: data,
                status: res.status
            }))
            .then(res => {
              clearFieldValues();
              document.getElementById("submit").disabled = false;
              document.getElementById("modalImg").src = "tick.png";
              document.getElementById("modalMessage").innerHTML =
                "You're order has been placed with order id: <br>" +
                res.data.order;
              document.getElementById("modalButton").disabled = false;
            });
        })
        .catch(err => {
            document.getElementById("submit").disabled = false;
            document.getElementById("modalImg").src = "error.png";
            document.getElementById("modalMessage").innerHTML =
            "Some Error Occured while placing your order, please try again.";
            document.getElementById("modalButton").disabled = false;
        });
    }
  }

//Login form end