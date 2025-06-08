import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shorten } from './shorten.entity';
import { Repository } from 'typeorm';
import { nanoid } from 'nanoid'

@Injectable()
export class ShortenService {
    constructor(
        @InjectRepository(Shorten)
        private shortenRepository: Repository<Shorten>,
    ) { }

    async create(shortenData: Partial<Shorten>): Promise<Shorten> {
        const shortCode = nanoid(4)
        const newShorten = this.shortenRepository.create({ ...shortenData, shortCode });
        return await this.shortenRepository.save(newShorten);
    }

    async getAll(): Promise<Shorten[]> {
        return this.shortenRepository.find();
    }

    async getByShortCode(shortCode: string): Promise<Shorten | null> {
        const shorten = await this.shortenRepository.findOneBy({ shortCode });
        if (!shorten) return null;

        shorten.accessCount = (shorten.accessCount || 0) + 1;
        await this.shortenRepository.save(shorten);

        return shorten;
    }


    async updateByShortCode(shortCode: string, updateData: Partial<Shorten>): Promise<Shorten | null> {
        await this.shortenRepository.update({ shortCode }, updateData);
        return this.shortenRepository.findOne({ where: { shortCode } });
    }

    async deleteByShortCode(shortCode: string): Promise<void> {
        await this.shortenRepository.delete({ shortCode });
    }


}
