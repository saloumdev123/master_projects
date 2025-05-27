import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJobComponent } from './recent-job.component';

describe('RecentJobComponent', () => {
  let component: RecentJobComponent;
  let fixture: ComponentFixture<RecentJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
