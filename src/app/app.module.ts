import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TogglEntryNameComponent } from './components/toggl-entry-name/toggl-entry-name.component';
import { TogglEntryTimeComponent } from './components/toggl-entry-time/toggl-entry-time.component';
import { TogglEntryActionComponent } from './components/toggl-entry-action/toggl-entry-action.component';
import { TfsSearchComponent } from './components/tfs-search/tfs-search.component';
import { TfsCurrentComponent } from './components/tfs-current/tfs-current.component';
import { TfsBugsComponent } from './components/tfs-bugs/tfs-bugs.component';
import { TfsTreeListComponent } from './components/tfs-tree-list/tfs-tree-list.component';
import { TfsAllComponent } from './components/tfs-all/tfs-all.component';
import { TogglEntryListComponent } from './components/toggl-entry-list/toggl-entry-list.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';


@NgModule({
  declarations: [
    AppComponent,
    TogglEntryNameComponent,
    TogglEntryTimeComponent,
    TogglEntryActionComponent,
    TfsSearchComponent,
    TfsCurrentComponent,
    TfsBugsComponent,
    TfsTreeListComponent,
    TfsAllComponent,
    TogglEntryListComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
