import { NgModule } from '@angular/core';
import {MatFormFieldModule, 
        MatInputModule, 
        MatTabsModule, 
        MatCardModule, 
        MatToolbarModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule,
        MatOptionModule,
        MatSelectModule,
        MatMenuModule
} from '@angular/material';


@NgModule({
  imports: 
    [  
      MatFormFieldModule, 
      MatInputModule, 
      MatTabsModule, 
      MatCardModule, 
      MatToolbarModule, 
      MatButtonModule, 
      MatSidenavModule, 
      MatIconModule, 
      MatListModule,
      MatOptionModule,
      MatSelectModule,
      MatMenuModule 
    ],
  exports: 
    [  
      MatFormFieldModule, 
      MatInputModule, 
      MatTabsModule, 
      MatCardModule, 
      MatToolbarModule, 
      MatButtonModule, 
      MatSidenavModule, 
      MatIconModule, 
      MatListModule,
      MatOptionModule,
      MatSelectModule,
      MatMenuModule
    ],

})
export class MaterialModule { }
