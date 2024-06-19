import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageListComponent } from './pages/message-list.component';
import { MessageAddComponent } from './pages/message-add.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MessageListComponent },
        { path: 'add', component: MessageAddComponent }, 
    ])],
    exports: [RouterModule]
})
export class MessageRoutingModule { }
