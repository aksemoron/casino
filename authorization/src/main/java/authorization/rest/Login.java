package authorization.rest;

import authorization.dto.LoginDto;
import com.sun.net.httpserver.Headers;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class Login {
    //авторизация

    @PostMapping("/login")
    public LoginDto login(@RequestBody LoginDto loginDto) {
        System.out.println("-----------");
        loginDto.setId("idsadsadasdasdasdasd");
        loginDto.setBankroll(1L);
        loginDto.setToken("token");
        return loginDto;
    }
}
