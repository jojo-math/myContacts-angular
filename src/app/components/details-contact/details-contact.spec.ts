import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContact } from './details-contact';

describe('DetailsContact', () => {
  let component: DetailsContact;
  let fixture: ComponentFixture<DetailsContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
