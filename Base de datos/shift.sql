-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2022 a las 03:17:35
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `shift`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id_login` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `contraseña` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrousua`
--

CREATE TABLE `registrousua` (
  `id_resgistro` int(11) NOT NULL,
  `id_tipousu` int(11) NOT NULL,
  `nombre` varchar(12) NOT NULL,
  `apellido` varchar(12) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `provincia` varchar(20) DEFAULT NULL,
  `contraseña` varchar(10) NOT NULL,
  `pais` varchar(10) NOT NULL,
  `mail` varchar(25) NOT NULL,
  `idlogin` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousu`
--

CREATE TABLE `tipousu` (
  `id_tipo` int(11) NOT NULL,
  `tipo_usuario` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipousu`
--

INSERT INTO `tipousu` (`id_tipo`, `tipo_usuario`) VALUES
(1, 'admin'),
(2, 'empresa'),
(3, 'cliente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id_login`);

--
-- Indices de la tabla `registrousua`
--
ALTER TABLE `registrousua`
  ADD PRIMARY KEY (`id_resgistro`),
  ADD KEY `id_tipousu` (`id_tipousu`),
  ADD KEY `fk_id_login` (`idlogin`);

--
-- Indices de la tabla `tipousu`
--
ALTER TABLE `tipousu`
  ADD PRIMARY KEY (`id_tipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registrousua`
--
ALTER TABLE `registrousua`
  MODIFY `id_resgistro` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `registrousua`
--
ALTER TABLE `registrousua`
  ADD CONSTRAINT `fk_id_login` FOREIGN KEY (`idlogin`) REFERENCES `login` (`id_login`),
  ADD CONSTRAINT `fk_id_tipousu` FOREIGN KEY (`id_tipousu`) REFERENCES `tipousu` (`id_tipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
