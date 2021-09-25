import { Controller, Get } from '@nestjs/common'

import { CommemorativeDateService } from './commemorative-date.service'

@Controller()
export class CommemorativeDateController {
  constructor(
    private readonly commemorativeDateService: CommemorativeDateService
  ) {}

  @Get('/current-commemorative-dates')
  getCommemorativeDateFromCurrentDay() {
    return this.commemorativeDateService.getCommemorativeDateFromCurrentDay()
  }
}
