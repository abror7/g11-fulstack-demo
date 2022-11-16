package uz.pdp.todoapp.service;


import lombok.RequiredArgsConstructor;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;
import uz.pdp.todoapp.dto.TaskDto;
import uz.pdp.todoapp.entity.Task;
import uz.pdp.todoapp.exception.ResourceNotFoundException;
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

    public void saveTask(TaskDto taskDto) {

        taskRepo.save(Task.builder()
                .id(taskDto.getId())
                .title(taskDto.getTitle())
                .description(taskDto.getDescription())
//                ........
//                ........
//                ........
                .build());

    }

    public Task getTaskById(Integer id) {
        return taskRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("task", id));
    }
}
