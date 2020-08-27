# Host: localhost  (Version: 5.5.53)
# Date: 2020-08-27 20:41:18
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "good"
#

DROP TABLE IF EXISTS `good`;
CREATE TABLE `good` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `color` varchar(255) DEFAULT NULL,
  `img` varchar(255) NOT NULL DEFAULT '',
  `Price` int(11) NOT NULL DEFAULT '0',
  `num` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

#
# Data for table "good"
#

/*!40000 ALTER TABLE `good` DISABLE KEYS */;
INSERT INTO `good` VALUES (27,'BL3019 D11','暗黑色','../imgs/f3.jpg',878,1,18),(28,'BL3019 C12','蓝灰色','../imgs/f2.jpg',855,1,20),(29,'BL3019 D11','暗黑色','../imgs/f3.jpg',878,1,20),(30,'BL3019 D20','浅蓝色','../imgs/f4.jpg',850,1,18);
/*!40000 ALTER TABLE `good` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(24) DEFAULT NULL,
  `userpass` varchar(26) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (18,'19993442546','11111111'),(20,'19993442544','22222222');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
