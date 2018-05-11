import { RouterModule, Routes, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PromptComponent } from './prompt/prompt.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'news', component: NewsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent},
    { path: 'prompt/:sound', component: PromptComponent}
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);