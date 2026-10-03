import { SCHOOL_INFO } from '../data/schoolData';

export function getWordPressPagesXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<!-- generator="WordPress/6.7" created="2026-10-02 23:50" -->
<rss version="2.0"
	xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:wp="http://wordpress.org/export/1.2/"
>

<channel>
	<title>${SCHOOL_INFO.name}</title>
	<link>https://wiseup.edu.pk</link>
	<description>${SCHOOL_INFO.tagline}</description>
	<pubDate>Fri, 02 Oct 2026 23:50:00 +0000</pubDate>
	<language>en-US</language>
	<wp:wxr_version>1.2</wp:wxr_version>
	<wp:base_site_url>https://wiseup.edu.pk</wp:base_site_url>
	<wp:base_blog_url>https://wiseup.edu.pk</wp:base_blog_url>

	<generator>https://wordpress.org/?v=6.7</generator>

	<!-- PAGE 1: Home -->
	<item>
		<title>Home</title>
		<link>https://wiseup.edu.pk/home/</link>
		<pubDate>Fri, 02 Oct 2026 23:50:00 +0000</pubDate>
		<dc:creator><![CDATA[admin]]></dc:creator>
		<guid isPermaLink="false">https://wiseup.edu.pk/?page_id=201</guid>
		<description></description>
		<content:encoded><![CDATA[<h2>Where Excellence Meets Opportunity</h2><p>${SCHOOL_INFO.tagline}</p>]]></content:encoded>
		<excerpt:encoded><![CDATA[]]></excerpt:encoded>
		<wp:post_id>201</wp:post_id>
		<wp:post_date><![CDATA[2026-10-02 23:50:00]]></wp:post_date>
		<wp:post_date_gmt><![CDATA[2026-10-02 23:50:00]]></wp:post_date_gmt>
		<wp:comment_status><![CDATA[closed]]></wp:comment_status>
		<wp:ping_status><![CDATA[closed]]></wp:ping_status>
		<wp:post_name><![CDATA[home]]></wp:post_name>
		<wp:status><![CDATA[publish]]></wp:status>
		<wp:post_parent>0</wp:post_parent>
		<wp:menu_order>1</wp:menu_order>
		<wp:post_type><![CDATA[page]]></wp:post_type>
		<wp:is_sticky>0</wp:is_sticky>
		<wp:postmeta>
			<wp:meta_key><![CDATA[_wp_page_template]]></wp:meta_key>
			<wp:meta_value><![CDATA[front-page.php]]></wp:meta_value>
		</wp:postmeta>
	</item>

	<!-- PAGE 2: About Us -->
	<item>
		<title>About Us</title>
		<link>https://wiseup.edu.pk/about/</link>
		<pubDate>Fri, 02 Oct 2026 23:50:00 +0000</pubDate>
		<dc:creator><![CDATA[admin]]></dc:creator>
		<guid isPermaLink="false">https://wiseup.edu.pk/?page_id=202</guid>
		<description></description>
		<content:encoded><![CDATA[<h2>About Our Heritage & Vision</h2><p>Wise Up International High School was established on Khojak Road, Model Town, Quetta.</p>]]></content:encoded>
		<excerpt:encoded><![CDATA[]]></excerpt:encoded>
		<wp:post_id>202</wp:post_id>
		<wp:post_date><![CDATA[2026-10-02 23:50:00]]></wp:post_date>
		<wp:post_date_gmt><![CDATA[2026-10-02 23:50:00]]></wp:post_date_gmt>
		<wp:comment_status><![CDATA[closed]]></wp:comment_status>
		<wp:ping_status><![CDATA[closed]]></wp:ping_status>
		<wp:post_name><![CDATA[about]]></wp:post_name>
		<wp:status><![CDATA[publish]]></wp:status>
		<wp:post_parent>0</wp:post_parent>
		<wp:menu_order>2</wp:menu_order>
		<wp:post_type><![CDATA[page]]></wp:post_type>
		<wp:is_sticky>0</wp:is_sticky>
		<wp:postmeta>
			<wp:meta_key><![CDATA[_wp_page_template]]></wp:meta_key>
			<wp:meta_value><![CDATA[page-about.php]]></wp:meta_value>
		</wp:postmeta>
	</item>

	<!-- PAGE 3: Academics & Services -->
	<item>
		<title>Academics &amp; Services</title>
		<link>https://wiseup.edu.pk/services/</link>
		<pubDate>Fri, 02 Oct 2026 23:50:00 +0000</pubDate>
		<dc:creator><![CDATA[admin]]></dc:creator>
		<guid isPermaLink="false">https://wiseup.edu.pk/?page_id=203</guid>
		<description></description>
		<content:encoded><![CDATA[<h2>Curriculum, Facilities & Services</h2><p>Developmentally sequenced learning paths from preschool through secondary board examinations.</p>]]></content:encoded>
		<excerpt:encoded><![CDATA[]]></excerpt:encoded>
		<wp:post_id>203</wp:post_id>
		<wp:post_date><![CDATA[2026-10-02 23:50:00]]></wp:post_date>
		<wp:post_date_gmt><![CDATA[2026-10-02 23:50:00]]></wp:post_date_gmt>
		<wp:comment_status><![CDATA[closed]]></wp:comment_status>
		<wp:ping_status><![CDATA[closed]]></wp:ping_status>
		<wp:post_name><![CDATA[services]]></wp:post_name>
		<wp:status><![CDATA[publish]]></wp:status>
		<wp:post_parent>0</wp:post_parent>
		<wp:menu_order>3</wp:menu_order>
		<wp:post_type><![CDATA[page]]></wp:post_type>
		<wp:is_sticky>0</wp:is_sticky>
		<wp:postmeta>
			<wp:meta_key><![CDATA[_wp_page_template]]></wp:meta_key>
			<wp:meta_value><![CDATA[page-services.php]]></wp:meta_value>
		</wp:postmeta>
	</item>

	<!-- PAGE 4: Admissions & Contact -->
	<item>
		<title>Admissions &amp; Contact</title>
		<link>https://wiseup.edu.pk/contact/</link>
		<pubDate>Fri, 02 Oct 2026 23:50:00 +0000</pubDate>
		<dc:creator><![CDATA[admin]]></dc:creator>
		<guid isPermaLink="false">https://wiseup.edu.pk/?page_id=204</guid>
		<description></description>
		<content:encoded><![CDATA[<h2>Admissions Inquiry & Campus Contact</h2><p>Model Town Khojak Road Quetta. Phone: ${SCHOOL_INFO.phone}</p>]]></content:encoded>
		<excerpt:encoded><![CDATA[]]></excerpt:encoded>
		<wp:post_id>204</wp:post_id>
		<wp:post_date><![CDATA[2026-10-02 23:50:00]]></wp:post_date>
		<wp:post_date_gmt><![CDATA[2026-10-02 23:50:00]]></wp:post_date_gmt>
		<wp:comment_status><![CDATA[closed]]></wp:comment_status>
		<wp:ping_status><![CDATA[closed]]></wp:ping_status>
		<wp:post_name><![CDATA[contact]]></wp:post_name>
		<wp:status><![CDATA[publish]]></wp:status>
		<wp:post_parent>0</wp:post_parent>
		<wp:menu_order>4</wp:menu_order>
		<wp:post_type><![CDATA[page]]></wp:post_type>
		<wp:is_sticky>0</wp:is_sticky>
		<wp:postmeta>
			<wp:meta_key><![CDATA[_wp_page_template]]></wp:meta_key>
			<wp:meta_value><![CDATA[page-contact.php]]></wp:meta_value>
		</wp:postmeta>
	</item>
</channel>
</rss>`;
}
