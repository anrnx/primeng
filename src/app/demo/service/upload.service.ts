import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

  private endpoint = 'https://api.cityapp.lu/upload/api/files';

  constructor() {

  }

  getEndpoint(): string {
    return this.endpoint;
  }
}
