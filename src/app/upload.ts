import { Message } from './message';

export class Upload {


  constructor(
    public caseNumber: string,
    public caseNumberValid: boolean,
    public file: File,
    public endpoint: string = '',
    public message: Message = new Message()
  ) {  }
}
