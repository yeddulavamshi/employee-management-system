package com.backend.www.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("https://employee-management-system-two-rho.vercel.app")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> user) {
        String username = user.get("username");
        String password = user.get("password");

        Map<String, String> response = new HashMap<>();

        if ("admin".equals(username) && "admin123".equals(password)) {
            response.put("message", "Login Successful");
            response.put("token", "dummy-jwt-token-12345");
            return response;
        } else {
            throw new RuntimeException("Invalid Credentials");
        }
    }
	
}
