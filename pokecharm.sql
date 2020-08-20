-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 20, 2020 at 03:47 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokecharm`
--

-- --------------------------------------------------------

--
-- Table structure for table `alphasapphirehoenn`
--

CREATE TABLE `alphasapphirehoenn` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `black2unova`
--

CREATE TABLE `black2unova` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `blackunova`
--

CREATE TABLE `blackunova` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `bluekanto`
--

CREATE TABLE `bluekanto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `bluekanto`
--

INSERT INTO `bluekanto` (`id`, `userID`, `pokemonName`, `normalStatus`, `shinyStatus`) VALUES
(6, 22, 'charmander', 'caught', 'uncaught'),
(7, 22, 'charmeleon', 'caught', 'uncaught'),
(8, 22, 'charizard', 'caught', 'uncaught');

-- --------------------------------------------------------

--
-- Table structure for table `crystaljohto`
--

CREATE TABLE `crystaljohto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `diamondsinnoh`
--

CREATE TABLE `diamondsinnoh` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `emeraldhoenn`
--

CREATE TABLE `emeraldhoenn` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `fireredkanto`
--

CREATE TABLE `fireredkanto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `goldjohto`
--

CREATE TABLE `goldjohto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `heartgoldjohto`
--

CREATE TABLE `heartgoldjohto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `leafgreenkanto`
--

CREATE TABLE `leafgreenkanto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `moonakala`
--

CREATE TABLE `moonakala` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `moonalola`
--

CREATE TABLE `moonalola` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `moonmelemele`
--

CREATE TABLE `moonmelemele` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `moonponi`
--

CREATE TABLE `moonponi` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `moonulaula`
--

CREATE TABLE `moonulaula` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `national`
--

CREATE TABLE `national` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `omegarubyhoenn`
--

CREATE TABLE `omegarubyhoenn` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `pearlsinnoh`
--

CREATE TABLE `pearlsinnoh` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `platinumsinnoh`
--

CREATE TABLE `platinumsinnoh` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `redkanto`
--

CREATE TABLE `redkanto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `redkanto`
--

INSERT INTO `redkanto` (`id`, `userID`, `pokemonName`, `normalStatus`, `shinyStatus`) VALUES
(29, 22, 'bulbasaur', 'caught', 'caught'),
(30, 22, 'ivysaur', 'caught', 'caught'),
(31, 22, 'venusaur', 'caught', 'caught');

-- --------------------------------------------------------

--
-- Table structure for table `rubyhoenn`
--

CREATE TABLE `rubyhoenn` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `sapphirehoenn`
--

CREATE TABLE `sapphirehoenn` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `silverjohto`
--

CREATE TABLE `silverjohto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `soulsilverjohto`
--

CREATE TABLE `soulsilverjohto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `sunakala`
--

CREATE TABLE `sunakala` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `sunalola`
--

CREATE TABLE `sunalola` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `sunmelemele`
--

CREATE TABLE `sunmelemele` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `sunponi`
--

CREATE TABLE `sunponi` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `sunulaula`
--

CREATE TABLE `sunulaula` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultramoonakala`
--

CREATE TABLE `ultramoonakala` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultramoonalola`
--

CREATE TABLE `ultramoonalola` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultramoonmelemele`
--

CREATE TABLE `ultramoonmelemele` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultramoonponi`
--

CREATE TABLE `ultramoonponi` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultramoonulaula`
--

CREATE TABLE `ultramoonulaula` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultrasunakala`
--

CREATE TABLE `ultrasunakala` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultrasunalola`
--

CREATE TABLE `ultrasunalola` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultrasunmelemele`
--

CREATE TABLE `ultrasunmelemele` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultrasunponi`
--

CREATE TABLE `ultrasunponi` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ultrasunulaula`
--

