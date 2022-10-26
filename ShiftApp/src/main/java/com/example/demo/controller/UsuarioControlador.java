package com.example.demo.controller;

import java.util.List;

import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Producto;
import com.example.demo.model.Usuario;
import com.example.demo.respository.UsuarioRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class UsuarioControlador {
	
	@Autowired
	private UsuarioRepository repositorioUsu;
	
	//Listar todos los usuarios
	@GetMapping("/Usuarios")
	public List<Usuario> listarTodosLosProductos(){
		return repositorioUsu.findAll();
		
	}
	// Permite guardar el empleado
	@PostMapping("/Usuarios")
	public Usuario guardarUsuario(@RequestBody Usuario Usuario) {
		return repositorioUsu.save(Usuario);
	}
//	//buscar usuario por id
//	@GetMapping("/Usuarios/{id}")
//	public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Integer id){
//		Usuario Usuario = repositorioUsu.findById(id)
//		return ResponseEntity.ok(Usuario);
//}

}
