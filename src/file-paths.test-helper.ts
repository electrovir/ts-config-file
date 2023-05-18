import {dirname, join} from 'path';

export const repoRootDirPath = dirname(__dirname);

export const testFilesDirPath = join(repoRootDirPath, 'test-files');
