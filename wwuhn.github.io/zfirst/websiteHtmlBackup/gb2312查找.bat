@echo off
echo. >D:\websiteHtmlBackup\filelistWithcontent.txt
color 3a
echo.
echo.
echo                       ϵͳ���ڲ����ļ��������ĵȺ�......
echo.
echo.
for %%a in (F:\Novel) do (
  cd /d %%a\
  for /r . %%b in (*.htm) do (
      if exist "%%b" (
	type "%%b" | findstr /i "charset.gb2312" && echo %%b>>D:\websiteHtmlBackup\filelistWithcontent.txt
      )
  )
)
type D:\websiteHtmlBackup\filelistWithcontent.txt | find /i "\"  && goto no

echo.
echo �ļ�����û�ҵ�!
del D:\websiteHtmlBackup\filelistWithcontent.txt>nul 2>nul
echo.
pause
exit

:no
cls

echo.
echo.
echo �ļ�������ϲ���¼��D:\websiteHtmlBackup\filelistWithcontent.txt�� !
echo.
echo.
echo.
echo �Ƿ���ı��鿴��¼ ?
echo.
echo ѡ��" Y "�鿴��   ѡ��" N "�˳���
echo.
set /p Choice=Y/N: 
IF /I '%Choice:~0,1%'=='y' goto A
IF /I '%Choice:~0,1%'=='n' goto B
pause
exit

:A
start D:\websiteHtmlBackup\filelistWithcontent.txt
exit
pause
:b
exit

:help
cls
echo.
echo.
echo                               ��  ��  ��  ��
echo.
echo        1. ������Ҫ���ҵ�����: ������Ҫ���ҵ��ַ��������ִ������ִ���Ȼ
echo.
echo           ��ȴ�ϵͳΪ����ѯ���ҵ���ϵͳ������һ���ı��ļ�����¼�˺���
echo.
echo           �����������ļ���ŵ�λ�ã�δ�ҵ�ϵͳ����ʾ�ļ�����û�ҵ�!
echo.
echo           �������س���������ʾ����ڶ���ļ���չ��.
echo.
echo        2. ��������ļ���չ��:  ��չ���������κ��ı������ļ����磺txt��
echo.
echo           log��ini��inf��vbs��bat �ȣ�Ҳ����ʹ�� * ���������������ļ���
echo.
echo           ���Ƽ��� * ���ң�����ϵͳ����ʹ�õ��ļ�����ļ�ʱ����ҳ�����
echo.
echo           �����س�������ʼ�����ļ�.
echo.
echo.
echo �밴���������ѡ�����!
echo.
pause
cls
goto fh


:end
exit
 
