import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { GraphqlValidationFilter } from './graphql/graphql-validation.filter';

async function bootstrap() {
  try {
    console.log('Bootstrapping Nest (Fastify) app…');

    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    // ✅ CORS for your frontend
    app.enableCors({
      origin: 'http://localhost:5173',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    });

    // ✅ Global validation pipe (for both HTTP and GraphQL DTOs)
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: false,
      }),
    );

   
    // ❗ OPTIONAL: enable these one by one if they are stable.
    // If you suspect they cause socket hang ups, comment them first,
    // confirm /auth/login works, then re‑enable and fix as needed.

    // Global GraphQL exception filter
     // app.useGlobalFilters(new GraphqlValidationFilter());

    // Global response interceptor
      app.useGlobalInterceptors(new ResponseInterceptor());

    // Convert all BigInt to string in JSON responses
    (BigInt.prototype as any).toJSON = function () {
      return this.toString();
    };

    const port = Number(process.env.PORT) || 4000;
    const host = '0.0.0.0';

    await app.listen(port, host);

    const url = `http://localhost:${port}`;
    console.log(`🚀 Nest app listening on ${url}`);
    console.log(`   Try POST ${url}/auth/login from Postman`);
  } catch (err) {
    console.error('❌ Error during Nest bootstrap:', err.message || err);
    process.exit(1);
  }
}

bootstrap();                 