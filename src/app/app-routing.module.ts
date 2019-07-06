import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'bustime', loadChildren: './bustime/bustime.module#BustimePageModule' },
  { path: 'newforumquery', loadChildren: './newforumquery/newforumquery.module#NewforumqueryPageModule' },
  { path: 'mapmain', loadChildren: './mapmain/mapmain.module#MapmainPageModule' },
  { path: 'allnews', loadChildren: './allnews/allnews.module#AllnewsPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'depts', loadChildren: './depts/depts.module#DeptsPageModule' },
  { path: 'news1', loadChildren: './news1/news1.module#News1PageModule' },
  { path: 'news2', loadChildren: './news2/news2.module#News2PageModule' },
  { path: 'news3', loadChildren: './news3/news3.module#News3PageModule' },
  { path: 'photo', loadChildren: './photo/photo.module#PhotoPageModule' },
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
