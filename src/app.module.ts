import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ServeStaticModule .forRoot({
    rootPath: join (__dirname,'..','public'),
    }), 
    MongooseModule.forRoot('mongodb+srv://mern_user:UmNGmNKtyCJ7Y6Qa@cluster0.b0kdc.mongodb.net/pokedex'),
    PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
