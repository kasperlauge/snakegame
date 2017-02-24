import { TestBed, inject } from '@angular/core/testing';
import { SaveHighScoreService } from './save-high-score.service';

describe('SaveHighScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveHighScoreService]
    });
  });

  it('should ...', inject([SaveHighScoreService], (service: SaveHighScoreService) => {
    expect(service).toBeTruthy();
  }));
});
