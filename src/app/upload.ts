import { Message } from './message';

export class Upload {


  constructor(
    public caseNumber: string,
    public caseNumberValid: boolean,
    public file: File,
    public message: Message = new Message()
  ) {  }
}
