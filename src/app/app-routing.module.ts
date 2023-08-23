import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PostComponent } from './components/post/post.component';


const postRoutes: Routes = [
  { path: ':id', component: PostComponent },
];

const routes: Routes = [
  { path: 'posts', component: PostsPageComponent, children: postRoutes },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', redirectTo: 'posts' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
