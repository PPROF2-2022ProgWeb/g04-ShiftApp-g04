package com.example.demo.model;

import java.util.Date;

public class REGISTRO_USUARIO {
	private Integer id_registro;
	private String nombre;
	private String apellido;
	private String email;
	private String provincia;
	private String pais;
	private String tipo;
	private String password;
	private Date fecha_nacimiento;
	
	public REGISTRO_USUARIO() {
		// TODO Auto-generated constructor stub
	}

	public REGISTRO_USUARIO(Integer id_registro, String nombre, String apellido, String email, String provincia,
			String pais, String tipo, String password, Date fecha_nacimiento) {
		super();
		this.id_registro = id_registro;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.provincia = provincia;
		this.pais = pais;
		this.tipo = tipo;
		this.password = password;
		this.fecha_nacimiento = fecha_nacimiento;
	}

	public Integer getId_registro() {
		return id_registro;
	}

	public void setId_registro(Integer id_registro) {
		this.id_registro = id_registro;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getFecha_nacimiento() {
		return fecha_nacimiento;
	}

	public void setFecha_nacimiento(Date fecha_nacimiento) {
		this.fecha_nacimiento = fecha_nacimiento;
	}

	@Override
	public String toString() {
		return "REGISTRO_USUARIO [id_registro=" + id_registro + ", nombre=" + nombre + ", apellido=" + apellido
				+ ", email=" + email + ", provincia=" + provincia + ", pais=" + pais + ", tipo=" + tipo + ", password="
				+ password + ", fecha_nacimiento=" + fecha_nacimiento + "]";
	}

	
	
//	  `fecha_nacimiento` date NOT NULL,

}
