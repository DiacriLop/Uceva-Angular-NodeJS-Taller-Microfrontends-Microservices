import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersTableComponent } from './theaters-table.component';

describe('TheatersTableComponent', () => {
  let component: TheatersTableComponent;
  let fixture: ComponentFixture<TheatersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheatersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
