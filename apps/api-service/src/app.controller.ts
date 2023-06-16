import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('WORKER_SERVICE') private readonly client: ClientProxy) { }

  @Get()
  async startJob() {
    console.log('Received http request! Sending job to worker');
    console.log('process id: ', process.pid);
    await this.client.emit('start_job', { bool: true, num: 123.45, str: "A message string." }).toPromise();
    return 'Job sent!';
  }

  @EventPattern('progress')
  async handleProgress(data: any) {
    console.log('Progress received:', data);
    console.log('process id: ', process.pid);
  }

  @EventPattern('result')
  async handleReply(data: any) {
    console.log('Reply received:', data);
    console.log('process id: ', process.pid);
  }
}
