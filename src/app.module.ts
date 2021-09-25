import { Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'
import { CommemorativeDateService } from './commemorative-date.service'
import { CommemorativeDateController } from './commemorative-date.controller'

@Module({
  imports: [],
  controllers: [CommemorativeDateController],
  providers: [PrismaService, CommemorativeDateService]
})
export class AppModule {}
