import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-signup-partner',
  templateUrl: './signup-partner.page.html',
  styleUrls: ['./signup-partner.page.scss'],
})
export class SignupPartnerPage implements OnInit {

  constructor(public http : Http) { }

  ngOnInit() {
  }

//Pass
  pass_one = "";
  pass_two = "";
  same_pass : boolean = false;


//Mindestanforderungen
  email = "";
  pass : string = "";
  firstname = "";
  lastname = "";
  address = "";
  phone = "";

//Freiwillig
  description = null;
  picture = null;
  date_of_birth = null;


  //RESPONSE
  response;
  onSuccess : boolean = false;
  error : boolean = false;

  checkdata(){

    this.email = this.email.replace(/\s/g, "");


    if(this.email.length<4 || this.firstname.replace(/\s/g, "").length<3 || this.lastname.replace(/\s/g, "").length<3 || this.address.replace(/\s/g, "") == "" || this.phone.replace(/\s/g, "").length<7){
      this.error=true;
    }

    if(this.pass_one == this.pass_two && this.pass_one != "" && this.pass_one.length>=8){
      this.pass = this.pass_one;
      this.same_pass = true;
    }
    else{
      this.same_pass = false;
      this.error = true;
    }

  }

  checkmail(){
    
  }


  create(){
    this.checkdata();
    if(this.same_pass == true && this.error == false){
      var send = JSON.stringify({
        email : this.email,
        pass : this.pass,
        firstname : this.firstname,
        lastname : this.lastname,
        address : this.address,
        phone : this.phone,
        description : this.description,
        picture : this.picture,
        birth : this.date_of_birth 
      });
      console.log("Same Pass, JSON finished");


      this.http.post("http://businesse.eastus.cloudapp.azure.com:8080/businesse/createPartner.php", send)
        .subscribe(data => {
        this.response = data['_body'];

        console.log("Get Response");
        console.log("Response: ", this.response);
      });

      if(this.response == "1"){
        this.onSuccess = true;
        console.log("Result is 1");
        
      }
      else if(this.response == "0"){
        this.error = true;
        console.log("Result isn´t 1");
        
      }


      this.same_pass = false;

    }
  }
}
