package uz.pdp.todoapp.controller;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.pdp.todoapp.dto.TaskDto;
import uz.pdp.todoapp.entity.Task;
import uz.pdp.todoapp.payload.ApiResponse;
import uz.pdp.todoapp.service.TaskService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public ResponseEntity<?> getAllTasks(

    ) {
        List<Task> allTasks = taskService.getAllTasks();
        return ResponseEntity.ok(new ApiResponse("succes", true, allTasks));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskById(
            @PathVariable Integer id
    ) {
        Task task = taskService.getTaskById(id);
        return ResponseEntity.ok(new ApiResponse("succes", true, task));
    }


    @PostMapping
    public ResponseEntity<?> saveTask(@RequestBody TaskDto taskDto) {
        taskService.saveTask(taskDto);
        return ResponseEntity.ok(new ApiResponse(
                String.format("%s successfully saved", taskDto.getTitle()),
                true
        ));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTaskById(@PathVariable Integer id) {
        taskService.deleteTaskById(id);
        return ResponseEntity.ok(new ApiResponse("Tasklar with id: " + id + " successfully deleted!!!", true, null));
    }
}
