import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ShortenService } from './shorten.service';
import { Shorten } from './shorten.entity';

@Controller('/shorten')
export class ShortenController {
    constructor(private readonly shortenService: ShortenService) { }

    @Post()
    async createShorten(@Body() shortenData: Partial<Shorten>): Promise<Shorten> {
        return this.shortenService.create(shortenData);
    }

    @Get()
    async getShorten(): Promise<Shorten[]> {
        return this.shortenService.getAll();
    }

    @Get(':shortCode')
    async getByShortenCode(@Body('shortCode') shortCode: string): Promise<Shorten | null> {
        return this.shortenService.getByShortCode(shortCode);
    }

    @Put(':shortCode')
    async updateByShortCode(@Param('shortCode') shortCode: string, @Body() updateData: Partial<Shorten>,): Promise<Shorten | null> {
        return this.shortenService.updateByShortCode(shortCode, updateData);
    }

    @Delete(':shortCode')
    async deleteByShortCode(@Param('shortCode') shortCode: string): Promise<void> {
        return this.shortenService.deleteByShortCode(shortCode);
    }

}
