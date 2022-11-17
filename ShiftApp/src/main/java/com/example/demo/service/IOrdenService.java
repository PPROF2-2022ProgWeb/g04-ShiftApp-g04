package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Orden;
import com.example.demo.model.Usuario;

public interface IOrdenService {
	List<Orden> findAll();
	Orden save (Orden orden);
	String generarNumeroOrden();
	Optional<Orden> findByid(Integer id);
	
	List<Orden> findByUsuario (Usuario usuario);
}
