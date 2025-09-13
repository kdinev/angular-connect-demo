import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_NAVBAR_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgcFormsModule, IGX_LIST_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES } from '@infragistics/igniteui-angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NoopAnimationsModule, FormsModule, IGX_NAVBAR_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgcFormsModule, IGX_LIST_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
