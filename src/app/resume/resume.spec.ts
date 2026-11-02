import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Resume } from './resume';

describe('Resume', () => {
  let component: Resume;
  let fixture: ComponentFixture<Resume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resume],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Resume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show every project plus the education entry', () => {
    const entries = (fixture.nativeElement as HTMLElement).querySelectorAll('.cv-entry');
    expect(entries.length).toBe(component.projects.length + 1);
  });
});