import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Feathers } from '../providers/feathers';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule,[Feathers]);
