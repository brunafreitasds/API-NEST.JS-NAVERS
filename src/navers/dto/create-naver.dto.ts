import { Role } from 'src/roles/entities/role.entity';

export class CreateNaverDto {
  name: string;
  email: string;
  role: Role;
}
