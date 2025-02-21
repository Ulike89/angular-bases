import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { HeroPageComponent } from "./pages/hero/hero-page.component";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
        HeroPageComponent
    ],
    exports: [
        HeroComponent,
        ListComponent,
        HeroPageComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{}