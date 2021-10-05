import { Role } from 'src/roles/entities/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Naver {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email' })
  email: string;
  //um naver vai se relacionar com 1 role
  @ManyToOne(() => Role)
  @JoinColumn()
  role: Role;
}
