-- MySQL Script generated by MySQL Workbench
-- 12/26/18 07:06:30
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema heroku_e680d1d8c5e6ace
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema heroku_e680d1d8c5e6ace
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `heroku_e680d1d8c5e6ace` DEFAULT CHARACTER SET utf8 ;
USE `heroku_e680d1d8c5e6ace` ;

-- -----------------------------------------------------
-- Table `heroku_e680d1d8c5e6ace`.`bookcar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_e680d1d8c5e6ace`.`bookcar` (
  `customer` INT(11) NOT NULL,
  `address` VARCHAR(256) CHARACTER SET 'utf8' NOT NULL,
  `note` VARCHAR(512) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `geocodin` INT(11) NULL DEFAULT NULL,
  `regeocoding` INT(11) NULL DEFAULT NULL,
  `biker` INT(11) NULL DEFAULT NULL,
  `time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` VARCHAR(32) CHARACTER SET 'utf8' NOT NULL DEFAULT 'chưa được định vị' COMMENT 'chưa được định vị, đã định vị xong, đã có xe nhận, đang di chuyển, đã hoàn thành',
  `seats` INT(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`customer`, `time`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `heroku_e680d1d8c5e6ace`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_e680d1d8c5e6ace`.`customer` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(128) CHARACTER SET 'utf8' NOT NULL,
  `phone` VARCHAR(16) CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `phone` (`phone` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `heroku_e680d1d8c5e6ace`.`geocode`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_e680d1d8c5e6ace`.`geocode` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `latitude` DOUBLE NOT NULL,
  `longitude` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `x` (`latitude` ASC, `longitude` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `heroku_e680d1d8c5e6ace`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `heroku_e680d1d8c5e6ace`.`user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(128) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `phone` VARCHAR(12) CHARACTER SET 'utf8' NOT NULL,
  `email` VARCHAR(128) CHARACTER SET 'utf8' NOT NULL,
  `password` VARCHAR(128) CHARACTER SET 'utf8' NOT NULL,
  `role` INT(11) NULL DEFAULT NULL COMMENT '1 => request; 2 => location; 3 => management request; 4 => drive',
  `seat` INT(11) NOT NULL DEFAULT '0',
  `longitude` VARCHAR(16) CHARACTER SET 'utf8' NULL DEFAULT '',
  `latitude` VARCHAR(16) CHARACTER SET 'utf8' NULL DEFAULT '',
  `distance_min` VARCHAR(16) CHARACTER SET 'utf8' NULL DEFAULT '' COMMENT 'unit: kilometer',
  `status` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci
ROW_FORMAT = COMPACT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
