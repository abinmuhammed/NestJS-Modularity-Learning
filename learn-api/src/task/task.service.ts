import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    private task="Hello world";
    getAllTask(){
        return this.task
    }
}
