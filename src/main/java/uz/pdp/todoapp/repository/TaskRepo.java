package uz.pdp.todoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uz.pdp.todoapp.entity.Task;


public interface TaskRepo extends JpaRepository<Task, Integer> {
}
