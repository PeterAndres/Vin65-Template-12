# Template 12 Setup Procedure

## Website Settings

####Functions

1. Add Components
	* Site map
	* Club List
2. Copy Pages
	* Choose from the corresponding template if possible
	* If the correct template is not available, choose Vin65 Designer Launch, Vin65 Cloud Pages Template, or Vin65 Template 1
3. Setup for Ecommerce
	* Default Price Level
	* Setup Inventroy
4. Copy Wine Attributes
	* Same instructions as step 2 for where to copy from
	* Wine Type/Varietal
	* Wine Region/Appellation
	* Bottle Sizes
5. Copy Blog Posts
	* Same instructions as step 2 for where to copy from
6. Copy Event Calendars
	* Same instructions as step 2 for where to copy from
7. Copy Shipping Function
	* Same instructions as step 2 for where to copy content from
8. Pod Locations
	1. Home Page Banner
		* Location - Home Page Banner
		* Type - Website
		* Allow Adding Pods
		* Allow Free Form Text
		* Allow Pod Image
			* Width: 216
			* Height: 375
	2. Contact Us
		* Location - Contact Us
		* Type - Website
		* Allow Adding Pods
		* Allow Free Form Text
	3. Social Title
		* Location - Social Title
		* Type - Website
	4. Left Nav Title
		* Location - Left Nav Title
		* Type - Website
		* Page Tree

####Settings

1. Settings
	* Language, Currency, Date, and Admin Date
		* USA - en_US, and USD
		* Australia - en_AU, AUD
		* Canada - en_US, and CAD
	* ShipTo Countries
		* USA - US
		* Australia - AU
		* Canada - CA
2. Analytics
	* Create and enter appropriate analytic code data
3. Layout
	* Enable responsive design

####POS, Facebook, iPad, Mobile

* If applicable, setup, otherwise disable
* Mobile should be disabled

####Contacts

