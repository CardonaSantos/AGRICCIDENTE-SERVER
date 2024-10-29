import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PriceRequestService } from './price-request.service';
import { CreatePriceRequestDto } from './dto/create-price-request.dto';
import { UpdatePriceRequestDto } from './dto/update-price-request.dto';

@Controller('price-request')
export class PriceRequestController {
  constructor(private readonly priceRequestService: PriceRequestService) {}

  @Post()
  create(@Body() createPriceRequestDto: CreatePriceRequestDto) {
    return this.priceRequestService.create(createPriceRequestDto);
  }

  @Get()
  findAll() {
    return this.priceRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceRequestService.findOne(+id);
  }

  @Patch('/acept-request-price/:idSolicitud/:idUser')
  acceptRequestPrice(
    @Param('idSolicitud', ParseIntPipe) idSolicitud: number,
    @Param('idUser', ParseIntPipe) idUser: number,
  ) {
    return this.priceRequestService.aceptPriceRequest(idSolicitud, idUser);
  }

  @Patch('/reject-request-price/:idSolicitud/:idUser')
  rejectRequestPrice(
    @Param('idSolicitud', ParseIntPipe) idSolicitud: number,
    @Param('idUser', ParseIntPipe) idUser: number,
  ) {
    return this.priceRequestService.rejectRequesPrice(idSolicitud, idUser);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePriceRequestDto: UpdatePriceRequestDto,
  // ) {
  //   return this.priceRequestService.update(+id, updatePriceRequestDto);
  // }

  @Delete('/delete-all')
  removeall() {
    return this.priceRequestService.allremove();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceRequestService.remove(+id);
  }
}
