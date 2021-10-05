import { PartialType } from '@nestjs/mapped-types';
import { CreateNaverDto } from './create-naver.dto';

export class UpdateNaverDto extends PartialType(CreateNaverDto) {}
