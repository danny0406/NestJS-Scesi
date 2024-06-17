import { Controller, Get , Res, HttpStatus } from '@nestjs/common';

import { Response } from 'express';

@Controller()
export class AppController {

  @Get()
  getHello( @Res() res: Response ) {
     res.status(HttpStatus.CREATED).json(
      { "message" :"Hello world",
        "statusCode": 201
      }
     );
  }
}
