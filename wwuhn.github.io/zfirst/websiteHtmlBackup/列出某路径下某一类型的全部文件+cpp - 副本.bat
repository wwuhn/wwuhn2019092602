@echo off
setlocal enabledelayedexpansion
echo.>D:\websiteHtmlBackup\fileList.txt
color 3a
echo.
echo ϵͳ���ڲ����ļ��������ĵȺ�......
echo.

::for %%a in (C D E F) do (
for %%a in (F:\Website) do (
cd /d %%a\

	for /r %%b in (*.c *.cpp) do (
		if exist "%%b" (
			echo %%b
			echo %%b>>D:\websiteHtmlBackup\fileList.txt
		)
	)
)



type D:\websiteHtmlBackup\fileList.txt | find /i "\" && goto no
echo.
echo �ļ�����û�ҵ�!
del D:\websiteHtmlBackup\fileList.txt>nul 2>nul
echo.
pause
exit
:no
::cls
echo.
echo �ļ�������ϲ���¼��D:\websiteHtmlBackup\fileList.txt�� !
echo �ֲ鵽%b%�ļ��ܵĸ�����!n!
echo.
echo �Ƿ���ı��鿴��¼ ?
echo.
echo ѡ��" Y "�鿴�� ѡ��" N "�˳���
echo.
set /p Choice=Y/N: 
IF /I '%Choice:~0,1%'=='y' goto A
IF /I '%Choice:~0,1%'=='n' goto B
pause
exit
:A
start D:\websiteHtmlBackup\fileList.txt
exit
pause
:b
exit