<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<script language="javascript">
function check(){

if(document.form1.all.checked)
document.form1.action="resultall.asp";
else
document.form1.action="result.asp";

}
</script>
<style type="text/css">
p{
margin:2px;
text-indent:0em;
}
table{

border-collapse:collapse;
}
table tr>td{

height:38px;

}
.bor{
border:1px solid #888;}
table tr>td+td{
text-align:left;
}
.span1{position:relative}/*��Χ�������������������������Ԫ��*/
.span2{
	margin-left:45px;
	overflow:hidden;}/*��ΧselectԪ��*/
.selectcss{     /*selectԪ��*/
	width:339px;
	margin-left:-45px;
	margin-left:-46px\9;
 }
.key{       /*inputԪ��*/
	width:315px;
	font-size:14px;
	height:16px;
	margin-top:0px;
	position:absolute;
	left:0px;
}
</style>
<title>search</title>
</head>

<body>
<table width="650" align="center">
<tr><td style="text-align:left; font-size:1.2m; font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;��ѯ����</td></tr>
 </table>
<form action="result.asp" method="post" name="form1" target="_blank" id="form1">
  <table width="850" border="0" align="center">
    
    <tr>
      <td>��ѡ����Ҫ��ѯ����:</td>
      <td><input type="radio" name="colkey" value="classify" />classify</td>
      <td><input type="radio" name="colkey" value="title" />title</td>
      <td><input type="radio" name="colkey" value="author" />author</td>
	  <td><input type="radio" name="colkey" value="publisher" />author</td>
	  <td><input type="radio" name="colkey" value="gt" />author</td>
	  <td><input type="radio" name="colkey" value="readdate" />author</td>
	  <td><input type="radio" name="colkey" value="remark" />author</td>
	  
	  <td><input type="radio" name="colkey" id="all" checked="checked" />all cols</td>
	  
    </tr>
    <tr>
      <td><p>��Ҫ������ѡ�е�����&nbsp;</p>
      <p>ģ��ƥ��Ĺؼ���: </p></td>
      <td colspan="5">
	  <span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
			 
<option value=""></option>
<option value="DOS">DOS</option>
<option value="PC����">PC����</option>
<option value="VBA">VBA</option>
<option value="�������">�������</option>
<option value="����">����</option>
<option value="���԰칫">���԰칫</option>
<option value="����Ӧ��">����Ӧ��</option>
<option value="����">����</option>
<option value="��̬��ҳ">��̬��ҳ</option>
<option value="����">����</option>
<option value="����">����</option>
<option value="����">����</option>
<option value="�ƻ�">�ƻ�</option>
<option value="�Ƽ�">�Ƽ�</option>
<option value="��ʷ">��ʷ</option>
<option value="���ܿ�">���ܿ�</option>
<option value="����">����</option>
<option value="����">����</option>
<option value="��ѧ">��ѧ</option>
<option value="˼���Ļ�">˼���Ļ�</option>
<option value="��������">��������</option>
<option value="��ҳ��վ">��ҳ��վ</option>
<option value="����">����</option>
<option value="С˵">С˵</option>
<option value="Ӣ��">Ӣ��</option>
<option value="ְ��">ְ��</option>


		</select>
		</span><input class="key" name="key" id="key" size="15" />
	</span>	  
	  </td>
	  
      <td><input onclick="check();" type="submit" name="Submit" value="search" /></td>
    </tr>
  </table>
  <table align="center" width="40%">
    <col width="10%" />
    <col width="10%" />
    <col width="10%" />
    <col width="10%" />
    <tr>
      <td>DOS</td>
      <td>����</td>
      <td>�Ƽ�</td>
      <td>ְ��</td>
    </tr>
    <tr>
      <td>PC����</td>
      <td>��ʷ</td>
      <td>�ƻ�</td>
      <td>����</td>
    </tr>
    <tr>
      <td>VBA</td>
      <td>����</td>
      <td>��ѧ</td>
      <td>Ӣ��</td>
    </tr>
    <tr>
      <td>�������</td>
      <td>˼���Ļ�</td>
      <td>����</td>
      <td>���ܿ�</td>
    </tr>
    <tr>
      <td>���԰칫</td>
      <td>С˵</td>
      <td>����</td>
      <td></td>
    </tr>
    <tr>
      <td>����Ӧ��</td>
      <td></td>
      <td>����</td>
      <td></td>
    </tr>
    <tr>
      <td>����</td>
      <td></td>
      <td>����</td>
      <td></td>
    </tr>
    <tr>
      <td>��̬��ҳ</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>��������</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>��ҳ��վ</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</form>
</body>
</html>
