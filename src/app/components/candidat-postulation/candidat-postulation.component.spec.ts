import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatPostulationComponent } from './candidat-postulation.component';

describe('CandidatPostulationComponent', () => {
  let component: CandidatPostulationComponent;
  let fixture: ComponentFixture<CandidatPostulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatPostulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
