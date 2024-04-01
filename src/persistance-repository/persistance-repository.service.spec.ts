import { Test, TestingModule } from '@nestjs/testing';
import { PersistanceRepositoryService } from './persistance-repository.service';

describe('PersistanceRepositoryService', () => {
  let service: PersistanceRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersistanceRepositoryService],
    }).compile();

    service = module.get<PersistanceRepositoryService>(PersistanceRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
