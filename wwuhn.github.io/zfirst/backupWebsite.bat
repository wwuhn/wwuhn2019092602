md %userprofile%\desktop\website
md %userprofile%\desktop\website\pctips
md %userprofile%\desktop\website\zfirst

xcopy /s I:\wwuhn\website\pctips %userprofile%\desktop\website\pctips
xcopy /s I:\wwuhn\website\zfirst %userprofile%\desktop\website\zfirst
xcopy I:\wwuhn\website\index.html %userprofile%\desktop\website


cd %ProgramFiles%\winrar
%systemdrive%

rar a -r %userprofile%\desktop\website.rar %userprofile%\desktop\website\*


rem a��ʾ����ѹ���ĵ������
rem -m5��ָ�����ѹ�����ʣ�
rem -s�ǲ��ù�ʵѹ����
rem -r�ǵݹ�ѹ���ļ����������ļ���
rem ����Ĵ�ѹ���������ļ��С�
rem ���winrar�İ�װĿ¼���ڻ�������PATH�У�����Ҫдȫ·�����磺"C:\Program Files\WinRar\rar" ......