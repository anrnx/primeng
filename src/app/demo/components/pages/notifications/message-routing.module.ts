import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageListComponent } from './pages/message-list.component';
import { MessageAddComponent } from './pages/message-add.component';
import { MessageSentComponent } from './pages/message-sent.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MessageListComponent },
        { path: 'add', component: MessageAddComponent }, 
        { path: 'sent', component: MessageSentComponent }    
    ])],
    exports: [RouterModule]
})
export class MessageRoutingModule { }
