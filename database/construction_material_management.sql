-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: construction_material_management
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `CLIENT_ID` int NOT NULL AUTO_INCREMENT,
  `CLIENT_NAME` varchar(60) DEFAULT NULL,
  `CITY` varchar(60) DEFAULT NULL,
  `COMPANY` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`CLIENT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (8,'Prajwal Patankar','Pune','Creative Projects Pvt. Ltd.'),(9,'Parimal','Mumbai','Birla Institute of Technology and Science'),(10,'Tanishk','Ratnagiri','Excide'),(11,'Rushikesh','Mumbai','Birla School'),(12,'Atharv','Pune','Godrej Properties'),(13,'Vinayak ','Pune','Godrej Greens'),(14,'Prakash','Bangalore','Bosch'),(15,'Atharva','Bangalore','Godrej Green Pvt. Ltd.');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_details`
--

DROP TABLE IF EXISTS `contact_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_details` (
  `CLIENT_ID` int DEFAULT NULL,
  `PHONE_NO` varchar(13) DEFAULT NULL,
  `EMAIL` varchar(60) DEFAULT NULL,
  `CONTACT_ID` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`CONTACT_ID`),
  KEY `CLIENT_ID` (`CLIENT_ID`),
  CONSTRAINT `contact_details_ibfk_1` FOREIGN KEY (`CLIENT_ID`) REFERENCES `client` (`CLIENT_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_details`
--

LOCK TABLES `contact_details` WRITE;
/*!40000 ALTER TABLE `contact_details` DISABLE KEYS */;
INSERT INTO `contact_details` VALUES (8,'9767726743','prajwalpatankar@icloud.com',2),(8,'9767726743','prajwalpatankar@icloud.com',3),(8,'9767726743','prajwalpatankar@icloud.com',4),(12,'9876987698','atharv@gmail.com',13);
/*!40000 ALTER TABLE `contact_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `EMP_ID` int DEFAULT NULL,
  `EMP_NAME` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Prajwal');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_details`
--

DROP TABLE IF EXISTS `login_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_details` (
  `LOGIN_ID` int NOT NULL AUTO_INCREMENT,
  `USERNAME` varchar(60) DEFAULT NULL,
  `EMAIL` varchar(60) DEFAULT NULL,
  `PASSWORD` varchar(60) DEFAULT NULL,
  `ISACTIVE` varchar(2) DEFAULT 'N',
  PRIMARY KEY (`LOGIN_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_details`
--

LOCK TABLES `login_details` WRITE;
/*!40000 ALTER TABLE `login_details` DISABLE KEYS */;
INSERT INTO `login_details` VALUES (1,'Prajwal','patankarprajwal@gmail.com','Prajwal@1234','N'),(2,'Parimal','parimal@gmail.com','1234','N');
/*!40000 ALTER TABLE `login_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `MATERIAL_ID` int NOT NULL AUTO_INCREMENT,
  `MATERIAL_NAME` varchar(60) DEFAULT NULL,
  `MATERIAL_TYPE` varchar(60) DEFAULT NULL,
  `MATERIAL_GRADE` varchar(60) DEFAULT NULL,
  `COST` int DEFAULT NULL,
  PRIMARY KEY (`MATERIAL_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (5,'UltraTech Cement','Cement','33',340),(6,'UltraTech Cement','Cement','43',370),(7,'UltraTech Cement','Cement','53',390),(8,'Ambuja Cement','Cement','33',325),(9,'Ambuja Cement','Cement','43',345),(10,'Ambuja Cement','Cement','53',370),(11,'Bharat Bricks','Bricks','Fly Ash - 4 inch',5),(12,'Bharat Bricks','Bricks','Fly Ash - 6 inch',7),(13,'Bharat Bricks','Bricks','AAC - 150',27),(14,'Sumit Bricks','Blocks','AAC - 200',30),(15,'Sumit Bricks','Blocks','AAC - 250',35),(16,'Jindal Steel','Steel','FE - 500',48000),(17,'Asian Paints','Paint','OBD',140);
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requirement`
--

DROP TABLE IF EXISTS `requirement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requirement` (
  `ORDER_NO` int NOT NULL AUTO_INCREMENT,
  `CLIENT_ID` int DEFAULT NULL,
  `MATERIAL_ID` int DEFAULT NULL,
  `QUANTITY` int DEFAULT NULL,
  `AMOUNT` int DEFAULT NULL,
  PRIMARY KEY (`ORDER_NO`),
  KEY `CLIENT_ID` (`CLIENT_ID`),
  KEY `MATERIAL_ID` (`MATERIAL_ID`),
  CONSTRAINT `requirement_ibfk_1` FOREIGN KEY (`CLIENT_ID`) REFERENCES `client` (`CLIENT_ID`),
  CONSTRAINT `requirement_ibfk_2` FOREIGN KEY (`MATERIAL_ID`) REFERENCES `material` (`MATERIAL_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requirement`
--

LOCK TABLES `requirement` WRITE;
/*!40000 ALTER TABLE `requirement` DISABLE KEYS */;
INSERT INTO `requirement` VALUES (29,8,5,25,8250),(30,10,7,15,5850),(31,12,11,140,700),(32,13,13,100,2700),(33,8,6,100,37000),(34,11,13,2,54),(35,8,5,50,16500);
/*!40000 ALTER TABLE `requirement` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `UPDATE_STOCK_UPDATE` AFTER UPDATE ON `requirement` FOR EACH ROW BEGIN
UPDATE STOCK SET STOCK = STOCK + OLD.QUANTITY - NEW.QUANTITY WHERE MATERIAL_ID=NEW.MATERIAL_ID;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `HANDLE_DELETE_REQ` BEFORE DELETE ON `requirement` FOR EACH ROW BEGIN UPDATE STOCK SET STOCK=STOCK+OLD.QUANTITY WHERE MATERIAL_ID=OLD.MATERIAL_ID;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `MATERIAL_ID` int DEFAULT NULL,
  `STOCK` int DEFAULT NULL,
  KEY `MATERIAL_ID` (`MATERIAL_ID`),
  CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`MATERIAL_ID`) REFERENCES `material` (`MATERIAL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (5,275),(6,412),(7,4000),(8,202),(13,14898),(14,5000),(16,5),(9,143),(10,111),(11,3860),(12,2500),(15,250);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_req`
--

DROP TABLE IF EXISTS `temp_req`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_req` (
  `CLIENT_ID` int DEFAULT NULL,
  `MATERIAL_ID` int DEFAULT NULL,
  `QUANTITY` int DEFAULT NULL,
  KEY `CLIENT_ID` (`CLIENT_ID`),
  KEY `MATERIAL_ID` (`MATERIAL_ID`),
  CONSTRAINT `temp_req_ibfk_1` FOREIGN KEY (`CLIENT_ID`) REFERENCES `client` (`CLIENT_ID`),
  CONSTRAINT `temp_req_ibfk_2` FOREIGN KEY (`MATERIAL_ID`) REFERENCES `material` (`MATERIAL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_req`
--

LOCK TABLES `temp_req` WRITE;
/*!40000 ALTER TABLE `temp_req` DISABLE KEYS */;
INSERT INTO `temp_req` VALUES (5,1,2),(5,1,2),(5,2,1),(6,1,11),(5,1,2),(6,2,3),(5,1,1),(6,2,1),(6,3,2),(6,1,5),(8,5,25),(10,7,15),(12,11,140),(13,13,100),(8,6,100),(11,13,2),(8,5,50);
/*!40000 ALTER TABLE `temp_req` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `INSERT_AMOUNT` AFTER INSERT ON `temp_req` FOR EACH ROW BEGIN
INSERT INTO REQUIREMENT(CLIENT_ID,MATERIAL_ID,QUANTITY,AMOUNT) VALUES(NEW.CLIENT_ID,NEW.MATERIAL_ID,NEW.QUANTITY,(NEW.QUANTITY*(SELECT COST FROM MATERIAL WHERE MATERIAL_ID=NEW.MATERIAL_ID)));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `UPDATE_STOCK` AFTER INSERT ON `temp_req` FOR EACH ROW BEGIN
UPDATE STOCK SET STOCK = STOCK - NEW.QUANTITY WHERE MATERIAL_ID=NEW.MATERIAL_ID;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-08 10:39:10
