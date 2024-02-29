CREATE DATABASE  IF NOT EXISTS `carrentaldatabase` ;
USE `carrentaldatabase`;



DROP TABLE IF EXISTS `car`;

CREATE TABLE `car` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `transmission` varchar(255) DEFAULT NULL,
  `year` bigint DEFAULT NULL,
  `price` bigint default null, 
  `fuel_type` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `img` longblob  default NULL,
  PRIMARY KEY (`id`)
);


UNLOCK TABLES;

