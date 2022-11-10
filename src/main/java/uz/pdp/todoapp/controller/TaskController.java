package uz.pdp.todoapp.controller;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTaskById(@PathVariable Integer id) {
        taskService.deleteTaskById(id);
        return ResponseEntity.ok(new ApiResponse("Task with id: " + id + " successfully deleted!!!", true, null));
    }
}
