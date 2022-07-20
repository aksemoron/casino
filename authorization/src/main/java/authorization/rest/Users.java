package authorization.rest;

import authorization.dto.LoginDto;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Users {
    //рейтинг пользователей
    //опрашивается нонстопом
    @GetMapping("/users")
    public List<LoginDto> login() {
        List<LoginDto> list = new ArrayList<>();
        LoginDto loginDto = new LoginDto();
        loginDto.setId("1");
        loginDto.setBankroll(2000L);
        loginDto.setToken("token");
        list.add(loginDto);

        LoginDto loginDto2 = new LoginDto();
        loginDto2.setId("2");
        loginDto2.setBankroll(1000L);
        loginDto2.setToken("token2");
        list.add(loginDto2);
        return list;
    }
}
