#!/bin/sh
UUID=${UUID:-'28090647-38a0-499c-830d-3c864cebcc66'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
