import { TestBed } from '@angular/core/testing';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TimelineService } from './timeline.service';
import { TimelineMapper } from '../mapper/timeline.service.mapper';
import { TimelineResponse, Timeline } from '../model/timeline.model';
import { mockTimeline, mockTimelineResponse } from 'test/mocks/timeline.mock';
import { environment } from '@environments/environment';

describe('TimelineService', () => {
  let service: TimelineService;
  let httpTestingController: HttpTestingController;
  let mockTimelineMapper: jasmine.SpyObj<TimelineMapper>;

  const mockApiUrl = 'https://api.example.com';

  beforeEach(() => {
    mockTimelineMapper = jasmine.createSpyObj<TimelineMapper>(
      'TimelineMapper',
      ['mapTimelineData'],
    );
    mockTimelineMapper.mapTimelineData.and.returnValue(mockTimeline);

    // Mock environment.API_URL as a plain property
    Object.defineProperty(environment, 'API_URL', {
      value: mockApiUrl,
      writable: true,
    });

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        TimelineService,
        { provide: TimelineMapper, useValue: mockTimelineMapper },
      ],
    });

    service = TestBed.inject(TimelineService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getTimeline', () => {
    it('should fetch timeline data with default page 1 and map response', () => {
      service.getTimeline().subscribe((data) => {
        expect(data).toEqual(mockTimeline);
      });

      const req = httpTestingController.expectOne(
        `${mockApiUrl}/transactions?page=1`,
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('page')).toBe('1');
      req.flush(mockTimelineResponse);

      expect(mockTimelineMapper.mapTimelineData).toHaveBeenCalledWith(
        mockTimelineResponse,
      );
    });

    it('should fetch timeline data with specified page and map response', () => {
      const page = 3;
      service.getTimeline(page).subscribe((data) => {
        expect(data).toEqual(mockTimeline);
      });

      const req = httpTestingController.expectOne(
        `${mockApiUrl}/transactions?page=${page}`,
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('page')).toBe(page.toString());
      req.flush(mockTimelineResponse);

      expect(mockTimelineMapper.mapTimelineData).toHaveBeenCalledWith(
        mockTimelineResponse,
      );
    });

    it('should handle empty response', () => {
      const emptyResponse: TimelineResponse = {
        days: [],
        account: {
          id: 1,
          name: 'Main Account',
          iban: 'NL123',
          balance: 0,
          currencyCode: 'EUR',
          currencyRate: 1,
        },
        pagination: {
          currentPage: 1,
          pageSize: 10,
          totalItems: 0,
          totalPages: 0,
          hasNext: false,
          hasPrevious: false,
        },
      };
      const emptyTimeline: Timeline = {
        days: [],
        account: emptyResponse.account,
        pagination: emptyResponse.pagination,
      };

      mockTimelineMapper.mapTimelineData.and.returnValue(emptyTimeline);

      service.getTimeline().subscribe((data) => {
        expect(data).toEqual(emptyTimeline);
      });

      const req = httpTestingController.expectOne(
        `${mockApiUrl}/transactions?page=1`,
      );
      req.flush(emptyResponse);

      expect(mockTimelineMapper.mapTimelineData).toHaveBeenCalledWith(
        emptyResponse,
      );
    });
  });
});
