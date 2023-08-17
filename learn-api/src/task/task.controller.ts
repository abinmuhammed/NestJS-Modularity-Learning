import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { createTaskDto } from './dto/createTaskDto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTask(): Task[] {
    return this.taskService.getAllTask();
  }

  @Post()
  createTask( @Body()
  createTaskDto:createTaskDto
  ):Task {
    return this.taskService.createTask(createTaskDto);
  }
}
