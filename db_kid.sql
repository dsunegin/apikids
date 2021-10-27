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
published INT(1) UNSIGNED DEFAULT 0,
url TEXT,
youtube_channel TEXT,
ru INT(1) UNSIGNED DEFAULT 0,
uk INT(1) UNSIGNED DEFAULT 0,
be INT(1) UNSIGNED DEFAULT 0,
pl INT(1) UNSIGNED DEFAULT 0,
en INT(1) UNSIGNED DEFAULT 0,
fr INT(1) UNSIGNED DEFAULT 0,
de INT(1) UNSIGNED DEFAULT 0,
es INT(1) UNSIGNED DEFAULT 0,
it INT(1) UNSIGNED DEFAULT 0,
bg INT(1) UNSIGNED DEFAULT 0
);


