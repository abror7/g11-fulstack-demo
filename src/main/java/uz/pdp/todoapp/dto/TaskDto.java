package uz.pdp.todoapp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class TaskDto {
    private Integer id;
    private String title;
    private String description;
//    ...... todo add more fields

}
