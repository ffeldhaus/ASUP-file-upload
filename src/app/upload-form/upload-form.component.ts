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

  upload = new Upload();

  constructor(private uploadFileService: UploadFileService) { }

  ngOnInit() {
  }

  validate() {
    if (this.validCaseNumberRegex.test(this.upload.caseNumber)) {
      this.upload = new Upload(this.upload.caseNumber, true);
      this.upload.message = new Message('Case number valid. Proceed with choosing file', 'info');
    } else {
      this.upload.message = new Message('Case number invalid. Case number must start with 200', 'warning');
      this.upload.caseNumberValid = false;
    }
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
