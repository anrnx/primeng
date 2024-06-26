import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './utilities/JwtInterceptor';
import { EditorModule } from 'primeng/editor';
import { XApiVersionInterceptor } from './utilities/XApiVersionInterceptor';
import { I18nFrHttpInterceptor } from './utilities/i18n-fr-http.interceptor';
import { LangHttpInterceptor } from './utilities/lang-http.interceptor';
import { UnauthorisedComponent } from './demo/components/unauthorised/unauthorised.component';
import { ForbiddenComponent } from './demo/components/forbidden/forbidden.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
    declarations: [AppComponent, NotfoundComponent,  UnauthorisedComponent, ForbiddenComponent],
    imports: [AppRoutingModule, ToastModule, AppLayoutModule, ReactiveFormsModule, FormsModule, EditorModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,MessageService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: XApiVersionInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: I18nFrHttpInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LangHttpInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
