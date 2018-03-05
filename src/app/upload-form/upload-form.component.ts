import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { Upload } from '../upload';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  providers: [UploadFileService]
})
export class UploadFormComponent implements OnInit {

  validCaseNumberRegex = /^200[0-9]{7}$/g;

  upload = new Upload('', false, new File([''], ''));

  constructor(private uploadFileService: UploadFileService) { }

  ngOnInit() {
  }

  validate() {
    this.upload.caseNumberValid = this.validCaseNumberRegex.test(this.upload.caseNumber);
    if (!this.upload.caseNumberValid) {
      this.upload.message = new Message('Case number invalid. Case number must start with 200', 'warning');
    }
    else {
      this.upload.message = new Message();
    }
    console.log('Case validation is ' + this.upload.caseNumberValid);
  }

  handleFileInput(files: FileList) {
    this.upload.file = files.item(0);
  }

  uploadFile() {
    this.uploadFileService.putFile(this.upload).subscribe(message => {
      this.upload.message = message;
    }, error => {
      console.log(error);
    });
  }
}
