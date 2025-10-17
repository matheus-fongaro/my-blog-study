import { cache } from 'react';
import { postRepository } from './../../repositories/post/index';

export const findAllPublishedPosts = cache(async () => await postRepository.findAllPublished());