

<!--calendar--һ����д��Html,һ����д��JS>-->
/*ũ������һ���ʱ�������6������6���ǽ������ģ���Ϊ�����е��ַ���"2011"�����ģ�*/
				var spd=86400000/*ÿ��ĺ�����*/
				var y11=new Date("1/1/2012");/*����1����*/
				var y70=new Date("1/1/1970");
				
				var sec0=y11-y70;/*1970-2011�ĺ�����((41*365+10)*spd=1293840000000)*/
				
				var sRDate = new Date(2012, 1, 1);
				var eRDate = new Date(2012, 1, 23);/*�����ڵĹ������ڣ���2����*/
				var dday = (eRDate-sRDate)/(24*60*60*1000)+1;

				/*var dday=23*/ /*2011�괺����2��3��(��2012��1.23,����22)����2����*/
				var totalday2011=384/*��ũ������������2012������30�죬��384������3����*/
				var year2011="30;29;30;30;29;30;29;30;29;30;29;30;29"; /*��ũ����ÿ����������4����*/
					year2011=year2011.split(";");
				var month2011="����;����;����;����;������;����;����;����;����;����;ʮ��;ʮһ��;ʮ����" ;
					month2011=month2011.split(";");/*��ũ�����·�������5����*/
				var Dn="��һ;����;����;����;����;����;����;����;����;��ʮ;ʮһ;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;��ʮ;إһ;إ��;إ��;إ��;إ��;إ��;إ��;إ��;إ��;��ʮ"; 
				Dn=Dn.split(";");
				
				var isnMonth = new
					Array("01-","02-","03-","04-","05-","06-","07-","08-","09-","10-","11-","12-");
				var isnDay = new
					Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.","Sun.");
				var isndate=new Array("01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
				today = new Date() ;  
				Year=today.getYear(); 
				Daten1=today.getDate(); 
				
				
				sec1=today.getTime();/*���ڵ�1970.1.1֮��ĺ�����*/
				sec2=sec1-sec0+8*3600*1000
				dayed=parseInt(sec2/spd)
				cndayed=dayed-dday;/*�������������ٹ�����1��;���������ʱ��һ����*/
				dperm=totalday2011/month2011.length
				cnmonth=parseInt(cndayed/dperm);/*ũ����n-1��*/
				
				var total2=0;
				for(i=cnmonth+1;i<year2011.length;i++){
				total2=total2+parseInt(year2011[i]);
				}<!--����ʣ���·ݵ�����-->
				
				pdma=totalday2011-cndayed-total2;/*���»��м���*/
				pdm=year2011[cnmonth]-pdma+1;/*���µĵڼ���*/
				haveday=totalday2011-cndayed-1;/*�п��ڴ�����*/
				cnym=month2011[cnmonth]+Dn[pdm-1];/*ũ���º���д��һ��*/
				enym=isnMonth[today.getMonth()]+isndate[Daten1-1]/*�����º���д��һ��*/
		switch(cnym){/*�������ģ���6����*/
		case "����ʮ��":cnym=cnym+"&nbsp;"+"����";break;
		case "���¶���":cnym=cnym+"&nbsp;"+"��ˮ";break;
		case "����ʮ��":cnym=cnym+"&nbsp;"+"����";break;
		case "���¶���":cnym=cnym+"&nbsp;"+"����";break;
		case "����ʮ��":cnym=cnym+"&nbsp;"+"����";break;
		case "������ʮ":cnym=cnym+"&nbsp;"+"����";break;
		
		case "����ʮ��":cnym=cnym+"&nbsp;"+"����";break;
		case "������ʮ":cnym=cnym+"&nbsp;"+"С��";break;	
		case "������ʮ��":cnym=cnym+"&nbsp;"+"â��";break;
		case "���³���":cnym=cnym+"&nbsp;"+"����";break;
		case "����ʮ��":cnym=cnym+"&nbsp;"+"С��";break;
		case "���³���":cnym=cnym+"&nbsp;"+"����";break;
		
		case "���¶�ʮ":cnym=cnym+"&nbsp;"+"����";break;
		case "���³���":cnym=cnym+"&nbsp;"+"����";break;
		case "���¶���":cnym=cnym+"&nbsp;"+"��¶";break;
		case "���³���":cnym=cnym+"&nbsp;"+"���";break;																
		case "���¶���":cnym=cnym+"&nbsp;"+"��¶";break;					  
		case "���³���":cnym=cnym+"&nbsp;"+"˪��";break;
																				
		case "ʮ��ʮ��":cnym=cnym+"&nbsp;"+"����";break;					  
		case "ʮ�³���":cnym=cnym+"&nbsp;"+"Сѩ";break;														
		case "ʮ�¶���":cnym=cnym+"&nbsp;"+"��ѩ";break;	
		case "ʮһ�³���":cnym=cnym+"&nbsp;"+"����";break;								
		case "ʮ���¶���":cnym=cnym+"&nbsp;"+"С��";break;	
		case "ʮ���³���":cnym=cnym+"&nbsp;"+"��";break;
		
		case "ʮ���¶���":cnym=cnym+"&nbsp;"+"����";break;
		
		case "���³�һ":cnym=cnym+"&nbsp;"+"����"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"Ԫ����"; break;	
		case "���³���":cnym=cnym+"&nbsp;"+"�����"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"��Ԫ��"; break;	
		case "���³���":cnym=cnym+"&nbsp;"+"��Ϧ��"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"�����";break;	
		case "���³���":cnym=cnym+"&nbsp;"+"������"; break;	
		case "ʮ���¶���":cnym=cnym+"&nbsp;"+"��Ϧ"; break;	
		
		case "����ʮһ":cnym=cnym+"&nbsp;"+"BrotherDay";break;
		case "���³���":cnym=cnym+"&nbsp;"+"GrandmDay";break;
		case "���³���":cnym=cnym+"&nbsp;"+"FatherDay";break;
		case "���¶�һ":cnym=cnym+"&nbsp;"+"MotherDay"; break;		
		}
		switch(enym){
		case "01-01":enym=enym+"&nbsp;"+"Ԫ��";break;
		case "03-08":enym=enym+"&nbsp;"+"��Ů��";break;
		case "05-04":enym=enym+"&nbsp;"+"�����";break;
		case "06-01":enym=enym+"&nbsp;"+"��ͯ��";break;
		case "07-01":enym=enym+"&nbsp;"+"������";break;
		case "08-01":enym=enym+"&nbsp;"+"������";break;
		case "09-10":enym=enym+"&nbsp;"+"��ʦ��";break;

		case "10-01":enym=enym+"&nbsp;"+"�����";break;
		}
<!--calendar--һ����д��Html,һ����д��JS-->
//1 �ۺ�����zh
//2 ��������xw
//3 �ٿ�bk
//4 �Ŀ�wk
//5  book
//6 �ʵ�cidian
//7 ͼƬtp
//8 MP3
//9 ��Ƶ��Ӱsp
//10 bt
//11 ���rj
//12 ��������gw

//�ر�ע�⣬�����Html�ĵ���ɾ����һ����ѡ���������Ӧ�ĺ�������ɾ��������������html��js��Ӧ��js���ܶࣻ


function search()
{
//�ۺ�����
if(formmain.rdbaidu.checked)
window.open("http://www.baidu.com/baidu?&ct=&lm=&z=&rn=&word="+formmain.searchkey.value+"&_si.x=4&_si.y=2");

if(formmain.rdgoogleen.checked)
window.open("http://www.google.com.hk/search?hl=en&newwindow=1&safe=strict&tbo=d&site=webhp&source=hp&q="+formmain.searchkey.value); 
if(formmain.rdgoogle.checked)
window.open("http://www.google.com.hk/search?hl=zh-CN&q=" + encodeURI(formmain.searchkey.value));

if(formmain.rdyahoozhongguo.checked)
window.open("http://search.cn.yahoo.com/s?pid=402877_1010&v=web&p=" + formmain.searchkey.value);
if (formmain.rd_yahoo.checked) {
	var q;
	q = encodeURI(formmain.searchkey.value);
	window.open("http://search.yahoo.com/search?prssweb=Search&ei=UTF-8&fr=FP-tab-web-t&fl=0&x=wrt&p=" + q);
	}

if(formmain.rdbingzonghe.checked)
	{
	var q;
	q=encodeURI(formmain.searchkey.value);
	window.open("http://cn.bing.com/search?FORM=BWFD&q=" + q);
	}
if(formmain.rd_bing.checked)
window.open("http://www.bing.com/search?q="+formmain.searchkey.value);	


if(formmain.rdsoso.checked)
window.open("http://www.soso.com/q?pid=s.idx&w=" + formmain.searchkey.value);


if(formmain.rdsogou.checked)
window.open("http://www.sogou.com/web?query="+formmain.searchkey.value+"&sogouhome=");



if(formmain.rdyoudao.checked)
window.open("http://www.youdao.com/search?keyfrom=web.index.suggest&q="+formmain.searchkey.value+"&btnIndex="+ formmain.searchkey.value);

if(formmain.rdzhongsou.checked)
window.open("http://page.zhongsou.com/zspage.cgi?word="+formmain.searchkey.value); 	


if(formmain.rd_panggu.checked)
window.open("http://search.panguso.com/pagesearch.htm?q="+encodeURI(formmain.searchkey.value));

//��������
if(formmain.rdbaidunews.checked)
window.open("http://news.baidu.com/ns?word="+formmain.searchkey.value+"&content=%C8%AB%CE%C4%CB%D1%CB%F7&cl=2&ct=0&rn=20&tn=news");


if(formmain.rdgooglenews.checked)
	{
	var q;
	q=encodeURI(formmain.searchkey.value);
	window.open("http://news.google.com/news?hl=zh-CN&ned=cn&q="+q+"&btnG=%E6%90%9C%E7%B4%A2%E6%96%B0%E9%97%BB");
	}
if(formmain.rd_news_google.checked)
window.open("http://news.google.com/news?hl=en&ned=us&btnG=Search+News&q="+formmain.searchkey.value);

if(formmain.rdyahoocnnews.checked)
window.open("http://news.yahoo.cn/s?q="+formmain.searchkey.value);
if(formmain.rd_news_yahoo.checked)
window.open("http://news.search.yahoo.com/search/news?sm=Yahoo%21+Search&fr=FP-tab-news-t&toggle=1&cop=&ei=UTF-8&p="+formmain.searchkey.value);
 

if(formmain.rdcctvnews.checked)
window.open("http://search.cntv.cn/netall/index.shtml?qtext="+formmain.searchkey.value);

if(formmain.rdqqnews.checked)
window.open("http://www.soso.com/q?w="+formmain.searchkey.value + "&cid=qs.news.se&site=news.qq.com&idx=f");

if(formmain.rdsouhunews.checked)
window.open("http://news.sogou.com/news?mode=1&h=&query="+formmain.searchkey.value);

if(formmain.rd163news.checked)
	{ var q;
	q=encodeURI(formmain.searchkey.value);
	window.open("http://news.yodao.com/search?keyfrom=news.163&site=%CD%F8%D2%D7&suser=user163&in=page&Submit.x=23&Submit.y=7&q="+q);
	}

if(formmain.rdxinhuanews.checked)
window.open("http://news.panguso.com/newssearch.htm?ptn=xinhua&pmd=zzpt&srv=web_news&wid=w4&q="+formmain.searchkey.value);




if(formmain.rd_news_msn.checked)
window.open("http://search.msn.com/news/results.aspx?FORM=MSNH&q="+formmain.searchkey.value)

if(formmain.rd_news_aol.checked)
window.open("http://search.aol.com/aol/news?invocationType=topsearchbox.newshome&query="+formmain.searchkey.value);


<!--�ٿ�-->
if(formmain.rd_bdbk.checked)
window.open("http://www.google.com.hk/search?q=" + formmain.searchkey.value + "&sitesearch=" + "baike.baidu.com" + "&sa=%E6%90%9C%C2%A0%E7%B4%A2&prog=aff&client=pub-4055365977023692&hl=zh-CN&source=sdo_sb&sdo_rt=ChBNfvf1AA5v2QqkgIvyIjvnEg5fX1JMX0RFRkFVTFRfXxoI-PektCokDFUoAVidyNe9ldivpRg")

if(formmain.rd_hd.checked)
window.open("http://so.baike.com/s/doc/" + formmain.searchkey.value);

if(formmain.rd_wk.checked)
window.open("http://zh.wikipedia.org/wiki/" + formmain.searchkey.value);

if(formmain.rd_wken.checked)
window.open("http://en.wikipedia.org/wiki/" + formmain.searchkey.value);

<!--�ʴ�-->
if(formmain.rd_bdzhidao.checked)
window.open("http://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=" + formmain.searchkey.value)

if(formmain.rd_iask.checked)
window.open("http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?title=" + formmain.searchkey.value + "&search=&key=" + formmain.searchkey.value + "&classid=0&gjss=0&type=0&tag=0");

 
<!--�Ŀ�-->

if(formmain.rd_bd.checked)
window.open("http://wenku.baidu.com/search?word="+formmain.searchkey.value);

if(formmain.rd_xl.checked)
window.open("http://ishare.iask.sina.com.cn/search.php?key="+formmain.searchkey.value + "&from=index&format=");

if(formmain.rd_119.checked)
window.open("http://www.google.com.hk/search?q=" + formmain.searchkey.value + "&sitesearch=" + "d.119g.com" + "&sa=%E6%90%9C%C2%A0%E7%B4%A2&prog=aff&client=pub-4055365977023692&hl=zh-CN&source=sdo_sb&sdo_rt=ChBNfvf1AA5v2QqkgIvyIjvnEg5fX1JMX0RFRkFVTFRfXxoI-PektCokDFUoAVidyNe9ldivpRg")
if(formmain.rddoc88.checked)
window.open("http://www.doc88.com/tag/" + formmain.searchkey.value);

if(formmain.rddocin.checked)
window.open("http://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=" + encodeURI(formmain.searchkey.value));



if(formmain.rd360doc.checked)
window.open("http://www.360doc.com/search.html?type=0&word=" + encodeURI(formmain.searchkey.value));



//book
if(formmain.rd_ggbook.checked)
window.open("http://www.google.com.hk/search?tbm=bks&hl=zh-CN&q=" + encodeURI(formmain.searchkey.value));

if(formmain.rd_ggbooken.checked)
window.open("http://www.google.com.hk/search?tbm=bks&hl=en&q=" + formmain.searchkey.value);


//�ʵ�
if(formmain.rd_iciba.checked)
window.open("http://www.iciba.com/" + encodeURI(formmain.searchkey.value));

if(formmain.rd_baiducidian.checked)
window.open("http://dict.baidu.com/s?wd=" + encodeURI(formmain.searchkey.value));

if(formmain.rd_handian.checked) {
var zi ="";
var my_friends;
	my_friends=encodeURI(formmain.searchkey.value);

var friend_array =my_friends.split("%");
for (loop=0; loop < friend_array.length;loop++)
{
zi=zi + "Zdic" + friend_array[loop]; }
zizi=zi.substring(4,92);
window.open("http://www.zdic.net/zd/zi/" + zizi + ".htm");
}
 



//mP3����
if(formmain.rdbaidump3.checked)
window.open("http://mp3.baidu.com/m?rn=&tn=baidump3&ct=134217728&word="+formmain.searchkey.value+"&submit=%B0%D9%B6%C8%CB%D1%CB%F7&lm=-1");

if(formmain.rdyahoomp3.checked)
window.open("http://music.yahoo.com/search/?p="+formmain.searchkey.value);

 

if(formmain.rddsogou.checked)
window.open("http://d.sogou.com/music.so?class=1&sid=&query="+formmain.searchkey.value);

 

if(formmain.rdmp3zhongsou.checked)
window.open("http://mp3.zhongsou.com/musicResult.html?w="+formmain.searchkey.value);

 

if(formmain.rdgooglemusic.checked)
window.open("http://www.google.com.hk/search?hl=zh-CN&q="+formmain.searchkey.value+" .mp3");

if(formmain.rd_soso_music.checked)
window.open("http://music.soso.com/q?sc=mus&ch=w.ptl&ty=1&x=36&y=12&w="+formmain.searchkey.value);

//ͼƬ����	
if(formmain.rdmsnimage.checked)
window.open("http://cnweb.search.live.com/images/results.aspx?go=%E6%90%9C%E7%B4%A2%E5%9B%BE%E7%89%87&form=QBIR&q="+encodeURI(formmain.searchkey.value));

if(formmain.rdyahoozhongguoimage.checked)
window.open("http://image.yahoo.cn/s?q="+encodeURI(formmain.searchkey.value));

if(formmain.rdbaiduimage.checked)
window.open("http://image.baidu.com/i?z=&s=1&ct=201326592&cl=2&lm=-1&tn=baiduimage&pic=1&word="+formmain.searchkey.value);

if(formmain.rdsouhuimage.checked)
window.open("http://pic.sogou.com/pics?mode=1&sid=&pid=&duppid=&query="+formmain.searchkey.value);

if(formmain.rdyahooimage.checked)
	{var q=encodeURI(formmain.searchkey.value)
	window.open("http://images.search.yahoo.com/search/images?sm=Yahoo%21+Search&fr=FP-tab-img-t&toggle=1&cop=&ei=UTF-8&p="+q);
	}

if (formmain.rd_aol_image.checked) {
	var q = encodeURI(formmain.searchkey.value)
	window.open("http://search.aol.com/aol/image?s_it=topsearchbox.imagehome&q=" + q);
	} 	   
if(formmain.rdgoogleimagecn.checked)
window.open("http://images.google.com/images?hl=zh-CN&inlang=zh-CN&lr=&ie=GB2312&oe=GB2312&newwindow=1&q="+formmain.searchkey.value+"&btnG=%CB%D1%CB%F7"); 

if(formmain.rd163pic.checked)
window.open("http://image.yodao.com/search?q="+formmain.searchkey.value); 

//��Ƶ��Ӱ
if(formmain.rdgooglevideo.checked)
	{var q;
	q=encodeURI(formmain.searchkey.value);
	window.open("http://www.google.com.hk/search?tbo=p&tbs=vid:1&source=vgc&hl=zh-CN&aq=f&q="+q); 
	}
	
if(formmain.rdbaiduvideo.checked)
window.open("http://video.baidu.com/v?rn=20&pn=0&db=0&s=0&word="+formmain.searchkey.value);

if(formmain.rdyahoovideo.checked)
	{var q;
	q=encodeURI(formmain.searchkey.value);
	window.open("http://video.search.yahoo.com/search/video;_ylt=A0S00Mh4BBVRNzUAo._7w8QF;_ylu=X3oDMTBrMWQyNXBmBHNlYwNzZWFyY2gEdnRpZANWMTM2?p="+q + "&ei=utf-8&fr=sfp-vid");}
	
if(formmain.rdsougoushipin.checked)
window.open("http://v.sogou.com/v?w=06009900&query="+formmain.searchkey.value);

if(formmain.rdyoutubevideo.checked)
	{var q=encodeURI(formmain.searchkey.value)
	window.open("http://www.youtube.com/results?search=Search&search_query="+q);
	}
	
if(formmain.rdtoudushipin.checked)
window.open("http://so.tudou.com/isearch.do?kw="+formmain.searchkey.value);

if(formmain.rdyoukushipin.checked)
window.open("http://so.youku.com/search_video/q_"+formmain.searchkey.value);

if(formmain.rdgougou.checked)
window.open("http://movie.gougou.com/search?suffix=&id=1&search="+formmain.searchkey.value);

if(formmain.rdsohuship.checked)
	{var q;
	q=encodeURI(formmain.searchkey.value);
	window.open("http://so.tv.sohu.com/mts?box=1&wd="+q);}   
	
if(formmain.rdyes80.checked)
window.open("http://www.yes80.net/SearchPlayFile.aspx?"+formmain.searchkey.value);

if(formmain.rdbabykan.checked)
window.open("http://www.babykan.com/SearchPlayFile.aspx?"+formmain.searchkey.value);

if(formmain.rdxlkk.checked)
window.open("http://search.kankan.com/search.php?keyword="+formmain.searchkey.value);

if(formmain.rdkxsp.checked)
window.open("http://www.google.com.hk/search?q=" + formmain.searchkey.value + "&sitesearch=" + "http://v.kaixin001.com/" + "&sa=%E6%90%9C%C2%A0%E7%B4%A2&prog=aff&client=pub-4055365977023692&hl=zh-CN&source=sdo_sb&sdo_rt=ChBNfvf1AA5v2QqkgIvyIjvnEg5fX1JMX0RFRkFVTFRfXxoI-PektCokDFUoAVidyNe9ldivpRg")

if(formmain.rdqiyi.checked)
window.open("http://so.iqiyi.com/so/q_"+formmain.searchkey.value);

if(formmain.rddy161.checked)
window.open("http://www.dy161.com/" + formmain.searchkey.value + "&sitesearch=" + "http://v.kaixin001.com/" + "&sa=%E6%90%9C%C2%A0%E7%B4%A2&prog=aff&client=pub-4055365977023692&hl=zh-CN&source=sdo_sb&sdo_rt=ChBNfvf1AA5v2QqkgIvyIjvnEg5fX1JMX0RFRkFVTFRfXxoI-PektCokDFUoAVidyNe9ldivpRg")

if(formmain.rdm1905.checked)
window.open("http://www.m1905.com/search/?q=" + encodeURI(formmain.searchkey.value));


if(formmain.rdsheshou.checked)
window.open("http://shooter.cn/search/" + encodeURI(formmain.searchkey.value));

if(formmain.rdmtime.checked)
window.open("http://search.mtime.com/search/?" + encodeURI(formmain.searchkey.value));





//btsearch

if(formmain.rdisohuntbt.checked)
window.open("http://isohunt.com/torrents/?ihq=" + formmain.searchkey.value );

if(formmain.rdbtbotbt.checked)
window.open("http://torrentportal.com/torrents-search.php?search=" + formmain.searchkey.value);

if(formmain.rdsougoubt.checked)
window.open("http://www.sogou.com/web?_asf=www.sogou.com&query=" + formmain.searchkey.value + " .torrent");

if(formmain.rdbaidubt.checked)
window.open("http://www.baidu.com/baidu?tn=zhongguosou&ct=&lm=&z=&rn=&_si.x=4&_si.y=2&word=" + formmain.searchkey.value + " .torrent");

if (formmain.rdyahoobt.checked) 
	{
	var q=encodeURI(formmain.searchkey.value); 
	window.open("http://search.yahoo.com/search?vc=&fr=yfp-t-313&toggle=1&cop=mss&ei=UTF-8&fp_ip=CN&p=" + q + " .torrent");
	} 
	
if(formmain.rdverycdbt.checked)
window.open("http://find.verycd.com/folders/"+formmain.searchkey.value);

if(formmain.rdgooglebt.checked)
window.open("http://www.google.com.hk/search?q=" + formmain.searchkey.value+" .torrent");

if(formmain.rdgougoubt.checked)
window.open("http://www.gougou.com/search?id=1&ty=1&search="+formmain.searchkey.value);



//�������
if(formmain.rdonlinedown.checked)
window.open("http://search.newhua.com/search_list.php?searchname="+encodeURI(formmain.searchkey.value));

if(formmain.rdskycn.checked)
window.open("http://www.skycn.com/search.php?sf=default&ss_name="+formmain.searchkey.value);

if(formmain.rdmydown.checked)
window.open("http://search.yesky.com/searchdownload.do?ss=%26%23160%3B&wd=" + formmain.searchkey.value);

if(formmain.rdsoftgougou.checked)
window.open("http://www.gougou.com/search?suffix=&restype=2&id=2&search="+formmain.searchkey.value);

if(formmain.rdxinlang.checked)
window.open("http://www.google.com/custom?btnG=%D5%BE%C4%DA%CB%D1%CB%F7&sitesearch=tech.sina.com.cn/down/&ie=GB2312&oe=GB2312&hl=zh-CN&lr=&q="+formmain.searchkey.value);

if(formmain.rdsoft8.checked)
window.open("http://www.soft8.net/soft8.php?page=1&by=name&site=all&word="+formmain.searchkey.value);

if(formmain.rdgooglesoft.checked)
window.open("http://www.google.com.hk/search?q=" + formmain.searchkey.value+" .rar OR "+ formmain.searchkey.value+" .iso");

if(formmain.rdbaidusoft.checked)
window.open("http://www.baidu.com/baidu?tn=zhongguosou&ct=&lm=&z=&rn=&word=" + formmain.searchkey.value+" .rar");

if(formmain.rdpconline.checked)
window.open("http://ks.pconline.com.cn/download.jsp?forumName=%C8%AB%B2%BF%C0%E0%D0%CD&qx=%C8%AB%B2%BF%C0%E0%D0%CD&forumValue=&forumOrgID=&forumOrgName=&q="+formmain.searchkey.value);

if(formmain.rdduote.checked)
window.open("http://www.duote.com/search.php?searchType=&so="+formmain.searchkey.value);

if(formmain.rdit168.checked)
window.open("http://down.it168.com/soft_search.html?keyword="+formmain.searchkey.value);

if(formmain.rdpchome.checked)
window.open("http://download.pchome.net/search-"+formmain.searchkey.value+"---0-1.html");

if(formmain.rdxiazaiba.checked)
window.open("http://www.xiazaiba.com/word/"+formmain.searchkey.value);

if(formmain.rdxp510.checked)
window.open("http://www.xp510.com/index.php?m=search&c=index&a=init&typeid=2&q="+formmain.searchkey.value);

if(formmain.rd331c.checked)
window.open("http://www.33lc.com/index.php?m=search&c=index&a=init&typeid=2&siteid=1&q="+formmain.searchkey.value);


if(formmain.rdxtzj.checked)
window.open("http://www.355189.com/plus/search.php?q="+formmain.searchkey.value+"&submit=&mid=1&dopost=search");

if(formmain.rdddxt.checked)
window.open("http://www.dedexitong.com/plus/search.php?q="+formmain.searchkey.value+"&submit=&mid=1&dopost=search");

if(formmain.rdylmf.checked)
window.open("http://www.startos.com/cms/apps/search.php?searchtype=titlekeyword&keyword="+formmain.searchkey.value);

if(formmain.rdfqhh.checked)
window.open("http://search.tomatolei.com/f/discuz?mod=forum&formhash=1c5bd8fe&srchtype=title&srhfid=0&srhlocality=portal%3A%3Aindex&sId=7413162&ts=1359996706&cuId=0&cuName=&gId=7&agId=0&egIds=&fmSign=&ugSign7=&sign=53e51ff13b4588f6a47cc3708088efc7&charset=gbk&source=discuz&fId=0&q="+formmain.searchkey.value+"&srchtxt=ghost&searchsubmit=true");

if(formmain.rd51dd.checked)
window.open("http://www.51dd.com/Search.asp?classID=&t=name&image.x=12&image.y=7&q="+formmain.searchkey.value);

if(formmain.rd_cnd8.checked)
window.open("http://www.cnd8.com/search.asp?type=soft&k="+formmain.searchkey.value); 

if (formmain.rdmydrivers.checked)
window.open("http://so.mydrivers.com/drivers.aspx?classtype=all&q="+formmain.searchkey.value);

if(formmain.rd_download_enet.checked)
window.open("http://download.enet.com.cn/search.php?platformid=&submit.x=8&submit.y=12&keyword="+formmain.searchkey.value);

if(formmain.rd_ttdown.checked)
window.open("http://www.google.com/custom?btnG=%CB%D1%CB%F7&sitesearch=www.pcpop.com&ie=GB2312&oe=GB2312&hl=zh-CN&lr=&q="+formmain.searchkey.value);

if(formmain.rddownloadcom.checked)
window.open("http://www.download.com/3120-20-0.html?qt="+formmain.searchkey.value);
if(formmain.rd_softped.checked)
window.open("http://www.softpedia.com/dyn-search.php?search_term=" + encodeURI(formmain.searchkey.value + "&x=5&y=11"));



//��������
if(formmain.rddangdanggw.checked)
window.open("http://union.dangdang.com/transfer.php?from=P-138512&ad_type=10&sys_id=1&backurl=http://search.dangdang.com/search.php?key=" + formmain.searchkey.value);

if(formmain.rdjingdonggouwu.checked)
window.open("http://click.union.360buy.com/JdClick/?unionId=5425&t=5&to=http%3A%2F%2Fsearch.360buy.com%2FSearch&keyword=" + formmain.searchkey.value);

if(formmain.rdalibaba.checked)
window.open("http://search.china.alibaba.com/selloffer/offer_search.htm?keywords="+ formmain.searchkey.value);

if(formmain.rdalibabaen.checked)
window.open("http://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText="+ formmain.searchkey.value);
 
if(formmain.rdamazongouwu.checked)
window.open("http://www.amazon.com/exec/obidos/external-search?tag=oduen-20&keyword="+formmain.searchkey.value+"&mode=blended");

if (formmain.rdgooglegouwu.checked) {
	var q;
	q = encodeURI(formmain.searchkey.value);
	window.open("http://www.google.cn/products?q=" + q);
	}
	
if(formmain.rdtaobaogw.checked)
window.open("http://search1.taobao.com/browse/search_auction.htm?at_topsearch=0&q="+formmain.searchkey.value);

if(formmain.rdjoyogw.checked)
window.open("http://www.amazon.cn/gp/search?ie=UTF8&tag=zhongguosou-23&index=aps&linkCode=ur2&camp=0&creative=0&keywords="+formmain.searchkey.value);

if (formmain.rdyiqugouwu.checked)
window.open("http://search2.eachnet.com/search/" + formmain.searchkey.value + "--0--productlist------basicsearch.html");

if (formmain.rdpaipai.checked)
window.open("http://sse1.paipai.com/s-" + formmain.searchkey.value + "--1--80---3-4-3----2-2--128-0-0-PTAG,20084.2.2-as,1.html");

if (formmain.rdtianmao.checked)
window.open("http://list.tmall.com/search_product.htm?q=" + formmain.searchkey.value + "&cat=all&userBucket=14&userCell=14");
 
if(formmain.rd1hao.checked)
window.open("http://search.yihaodian.com/s2/c0-0/"+formmain.searchkey.value + "/20/");

if(formmain.rd58tc.checked)
window.open("http://gz.58.com/fushi/?key=" + encodeURI(formmain.searchkey.value));

if(formmain.rdgjw.checked)
window.open("http://gz.ganji.com/wu/b1/s/_" + encodeURI(formmain.searchkey.value));


if(formmain.rdfkcp.checked)
window.open("http://s.vancl.com/27540.html?k=" + encodeURI(formmain.searchkey.value));

if(formmain.rdsuning.checked)
window.open("http://search.suning.com/emall/search.do?keyword=" + encodeURI(formmain.searchkey.value));

if(formmain.rdgome.checked)
window.open("http://www.gome.com.cn/ec/homeus/n/search/gomeSearchResults.jsp?question=" + encodeURI(formmain.searchkey.value));

}
//google����
/*if(formmain.rd_119.checked)
window.open("http://www.google.com.hk/search?q=" + formmain.searchkey.value + "&sitesearch=" + "d.119g.com" + "&sa=%E6%90%9C%C2%A0%E7%B4%A2&prog=aff&client=pub-4055365977023692&hl=zh-CN&source=sdo_sb&sdo_rt=ChBNfvf1AA5v2QqkgIvyIjvnEg5fX1JMX0RFRkFVTFRfXxoI-PektCokDFUoAVidyNe9ldivpRg")
*/
