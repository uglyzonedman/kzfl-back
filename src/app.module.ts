import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { RolesModule } from './roles/roles.module'
import { JwtStrategy } from './auth/stratigies/jwt.strategy'
import { SkillsModule } from './skills/skills.module'
import { SkillsSelectedModule } from './skills-selected/skills-selected.module'
import { GendersModule } from './genders/genders.module';
import { LanguagesModule } from './languages/languages.module';
import { CountriesModule } from './countries/countries.module';
import { OrdersModule } from './orders/orders.module';
import { RatingsModule } from './ratings/ratings.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'freelance',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    SkillsModule,
    SkillsSelectedModule,
    GendersModule,
    LanguagesModule,
    CountriesModule,
    OrdersModule,
    RatingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
