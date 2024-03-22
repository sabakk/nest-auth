import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './auth.dto';

import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    
    async register(dto: AuthDto ) {
      const userExist = await this.prisma.user.findUnique({
        where :{email: dto.email}
      })
      if(userExist) throw new BadRequestException('User already exist')
      const hash = await bcrypt.hash(dto.password, 10);
        const user = await this.prisma.user.create({ 
          data: {
            name: dto.name,
            email: dto.email,
            password: hash
          }
        });
        return user
      }
}
