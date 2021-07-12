#!/bin/sh

npm run prestart

pm2 status | grep api && pm2 delete apikid
PORT=6021 pm2 start .  -i 0  --name "apikid"  --output="/dev/null" --log-date-format="YYYY-MM-DD HH:mm Z"
pm2 save