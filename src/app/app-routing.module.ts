import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  // WITH THE LAYOUT
  {
    path: "",
    loadComponent: () =>
      import("./layouts/blank-layout/blank-layout.component").then(
        (m) => m.BlankLayoutComponent,
      ),
    children: [
      {

        path: "",
        loadComponent: () =>
          import("./components/home/home.component").then(
            (m) => m.HomeComponent,
          ),
      },
      {
        path: "home",
        loadComponent: () =>
          import("./components/home/home.component").then(
            (m) => m.HomeComponent,
          ),
      },
      {
        path: "blogs",
        loadComponent: () =>
          import("./components/blogs/blogs.component").then(
            (m) => m.BlogsComponent,
          ),
      },
      {
        path: "contact",
        loadComponent: () =>
          import("./components/contact/contact.component").then(
            (m) => m.ContactComponent,
          ),
      },
    ],
  },
  // WITHOUT THE LAYOUT
  {
    path: "dashboard",
    loadComponent: () =>
      import("./components/dashboard/dashboard.component").then(
        (m) => m.DashboardComponent,
      ),
    children: [
      {
        path: "",
        loadComponent: () =>
          import(
            "./components/dashboard-content/dashboard-content.component"
          ).then((m) => m.DashboardContentComponent),
      },
      {
        path: "profile",
        loadComponent: () =>
          import("./components/profile/profile.component").then(
            (m) => m.ProfileComponent,
          ),
      },
    ],
  },
  {
    path: "template",
    loadComponent: () =>
      import("./components/template/template.component").then(
        (m) => m.TemplateComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
