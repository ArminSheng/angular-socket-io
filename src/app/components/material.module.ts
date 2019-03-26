import { NgModule } from '@angular/core';
import { 
    MatInputModule, 
    MatDialogModule, 
    MatButtonModule,
    MatListModule,
} from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule,
    ]
})
export class MaterialModule {};