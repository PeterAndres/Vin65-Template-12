<cfoutput> <!DOCTYPE html>

<html lang="en-US">
<head>
  
	<meta charset="utf-8">
	
	<cf_metaTags>
	
	<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    
	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
	<link rel="stylesheet" href="/assets/css/jquery.sidr.dark.css">
        
	<cf_vin65GlobalAssets>   
	
	<cf_css files="/assets/slick/slick-winedirect.css,/assets/slick/slick-theme-winedirect.css,/assets/css/screen.min.css">
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

		<cf_logo>
				
		<!-- <a href="/" accesskey="h" class="logo"><img src="/assets/images/logo.png" alt="<cf_websiteName>"></a> -->
				
		<nav>
			<cf_layoutHeaderNav depth="2">
		</nav>
	</header>

	<main>
		<section class="bannerHome container v65-group" role="region" aria-label="Homepage Banner">
			<cf_pods location="Home Page Banner" type="description,image">
		</section><!--/bannerHome-->
		
		<section class="container v65-group">
			<article class="homepageProductGroup">
				<cf_product_group code="HomepageProductGroup">
			</article>
			<article class="homepageText">
				<cf_mainContent>
			</article>
		</section><!--/container-->

		<div class="sliderWrapper">
			<div id="slider"></div>
		</div><!--/slider-->

		<section class="aboutHome container v65-group">
			<cf_contentblock group="About Us">
		</section><!--/aboutHome-->

		<section class="ourWinesHome v65-group">
			<div class="container">
				<cf_contentblock group="Our Wines">
			</div>
		</section><!--/ourWinesHome-->

		<section class="eventsHome container v65-group">
			<h2>Events</h2>
			<cf_contentblock group="Events">
		</section><!--/eventsHome-->
	</main>
	
	<footer>
		<div class="footerUpper">
			<section class="container v65-group">
				<div class="left">
					<cf_pods location="Contact Us">
				</div>
				<div class="right">
					<cf_pods location="Social Title" type="Title">
					<cf_socialMediaLinks>
					<cf_subscribe contactType="Newsletter">
				</div>	
			</section>
		</div><!--/footerUpper-->
		
		<div class="footerLower">
			<section class="container v65-group">
				<a class="backToTop hideText" href="##">back to top</a>
				<cf_layoutFooterNav>
				<p class="disclaimer">
						<cf_footerInfo>
				</p>
				<p class="accolade">
					<cf_vin65Accolade> | <cf_copyright>
				</p>
			</section>
		</div><!--/footerLower-->
	</footer>
	

	<cf_js files="/assets/slick/slick-winedirect.js,/assets/js/scripts.js,/assets/js/jquery.sidr.min.js,/assets/js/track-focus.min.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
