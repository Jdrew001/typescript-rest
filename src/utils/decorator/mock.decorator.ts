import { mockService } from "../../services/mock.service";

export const Mock = (value) => {
    return (target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
        descriptor.value = async function(...args: any[]) {
            return await mockService.fetchResource(value);
        }
    };
};