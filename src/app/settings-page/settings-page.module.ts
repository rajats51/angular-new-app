import { NgModule } from '@angular/core';
import { MaterialModule} from '../material-module.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SettingsPageComponent } from './settings-page.component';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [SettingsPageComponent]
})
export class SettingsPageModule { }
