import { Body, Controller, Delete, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/books')
  getBooks(): {
    books: {
      id: number;
      author: string;
      title: string;
      yearPublished: number;
    }[];
  } {
    return {
      books: [
        {
          id: 2,
          author: 'Philip K. Dick',
          title: 'Do Androids Dream of Electric Sheep?',
          yearPublished: 1968,
        },
        {
          id: 3,
          author: 'William Gibson',
          title: 'Neuromancer',
          yearPublished: 1984,
        },
        {
          id: 1,
          author: 'Douglas Adams',
          title: `The Hitchhiker's Guide to the Galaxy`,
          yearPublished: 1979,
        },
      ],
    };
  }

  @Post('/api/books')
  addBook(
    @Body() request: { author: string; title: string; yearPublished: number },
  ): { id: number; author: string; title: string; yearPublished: number } {
    console.log('Request *****', request);
    return {
      id: 1,
      author: 'Douglas Adams',
      title: `The Hitchhiker's Guide to the Galaxy`,
      yearPublished: 1979,
    };
  }


  @Delete('/api/books')
  @HttpCode(204)
  deleteBooks() {}
}
