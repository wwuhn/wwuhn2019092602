// JavaScript Document
function getkey()
{
urlinfo=window.location.href;  
len=urlinfo.length;
offset=urlinfo.indexOf("?");
newsidinfo=urlinfo.substr(offset+1,len)
newsids=newsidinfo.split("=");
first=newsids[0];
firstvalue=newsids[1];
if(first=="searchkey")
{
formmain.searchkey.value=decodeURI(firstvalue);
}
}
//������ҳʹ�õĺ���
function gooindex()
{
key="?searchkey="+formmain.searchkey.value;
url="./index.html";
window.location=url+key;
}
;