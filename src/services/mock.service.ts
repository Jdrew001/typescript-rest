import Container, { Service } from "typedi";
import path from "path";
import { appRoot } from "../index";
import { promises as fs } from 'fs';

@Service()
export class MockService {
    async fetchResource(name: string) {
        try {
            return JSON.parse(await this.getFile(name));
        } catch(e) {
            console.error('err file', e);
        }
    }

    private async getFile(name: string) {
        return await fs.readFile(path.join(appRoot, `/assets/${name}.json`), 'utf8')
    }
}

export const mockService = Container.get(MockService);