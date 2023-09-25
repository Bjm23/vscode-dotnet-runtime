/*---------------------------------------------------------------------------------------------
*  Licensed to the .NET Foundation under one or more agreements.
*  The .NET Foundation licenses this file to you under the MIT license.
*--------------------------------------------------------------------------------------------*/

import * as path from 'path';
import { IInstallationDirectoryProvider } from './IInstallationDirectoryProvider';

export class RuntimeInstallationDirectoryProvider extends IInstallationDirectoryProvider {
    public getInstallDir(version: string): string {
        const dotnetInstallDir = path.join(this.getStoragePath(), version);
        return dotnetInstallDir;
    }
}