CREATE TABLE `ultrasunulaula` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(40) COLLATE utf8_bin NOT NULL,
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `phoneNumber` varchar(12) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `resetPasswordToken` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phoneNumber`, `password`, `resetPasswordToken`) VALUES
(19, 'hashed User', 'xd@lak.test', '48123456789', '$2a$10$piGY5Qav2F0MuTP1G/s1VO3UPuosozubckqn3dXxUW65Ano9yP2gW', NULL),
(21, 'Mike Magic', 'mikemagic2001@gmail.com', '48123456789', '$2a$10$cdM1A/XVPT9Bw6y5.GNYFuG3S6AOYu5es1K/Ytgzwzu2yH9WuJnTC', NULL),
(22, 'Dave Player', 'daveplayer2001@gmail.com', '48534711258', '$2a$10$tMUEYFIYQxUT8dGTZ4tfXOU2E/n3TVjCrh57WFg0J7vjbrZ/B/cs2', NULL),
(23, 'Marfex', 'marfex@test.test', '+48123456789', '$2a$10$TFtOihcuXc7g3VdPEm/fKOFzmH2zyG3feNw7fQtmHVMTHuFGq9jPS', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `white2unova`
--

CREATE TABLE `white2unova` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `whiteunova`
--

CREATE TABLE `whiteunova` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `xkaloscentral`
--

CREATE TABLE `xkaloscentral` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `xkaloscoastal`
--

CREATE TABLE `xkaloscoastal` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `xkalosmountain`
--

CREATE TABLE `xkalosmountain` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `yellowkanto`
--

CREATE TABLE `yellowkanto` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ykaloscentral`
--

CREATE TABLE `ykaloscentral` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ykaloscoastal`
--

CREATE TABLE `ykaloscoastal` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `ykalosmountain`
--

CREATE TABLE `ykalosmountain` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonName` varchar(40) COLLATE utf8_bin NOT NULL,
  `normalStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught',
  `shinyStatus` varchar(8) COLLATE utf8_bin NOT NULL DEFAULT 'uncaught'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alphasapphirehoenn`
