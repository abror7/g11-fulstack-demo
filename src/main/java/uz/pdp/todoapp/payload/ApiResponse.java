package uz.pdp.todoapp.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uz.pdp.todoapp.entity.Task;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ApiResponse {

    private String message;
    private boolean success;
    private Object data;

}
