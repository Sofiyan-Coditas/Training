import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from '../../node_modules/ngx-pagination';

import { AppComponent } from './app.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchServiceService } from './search-service.service';
import { UserListComponent } from './user-list/user-list.component';
import { SortPipePipe } from './sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserListComponent,
    SortPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
