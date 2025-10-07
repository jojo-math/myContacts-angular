import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolContacts } from './cool-contacts';

describe('CoolContacts', () => {
  let component: CoolContacts;
  let fixture: ComponentFixture<CoolContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolContacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolContacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
