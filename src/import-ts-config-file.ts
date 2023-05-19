import {randomString} from '@augment-vir/node-js';
import {unlink} from 'fs/promises';
import {basename, dirname, join} from 'path';

export async function importTsConfigFile(typescriptConfigFilePath: string) {
    const configName = basename(typescriptConfigFilePath).replace(/\.[^\.]+$/, '');

    const tempFilePath = join(
        dirname(typescriptConfigFilePath),
        `${configName}-output-${Date.now()}-${randomString()}.js`,
    );

    try {
        await (
            await import('esbuild')
        ).build({
            entryPoints: [typescriptConfigFilePath],
            outfile: tempFilePath,
            write: true,
            bundle: false,
            format: 'cjs',
        });

        const loadedConfig = await import(tempFilePath);

        return loadedConfig;
    } finally {
        try {
            await unlink(tempFilePath);
        } catch (unlinkError) {}
    }
}