--
ALTER TABLE `alphasapphirehoenn`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `black2unova`
--
ALTER TABLE `black2unova`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `blackunova`
--
ALTER TABLE `blackunova`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `bluekanto`
--
ALTER TABLE `bluekanto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `crystaljohto`
--
ALTER TABLE `crystaljohto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `diamondsinnoh`
--
ALTER TABLE `diamondsinnoh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `emeraldhoenn`
--
ALTER TABLE `emeraldhoenn`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `fireredkanto`
--
ALTER TABLE `fireredkanto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `goldjohto`
--
ALTER TABLE `goldjohto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `heartgoldjohto`
--
ALTER TABLE `heartgoldjohto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `leafgreenkanto`
--
ALTER TABLE `leafgreenkanto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `moonakala`
--
ALTER TABLE `moonakala`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `moonalola`
--
ALTER TABLE `moonalola`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `moonmelemele`
--
ALTER TABLE `moonmelemele`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `moonponi`
--
ALTER TABLE `moonponi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `moonulaula`
--
ALTER TABLE `moonulaula`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `national`
--
ALTER TABLE `national`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `omegarubyhoenn`
--
ALTER TABLE `omegarubyhoenn`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `pearlsinnoh`
--
ALTER TABLE `pearlsinnoh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `platinumsinnoh`
--
ALTER TABLE `platinumsinnoh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `redkanto`
--
ALTER TABLE `redkanto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `rubyhoenn`
--
ALTER TABLE `rubyhoenn`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `sapphirehoenn`
--
ALTER TABLE `sapphirehoenn`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `silverjohto`
--
ALTER TABLE `silverjohto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `soulsilverjohto`
--
ALTER TABLE `soulsilverjohto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `sunakala`
--
ALTER TABLE `sunakala`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `sunalola`
--
ALTER TABLE `sunalola`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `sunmelemele`
--
ALTER TABLE `sunmelemele`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `sunponi`
--
ALTER TABLE `sunponi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `sunulaula`
--
ALTER TABLE `sunulaula`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultramoonakala`
--
ALTER TABLE `ultramoonakala`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultramoonalola`
--
ALTER TABLE `ultramoonalola`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultramoonmelemele`
--
ALTER TABLE `ultramoonmelemele`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultramoonponi`
--
ALTER TABLE `ultramoonponi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultramoonulaula`
--
ALTER TABLE `ultramoonulaula`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultrasunakala`
--
ALTER TABLE `ultrasunakala`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultrasunalola`
--
ALTER TABLE `ultrasunalola`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultrasunmelemele`
--
ALTER TABLE `ultrasunmelemele`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultrasunponi`
--
ALTER TABLE `ultrasunponi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ultrasunulaula`
--
ALTER TABLE `ultrasunulaula`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `white2unova`
--
ALTER TABLE `white2unova`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `whiteunova`
--
ALTER TABLE `whiteunova`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `xkaloscentral`
--
ALTER TABLE `xkaloscentral`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `xkaloscoastal`
--
ALTER TABLE `xkaloscoastal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `xkalosmountain`
--
ALTER TABLE `xkalosmountain`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `yellowkanto`
--
ALTER TABLE `yellowkanto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ykaloscentral`
--
ALTER TABLE `ykaloscentral`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ykaloscoastal`
--
ALTER TABLE `ykaloscoastal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `ykalosmountain`
--
ALTER TABLE `ykalosmountain`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alphasapphirehoenn`
--
ALTER TABLE `alphasapphirehoenn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `black2unova`
--
ALTER TABLE `black2unova`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blackunova`
--
ALTER TABLE `blackunova`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bluekanto`
--
ALTER TABLE `bluekanto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `crystaljohto`
--
ALTER TABLE `crystaljohto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diamondsinnoh`
--
ALTER TABLE `diamondsinnoh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `emeraldhoenn`
--
ALTER TABLE `emeraldhoenn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fireredkanto`
--
ALTER TABLE `fireredkanto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `goldjohto`
--
ALTER TABLE `goldjohto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `heartgoldjohto`
--
ALTER TABLE `heartgoldjohto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leafgreenkanto`
--
ALTER TABLE `leafgreenkanto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `moonakala`
--
ALTER TABLE `moonakala`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `moonalola`
--
ALTER TABLE `moonalola`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `moonmelemele`
--
ALTER TABLE `moonmelemele`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `moonponi`
--
ALTER TABLE `moonponi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `moonulaula`
--
ALTER TABLE `moonulaula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `national`
--
ALTER TABLE `national`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `omegarubyhoenn`
--
ALTER TABLE `omegarubyhoenn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pearlsinnoh`
--
ALTER TABLE `pearlsinnoh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `platinumsinnoh`
--
ALTER TABLE `platinumsinnoh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `redkanto`
--
ALTER TABLE `redkanto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `rubyhoenn`
--
ALTER TABLE `rubyhoenn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sapphirehoenn`
--
ALTER TABLE `sapphirehoenn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `silverjohto`
--
ALTER TABLE `silverjohto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `soulsilverjohto`
--
ALTER TABLE `soulsilverjohto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sunakala`
--
ALTER TABLE `sunakala`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sunalola`
--
ALTER TABLE `sunalola`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sunmelemele`
--
ALTER TABLE `sunmelemele`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sunponi`
--
ALTER TABLE `sunponi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sunulaula`
--
ALTER TABLE `sunulaula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultramoonakala`
--
ALTER TABLE `ultramoonakala`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultramoonalola`
--
ALTER TABLE `ultramoonalola`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultramoonmelemele`
--
ALTER TABLE `ultramoonmelemele`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultramoonponi`
--
ALTER TABLE `ultramoonponi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultramoonulaula`
--
ALTER TABLE `ultramoonulaula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultrasunakala`
--
ALTER TABLE `ultrasunakala`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultrasunalola`
--
ALTER TABLE `ultrasunalola`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultrasunmelemele`
--
ALTER TABLE `ultrasunmelemele`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultrasunponi`
--
ALTER TABLE `ultrasunponi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ultrasunulaula`
--
ALTER TABLE `ultrasunulaula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `white2unova`
--
ALTER TABLE `white2unova`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `whiteunova`
--
ALTER TABLE `whiteunova`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `xkaloscentral`
--
ALTER TABLE `xkaloscentral`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `xkaloscoastal`
--
ALTER TABLE `xkaloscoastal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `xkalosmountain`
--
ALTER TABLE `xkalosmountain`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `yellowkanto`
--
ALTER TABLE `yellowkanto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ykaloscentral`
--
ALTER TABLE `ykaloscentral`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ykaloscoastal`
--
ALTER TABLE `ykaloscoastal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ykalosmountain`
--
ALTER TABLE `ykalosmountain`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alphasapphirehoenn`
--
ALTER TABLE `alphasapphirehoenn`
  ADD CONSTRAINT `alphasapphirehoenn` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `alphasapphirehoenn_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `black2unova`
--
ALTER TABLE `black2unova`
  ADD CONSTRAINT `black2unova` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `black2unova_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `blackunova`
