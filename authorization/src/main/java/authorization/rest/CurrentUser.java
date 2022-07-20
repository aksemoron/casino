package authorization.rest;

import authorization.dto.LoginDto;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class CurrentUser {
//проверяет текущего пользователя
    @PostMapping("/current_user")
    public LoginDto currentUser() {
        System.out.println("-----------");
        LoginDto loginDto = new LoginDto();
        loginDto.setId("idsadsadasdasdasdasd");
        loginDto.setBankroll(10000L);
        loginDto.setToken("token");
        loginDto.setUsername("username");
        return loginDto;
    }
}
