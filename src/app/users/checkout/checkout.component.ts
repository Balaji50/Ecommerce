import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetproductService } from 'src/app/product-services/getproduct.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public service: GetproductService, public router: Router) { }

  public myform!: FormGroup;

  public name: string = '';
  public email: String = '';
  public mobileno: string = '';
  public flatno: string = '';
  public city: string = '';
  public state: string = '';
  public pincode: string = '';


  public totalItems!: number;
  public grandTotal!: number;

  ngOnInit(): void {

    this.formValidate();

    this.grandTotal = this.service.getTotalPrice();

    this.service.getProduct().subscribe((data) => {
      this.totalItems = data.length;
    })
  }

  formValidate() {
    this.myform = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      mobileno: new FormControl("", Validators.required),
      flatno: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      pincode: new FormControl("", Validators.required),
    })
  }

  onSubmit(myform: any) {
    const formData = this.myform.value;
    this.service.setFormData(formData);
  }

  // navigate to Payment Details 
  payMentDetails() {
    this.router.navigate(["users", "paymentdetails"])
  }
}
