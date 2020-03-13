var TVShows = [
	{
    name:"Planet Earth II",
    IMDB:9.5,
    year:2016,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    name:"Band of Brothers",
    IMDB:9.5,
    year:2001,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    name:"Planet Earth",
    IMDB:9.4,
    year:2006,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    name:"Game of Thrones",
    IMDB:9.4,
    year:2011,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    name:"Breaking Bad",
    IMDB:9.4,
    year:2008,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY268_CR4,0,182,268_AL_.jpg"
  },
  {
    name:"The Star",
    IMDB:4.9,
    year:2017,
    thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4MDQ4NTM2N15BMl5BanBnXkFtZTgwNDM1NTIzMzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
];

$(function(){

	var TVseries = function( TVShows ){
	'use strict';
  		var $container = $('.tv-shows'),
			placeHolderImg = 'http://gallery.smartadserver.com/demo_web/image/image_placeholder.png';


		function IMDBRanking( IMDB ){
			var stars = [];

			for( var count=1; count <= 10 ; count++){
				var cls;

				cls =  ( count <= Math.trunc( IMDB ) ) ? 'active' : '';

				stars.push('<i class="fa fa-star-o ' + cls +'" aria-hidden="true"></i>');
			}

			return stars.join('');
		}

		/* Custom Rating Handlers - Binding future Elements */

		$container.on('click','.fa-star-o', function(){
			var $that = $(this), $stars;

				$stars = $('.imdb-ranking .fa-star-o');
				$that.siblings('.fa-star-o').removeClass('new-rating');

				$that.parents('.imdb-ranking')
					.find('p')
					.nextUntil( this )
					.add( this )
	        		.addClass('new-rating');
		});

		function addShow( TVShow ){

			var name,thumbURL, IMDB, year,
				$movie,$thumb, $title, $imdb, $year;

			name = ( TVShow.hasOwnProperty('name') ) ? TVShow.name : "--";
			thumbURL = ( TVShow.hasOwnProperty('thumb') ) ? TVShow.thumb : placeHolderImg;

			$movie = $('<div>')
						.addClass('movie');
		/* Thumbnail */
			$thumb = $('<img>')
						.attr({
							src:thumbURL,
							alt:name + ' Thumbnail',
							class:'thumbnail'
						});

			$thumb.appendTo( $movie );

		/* Movie Title */
			$title = $('<h3>')
						.addClass('title')
						.text( name );

			$title.appendTo( $movie );

		/* Prod Year */
		
			$year = $('<h5>')
						.text( "Year : " + TVShow.year );

			$year.appendTo( $movie ); 

		/* IMDB Ranking */
			
			$imdb = $('<span>')
						.addClass('imdb-ranking');


			if( TVShow.hasOwnProperty('IMDB') ){

				IMDB = TVShow.IMDB;

				if( typeof IMDB == "number" ){

					$imdb.html('<p>IMDB Ranking : ' + IMDB + '</p>' + IMDBRanking( IMDB ) );
				}
			}

			$imdb.appendTo( $movie );

			/* Appending New Movie block in to container*/
						
			$container.append( $movie );
		}

		for( let show in TVShows ){
			var TVShow = TVShows[ show ];

			/* Current TV Show */
			addShow( TVShow );
		}
	
  }( TVShows );

});


