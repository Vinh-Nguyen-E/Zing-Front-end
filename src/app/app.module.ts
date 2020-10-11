import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NghenhieunhatComponent} from './nghenhieunhat/nghenhieunhat.component';

import {HttpClientModule} from '@angular/common/http';
import {Likenhieunhat10baiComponent} from './likenhieunhat10bai/likenhieunhat10bai.component';
import {BaimoitaoComponent} from './baimoitao/baimoitao.component';
import { Baimoitao30Component } from './baimoitao30/baimoitao30.component';
import { HomeComponent } from './home/home.component';
import { Top30Component } from './top30/top30.component';
import { TopLikeComponent } from './top-like/top-like.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateSongComponent } from './crudSong/create-song/create-song.component';
import { DeleteSongComponent } from './crudSong/delete-song/delete-song.component';
import { EditSongComponent } from './crudSong/edit-song/edit-song.component';
import { ListSongComponent } from './crudSong/list-song/list-song.component';
import { DetailSongComponent } from './crudSong/detail-song/detail-song.component';



@NgModule({
  declarations: [
    AppComponent,
    NghenhieunhatComponent,
    Likenhieunhat10baiComponent,
    BaimoitaoComponent,
    Baimoitao30Component,
    HomeComponent,
    Top30Component,
    TopLikeComponent,
    CreateSongComponent,
    DeleteSongComponent,
    EditSongComponent,
    ListSongComponent,
    DetailSongComponent,


  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
