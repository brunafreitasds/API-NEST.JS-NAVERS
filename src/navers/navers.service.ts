import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNaverDto } from './dto/create-naver.dto';
import { UpdateNaverDto } from './dto/update-naver.dto';
import { Naver } from './entities/naver.entity';

@Injectable()
export class NaversService {
  constructor(
    @InjectRepository(Naver)
    private naverRepository: Repository<Naver>,
  ) {}
  create(createNaverDto: CreateNaverDto) {
    return this.naverRepository.save(createNaverDto);
  }

  findAll() {
    return this.naverRepository.find({ relations: ['role'] });
  }

  findOne(id: string) {
    return this.naverRepository.findOne(id, { relations: ['role'] });
  }

  update(id: string, updateNaverDto: UpdateNaverDto) {
    return this.naverRepository.update(id, updateNaverDto);
  }

  remove(id: string) {
    return this.naverRepository.delete(id);
  }
}
