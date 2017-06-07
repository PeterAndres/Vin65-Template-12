<cfoutput> <!DOCTYPE html>

<html>
<head>
  
	<meta charset="utf-8">
	
	<cf_metaTags>
	
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    
	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
	<link rel="stylesheet" href="/assets/css/jquery.sidr.dark.css">
        
	<cf_vin65GlobalAssets>   
	
	<cf_css files="/assets/nivo/nivo-slider.css,/assets/css/screen.min.css">
	<!--[if lt IE 9]>
		<cf_js files="/assets/js/html5shiv-printshiv.js">
	<![endif]-->
	<!-- Respond.js is a polyfill so  media queries work on IE8 and older browers -->
	<cf_js files="/assets/js/respond.min.js">
	
</head>
<body>

	<header class="container v65-group">
		<div id="user-tools">
			<div id="mobile-header">
				<a id="responsive-menu-button" href="##sidr-main"><img src="/assets/images/mobileIcon.png"/></a>
			</div>	
			<cf_points>
			<cf_login>
			<cf_modalCart>	
		</div><!--/user-tools-->
		<!-- <div class="spacer">&nbsp;</div> -->

		 <h1 class="hideText logo"><a href="/" accesskey="h"><cf_websiteName></a></h1><!--/logo -->
				
		<!-- <a href="/" accesskey="h" class="logo"><img src="/assets/images/logo.png" alt="<cf_websiteName>"></a> -->
				
		<nav>
			<cf_layoutHeaderNav depth="2">
		</nav>
	</header>

	<div class="bannerInterior">
	</div><!--/banner-->
	
	<section class="container v65-group">
		<div class="contentWide">
			<cf_mainContent>
		</div>
	</section><!--/Upper Content-->
	
	<footer>
		<div class="footerUpper">
			<section class="container v65-group">
				<div class="left">
					<cf_pods location="Contact Us">
				</div>
				<div class="right">
					<cf_pods location="Social Title" type="Title">
					<ul><cf_customFile file="/v65html/_social.html"></ul>
					<cf_subscribe contactType="Newsletter">
				</div>	
			</section>
		</div><!--/footerUpper-->
		
		<div class="footerLower">
			<section class="container v65-group">
				<a class="backToTop hideText" href="##">back to top</a>
				<cf_layoutFooterNav>
				<p class="accolade">
					<cf_vin65Accolade> | <cf_copyright>
				</p>
			</section>
		</div><!--/footerLower-->
	</footer>
		

		<cf_js files="/assets/js/scripts.js,/assets/nivo/jquery.nivo.slider.pack.js,/assets/js/jquery.sidr.min.js">

		<cf_vin65GlobalFooterAssets>

	</body>
	</html> </cfoutput>
