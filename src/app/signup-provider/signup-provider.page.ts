import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { NavController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-signup-provider',
  templateUrl: './signup-provider.page.html',
  styleUrls: ['./signup-provider.page.scss'],
})
export class SignupProviderPage implements OnInit {

  constructor(
    public http : Http, 
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) { }

  ngOnInit() {
  }

//Upload
  imageURI:any;
  imageFileName:any;

//Pass
  pass_one = "";
  pass_two = "";
  same_pass : boolean = false;


//Mindestanforderungen
  email = "";
  pass : string = "";
  name = "";
  address = "";
  logo = "/assets/beispiel.jpeg";
  contact_firstname = "";
  contact_lastname = "";
  contact_email = "";
  contact_phone = "";

//Freiwillig
  description = null;
  duns = null;
  website = null;


  //RESPONSE
  response;
  onSuccess : boolean = false;
  error : boolean = false;

  checkdata(){

    this.email = this.email.replace(/\s/g, "");
    this.contact_email = this.contact_email.replace(/\s/g, "");


    if(this.email.length<4 || this.name.replace(/\s/g, "").length<3 || this.address.replace(/\s/g, "") == "" || this.logo == "" || this.contact_firstname.replace(/\s/g, "").length<3, this.contact_lastname.replace(/\s/g, "").length<3, this.contact_email.replace(/\s/g, "").length<4, this.contact_phone.replace(/\s/g, "").length<5){
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
        name : this.name,
        address : this.address,
        email : this.email,
        pass : this.pass,
        website : this.website,
        logo : this.logo,
        duns : this.duns,
        description : this.description,
        contact_firstname : this.contact_firstname,
        contact_lastname : this.contact_lastname,
        contact_email : this.contact_email,
        contact_phone : this.contact_phone
      });
      console.log("Same Pass, JSON finished");


      this.http.post("http://businesse.eastus.cloudapp.azure.com:8080/businesse/createProvider.php", send)
        .subscribe(data => {
        this.response = data['_body'];

        console.log("Get Response");
        console.log("Response: ", this.response);
      });

      if(this.response == "1"){
        this.onSuccess = true;
        this.error = false;
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