1. Email
	* Default Content - Use [this email template](https://gist.github.com/jaredSiebert/450796) and update the address, phone number, and website name
	* Remove unsubscribe link from template for setting up system email
	* *You will need this email template again shortly so do not discard it*
2. General
	* Required Age
		* USA - 21
		* Australia or Alberta- 18
		* Canada - 19
	* Enable "Has New Login CSS"
	* Enable "Action Email"

####Product

1. Products
	* Enable "Has Product Zoom"
	* Disable "Show Add Case"
	* Under "Layouts", enable 1 Up, 2 Up, 3 Up, 5 Up, List (Columns should be ProductTitle only), 1 Up Store
	* Product Drilldown - Choose "Custom" from the option list
	* Enable "Product Groups" 
	* Group Layouts - Enter "homePageCustom"

####Store

1. Orders
	* Australia Only - Setup PDF watermark 
		* Invoice PDF Watermakr: /assets/client/File/invoice.pdf
2. State Profile
	* Enable "Bottle Deposite"
	* Enable "Has Custom Taxes"
		* Custom Tax 1: GST
		* Custom Tax 2: PST
		* Custom Tax 3: HST

Click "Apply Changes", log out, and log back in to apply changes to the admin panel.

####Functions

* Setup System Email - Select all options

####Content

1. Pages
	* Enable "Layouts" and enter "Wide Page"
2. Photo Galleries
	* Width: 630
	* Height: 420
	* Enable "Crop To Fit"
3. Social Media
	* "Socail Bar on Blog List" and "Socail Bar on Product List" - Disable both
	* "Socail Bar on Blog Drilldown" and "Socail Bar on Product Drilldown" - *These are the defaults, review client data for their selected options*
		* Twitter
		* Share This
		* Facebook "Like" As Button
		* Google +1
		* Pinterest
4. General
	* Enable Content Blocks
	* Enable Business Locator
		* Enter winery address into Google Maps.
		* Right-click the point on the map and select "What's here?" to find the latitude and longitude
		* Enter the appropriate values in the Latitude and Longitude fields.
		* Set zoom level to 3

		
####Contacts

1. Email
	* Update "Default Content" with the same email template, but with the unsubscribe link that you removed before.
	
Click "Apply Changes", log out, and log back in to apply changes to the admin panel.

---

## Website Content

####Settings

####Resource Bundle

* Change "Remove Item" to "Remove"
* Change "Update Item" to "Update"

####Import/Export

* Select "Product Importer"
* Excel File - Import a copy of the products from Template 12
* Format - Set to advanced
* Click Import

####Designer Launch

* Update print.htm
	* Update the address and phone number
	* For Australia 
		* Change "Receipt" to "Tax Receipt"
		* After `<v65:mainContent></v65:mainContent>` add `<p style="text-align: right; font-weight: bold;">*Total includes GST</p>`
* Ensure that "Product Custom Drilldown" is set to "product-drilldown.htm"
* Ensure that "Wide Page" is set "wide.htm"
* Parse all layouts

####Content Groups

**About Us**

1. General
	* Title: About Us
2. Content Elements
	1.  Title
		* Element Type: Text Box (Single Line)
		* Label: Title
		* Required: Yes
	2. Teaser
		* Element Type: Text Box (Multi Line)
		* Label: Teaser
		* Required: Yes
	3. Link
		* Element Type: Text Box (Single Line)
		* Label: Link
		* Required: Yes
	4. Photo
		* Element Type: Upload Photo
		* Label: Photo
		* Width: 480
		* Height: 225
 			3. Output

```html
<div class="ctaLeft About">
	<h2>//Title//</h2>
	<p>	//Teaser//</p>
	<p>	<a class="linkBtn" href="//Link//"><span>Learn More</span></a></p>
</div>
<div class="ctaRight">
	<img alt="//Photo//" src="//Photo//" />
</div>
```

**Events**

1. General
	* Title: Events
	* Is Component: Yes
2. Content Elements
	1. Month, Date, Year, Event Title, Location, Time, Link
		* Element Type: Text Box (Single Line)
		* Required: Yes
	2. Teaser
		* Element Type: Text Box (Multi Line)
		* Required: Yes
3. Output

```html
<div class="v65Left Event">
	<div class="upperEvents">
		<div class="date">
			<p>	//Month//</p>
			<p><strong>//Date//</strong></p>
			<p>//Year//</p>
		</div>
		<div class="eventName">
			<p><strong>//Event Title//</strong></p>
			<p><i>//Location//</i></p>
			<p>//Time//</p>
		</div>
	</div>
	<div class="middleEvents">
		<p>//Teaser//</p>
	</div>
	<div class="lowerEvents">
		<a href="//Link//">Click to view this event +</a>
	</div>
</div>
```

**Our Wines**

1. General
	* Title: Our Wines
2. Content Elements
	1. Photo
		* Element Type: Upload Photo
		* Label: Photo
		* Required: Yes
		* Height: 480
		* Width: 258
	2. Title
		* Element Type: Text Box (Single Line)
		* Label: Title
		* Required: Yes
	3. Teaser
		* Element Type: Text Box (Multi Line)
		* Label: Teaser
		* Required: Yes
	4. Link
		* Element Type: Text Box (Single Line)
		* Label: Link
		* Required: Yes
3. Output

```html
<div class="ctaLeft">
	<img alt="//Photo//" src="//Photo//" />
</div>
<div class="ctaRight Wines">
	<h2>//Title//</h2>
	<p>	//Teaser//</p>
	<p>	<a class="linkBtn" href="//Link//"><span>Shop Now</span></a></p>
</div>
```

**Social Icons**

1. General
	* Title: Social Icons
2. Content Elements
	1. Social Channel
		* Element Type: Option List
		* Label: Social Channel
		* Required: Yes
		* Options
			1. facebook
			2. twitter
			3. pinterest
			4. gplus
			5. youtube
			6. vimeo
	2. Link
		* Element Type: Text Box (Single Line)
		* Label: Link
		* Required: Yes
3. Output

```html
<li><a href="//Link//"><i class="icon-//Social Channel// icon-large"></i></a></li>
```

####Contacts
1. Contact Types
	* Add a Contact Type
		* Contact Type: Unsubscribe
		* Keyword: Unsubscribe

####Store

####Products

**Product Groups**

* Add a Product Group
* Group: Featured Product
* Code: HomepageProductGroup
* Description: `<p>Lorem ipsum dolor sit amet.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br />
<a href="http://template12.vin65.com/wines">This is a link to the other page...</a></p>`
* Layout: homePageCustom

**Products**

* Assign the first product to the Product Group "Featured Product"
* Assign each product to all categories under website pages

**Clubs** - *Add two clubs. One with the name "Red Wine Club", one with the name "White Wine Club". Aside from the name, each have the same settings and content*

1. General
	* Shipping: Only to States Marked Compliant
	* Display On Web
	* Is Active
	* Teaser 

```html
<p>This is your &lsquo;club teaser.&rsquo; This is not edited through the content editor, but instead through your club managemtn tools. <a href="http://documentation.vin65.com/Store/Clubs/Club-Setup" target="_blank">Learn how to edit this text here &raquo;</a></p>

<p>Mauris ut nisi at diam porta dapibus at et urna. Suspendisse sodales euismod diam, ac tristique nisi lacinia a. Sed suscipit fringilla est, in vestibulum purus faucibus eget.</p>
```

2. Description

```html
<p>This is your &lsquo;club description.&rsquo; This is not edited through the content editor, but instead through your club management tools. <a href="http://documentation.vin65.com/Store/Clubs/Club-Setup" target="_blank">Learn how to edit this text here &raquo;</a></p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum erat at ipsum mollis eget tincidunt lacus laoreet. Morbi sit amet rutrum massa. Vivamus vel eros purus.</p>

<p>Quisque aliquet magna sed tellus gravida aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus eget nibh viverra hendrerit. Proin in lectus mi, eget lobortis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<ul>
	<li>Benefit One</li>
	<li>Benefit Two</li>
	<li>Benefit Three</li>
</ul>

<p>Vivamus risus nibh, vulputate sed porttitor nec, dapibus nec risus. Ut dictum interdum laoreet. Ut id vulputate nisl. Suspendisse imperdiet tempus tellus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse egestas lacus nec risus consequat ac sagittis nunc ultricies. Vivamus a nibh ante.</p>
```

####Content Editor

####Content Blocks

1. About Us
	1. General Information:
		* Title: About Us
		* Group: About Us
		* Is Active? Yes
	2. Elements
		* Title: About Us
		* Teaser: This is a teaser for the about us pod. Elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam.
		* Link: /About-Us
		* Photo: [cellar.jpg](http://template12.vin65.com/assets/images/contentblock/photos/cellar.jpg)
2. Events
	1. Event 1
		1. General Information: 
			* Title: Event 1
			* Group: Events
			* Order: 2
			* Is Active? Yes
		2. Elements
			* Month: May
			* Date: 23rd
			* Year: 2014
			* Event Title: Lorem Ipsum Wine Tasting
			* Location: At the tasting house
			* Time: 2:00pm - 3:00pm
			* Teaser: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
			* Link: /About-Us/Events
	2. Event 2
		1. General Information: 
			* Title: Event 2
			* Group: Events
			* Order: 2
			* Is Active? Yes
		2. Elements
			* Month: June
			* Date: 15th
			* Year: 2014
			* Event Title: Dolor sai vie
			* Location: At the Wine Cellar
			* Time: 5:00pm - 12:00am
			* Teaser: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
			* Link: /About-Us/Events
	3. Our Wines
		1. General Information
			* Title: Our Wines
			* Group: Our Wines
			* Order: 3
			* Is Active? Yes
		2. Elements
			* Photo: [bottles.png](http://template12.vin65.com/assets/images/contentblock/photos/bottles.png)
			* Tilte: Our Wines
			* Teaser: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
			* Link: /Wines
	4. Social Icons - Use the same data for each social icon. Set the title and social channel to the appropriate setting.
		1. General Information
			* Title: *Social Icon name*
			* Group: Social Icons
			* Order: 4
			* Is Active? Yes
		2. Elements
			* Social Channel: *Same as title*
			* Link: #

####Pods

1. Home Page Banner
	* Title: Banner
	* Active: Yes
	* Photo: [bannerBottles.png](http://template12.vin65.com/assets/images/pods/bannerBottles.png)
	* Content: `<p><img alt="" src="http://template12.vin65.com/assets/client/Image/bannerText.png" /></p>`
2. Contact Us
	* Title: Contact Us
	* Active: Yes
	* Content:

```html
<h2>Contact Us</h2>
<p>1111 North Street<br />
Our City, CA</p>
<p>+1 (707) 888-9090</p>
<p>+1 (707) 888-9191</p>
<p><a href="mailto:info@template12.com">info@template12.com</a></p>
```
3. Social Title
	* Title: Stay Connected
	* Active: Yes
4. Left Nav Title
	1. Pod
		* Title: Our Wines
		* Active: Yes
	2. Pages
		* Select "Wines"

####Components 

1. Forms
	1. Contact Us
		1. General
			* Form Name: Contact Us
			* Is Tied To Contact: Yes
			* Click "Advanced" and set Alignment to "Right (With Text Wrap)"
		2. Contact Fields - All required (Click the required check box to enable display and required)
			* First Name
			* Last Name
			* Main Phone
		3. Form Questions
			* Question Type: Text Box (Multi Line)
			* Question: Questions/Comments
			* Click "Advanced" and set Field Height to 150
		4. Thank You
			* Thank you for contacting us. Someone will respond shortly if necessary.
	2. Unsubscribe
		1. General
			* Form Name: Unsubscribe
			* Is Tied To Contact: Yes
		2. Contact Fields
			* Choose "Unsubscribe" from the contact types list
		3. Thank You
			* You have successfully unsubscribed from our mailing list.
2. Events
	* Click on the "Our Tastings" event
	* Click edit under "General Information".
	* Assign the event to the "Our Events" calendar
	* Save changes
	* Click "Manage Event Calendars"
	* Click "Our Events"
	* Click edit under "General Information".
	* Save changes (this forces the system to recognize the event calendar)
3. Photos
	1. Vineyard Tour
		1. Gallery 1
			* Title: Gallery 1
			* Gallery: Choose "Add new"
				* Title: Vineyard Tour
			* Photo: [gallery1.jpg](http://template12.vin65.com/assets/images/photogallery/images/large/Gallery1.jpg)
		2. Gallery 2
			* Title: Gallery 2
			* Gallery: Vineyard Tour
			* Photo: [gallery2.jpg](http://template12.vin65.com/assets/images/photogallery/images/large/Gallery2.jpg)
		3. Gallery 3
			* Title: Gallery 3
			* Gallery: Vineyard Tour
			* Photo: [gallery3.jpg](http://template12.vin65.com/assets/images/photogallery/images/large/Gallery3.jpg)
		4. Gallery 4
			* Title: Gallery 4
			* Gallery: Vineyard Tour
			* Photo: [gallery4.jpg](http://template12.vin65.com/assets/images/photogallery/images/large/Gallery4.jpg)
	2. Homepage
		* Click "Manage Photos"
		* Add a photo gallery
			1. General Information
				* Title: Homepage
			2. Admin
				* Photo Width: 950
				* Photo Height: 350
				* Uncheck "Is Deletable" and "Is Component"
				* Click save and copy the Gallery ID
				* FTP into the website you are working on. 
				* Open www/assets/js/scripts.js in your preferred editor
				* Update the gallery ID in quotes on line 98 with the gallery ID you just copied.
				* Save the file and FTP it back up to the server
		1. Banner 1
			* Title: Banner 1
			* Gallery: Homepage
			* Order: 2
			* Photo: [banner1](http://template12.vin65.com/assets/images/photogallery/images/large/Banner1.jpg)
		2. Banner 2
			* Title: Banner 2
			* Gallery: Homepage
			* Order: 2
			* Photo: [banner2](http://template12.vin65.com/assets/images/photogallery/images/large/Banner2.jpg)
		3. Banner 3
			* Title: Banner 3
			* Gallery: Homepage
			* Order: 2
			* Photo: [banner3](http://template12.vin65.com/assets/images/photogallery/images/large/Banner3.jpg)

####General Pages

1. Wines - Edit child page. In the page properties, ensure that the product layout is the same as the page title. Eg. 1 Up Display would have the product layout "1 Up"
2. Wine Clubs - Update the club list component.
3. About Us
	1. Vineyard Tour - Update the photo gallery component
	2. Events - Update the event component
4. Contact Us
	* In the page properties, set the page layout to "Wide Page"
	* Update the content to the HTML below
	* Update the contact us component and the business locator component

```html
<h1>Contact Us</h1>

<div class="colWrapper v65-group">
<div class="col2">
<p>&lt;img data-cke-saved-src="http://template12.vin65.com/assets/client/Image/page-image.jpg" src="http://template12.vin65.com/assets/client/Image/page-image.jpg" "=""&gt;</p>

<p>This is a regular content page, <a href="http://documentation.vin65.com/Content-Editor/General-Pages" target="_blank">learn how to use the Vin65 content management tools here »</a></p>

<p><strong>Tasting Room:</strong><br />
1111 North Street<br />
Our City, CA<br />
(707) 888-9090</p>

<p>We are open 7 days a week. 10:00am - 4:00pm drop in any time and tasting our wine.</p>
</div>

<div class="col2">
<p>Below is a form, you can add/edit/remove form fields through our form tools, <a href="http://documentation.vin65.com/Content-Editor/Forms" target="_blank">learn how »</a></p>

<p>[[Contact Us:Component:350f60cc-b8bb-e789-cba9-a7621515ab4a]]</p>
</div>
</div>

<p>[[Business Locator:Component:34a864d5-a92e-9b3a-0fae-12e7ece614c4]]</p>
```
5. Unsubscribe
	* Update the unsubscribe form component
6. 404 Error
	* Update the site map component

---

#FTP

1. Error Page - Update the title, email address, logo alt title, and the copyright.
2. Logo - Use the clients logo to create a logo that fits the template, as well as an email header, favicon, and apple-touch-icon
