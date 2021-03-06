import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {SingleplayerComponent} from "./components/singleplayer/singleplayer.component";
import {MultiplayerComponent} from "./components/multiplayer/multiplayer.component";
import {HighscoreComponent} from "./components/highscore/highscore.component";
import { TokenomicsComponent } from './components/tokenomics/tokenomics.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent},
  { path: 'singleplayer', component: SingleplayerComponent},
  { path: 'multiplayer', component: MultiplayerComponent},
  { path: 'highscores', component: HighscoreComponent},
  { path: 'tokenomics', component: TokenomicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
