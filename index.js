
// Changing the income vlaue according to slider
var range_label = document.getElementById('range_label');
var income = document.getElementById('income');

function change() {
    range_label.innerText = income.value+'K';
}

// From Validation
function validation() {
    
    console.log("its running");
    

    const nameRegex = new RegExp(/^[a-z\s'-]{1,50}$/i); /*Numbers are not allowed*/
    const emailRegex = new RegExp(/^[\w.-]+@[a-z\d-]+\.[a-z]{2,}$/i); /*email format*/
    const passwordRegex = new RegExp(/^[\w.*&%-]{6,50}$/i);  /*atleast 6 characteres*/

    let firstName = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm_password");

    if(nameRegex.test(firstName.value))
    {
        if(nameRegex.test(last_name.value))
        {
         if(emailRegex.test(email.value))
         {
          if(passwordRegex.test(password.value))
          {
            if(password.value == confirm_password.value)
            {
                 return;
            }
            else{
                alert("password don't match")
            }
          }
          else{
            alert("password should be atleast 6 characters");
          }
         }
         else{
            alert("write the email in correct form")
         }
        }
        else{
            alert("Number are not allowed in last name");
        }
    }
    else{
        alert("Number are not allowed in first name");
    }

}

// Connecting to mysql

const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Khan123**",
    database: "signUp"
  });

  db.connect(err => {
    if (err) { throw err; }
    console.log("DB connection OK");
  });

  db.query("SELECT * FROM `users`", (err, results) => {
    if (err) { throw err; }
    console.log(results);
  });