--
ALTER TABLE `blackunova`
  ADD CONSTRAINT `blackunova` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blackunova_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `bluekanto`
--
ALTER TABLE `bluekanto`
  ADD CONSTRAINT `bluekanto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `bluekanto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `crystaljohto`
--
ALTER TABLE `crystaljohto`
  ADD CONSTRAINT `crystaljohto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `crystaljohto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `diamondsinnoh`
--
ALTER TABLE `diamondsinnoh`
  ADD CONSTRAINT `diamondsinnoh` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `diamondsinnoh_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `emeraldhoenn`
--
ALTER TABLE `emeraldhoenn`
  ADD CONSTRAINT `emeraldhoenn` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `emeraldhoenn_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `fireredkanto`
--
ALTER TABLE `fireredkanto`
  ADD CONSTRAINT `fireredkanto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fireredkanto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `goldjohto`
--
ALTER TABLE `goldjohto`
  ADD CONSTRAINT `goldjohto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `goldjohto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `heartgoldjohto`
--
ALTER TABLE `heartgoldjohto`
  ADD CONSTRAINT `heartgoldjohto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `heartgoldjohto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `leafgreenkanto`
--
ALTER TABLE `leafgreenkanto`
  ADD CONSTRAINT `leafgreenkanto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `leafgreenkanto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `moonakala`
--
ALTER TABLE `moonakala`
  ADD CONSTRAINT `moonakala` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `moonakala_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `moonalola`
--
ALTER TABLE `moonalola`
  ADD CONSTRAINT `moonalola` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `moonalola_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `moonmelemele`
--
ALTER TABLE `moonmelemele`
  ADD CONSTRAINT `moonmelemele` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `moonmelemele_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `moonponi`
--
ALTER TABLE `moonponi`
  ADD CONSTRAINT `moonponi` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `moonponi_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `moonulaula`
--
ALTER TABLE `moonulaula`
  ADD CONSTRAINT `moonulaula` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `moonulaula_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `national`
--
ALTER TABLE `national`
  ADD CONSTRAINT `national` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `national_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `omegarubyhoenn`
--
ALTER TABLE `omegarubyhoenn`
  ADD CONSTRAINT `omegarubyhoenn` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `omegarubyhoenn_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `pearlsinnoh`
--
ALTER TABLE `pearlsinnoh`
  ADD CONSTRAINT `pearlsinnoh` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pearlsinnoh_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `platinumsinnoh`
--
ALTER TABLE `platinumsinnoh`
  ADD CONSTRAINT `platinumsinnoh` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `platinumsinnoh_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `redkanto`
--
ALTER TABLE `redkanto`
  ADD CONSTRAINT `redkanto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `redkanto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `rubyhoenn`
--
ALTER TABLE `rubyhoenn`
  ADD CONSTRAINT `rubyhoenn` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `rubyhoenn_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `sapphirehoenn`
