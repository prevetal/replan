document.addEventListener('DOMContentLoaded', function () {
	/*ДЛЯ ФОРУМА*/
	$(".forum .tags a").on("click", function(e){
		e.preventDefault();

		$(this).toggleClass("active");

		$(".forum .more_btn").data('search', "");
		$(".forum .more_btn").data("page", 1);	

		let ids = [];
		
		$(".forum .tags a.active").each(function( index ) {
		    ids.push($(this).data("id"));
		});
		
		let data = {
			'action': 'load_forum_tag',
			'ids': ids.join(",")
		};

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				$(".forum .items").addClass("load");
			},
			success : function( data ){
				if( data ) { 
					$(".forum .items .row").html(data);
					
				} 
				$(".forum .items").removeClass("load");
			}
		});

		let data_count = {
			'action': 'load_forum_count',
			'ids': ids.join(",")
		};

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data_count,
			type : 'POST',			
			success : function( data ){
				$(".js-count").text(data);
				if(Number(data)<=6)
				{
					$(".all_link").hide();
				}
				else
				{
					$(".all_link").show();
				}
			}
		});
	})

	$(".forum .more_btn").on("click", function(e){
		e.preventDefault();
		let search = $(this).data("search");
		let page = Number($(this).data("page"));		

		let ids = [];
		$(".forum .tags a.active").each(function( index ) {
		    ids.push($(this).data("id"));
		});

		let data = {
			'action': 'load_forum',
			'ids': ids.join(","),
			'page' : page,
			'search': search
		};	

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',	
			beforeSend : function ( xhr ) {
				$(".forum .items").addClass("load");
			},		
			success : function( data ){
				if( data ) { 
					$(".forum .items .row").append(data);					
				} 				

				page++;

				$(".forum .more_btn").data("page", page);	

				let data_count = {
					'action': 'load_forum_count',
					'ids': ids.join(","),
					'search': search
				};

				$.ajax({ 
					url : misha_loadmore_params.ajaxurl, 
					data : data_count,
					type : 'POST',			
					success : function( data ){
						$(".js-count").text(data);
						let max = Math.ceil(Number(data)/6);
						$(".forum .more_btn").data('max', max);
						if(Number(data)<=6)
						{
							$(".all_link").hide();
						}
						else
						{
							$(".all_link").show();
						}
						if($(".forum .more_btn").data('page')==$(".forum .more_btn").data('max'))
						{
							$(".all_link").hide();
						}
						$(".forum .items").removeClass("load");
					}
				});

			}
		});		
	});




	/*для статей*/
	
	$(".articles .more_btn").on("click", function(e){
		e.preventDefault();
		let page = Number($(this).data("page"));		

		let ids = [];
		$(".articles .tags a.active").each(function( index ) {
		    ids.push($(this).data("id"));
		});

		let data = {
			'action': 'load_articles',
			'ids': ids.join(","),
			'page' : page,
			'date' : $(".articles .period .btn.active").data("date")
		};	

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',	
			beforeSend : function ( xhr ) {
				//$(".articles .list").addClass("load");
			},		
			success : function( data ){
				if( data ) { 
					$(".articles .list").append(data);
				} 				

				page++;

				$(".articles .more_btn").data("page", page);	
				//$(".articles .list").removeClass("load");

				let data_count = {
					'action': 'load_articles_count',
					'ids': ids.join(",")
				};

				$.ajax({ 
					url : misha_loadmore_params.ajaxurl, 
					data : data_count,
					type : 'POST',			
					success : function( data ){						
						let max = Math.ceil(Number(data)/8);
						$(".articles .more_btn").data('max', max);
						if(Number(data)<=8)
						{
							$(".all_link").hide();
						}
						else
						{
							$(".all_link").show();
						}
						if($(".articles .more_btn").data('page')==$(".articles .more_btn").data('max'))
						{
							$(".all_link").hide();
						}
						
					}
				});

			}
		});		
	});

	/*для статей клик по тегам*/
	$(".articles .tags-js a").on("click", function(e){
		e.preventDefault();

		$(this).toggleClass("active");

		if($(this).hasClass("active"))
		{
			$(this).parent().css({ order: -1 })	
		}
		else
		{
			$(this).parent().css({ order: 1 })
		}
		

		$(".articles .more_btn").data("page", 1);	

		let ids = [];
		
		$(".articles .tags a.active").each(function( index ) {
		    ids.push($(this).data("id"));
		});
		
		let data = {
			'action': 'load_articles_tag',
			'ids': ids.join(","),
			'date' : $(".articles .period .btn.active").data("date")
		};

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				$(".articles .list").addClass("load");
			},
			success : function( data ){
				if( data ) { 
					$(".articles .list").html(data);
				} 
				$(".articles .list").removeClass("load");
			}
		});

		let data_count = {
			'action': 'load_articles_count',
			'ids': ids.join(","),
			'date' : $(".articles .period .btn.active").data("date")
		};

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data_count,
			type : 'POST',			
			success : function( data ){				
				if(Number(data)<=8)
				{
					$(".all_link").hide();
				}
				else
				{
					$(".all_link").show();
				}
			}
		});
	})


	/*для статей клик по периоду*/
	$(".articles .period .btn").on("click", function(e){
		e.preventDefault();

		$(".articles .more_btn").data("page", 1);	

		let ids = [];
		
		$(".articles .tags a.active").each(function( index ) {
		    ids.push($(this).data("id"));
		});
		
		let data = {
			'action': 'load_articles_tag',
			'ids': ids.join(","),
			'date' : $(this).data("date")
		};

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				$(".articles .list").addClass("load");
			},
			success : function( data ){
				if( data ) { 
					$(".articles .list").html(data);
				} 
				$(".articles .list").removeClass("load");
			}
		});

		let data_count = {
			'action': 'load_articles_count',
			'ids': ids.join(","),
			'date' : $(this).data("date")
		};

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data_count,
			type : 'POST',			
			success : function( data ){				
				if(Number(data)<=8)
				{
					$(".all_link").hide();
				}
				else
				{
					$(".all_link").show();
				}
			}
		});
	})



	/*для портфолио*/
	$(".projects .tags input").on("change", function(e){
		e.preventDefault();

		$(".projects .more_btn").data("page", 1);	

		let ids = [];
		
		$(".projects .tags input:checked").each(function( index ) {
		    ids.push($(this).data("id"));
		});
		
		let data = {
			'action': 'load_project_tag',
			'ids': ids.join(",")
		};

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				$(".projects .items").addClass("load");
			},
			success : function( data ){
				if( data ) { 
					$(".projects .items").html(data);
				} 
				initAjaxProject();
				$(".projects .items").removeClass("load");
			}
		});

		let data_count = {
			'action': 'load_project_count',
			'ids': ids.join(",")
		};

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data_count,
			type : 'POST',			
			success : function( data ){				
				if(Number(data)<=8)
				{
					$(".all_link .more_btn").hide();
				}
				else
				{
					$(".all_link .more_btn").show();
				}
			}
		});
	});

	/*Для портфолио подгрузка работ по кнопке ЕЩЕ*/

	$(".projects .more_btn").on("click", function(e){
		e.preventDefault();
		let page = Number($(this).data("page"));		

		let ids = [];
		$(".projects .tags input:checked").each(function( index ) {
		    ids.push($(this).data("id"));
		});

		let data = {
			'action': 'load_project',
			'ids': ids.join(","),
			'page' : page
		};	

		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',	
			beforeSend : function ( xhr ) {
				//$(".articles .list").addClass("load");
			},		
			success : function( data ){
				if( data ) { 
					$(".projects .items").append(data);
					initAjaxProject();
				} 				

				page++;

				$(".projects .more_btn").data("page", page);	
				//$(".articles .list").removeClass("load");

				let data_count = {
					'action': 'load_project_count',
					'ids': ids.join(",")
				};

				$.ajax({ 
					url : misha_loadmore_params.ajaxurl, 
					data : data_count,
					type : 'POST',			
					success : function( data ){						
						let max = Math.ceil(Number(data)/8);
						$(".projects .more_btn").data('max', max);
						if(Number(data)<=8)
						{
							$(".all_link .more_btn").hide();
						}
						else
						{
							$(".all_link .more_btn").show();
						}
						if($(".projects .more_btn").data('page')==$(".projects .more_btn").data('max'))
						{
							$(".all_link .more_btn").hide();
						}
						
					}
				});

			}
		});		
	});


	/*подгрузка услуг */

	$(".prices .all_link-js").on("click", function(e){
		e.preventDefault();		
        
        $(this).parent().find(".item.hide").each(function(i,elem) {        	
            if(i==6)
            {                
                return false;
            }
            $(elem).removeClass("hide");
        }); 

        if($(this).parent().find(".item.hide").length==0)
        {
            $(this).hide();
        }   
	});


	/*Подгрузка в поиске*/
	$('.search_info .more_btn').click(function(){
 
		var button = $(this),
		    data = {
			'action': 'loadmore_search',
			'query': misha_loadmore_params.posts, 
			'page' : misha_loadmore_params.current_page
		};
 
		$.ajax({ 
			url : misha_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.text('Загрузка...'); 
			},
			success : function( data ){
				if( data ) { 
					button.text( 'Показать ещё результаты' ); 
					$(".result").append(data);
					misha_loadmore_params.current_page++;
 
					if ( misha_loadmore_params.current_page == misha_loadmore_params.max_page ) 
						button.remove(); 
				} else {
					button.remove(); 
				}
			}
		});
	});



	$('header .search .input').focus(function() {
		$('header .search form').addClass('open')
	})

	$('header .search .input').blur(function() {
		setTimeout(() => {
			$('header .search form').removeClass('open')
			$('header .search .tips').hide()
		}, 100)
	})

	$('header .search .input').keyup(function() {
		let _self = $(this)

		setTimeout(() => {
			if(_self.val().length > 2)
			{
				processChanges(_self.val(), 555)
				//аякс поиск дебоунсер
				
			}
			else
			{
				$('header .search .tips').fadeOut(200)	
			}
		})
	})	
})



function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
  
function saveInput(a="cont"){
	console.log('Saving data');
	console.log(a);
	$(".search .all_link a").attr("href", "https://replanmos.ru/?s="+a)
	$(".empty").hide();
	let data = {
		'action': 'loadmore_search_modal',
		'search' : a
	};

	$.ajax({ 
		url : misha_loadmore_params.ajaxurl, 
		data : data,
		type : 'POST',
		beforeSend : function ( xhr ) {
			
		},
		success : function( data ){
			console.log(data);
			if( data.trim()!="") { 
				$("header .result").html(data);
				$('header .search .tips').fadeIn(300)
			} 
			else
			{
				$('header .search .tips').fadeIn(300)
				$("header .empty").show();
				$("header .result").html("");
			}
		}
	});
}

const processChanges = debounce(saveInput, 1000);