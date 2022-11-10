package uz.pdp.todoapp.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uz.pdp.todoapp.entity.Task;
import uz.pdp.todoapp.repository.TaskRepo;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepo taskRepo;


    public List<Task> getAllTasks() {
        return taskRepo.findAll();
    }

    public void deleteTaskById(Integer id) {
        taskRepo.deleteById(id);
    }
}
