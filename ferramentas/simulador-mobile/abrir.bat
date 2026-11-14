@echo off
rem Abre o Simulador Mobile servindo a pasta da agencia (porta 5190),
rem para os diagnosticos automaticos funcionarem nos sites locais.
cd /d "%~dp0..\.."
start "" "http://localhost:5190/ferramentas/simulador-mobile/"
npx --yes http-server . -p 5190 -c-1 -a 127.0.0.1
