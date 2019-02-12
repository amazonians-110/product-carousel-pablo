DROP TABLE products cascade;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  image varchar(100) default 'image',
  name TEXT NOT NULL,
  price varchar(16) NOT NULL,
  avg_review varchar(8) NOT NULL,
  is_prime BOOLEAN default 'f',
  category varchar(100) default NULL,
  manufacturer varchar(100) default NULL
);

INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('faucibus id, libero.','04.7','f','805.44','Public Relations','New Caledonia'),('Nunc quis arcu vel','02.6','t','999.04','Quality Assurance','Cayman Islands'),('odio. Phasellus at augue id','03.7','t','333.26','Quality Assurance','Japan'),('cursus purus. Nullam','05.0','t','911.57','Finances','Saudi Arabia'),('sem elit, pharetra ut, pharetra sed,','02.1','t','691.40','Sales and Marketing','Lesotho'),('orci, in consequat enim diam vel arcu.','03.5','f','828.44','Tech Support','Slovenia'),('faucibus id, libero. Donec consectetuer mauris id','02.9','f','784.12','Legal Department','Bahamas'),('mattis. Integer eu','02.6','t','229.81','Legal Department','Solomon Islands'),('Mauris vestibulum, neque sed dictum eleifend,','02.5','f','150.11','Customer Relations','Andorra'),('ac turpis egestas. Fusce','03.0','t','641.84','Finances','Côte D''Ivoire (Ivory Coast)');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('Fusce mollis. Duis sit amet diam eu','02.6','f','544.60','Advertising','Guernsey'),('sem mollis dui, in sodales elit','04.3','t','917.69','Customer Relations','Mexico'),('porttitor interdum. Sed auctor odio a','02.2','t','400.00','Accounting','Austria'),('arcu. Nunc mauris. Morbi non sapien','03.1','t','774.68','Asset Management','Maldives'),('Sed eu eros. Nam consequat','02.2','t','332.61','Advertising','Sweden'),('vulputate, risus a ultricies adipiscing,','05.0','t','870.17','Customer Service','Congo (Brazzaville)'),('mauris ut mi. Duis','04.6','f','288.98','Payroll','Gibraltar'),('iaculis aliquet diam. Sed diam lorem, auctor','04.2','t','686.56','Payroll','Lesotho'),('ut quam vel sapien imperdiet ornare.','02.8','t','884.29','Asset Management','Liberia'),('id, erat. Etiam','04.1','t','90.55','Advertising','Rwanda');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('aliquet. Phasellus fermentum','04.5','t','725.56','Research and Development','Malawi'),('aliquet nec, imperdiet nec, leo. Morbi neque','02.5','t','285.72','Advertising','Botswana'),('hendrerit. Donec porttitor','04.1','f','941.01','Sales and Marketing','Aruba'),('leo elementum sem, vitae','03.0','f','917.64','Media Relations','Thailand'),('aliquet. Phasellus fermentum convallis ligula. Donec','03.8','t','796.06','Quality Assurance','Saudi Arabia'),('fringilla cursus purus.','02.4','t','292.98','Advertising','Bolivia'),('tempus risus. Donec egestas. Duis ac','02.9','t','189.29','Customer Relations','Guernsey'),('faucibus leo, in lobortis tellus justo','03.5','f','817.37','Customer Service','Belgium'),('nisl arcu iaculis enim, sit','04.2','t','206.88','Research and Development','Macedonia'),('non, vestibulum nec, euismod in, dolor. Fusce','04.4','t','309.47','Accounting','United States');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('bibendum. Donec felis orci,','02.1','f','557.96','Media Relations','Dominica'),('velit. Pellentesque ultricies','03.6','f','855.92','Customer Relations','Central African Republic'),('arcu. Morbi sit','02.5','f','236.89','Public Relations','Syria'),('a, aliquet vel, vulputate eu,','04.4','f','371.33','Research and Development','Moldova'),('sagittis lobortis mauris. Suspendisse aliquet molestie tellus.','04.9','f','34.74','Legal Department','Jordan'),('at, iaculis quis, pede. Praesent','05.0','f','213.15','Customer Service','Denmark'),('quis lectus. Nullam suscipit, est ac','02.7','t','118.65','Asset Management','Syria'),('orci lacus vestibulum lorem, sit','03.1','t','236.51','Advertising','French Polynesia'),('odio. Etiam ligula','04.9','f','769.39','Public Relations','Myanmar'),('Nunc lectus pede,','04.7','t','344.18','Advertising','Taiwan');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('non, cursus non,','04.8','t','779.98','Advertising','Malta'),('mauris sit amet lorem','02.0','t','559.18','Human Resources','Dominican Republic'),('dui. Fusce diam nunc, ullamcorper eu, euismod','04.3','t','611.01','Asset Management','Bermuda'),('In nec orci.','03.8','t','585.92','Sales and Marketing','Nicaragua'),('Nulla aliquet. Proin velit. Sed','03.0','f','934.71','Public Relations','Guinea'),('Fusce aliquet magna a','03.0','t','666.79','Research and Development','Korea, South'),('molestie tortor nibh sit amet','03.0','f','320.15','Advertising','Azerbaijan'),('magna. Sed eu','04.0','t','881.22','Legal Department','Georgia'),('lorem lorem, luctus ut, pellentesque','02.1','t','217.25','Tech Support','Armenia'),('amet massa. Quisque porttitor eros','02.2','f','183.76','Accounting','Cocos (Keeling) Islands');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('sit amet orci.','04.2','t','827.80','Research and Development','Ecuador'),('ac, fermentum vel,','04.6','f','779.98','Tech Support','Cook Islands'),('molestie arcu. Sed eu nibh vulputate mauris','03.2','t','701.59','Advertising','Lebanon'),('adipiscing elit. Curabitur sed tortor. Integer aliquam','03.9','f','395.86','Accounting','Germany'),('enim. Mauris quis turpis','04.4','t','73.39','Customer Relations','Tajikistan'),('lorem, sit amet ultricies sem','03.1','t','200.60','Research and Development','Marshall Islands'),('dictum eu, eleifend nec, malesuada','04.7','f','197.58','Tech Support','Solomon Islands'),('ac nulla. In tincidunt congue','04.2','t','161.78','Sales and Marketing','Antigua and Barbuda'),('Integer aliquam adipiscing lacus. Ut nec urna','03.4','t','284.47','Customer Relations','Tanzania'),('auctor, nunc nulla vulputate dui, nec tempus','04.1','t','915.07','Human Resources','Sudan');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('nunc sit amet','03.8','f','216.03','Research and Development','Dominica'),('purus sapien, gravida non,','02.6','f','732.77','Accounting','Saudi Arabia'),('sem ut dolor dapibus','05.0','f','598.62','Payroll','Angola'),('enim nisl elementum purus, accumsan','03.8','t','876.88','Customer Relations','Kyrgyzstan'),('mauris. Integer sem elit, pharetra ut, pharetra','04.8','t','422.45','Finances','Gibraltar'),('Phasellus in felis. Nulla tempor augue ac','05.0','t','171.58','Accounting','Japan'),('Donec egestas. Duis ac arcu. Nunc mauris.','02.4','t','458.30','Customer Relations','Nicaragua'),('convallis dolor. Quisque tincidunt pede','04.3','t','567.91','Public Relations','Saint Vincent and The Grenadines'),('Nulla semper tellus id nunc','04.2','f','141.73','Human Resources','Israel'),('pede. Cum sociis natoque','02.2','f','664.24','Legal Department','Kyrgyzstan');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('aliquet molestie tellus. Aenean','02.4','t','614.46','Customer Relations','Saint Vincent and The Grenadines'),('aliquet magna a','04.5','f','570.64','Advertising','Germany'),('odio a purus. Duis elementum, dui quis','02.1','t','591.33','Customer Relations','Barbados'),('rutrum non, hendrerit id, ante. Nunc','03.8','f','602.78','Public Relations','Tajikistan'),('scelerisque dui. Suspendisse ac metus','02.9','f','656.93','Research and Development','Burkina Faso'),('Duis gravida. Praesent eu','04.9','f','425.71','Finances','Ecuador'),('at auctor ullamcorper, nisl arcu iaculis enim,','04.9','f','252.85','Quality Assurance','Congo (Brazzaville)'),('risus. Donec egestas. Duis','03.2','t','627.18','Payroll','Cape Verde'),('blandit. Nam nulla magna, malesuada','02.7','t','957.28','Tech Support','Luxembourg'),('nulla magna, malesuada vel,','03.0','t','826.55','Accounting','Algeria');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('tempor erat neque non quam.','03.0','t','435.25','Finances','Korea, North'),('nec, eleifend non, dapibus rutrum, justo.','04.5','t','833.90','Sales and Marketing','Mauritius'),('ac turpis egestas. Aliquam','03.3','t','189.83','Human Resources','Taiwan'),('Etiam bibendum fermentum metus.','04.0','t','832.22','Legal Department','Angola'),('dolor sit amet, consectetuer adipiscing elit.','02.3','t','278.72','Customer Relations','Svalbard and Jan Mayen Islands'),('sit amet, consectetuer','03.2','f','276.16','Customer Service','Madagascar'),('sit amet lorem semper auctor.','02.1','t','115.50','Asset Management','United States Minor Outlying Islands'),('aliquet odio. Etiam ligula tortor, dictum','02.4','t','566.65','Payroll','Georgia'),('tristique pharetra. Quisque ac libero nec ligula','03.6','t','332.65','Tech Support','Suriname'),('ligula tortor, dictum eu, placerat eget, venenatis','03.3','f','203.93','Media Relations','Bulgaria');
INSERT INTO products (name,avg_review,is_prime,price,category,manufacturer) VALUES ('sapien molestie orci tincidunt','02.7','f','971.95','Tech Support','Dominica'),('ante dictum cursus. Nunc','03.2','f','821.88','Tech Support','Mexico'),('gravida. Praesent eu','03.2','f','171.36','Asset Management','South Georgia and The South Sandwich Islands'),('habitant morbi tristique senectus et netus','02.9','f','91.91','Advertising','United States'),('Nam consequat dolor','03.4','f','417.67','Payroll','Croatia'),('Mauris ut quam','03.5','t','428.02','Customer Relations','Comoros'),('Duis cursus, diam at pretium aliquet,','02.5','t','151.23','Quality Assurance','Christmas Island'),('Duis elementum, dui quis accumsan convallis,','02.8','f','399.18','Payroll','Bonaire, Sint Eustatius and Saba'),('Nulla facilisis. Suspendisse commodo','02.2','f','321.46','Quality Assurance','Benin'),('rutrum, justo. Praesent luctus. Curabitur egestas nunc','03.7','t','859.32','Human Resources','Palau');

UPDATE products SET image = 'https://loremflickr.com/160/160/consumer/';