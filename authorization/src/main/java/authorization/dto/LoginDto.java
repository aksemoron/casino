package authorization.dto;

public class LoginDto {
    String id;
    String password;
    String username;
    Long bankroll;
    String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getBankroll() {
        return bankroll;
    }

    public void setBankroll(Long bankroll) {
        this.bankroll = bankroll;
    }
}
