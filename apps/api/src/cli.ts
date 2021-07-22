import { NestFactory } from '@nestjs/core';
import { CliModule } from './cli.module';
import * as program from 'commander'
import { UsersService } from './users/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(CliModule);
  const usersService = app.get(UsersService)

  program
  .command('users:create')
  .option('--u <userName>', 'name of the user')
  .option('--u <userName>', 'name of the user')
  .option('--p <email>', 'email for the user')
  .action((args, cmd) => {
    console.log(cmd);
  });
  
  program
  .on('command:*', () => {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
  });

  program
  .parse(process.argv)  
}
bootstrap();