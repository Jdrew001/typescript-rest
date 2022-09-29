import { Task } from "../models/task.model";
import { Service } from 'typedi';
import { Container } from 'typedi';
import { mockService } from "./mock.service";
import { Mock } from "../utils/decorator/mock.decorator";

@Service()
class TestService {

    @Mock('store')
    async getTask() {
        //TODO: Implement
    }

    getNewTask(): Task {
        return {
            id: 1,
            title: "Some title here",
            completed: false
        }
    }
}

export const testService = Container.get(TestService);