-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 18, 2023 at 08:58 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `farm`
--

-- --------------------------------------------------------

--
-- Table structure for table `authentication`
--

DROP TABLE IF EXISTS `authentication`;
CREATE TABLE IF NOT EXISTS `authentication` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `authentication`
--

INSERT INTO `authentication` (`ID`, `firstName`, `lastName`, `email`, `password`) VALUES
(8, 'Janish', 'Perera', 'littleJanishPerera@gmai.com', '$2b$10$7kVjZSsBaqL5E5b87GoBDepYWw6/CjSNdAitaI4dKUhiV1QJHXedW'),
(5, 'Louise', 'Michelle', 'michelle@gmai.com', '$2b$10$pHyP7qHID4yMruwyYyjoLedMMDEzQAsZlh1OCuQBZhDiqHLO9LFvu');

-- --------------------------------------------------------

--
-- Table structure for table `cages`
--

DROP TABLE IF EXISTS `cages`;
CREATE TABLE IF NOT EXISTS `cages` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Cage_Size` int NOT NULL,
  `Section_Id` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cages`
--

INSERT INTO `cages` (`Id`, `Cage_Size`, `Section_Id`) VALUES
(1, 116, 0),
(2, 100, 0),
(3, 150, 0),
(4, 75, 0),
(5, 80, 0);

-- --------------------------------------------------------

--
-- Table structure for table `chicken`
--

DROP TABLE IF EXISTS `chicken`;
CREATE TABLE IF NOT EXISTS `chicken` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `birthday` date NOT NULL,
  `weight` float NOT NULL,
  `steps` int NOT NULL DEFAULT '0',
  `isRunning` tinyint(1) NOT NULL DEFAULT '0',
  `Cage_Id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `test` (`Cage_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chicken`
--

INSERT INTO `chicken` (`id`, `name`, `birthday`, `weight`, `steps`, `isRunning`, `Cage_Id`) VALUES
(12, 'chickenTest12', '2023-05-01', 1.5, 0, 1, 5),
(14, 'chickenTest14', '2022-04-01', 2.3, 2, 0, 2),
(17, 'chickenTest17', '2023-04-29', 1.5, 1, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

DROP TABLE IF EXISTS `section`;
CREATE TABLE IF NOT EXISTS `section` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Section_Name` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`Id`, `Section_Name`) VALUES
(1, 'section_A'),
(2, 'Section_B');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chicken`
--
ALTER TABLE `chicken`
  ADD CONSTRAINT `test` FOREIGN KEY (`Cage_Id`) REFERENCES `cages` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
