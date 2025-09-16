import { Injectable } from '@nestjs/common';

@Injectable() // 다른 클래스에서 사용할 수 있도록 설정
export class TasksService {
  private tasks = [
    { id: 1, title: '초기설정', done: true },
    { id: 2, title: 'Next.js 페이지 만들기', done: true },
    { id: 3, title: 'NestJS 첫 API', done: true },
  ];
  findAll() {
    return this.tasks;
  }

  create(title: string) {
    const newTask = {
      id: this.tasks.length + 1,
      title: '새로운 할일',
      done: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, done: boolean) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.done = done;
    }
    return task;
  }

  remove(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return { success: true };
  }
}
