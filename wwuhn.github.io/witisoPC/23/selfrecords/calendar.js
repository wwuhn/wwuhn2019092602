<!--calendar--һ����д��Html,һ����д��JS>-->
/*ũ������һ���ʱ�������6������6���ǽ������ģ���Ϊ�����е��ַ���"Thisyear"�����ģ�*/
//������ũ����������:��excel��<������ũ����������>
                var cnyear="���ϼ���";/*����1����*/
                var spd=24*60*60*1000
				var spd=86400000/*ÿ��ĺ�����*/
				var YDate0=new Date("1/1/2017");/*����2����*/
				var y70=new Date("1/1/1970");
				
				var sec0=YDate0-y70;/*1970-��������Ԫ���յĺ�����((41*365+10)*spd=1293840000000)*/
				
				var YDate1 = new Date("1/28/2017");/*�����ڵĹ������ڣ���3����*/
				var dday = (YDate1-YDate0)/(24*60*60*1000);
				//alert(dday);
				
				var totaldayThisyear=0;
				var yearThisyear="29;30;29;30;29;29;30;29;30;29;30;30;30"; /*��ũ����ÿ����������4����http://www.alfeng.com/Html/?266.html*/
					yearThisyear=yearThisyear.split(";");
					for(i=0;i<yearThisyear.length;i++){
						totaldayThisyear=totaldayThisyear+parseInt(yearThisyear[i]);
					}
					//alert(totaldayThisyear);
				var monthThisyear="����;����;����;����;����;����;������;����;����;����;ʮ��;ʮһ��;ʮ����" ;
					monthThisyear=monthThisyear.split(";");/*��ũ�����·�����������ʱҪ�ص�����monthThisyear���м䣬��14�ꡰ����¡�������5����*/
				var Dn="��һ;����;����;����;����;����;����;����;����;��ʮ;ʮһ;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;��ʮ;إһ;إ��;إ��;إ��;إ��;إ��;إ��;إ��;إ��;��ʮ"; 
				Dn=Dn.split(";"); 
				
				var isnMonth = new
					Array("01-","02-","03-","04-","05-","06-","07-","08-","09-","10-","11-","12-");
				var isnDay = new
					Array("����","��һ","�ܶ�","����","����","����","����","����");
				var isndate=new Array("01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
				today = new Date() ; 
				
				
				var userAgent = navigator.userAgent.toLowerCase();
var browser = 
    (browser = userAgent.match(/qqbrowser\/([\d.]+)/))?"QQbrowser "+browser[1]:
	(browser = userAgent.match(/se\s+2.x/))?"sogou 2.x": //sougou
	(browser = userAgent.match(/msie\s+([\d.]+)/))?"msIE "+browser[1]: //ie
	(browser = userAgent.match(/chrome\/([\d.]+)/))?"chrome "+browser[1]: //chrome
	(browser = userAgent.match(/firefox\/([\d.]+)/))?"FireFox "+browser[1]: //firefox
	(browser = userAgent.match(/version\/([\d.]+)\s+safari\/([\d.]+)/))?"safari "+browser[1]: //safari
	(browser = userAgent.match(/opera\/([\d.]+)([\w\W]+)version\/([\d.]+)/))?"opera "+browser[3]: //opera
	"other browser";

var browser4 = browser.substr(0,4);
//�����winWidth��ֵ��������һ��JS�ĺ�����
var Year=today.getYear()

if(browser4 == "msIE"){
var winWidth=1255;/*ie����Ϊlink��JS�е�winWidthΪ0,��ʼ����ָ���*/
Year=today.getYear();
}
else if(browser4 =="Fire"){
Year=today.getYear()+1900;;
}
else{
Year=today.getYear()+1900;
}
				 
				Daten1=today.getDate(); 
				
				
				sec1=today.getTime();/*���ڵ�1970.1.1֮��ĺ�����*/
				sec2=sec1-sec0+8*3600*1000;/*UTC+08*/
				dayed=parseInt(sec2/spd);
				cndayed=dayed-dday;/*�������������ٹ�����1��;���������ʱ��һ����*/
				dperm=totaldayThisyear/monthThisyear.length  //
				cnmonth=parseInt(cndayed/dperm);/*ũ����n-1��*/
				
				var total2=0;
				for(i=cnmonth+1;i<yearThisyear.length;i++){
				total2=total2+parseInt(yearThisyear[i]);
				}<!--����ʣ���·ݵ�����-->
				
				pdma=totaldayThisyear-cndayed-total2;/*���»��м���*/
				pdm=yearThisyear[cnmonth]-pdma+1;/*���µĵڼ���*/
				haveday=totaldayThisyear-cndayed-1;/*�п��ڴ�����*/
				cnym=monthThisyear[cnmonth]+Dn[pdm-1];/*ũ���º���д��һ��*/

				//alert(cnym);
				var cnmonthNum=cnmonth+1;
				if(cnmonthNum<10){cnmonthNum="0"+cnmonthNum;}
				var cnDayNum=pdm;
				if(cnDayNum<10){cnDayNum="0"+cnDayNum;}
				var cnmonthDayNum=cnmonthNum+"-"+cnDayNum;
				//alert(cnmonthDayNum);
				enym=isnMonth[today.getMonth()]+isndate[Daten1-1]/*�����º���д��һ��*/
		//switch(cnym)	
		//case "���³���":cnym=cnym+"&nbsp;"+"����";break;
		switch(enym){/*�������ģ���6����http://jieqi.xpcha.com http://www.nongli.com//*/
		//���꾪������죬����â����������
		//�ﴦ¶�ﺮ˪������ѩѩ��С�󺮡�
		//ÿ�����ڲ������������һ���죬
		//�ϰ���������إһ���°����ǰˡ�إ����
case "02-03":cnym=cnym+"&nbsp;"+"����";break;
case "02-18":cnym=cnym+"&nbsp;"+"��ˮ";break;
case "03-05":cnym=cnym+"&nbsp;"+"����";break;
case "03-20":cnym=cnym+"&nbsp;"+"����";break;
case "04-04":cnym=cnym+"&nbsp;"+"����";break;
case "04-20":cnym=cnym+"&nbsp;"+"����";break;
case "05-05":cnym=cnym+"&nbsp;"+"����";break;
case "05-21":cnym=cnym+"&nbsp;"+"С��";break;
case "06-05":cnym=cnym+"&nbsp;"+"â��";break;
case "06-21":cnym=cnym+"&nbsp;"+"����";break;
case "07-07":cnym=cnym+"&nbsp;"+"С��";break;
case "07-22":cnym=cnym+"&nbsp;"+"����";break;
case "08-07":cnym=cnym+"&nbsp;"+"����";break;
case "08-23":cnym=cnym+"&nbsp;"+"����";break;
case "09-07":cnym=cnym+"&nbsp;"+"��¶";break;
case "09-23":cnym=cnym+"&nbsp;"+"���";break;
case "10-08":cnym=cnym+"&nbsp;"+"��¶";break;
case "10-23":cnym=cnym+"&nbsp;"+"˪��";break;
case "11-07":cnym=cnym+"&nbsp;"+"����";break;
case "11-22":cnym=cnym+"&nbsp;"+"Сѩ";break;
case "12-07":cnym=cnym+"&nbsp;"+"��ѩ";break;
case "12-22":cnym=cnym+"&nbsp;"+"����";break;
case "01-05":cnym=cnym+"&nbsp;"+"С��";break;
case "01-20":cnym=cnym+"&nbsp;"+"��";break;

		}
		switch(cnym){		
		case "���³�һ":cnym=cnym+"&nbsp;"+"����"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"Ԫ����"; break;	
		case "���³���":cnym=cnym+"&nbsp;"+"�����"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"��Ԫ��"; break;	
		case "���³���":cnym=cnym+"&nbsp;"+"��Ϧ��"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"�����";break;	
		case "���³���":cnym=cnym+"&nbsp;"+"������"; break;	
		case "ʮ����إ��":cnym=cnym+"&nbsp;"+"��Ϧ"; break;	
		
		case "����ʮһ":cnym=cnym+"&nbsp;"+"BrotherDay";break;
		case "���³���":cnym=cnym+"&nbsp;"+"GrandmDay";break;
		case "���³���":cnym=cnym+"&nbsp;"+"FatherDay";break;
		case "����إһ":cnym=cnym+"&nbsp;"+"MotherDay"; break;		
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