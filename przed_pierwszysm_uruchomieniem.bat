@echo off
start /WAIT cmd.exe /c "npm i"
cd client & start /WAIT cmd.exe /c "npm i" & start /WAIT cmd.exe /c "npm run build"