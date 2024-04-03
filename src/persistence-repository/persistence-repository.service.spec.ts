import { Test, TestingModule } from "@nestjs/testing";
import { PersistenceRepositoryService } from "./persistence-repository.service";

describe("PersistenceRepositoryService", () => {
  let service: PersistenceRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersistenceRepositoryService],
    }).compile();

    service = module.get<PersistenceRepositoryService>(
      PersistenceRepositoryService,
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
