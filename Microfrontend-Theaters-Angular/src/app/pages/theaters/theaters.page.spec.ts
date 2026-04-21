import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersPage } from './theaters.page';

describe('TheatersPage', () => {
  let component: TheatersPage;
  let fixture: ComponentFixture<TheatersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheatersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
