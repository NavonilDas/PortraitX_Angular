import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DbuserService } from 'src/app/Service/dbuser.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  Done: boolean = false;
  form: FormGroup;
  isAdmin: boolean = false;
  Error: boolean = false;

  constructor(private builder: FormBuilder,
    private proSer: ProductServiceService,
    private userSer: DbuserService) { }

  ngOnInit() {
    this.form = this.builder.group({
      imageSelector: [""]
    });
    this.userSer.isAdmin().subscribe(val => {
      if (val.admin)
        this.isAdmin = true;
      else this.isAdmin = false;
    })
  }

  ImageChange(e) {
    if (e.target.files.length > 0) {
      this.form.get("imageSelector").setValue(e.target.files[0]);
    }
  }

  Submit(title: string, price: number, desp: string) {
    const fd = new FormData();
    console.log(this.form.get("imageSelector").value);
    fd.append("title", title);
    fd.append("price", "" + price);
    fd.append("description", desp);
    fd.append("file", this.form.get("imageSelector").value);
    this.proSer.addProduct(fd).subscribe(val => {
      if (val.err == 0) {
        this.Done = true;
        this.Error = false;
      }
      else {
        this.Done = false;
        this.Error = true;
      }
    });
  }

}
