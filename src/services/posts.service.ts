import type { IPost } from '@/interfaces';

import { ApiVersions, Posts } from '../constants';
import { apiService } from './api.service';

/**
 * @description Get all posts
 * @param {}
 * @return {IPost[]}
 * @url /posts
 */
export const getEmployeeData = (): Promise<IPost[]> => {
  return apiService.get<IPost[], object>(Posts.ALL_POSTS, ApiVersions.V1);
};
