import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './pages/shopping-list.component';
import { ShoppingAddComponent } from './pages/shopping-add.component';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ShoppingListComponent },
        { path: 'add', component: ShoppingAddComponent}     
    ])],
    exports: [RouterModule]
})
export class ShoppingRoutingModule { }
