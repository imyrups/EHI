import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  id: number;
  formGroup: FormGroup;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm(null);
    this.route.params.subscribe((param) => {
      this.id = Number(param['id']);
      this.getContact();
    });
  }

  getContact() {
    const contact=this.appService.getContact(this.id);
    this.buildForm(contact);
  }

  buildForm(obj) {
    this.formGroup = this.fb.group({
      fName: [obj ? obj.fName : '', Validators.required],
      lName: [obj ? obj.lName: '', Validators.required],
      email: [obj ? obj.email: '', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      mobile: [obj ? obj.mobile: '', Validators.compose([Validators.required, Validators.min(1000000000), Validators.max(9999999999)])]
    });
  }

  get fName() {
    return this.formGroup.controls['fName'];
  }

  get lName() {
    return this.formGroup.controls['lName'];
  }

  get email() {
    return this.formGroup.controls['email'];
  }

  get mobile() {
    return this.formGroup.controls['mobile'];
  }

  cancel() {
    this.router.navigateByUrl('/contacts/listing');
  }

  submit() {
    console.log(this.formGroup);
    if(this.formGroup.valid) {
      const obj= {
        fName: this.fName.value,
        lName: this.lName.value,
        email: this.email.value,
        mobile: this.mobile.value
      }
      if(this.id) { 
        this.appService.modifyContact(this.id, obj)
        this.cancel;
      } else {
        this.appService.addContact(obj)
        this.cancel();
      }
    }
  }

}
