package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Orden;

public interface IOrdenService {
	List<Orden> findAll();
	Orden save (Orden orden);
	String generarNumeroOrden();
	
	
}
