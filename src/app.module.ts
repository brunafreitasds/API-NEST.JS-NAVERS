import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Naver } from './navers/entities/naver.entity';
import { NaversModule } from './navers/navers.module';
import { Role } from './roles/entities/role.entity';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'navers',
      entities: [Naver, Role],
      synchronize: true,
    }),
    NaversModule,
    RolesModule,
  ],
})
export class AppModule {}
