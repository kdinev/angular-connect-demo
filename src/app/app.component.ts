import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-root',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxAvatarComponent, IgcFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public ngModel: number = 4;
  public ngModel1: number = 4;
  public ngModel2: number = 4;
}
