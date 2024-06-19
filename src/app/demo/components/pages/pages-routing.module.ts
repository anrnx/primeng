import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { hasRoleGuard } from 'src/app/utilities/hasRoleGuard';
import { Role } from '../../api/roles';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
        canActivate: [hasRoleGuard],
        data: {
          roles: [ Role.USER ]
        }},
        { path: 'upload', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
        { path: 'directory', loadChildren: () => import('./directory/directory.module').then(m => m.DirectoryModule) },
        { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
        { path: 'messages', loadChildren: () => import('./notifications/message.module').then(m => m.NotificationsModule) },
        { path: 'sondages', loadChildren: () => import('./sondages/sondages.module').then(m => m.SondagesModule) },
        { path : 'reportit', loadChildren: () => import('./reportit/reportit.module').then(m => m.ReportItModule) },
        { path : 'shopping', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule) },
        { path: 'marques', loadChildren: () => import('./marques/marques.module').then(m => m.MarquesModule) },
        { path: 'configuration', loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule) },
        { path: 'tournee', loadChildren: () => import('./tournee/tournee.module').then(m => m.TourneeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
        { path: '**', redirectTo: '/unauthorised' }

    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
