import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGitComponent } from './signup-git.component';

describe('SignupGitComponent', () => {
  let component: SignupGitComponent;
  let fixture: ComponentFixture<SignupGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
