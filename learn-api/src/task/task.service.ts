import { Injectable } from '@nestjs/common';
import { Task, Taskstatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { createTaskDto } from './dto/createTaskDto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  getAllTask() {
    return this.tasks;
  }
  createTask(createTaskDto:createTaskDto):Task {
    const {title,description}=createTaskDto;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: Taskstatus.OPEN,
    };
    this.tasks.push(task)
    return task
  }
}
