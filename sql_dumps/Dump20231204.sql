-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: Blogs
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.23.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Authors`
--

DROP TABLE IF EXISTS `Authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `password` char(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Authors`
--

LOCK TABLES `Authors` WRITE;
/*!40000 ALTER TABLE `Authors` DISABLE KEYS */;
INSERT INTO `Authors` VALUES (3,'Terri Kuhic','Sienna46@hotmail.com','2023-10-16 14:17:52','$2b$12$VbUGbi7hbyDFG3qdyf.zc.QaBvGVLlrUgfiiy/RrGM.v5p4hZXN0.'),(4,'Leland Simonis','Marcelle_Stanton59@yahoo.com','2023-10-16 14:17:58','$2b$12$nB2M.CdQMGfWONtJyCLVCOrnYJj.flZtDVAEMR/fsiUdR9eWBXdM6'),(5,'Orville Swaniawski','Anjali.Swaniawski46@hotmail.com','2023-10-16 14:18:01','$2b$12$sXoVf39RuiFp2gntinhz9ecg31GZS2nlxPE87WMjHa.CAMjo3zrCq');
/*!40000 ALTER TABLE `Authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BlogTags`
--

DROP TABLE IF EXISTS `BlogTags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BlogTags` (
  `blogid` int NOT NULL,
  `tagid` int NOT NULL,
  PRIMARY KEY (`blogid`,`tagid`),
  KEY `tagid` (`tagid`),
  CONSTRAINT `BlogTags_ibfk_1` FOREIGN KEY (`blogid`) REFERENCES `Blogs` (`id`),
  CONSTRAINT `BlogTags_ibfk_2` FOREIGN KEY (`tagid`) REFERENCES `Tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BlogTags`
--

LOCK TABLES `BlogTags` WRITE;
/*!40000 ALTER TABLE `BlogTags` DISABLE KEYS */;
INSERT INTO `BlogTags` VALUES (49,1),(53,1),(51,4),(52,4);
/*!40000 ALTER TABLE `BlogTags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Blogs`
--

DROP TABLE IF EXISTS `Blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(256) DEFAULT NULL,
  `content` varchar(2048) DEFAULT NULL,
  `location` varchar(64) DEFAULT NULL,
  `authorid` int DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `authorid` (`authorid`),
  CONSTRAINT `Blogs_ibfk_1` FOREIGN KEY (`authorid`) REFERENCES `Authors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Blogs`
--

LOCK TABLES `Blogs` WRITE;
/*!40000 ALTER TABLE `Blogs` DISABLE KEYS */;
INSERT INTO `Blogs` VALUES (3,'orchestrate','Stand-alone bottom-line task-force???? Cloned stable installation!',NULL,4,NULL,'2023-11-02 16:27:27'),(4,'generate','Optional 6th generation policy???? Mandatory explicit hardware!',NULL,3,NULL,'2023-11-02 16:27:27'),(5,'embrace','Organic zero tolerance frame???? Assimilated demand-driven middleware!',NULL,3,NULL,'2023-11-02 16:27:27'),(6,'engage','Switchable coherent extranet???? Diverse web-enabled portal!',NULL,3,NULL,'2023-11-02 16:27:27'),(7,'iterate','Stand-alone transitional moderator???? Adaptive 24 hour structure!',NULL,3,NULL,'2023-11-02 16:27:27'),(8,'innovate','Fully-configurable intermediate circuit???? Reverse-engineered foreground neural-net!',NULL,3,NULL,'2023-11-02 16:27:27'),(9,'maximize','Up-sized optimal firmware???? Synchronised systematic model!',NULL,4,NULL,'2023-11-02 16:27:27'),(10,'optimize','Right-sized multimedia throughput???? User-centric bandwidth-monitored capability!',NULL,4,NULL,'2023-11-02 16:27:27'),(11,'iterate','Robust bi-directional open architecture???? Diverse fault-tolerant service-desk!',NULL,3,NULL,'2023-11-02 16:27:27'),(12,'lol','lol',NULL,5,NULL,'2023-11-02 16:27:27'),(13,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(14,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(15,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(16,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(17,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(18,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(19,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(20,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(21,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(22,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(23,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(24,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(25,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(26,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(27,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(28,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(29,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(30,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(31,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(32,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(33,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(34,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(35,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(36,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(37,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(38,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(39,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(40,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(41,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(42,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(43,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(44,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(45,'lol','lol',NULL,3,NULL,'2023-11-02 16:27:27'),(49,'x','xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',NULL,3,NULL,'2023-11-02 17:03:49'),(51,'zzzzzzz','zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',NULL,3,NULL,'2023-11-02 17:04:58'),(52,'a','aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',NULL,3,NULL,'2023-11-02 17:05:36'),(53,'eeeeeeee','eeeeeeeeeeeeeeeeeeeeeeeeeeeee',NULL,3,NULL,'2023-11-02 17:05:46');
/*!40000 ALTER TABLE `Blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tags`
--

DROP TABLE IF EXISTS `Tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tags`
--

LOCK TABLES `Tags` WRITE;
/*!40000 ALTER TABLE `Tags` DISABLE KEYS */;
INSERT INTO `Tags` VALUES (1,'databases'),(2,'mysql'),(3,'typescript'),(4,'pizza'),(5,'cooking');
/*!40000 ALTER TABLE `Tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-04 11:09:09
