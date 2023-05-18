import {importTsConfigFile} from '..';

export async function loadMyConfig() {
    return await importTsConfigFile('path/to/my/ts/file.ts');
}
