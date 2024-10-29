import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { Request } from 'express';

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'info',
        transport: process.env.NODE_ENV !== 'production' ? {
          target: 'pino-pretty',
          options: { colorize: true },
        } : undefined,
        redact: ['document', 'email', 'password'],
        serializers: {
          req: (req: Request) => ({ body: req.body }),
        },
      },
    }),
  ],
})
export class LoggerModule {}
