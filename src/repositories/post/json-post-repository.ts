import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json');

export class JsonPostRepository implements PostRepository {
  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id === id);
    if (!post) {
      throw new Error('Post não encontrado');
    }
    return post;
  }
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(jsonContent);
    const { posts } = parsed;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }
}

// (async () => {
//   // const posts = await postRepository.findAll();
//   // posts.forEach((post) => {
//   //   console.log(post.title)
//   // })
//   const post = await postRepository.findById('3993fcf7-2490-48ed-be2e-58c2030ee76');
//   console.log(post);
// })();
