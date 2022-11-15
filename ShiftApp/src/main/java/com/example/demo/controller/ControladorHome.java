package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/administrador")
public class ControladorHome {

	@GetMapping("")
	public String home() {
		return "administrador/home";
	}
	
}
