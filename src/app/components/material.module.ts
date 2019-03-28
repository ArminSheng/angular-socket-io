import { NgModule } from '@angular/core';
import { 
    MatInputModule, 
    MatDialogModule, 
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
} from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
    ]
})
export class MaterialModule {};