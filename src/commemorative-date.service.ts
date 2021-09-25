import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class CommemorativeDateService {
  constructor(private prisma: PrismaService) {}

  async getCommemorativeDateFromCurrentDay() {
    const currentDate = new Date()

    /**
     * Create filter.
     */
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1

    const filter = { day, month }

    return this.prisma.commemorativeDate.findMany({
      where: filter
    })
  }
}
