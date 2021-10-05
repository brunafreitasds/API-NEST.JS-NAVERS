import { Module } from '@nestjs/common';
import { NaversService } from './navers.service';
import { NaversController } from './navers.controller';
import { Naver } from './entities/naver.entity';
import { Role } from 'src/roles/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Naver, Role])],
  controllers: [NaversController],
  providers: [NaversService],
})
export class NaversModule {}
