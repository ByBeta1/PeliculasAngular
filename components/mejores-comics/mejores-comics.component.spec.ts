import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresComicsComponent } from './mejores-comics.component';

describe('MejoresComicsComponent', () => {
  let component: MejoresComicsComponent;
  let fixture: ComponentFixture<MejoresComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejoresComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MejoresComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
