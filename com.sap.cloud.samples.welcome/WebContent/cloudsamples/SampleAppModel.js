jQuery.sap.declare("cloudsamples.SampleAppModel");
views = [ {
	viewDescription : {
		viewId : "item_hanasample",
		viewTitle : "HANA Sample"
	}, 
	
	modelData : {
		headerTitle : "Experience HANA",
		headerImage : "images/hana.png",
		pageContents : "<font size=4><p>Run your business in real real time. SAP and partner solutions powered by SAP HANA can help you dramatically accelerate analytics, business processes, predictive analysis, and sentiment data processing - all on a single in-memory computing platform. </p>"
				+ "<p>With this sample application you can explore the capabilites of SAP HANA. Find out if in-memory database technology is the right choice for your business. Discover what impact it could have on your cloud computing efforts - and learn why SAP HANA is setting new standards in the market.</p>"
				+ "<p>Experience the speed and flexibility of SAP HANA for yourself. Test drive this solution powered by our in-memory technology - and work through timed challenges in a range of corporate roles. </p></font>",
	},

	buttons : [
			{
				id : "download_hana",
				text : "Get Source",
				image : "images/source.png",
				url : "http://github.com"
			},
			{
				id : "demo_hana",
				text : "See Demo",
				image : "images/demo.png",
				url : "https://hanasample.hanatrial.ondemand.com/HANA_DATA_CONSUMPTION/"
			},
			{
				id : "blog_hana",
				text : "Read Blog",
				image : "images/help.png",
				url : "http://scn.sap.com/community/developer-center/cloud-platform/blog/2013/07/16/using-hana-modeler-in-sap-hana-cloud"
			} ]
},
{
	viewDescription : {
		viewId : "item_connectivitysample",
		viewTitle : "Connectivity Sample"
	}, 
	
	modelData : {
		headerTitle : "Experience Connectivity",
		headerImage : "images/connectivity.png",
		pageContents : "<font size=4><p>Run your business in real real time. SAP and partner solutions powered by SAP HANA can help you dramatically accelerate analytics, business processes, predictive analysis, and sentiment data processing - all on a single in-memory computing platform.</p>"
				+ "<p>With this sample application you can explore the capabilites of SAP HANA. Find out if in-memory database technology is the right choice for your business. Discover what impact it could have on your cloud computing efforts - and learn why SAP HANA is setting new standards in the market.</p>"
				+ "<p>Experience the speed and flexibility of SAP HANA for yourself. Test drive this solution powered by our in-memory technology - and work through timed challenges in a range of corporate roles. </p></font>",
	},

	buttons : [
			{
				id : "download_connectivity",
				text : "Get Source",
				image : "images/source.png",
				url : "http://github.com"
			},
			{
				id : "demo_connectivity",
				text : "See Demo",
				image : "images/demo.png",
				url : "https://account.hanatrial.ondemand.com"
			},
			{
				id : "blog_connectivity",
				text : "Read Blog",
				image : "images/help.png",
				url : "http://scn.sap.com"
			} ]
}
];
