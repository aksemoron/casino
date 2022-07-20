package authorization.rest;

import authorization.dto.LoginDto;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class Bankroll {
//Изменение текущего банкрола юзера
    @PatchMapping("/users/{id}")
    public LoginDto currentUser(@RequestHeader("Authorization") String token) {
        System.out.println("-----------");
        LoginDto loginDto = new LoginDto();
        loginDto.setId("idsadsadasdasdasdasd");
        loginDto.setBankroll(1L);
        loginDto.setToken("token");
        loginDto.setUsername("username");
        return loginDto;
    }
}
