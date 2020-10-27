import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forma: FormGroup

  name_: string;
  lastname_: string;
  email_: string;
  age_: string;
  street_: string;
  city_: string;
  province_: string;
  country_: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({

      name: ['',[Validators.required, Validators.minLength(3)]],
      lastname: ['',[Validators.required, Validators.minLength(3)]],
      age: ['', [ Validators.minLength(1)]],
      email: ['',[Validators.required, Validators.minLength(4), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
      adress: this.fb.group({
        street: ['',[Validators.minLength(3)]],
        city: ['',[Validators.minLength(3)]],
        province: ['',[Validators.minLength(3)]],
        country: ['',[Validators.minLength(3)]]
      })


    });
  }

  saveForm() {
    this.name_ = this.forma.value.name;
    this.lastname_ = this.forma.value.lastname;
    this.email_ = this.forma.value.email;
    this.age_ = this.forma.value.age;
    this.street_ = this.forma.value.adress.street;
    this.city_ = this.forma.value.adress.city;
    this.province_ = this.forma.value.adress.province;
    this.country_ = this.forma.value.adress.country;
  

    console.log(this.forma);
    
   // this.forma.reset();
  }

 
  get valName():boolean{return this.forma.get('name').invalid && this.forma.get('name').touched;}
  get valLastname():boolean{return this.forma.get('lastname').invalid && this.forma.get('lastname').touched;}
  get valEmail():boolean{return this.forma.get('email').invalid && this.forma.get('email').touched;}
  get valAge():boolean{return this.forma.get('age').invalid && this.forma.get('age').touched;}
  get valStreet():boolean{return this.forma.get('adress.street').invalid && this.forma.get('adress.street').touched;}
  get valCity():boolean{return this.forma.get('adress.city').invalid && this.forma.get('adress.city').touched;}
  get valProvince():boolean{return this.forma.get('adress.province').invalid && this.forma.get('adress.province').touched;}
  get valCountry():boolean{return this.forma.get('adress.country').invalid && this.forma.get('adress.country').touched;}


  get invalName():boolean{return this.forma.get('name').valid && this.forma.get('name').touched;}
  get invalLastname():boolean{return this.forma.get('lastname').valid && this.forma.get('lastname').touched;}
  get invalEmail():boolean{return this.forma.get('email').valid && this.forma.get('email').touched;}
  get invalAge():boolean{return this.forma.get('age').valid && this.forma.get('age').touched;}
  get invalStreet():boolean{return this.forma.get('adress.street').valid && this.forma.get('adress.street').touched;}
  get invalCity():boolean{return this.forma.get('adress.city').valid && this.forma.get('adress.city').touched;}
  get invalProvince():boolean{return this.forma.get('adress.province').valid && this.forma.get('adress.province').touched;}
  get invalCountry():boolean{return this.forma.get('adress.country').valid && this.forma.get('adress.country').touched;}




}

