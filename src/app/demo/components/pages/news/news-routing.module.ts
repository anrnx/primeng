import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from './pages/news-list.component';
import { NewsDetailsComponent } from './pages/news-details.component';
import { NewsAddComponent } from './pages/news-add.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: NewsListComponent },
        { path: 'add', component: NewsAddComponent },
        { path: ':uuid', component: NewsDetailsComponent },        
    ])],
    exports: [RouterModule]
})
export class NewsRoutingModule { }
