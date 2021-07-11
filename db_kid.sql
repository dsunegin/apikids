CREATE DATABASE kid CHARACTER SET utf8 COLLATE utf8_general_ci;
create user kid_user@localhost;
set password for kid_user@localhost=password('psw_kid_user');
grant all on kid.* to kid_user@localhost with grant option;

use kid;

CREATE TABLE cartoon (
id INT(7) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
alias VARCHAR(255) NOT NULL,
video TEXT,
image TEXT,
description TEXT,
created DATETIME DEFAULT  CURRENT_TIMESTAMP,
publish_up DATETIME,
url TEXT,
youtube_channel TEXT
);


