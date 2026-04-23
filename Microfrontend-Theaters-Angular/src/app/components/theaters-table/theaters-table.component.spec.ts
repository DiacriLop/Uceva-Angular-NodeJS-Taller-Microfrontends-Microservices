import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { THEATERS_MOCK } from '../../mocks/theaters.mocks';
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

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada teatro', () => {
    component.theaters = THEATERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.theaters.length);
  });

  it('debería mostrar los datos del teatro en cada columna', () => {
    component.theaters = THEATERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const theater = component.theaters[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(theater.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(theater.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(theater.city);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(theater.capacity));
      expect(columns[4].nativeElement.textContent.trim()).toBe(theater.direction);
    });
  });

  it('debería mapear cada teatro a su BadgeType correcto', () => {
    expect(component.theaterMap['Cali']).toBe('danger');
    expect(component.theaterMap['Tulua']).toBe('warning');
    expect(component.theaterMap['Palmira']).toBe('primary');
    expect(component.theaterMap['Buga']).toBe('success');
  });
  
});
