import { Message } from './message';

export class Upload {


  constructor(
    public caseNumber: string = '',
    public caseNumberValid: boolean = false,
    public file: File = new File([''], ''),
    public endpoint: string = '',
    public message: Message = new Message()
  ) {  }
}
