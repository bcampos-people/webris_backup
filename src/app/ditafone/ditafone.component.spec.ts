import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitafoneComponent } from './ditafone.component';

describe('DitafoneComponent', () => {
  let component: DitafoneComponent;
  let fixture: ComponentFixture<DitafoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitafoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitafoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
