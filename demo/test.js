_documentReady($=>{
	
	
	
	_writeLog("Hello...");
	_writeLog("Hello...",false);
	_writeLog("Hello...",true);

	$btn_test = __({
		el:"btn_test"
	});
	$btn_clear = __({
		el:"btn_clear"
	});
	$btn_ajax = __({
		el:"btn_ajax"
	});
	$username = __({
		el:"txt_username"
	});
	$result = __({
		el:"disp_result"
	});

	$my_file = __({
		el:"my_file"
	});

	$txt_content = __({
		el:"txt_content"
	});
	$btn_get_set = __({
		el:"btn_get_set"
	});
	$btn_print = __({
		el:"btn_print"
	});
	

	$txt_set_content = __({
		el:"txt_set_content"
	});

	$album = __({
		el:"#album",
		image:'https://www.w3schools.com/css/trolltunga.jpg'
	});

	$btn_load_image = __({
		el:"btn_load_image"
	});


	$btn_test.when("click",$=>{
		$username.getValue ==='' || $username.focus();

		_a($username.getValue);
	});

	$btn_clear.when("click",$=>{
		$username.clearValue();
	});

	$btn_ajax.when("click",$=>{
		$my_ajax = __({
			url:"https://jsonplaceholder.typicode.com/comments/1",
			method:"get"
		});
		$result.setContent("Loading...");
		$my_ajax.request($res=>{
			$result.setContent($res);
		});
	});

	$my_file.previewImage("my_img");

	$btn_load_image.when("click",$=>{
		$album.loadImage();
	});


	$btn_get_set.when("click",$=>{
		$txt_set_content.getValue==='' || $txt_set_content.focus();
		$txt_content.setContent($txt_set_content.getValue);
		_a($txt_content.getContent);
	});

	$txt_set_content.setValue("Lorem Ipsum");

	$disp_content_event = __({
		el:"disp_content_event"
	});
	$my_event_text = __({
		el:"my_event_text"
	});

	$my_event_text.when("keydown",$=>{
		$disp_content_event.setContent($my_event_text.getValue);
	});

	_me.key($=>{
		alert("Escape");
	},_keyCode.escape);


	$btn_scroll = __({
		el:"btn_scroll"
	});
	$btn_scroll_2 = __({
		el:"btn_scroll_2"
	});


	$btn_scroll.when("click",$=>{
		_scrollTo({
			x:0,
			y:0
		});
	});
	$btn_scroll_2.when("click",$=>{
		_scrollTo({
			el:"center_body"
		});
	});

	$print_this_element = __({
		el:"print_this_element"
	});

	$btn_print.when("click",$=>{
		$print_this_element.print({
			title:"My Report",
			width:500,
			height:500,
			footer:"Copyright@2018"
		});
	});

});	