--
ALTER TABLE `sapphirehoenn`
  ADD CONSTRAINT `sapphirehoenn` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sapphirehoenn_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `silverjohto`
--
ALTER TABLE `silverjohto`
  ADD CONSTRAINT `silverjohto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `silverjohto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `soulsilverjohto`
--
ALTER TABLE `soulsilverjohto`
  ADD CONSTRAINT `soulsilverjohto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `soulsilverjohto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `sunakala`
--
ALTER TABLE `sunakala`
  ADD CONSTRAINT `sunakala` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sunakala_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `sunalola`
--
ALTER TABLE `sunalola`
  ADD CONSTRAINT `sunalola` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sunalola_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `sunmelemele`
--
ALTER TABLE `sunmelemele`
  ADD CONSTRAINT `sunmelemele` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sunmelemele_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `sunponi`
--
ALTER TABLE `sunponi`
  ADD CONSTRAINT `sunponi` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sunponi_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `sunulaula`
--
ALTER TABLE `sunulaula`
  ADD CONSTRAINT `sunulaula` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sunulaula_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultramoonakala`
--
ALTER TABLE `ultramoonakala`
  ADD CONSTRAINT `ultramoonakala` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultramoonakala_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultramoonalola`
--
ALTER TABLE `ultramoonalola`
  ADD CONSTRAINT `ultramoonalola` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultramoonalola_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultramoonmelemele`
--
ALTER TABLE `ultramoonmelemele`
  ADD CONSTRAINT `ultramoonmelemele` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultramoonmelemele_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultramoonponi`
--
ALTER TABLE `ultramoonponi`
  ADD CONSTRAINT `ultramoonponi` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultramoonponi_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultramoonulaula`
--
ALTER TABLE `ultramoonulaula`
  ADD CONSTRAINT `ultramoonulaula` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultramoonulaula_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultrasunakala`
--
ALTER TABLE `ultrasunakala`
  ADD CONSTRAINT `ultrasunakala` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultrasunakala_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultrasunalola`
--
ALTER TABLE `ultrasunalola`
  ADD CONSTRAINT `ultrasunalola` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultrasunalola_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultrasunmelemele`
--
ALTER TABLE `ultrasunmelemele`
  ADD CONSTRAINT `ultrasunmelemele` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultrasunmelemele_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultrasunponi`
--
ALTER TABLE `ultrasunponi`
  ADD CONSTRAINT `ultrasunponi` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultrasunponi_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ultrasunulaula`
--
ALTER TABLE `ultrasunulaula`
  ADD CONSTRAINT `ultrasunulaula` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ultrasunulaula_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `white2unova`
--
ALTER TABLE `white2unova`
  ADD CONSTRAINT `white2unova` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `white2unova_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `whiteunova`
--
ALTER TABLE `whiteunova`
  ADD CONSTRAINT `whiteunova` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `whiteunova_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `xkaloscentral`
--
ALTER TABLE `xkaloscentral`
  ADD CONSTRAINT `xkaloscentral` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `xkaloscentral_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `xkaloscoastal`
--
ALTER TABLE `xkaloscoastal`
  ADD CONSTRAINT `xkaloscoastal` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `xkaloscoastal_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `xkalosmountain`
--
ALTER TABLE `xkalosmountain`
  ADD CONSTRAINT `xkalosmountain` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `xkalosmountain_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `yellowkanto`
--
ALTER TABLE `yellowkanto`
  ADD CONSTRAINT `yellowkanto` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `yellowkanto_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ykaloscentral`
--
ALTER TABLE `ykaloscentral`
  ADD CONSTRAINT `ykaloscentral` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ykaloscentral_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ykaloscoastal`
--
ALTER TABLE `ykaloscoastal`
  ADD CONSTRAINT `ykaloscoastal` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ykaloscoastal_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `ykalosmountain`
--
ALTER TABLE `ykalosmountain`
  ADD CONSTRAINT `ykalosmountain` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ykalosmountain_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
