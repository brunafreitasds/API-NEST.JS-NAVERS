import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NaversService } from './navers.service';
import { CreateNaverDto } from './dto/create-naver.dto';
import { UpdateNaverDto } from './dto/update-naver.dto';

@Controller('navers')
export class NaversController {
  constructor(private readonly naversService: NaversService) {}

  @Post()
  create(@Body() createNaverDto: CreateNaverDto) {
    return this.naversService.create(createNaverDto);
  }

  @Get()
  findAll() {
    return this.naversService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.naversService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNaverDto: UpdateNaverDto) {
    return this.naversService.update(id, updateNaverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.naversService.remove(id);
  }
}
