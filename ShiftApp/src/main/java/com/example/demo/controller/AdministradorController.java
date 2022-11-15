package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Producto;
import com.example.demo.respository.ProductoRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")

public class AdministradorController {
	
	@Autowired
	private ProductoRepository repositorio;
	//Listar todos los productos
	@GetMapping("/Producto")
	public List<Producto> listarTodosLosProductos(){
		return repositorio.findAll();
		
	}
	// Permite guardar un Producto
	@PostMapping("/Producto")
	public Producto guardarProducto(@RequestBody Producto Producto) {
		return repositorio.save(Producto);
	}
	
//	@PutMapping("/Producto{id}")
//	public ResponseEntity<Producto> actualizarProducto(@PathVariable int id, @RequestBody Producto detallesEmpleado) {
//		
//	}
	
	// buscar usuario por id
//	@GetMapping("/Producto/{id}")
//	public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable Integer id){
//			Producto Producto = repositorio.findById(id)
//			return ResponseEntity.ok(Producto);
//	}
	
	
}
