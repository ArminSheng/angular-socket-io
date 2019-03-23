import { NgModule } from '@angular/core';
import { MatInputModule, MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
    ]
})
export class MaterialModule {};