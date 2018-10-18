-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 18, 2018 at 02:18 PM
-- Server version: 5.6.38
-- PHP Version: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easyplannerdb`
--
CREATE DATABASE IF NOT EXISTS `easyplannerdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `easyplannerdb`;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `event_id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `start_time` varchar(10) NOT NULL,
  `ending_time` varchar(10) NOT NULL,
  `location` varchar(100) NOT NULL,
  `group_name` varchar(45) DEFAULT NULL,
  `group_size` int(8) DEFAULT NULL,
  `describtion` varchar(100) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`event_id`, `year`, `month`, `day`, `start_time`, `ending_time`, `location`, `group_name`, `group_size`, `describtion`, `user_id`) VALUES
(112, 2018, 10, 25, '09:08', '10:09', 'UTS building 6', 'NET. programming', 3, 'Working on assessment', 75),
(117, 2018, 10, 26, '09:08', '10:09', 'UTS building 6', 'NET. programming', 3, 'Working on assessment', 75),
(118, 2018, 10, 29, '09:08', '10:09', 'UTS building 6', 'NET. programming', 3, 'Working on assessment', 75),
(119, 2018, 11, 1, '12:00', '13:00', 'UTS building 10', 'Web programming', 3, 'Planning new project', 75);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `student_id` int(45) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `student_id`, `name`, `password`, `email`) VALUES
(75, 12345678, 'Sarah Berg', '$2b$05$ZOBvfuSMfHOcgexJhTfjAeZOe7RsEcVpdjzzim8wFu.txBVPWx9hC', 'sarahberg@email.com'),
(76, 14158944, 'Johnny Smith', '$2b$05$atDJ7knOZirf1BpiSPv3BuEwwJfQEUc96C9/NDrNQ0E7YT2RsyKn.', 'johsmi@work.no'),
(77, 121212, 'Neo Blacksmith', '$2b$05$fmyLogtIxVRkjM2zyYS2oexlUao4tgwPK3LB01bJn5YYJ4NT/Kjt2', 'blacksmith@cool.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`event_id`),
  ADD KEY `event_user_restriction` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `student_id` (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `event_user_restriction` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
