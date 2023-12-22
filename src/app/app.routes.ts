import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './pages/search/search.component';
import { AngComponent } from './layouts/ang/ang.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { RoutingComponent } from './pages/routing/routing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RouteGuardComponent } from './pages/route-guard/route-guard.component';
import { WhatIsComponent } from './pages/observable0/what-is/what-is.component';
import { RxjsComponent } from './pages/observable0/rxjs/rxjs.component';
import { DifferenceComponent } from './pages/observable0/difference/difference.component';
import { CreateComponent } from './pages/observable0/create/create.component';
import { ErrorComponent } from './pages/observable0/error/error.component';
import { DifferentWaysCreatingComponent } from './pages/observable0/different-ways-creating/different-ways-creating.component';
import { OperatorsComponent } from './pages/observable0/operators/operators.component';
import { UnsubscribeComponent } from './pages/observable0/unsubscribe/unsubscribe.component';

export const routes: Routes = [
    {
        path: 'l',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: SearchComponent 
            },
            {
                path: '',
                component: AngComponent,
                children: [
                    { path: 'observable/what-is-observable', component: WhatIsComponent},
                    { path: 'observable/rxjs', component: RxjsComponent}, 
                    { path: 'observable/the-difference-between-promise', component: DifferenceComponent},
                    { path: 'observable/how-to-create', component: CreateComponent }, 
                    { path: 'observable/error-&-completion-of-observable', component: ErrorComponent},
                    { path: 'observable/different-ways-of-creating-observable', component: DifferentWaysCreatingComponent},
                    { path: 'observable/understanding-operators-of-rxjs', component: OperatorsComponent },
                    { path: 'observable/unsubscribe-to-an-observable', component: UnsubscribeComponent}
                ]
            }   
        ]
    },
                      
    {
        path: '',
        component: AdminComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }
    
];
