// const API_BASE_URL = 'https://www.triveinvest.co.id/';
const API_BASE_URL = 'https://tst.triveinvest.co.id/';
var CMS_BASE_URL = 'https://api-gateway.triveinvest.co.id/';
var SCA_BASE_URL = 'https://sca.triveinvest.co.id/';

var pth = window.location.pathname;
SCA_BASE_URL += pth.startsWith('/en') ? 'en/' :'';

if(pth.startsWith('/en')){
	$('html').attr("lang","en")
	sessionStorage.setItem("currentSiteId", 98);
}else{
	$('html').attr("lang","id")
	sessionStorage.setItem("currentSiteId", 50);
}

function wrt(s){if (s) document.write(s);}

var pageData = [];


function fetchCms(cName) {
    pageData[cName] = sessionStorage.getItem(cName +"_" + locale);
    if (pageData[cName]) {
        pageData[cName] = JSON.parse(pageData[cName]);
        return;
    }
    $.ajax({
        async: false,
        type: 'GET',
        url: API_BASE_URL + "api/" + (("header-footer" == cName) ? (cName+ '?' + 'locale=' +locale+ '&publicationState=preview')
            : 'pages?filters[page_url][$eq]=' +cName+ '&locale=' +locale+ '&publicationState=preview'),
        success: function (data, status, xhr) {
           // $('section.section:first')[0].innerHTML = "<pre>" +JSON.stringify(data)+ "</pre>";
           pageData[cName] = (("header-footer" == cName) ? data.data.attributes : data.data[0].attributes);
           // sessionStorage.setItem(cName +"_" + locale, JSON.stringify(pageData[cName]));
        }
    });
}

function fetchHtml(html) {
    $.ajax({
        async: false,
        type: 'GET',
        url: html,
        success: function (data, status, xhr) {
            document.write(data)
        }
    });
}

var locale = "id";
locale = (pth.startsWith('/en/') || pth=='/en') ? 'en' : (pth.startsWith('/zu/')>0 ? 'zu' : 'id');
var localeTrimmedPath = (pth.startsWith('/en/') || pth.startsWith('/zu/')) ? pth.substring(4) : pth.substring(1);
var contentName = localeTrimmedPath.replace(".html", "");
if (contentName.length > 2) {
  if (contentName.charAt(contentName.length-1) == '/') contentName = contentName.substring(0, contentName.length-1);
  if (contentName.charAt(0) == '/') contentName = contentName.substring(1, contentName.length);
}
if (contentName == "" || contentName == "en")  contentName = "index";


fetchCms(contentName);

if (!pageData[contentName]) {
    document.write("<meta http-equiv='refresh' content='0;url=/404'>");
} else {
    if (pageData[contentName].meta_description && pageData[contentName].meta_description.indexOf("<")==-1)
      document.write(`<meta name="description" content="${pageData[contentName].meta_description}">`);
    else (pageData[contentName].meta_title)
        document.write(`<title>${pageData[contentName].meta_title}</title>`);
    if (pageData[contentName].canonical)
        document.write(` <link rel="canonical" href=${pageData[contentName].canonical}/>`);
    else
        document.write(`<title>Trive Invest</title>`);
    document.head.classList.add("seo-ready");
}



var url_params = new URLSearchParams(window.location.search);
if (url_params.has('refcode'))
    sessionStorage.setItem("refcode", url_params.get('refcode'));
if (url_params.has('refCode'))
    sessionStorage.setItem("refcode", url_params.get('refCode'));
if (url_params.has('utm_source')){
	var siteId = sessionStorage.getItem("currentSiteId");
	var existingGuid = sessionStorage.getItem("marketingId")
	sessionStorage.setItem("marketingParams", window.location.search.replace("?",""));
	setMarketingId(window.location.href,siteId,existingGuid);
}
if (url_params.has('partner')){
	  sessionStorage.setItem("partnerId", url_params.get('partner'));
}
if (url_params.has('defaultContractId')){
	  sessionStorage.setItem("contractId", url_params.get('defaultContractId'));
}

function setMarketingId(uri,siteId,existingGuid){
	 var request = $.ajax({
             method: "POST",
			 contentType: 'application/json',
             url: CMS_BASE_URL + "api/gateway/registration/v1/Marketing/create-marketingId",
             cache: false,
			 data: JSON.stringify({
				 uri: uri,
				 siteId: siteId,
				 ipAdress: "",
				 existingGuid: existingGuid
			 })
         });
         request.done(function (data) {
              sessionStorage.setItem("marketingId", data.result);
         });
 }

function scaLogin(){
	var scaUrl = SCA_BASE_URL + "sca/login";	
	if(sessionStorage.getItem("refcode")){
		scaUrl = scaUrl + "?refcode=" + sessionStorage.getItem("refcode");
	}
	if(sessionStorage.getItem("marketingParams")){
		var utmParams = sessionStorage.getItem("marketingParams");
		if(scaUrl.indexOf('?')>-1){
			scaUrl = scaUrl + "&" + utmParams;
		}else{
			scaUrl = scaUrl + "?" +utmParams;
		}
	}
	window.location.href = scaUrl 
}

function scaRegister(utmData){
	
	var scaUrl = SCA_BASE_URL + "register/open-trading-account";
	if(sessionStorage.getItem("refcode")){
		scaUrl = scaUrl + "?refcode=" + sessionStorage.getItem("refcode");
	}
	
	if (utmData != null && utmData.indexOf('utm_source')>-1){
		if(scaUrl.indexOf('?')>-1){
			scaUrl = scaUrl + "&" + utmData;
		}else{
			scaUrl = scaUrl + "?" + utmData;
		}		
	}else{
		if(sessionStorage.getItem("marketingParams")){
			var utmParams = sessionStorage.getItem("marketingParams");
			if(scaUrl.indexOf('?')>-1){
				scaUrl = scaUrl + "&" + utmParams;
			}else{
				scaUrl = scaUrl + "?" + utmParams;
			}
		}
	}
	window.location.href = scaUrl 
}

function scaPartnerRegister(utmData){
	
	var scaUrl = SCA_BASE_URL + "register/open-partner-account";
	if(sessionStorage.getItem("refcode")){
		scaUrl = scaUrl + "?refcode=" + sessionStorage.getItem("refcode");
	}
	
	if (utmData != null && utmData.indexOf('utm_source')>-1){
		if(scaUrl.indexOf('?')>-1){
			scaUrl = scaUrl + "&" + utmData;
		}else{
			scaUrl = scaUrl + "?" + utmData;
		}		
	}else{
		if(sessionStorage.getItem("marketingParams")){
			var utmParams = sessionStorage.getItem("marketingParams");
			if(scaUrl.indexOf('?')>-1){
				scaUrl = scaUrl + "&" + utmParams;
			}else{
				scaUrl = scaUrl + "?" + utmParams;
			}
		}
	}	
    window.location.href = scaUrl 
}

$(document).ready(function(){ 
 if (url_params.has('newSite')&&sessionStorage.getItem('newSitePopupShow')==null) {
	sessionStorage.setItem("newSitePopupShow", true);	
    $('.modal-open-onload').modal('show');
}  
});
