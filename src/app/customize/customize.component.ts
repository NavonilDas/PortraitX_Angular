import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {

  form: FormGroup;
  frees:string = "";
  urgents:string = "";
  frameImage = undefined
  isUpload: String = undefined;

  chars:string[] = ["1 Charecter","2 Charecter","3 Charecter","4 Charecter"];
  ships:string[] = ["Free Shiping (20-30 Days)","Urgent Shiping (10-15 Days)"];
  types:string[] = ["Pencil Sketch","Oil Painting","Colored Pencil","Charcoal Painting","Acrylic Painting","Watercolor Painting"];
  choice:string[] = ["Yes","No"];
  constructor(private formb: FormBuilder, 
    private pro: ProductServiceService) { }

  ngOnInit() {
    this.form = this.formb.group({
      fileselector: ['']
    });
  }
  mylog(e){
    console.log(e);
  }
  SelShip(i){
  }
  Frame(i){
    if(i == 0)
      this.frameImage = "somepath";
    else this.frameImage = undefined;
  }
  onFileChange(event) {
    // console.log(event.target.files);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.form.get('fileselector').setValue(file);
    }
  }
  onSubmit() {
    this.isUpload = "hell";
    // const formData = new FormData();
    // formData.append('file', this.form.get('fileselector').value);
    // this.pro.uploadImage(formData).subscribe(val => {
    //   this.isUpload = "http://localhost:1011"+val.path;
    // })
  }
}
