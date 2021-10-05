import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Naver } from 'src/navers/entities/naver.entity';
@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  //uma role vai se relacionar com n navers
  @OneToMany(() => Naver, (naver) => naver.role, { cascade: true })
  navers: Naver[];
}
