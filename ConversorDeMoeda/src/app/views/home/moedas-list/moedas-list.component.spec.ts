import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasListComponent } from './moedas-list.component';

describe('MoedasListComponent', () => {
  let component: MoedasListComponent;
  let fixture: ComponentFixture<MoedasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
