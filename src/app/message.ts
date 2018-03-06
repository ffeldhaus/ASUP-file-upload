export class Message {
  constructor(
    public text: string = '',
    public type: string = 'info',
    public progress: number = 0
  ) {  }
}
