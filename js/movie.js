$(function () {

    var TVShows = [
        {
            name: "Planet Earth II",
            IMDB: 9.5,
            year: 2016,
            thumb: "images/planet2.jpg"
        },
        {
            name: "Band of Brothers",
            IMDB: 9.5,
            year: 2001,
            thumb: "images/band.jpg"
        },
        {
            name: "Planet Earth",
            IMDB: 9.4,
            year: 2006,
            thumb: "images/planet.jpg"
        },
        {
            name: "Game of Thrones",
            IMDB: 9.4,
            year: 2011,
            thumb: "images/got.jpg"
        },
        {
            name: "Breaking Bad",
            IMDB: 9.4,
            year: 2008,
            thumb: "images/break.jpg"
        },
        {
            name: "The Star",
            IMDB: 4.9,
            year: 2017,
            thumb: "images/star.jpg"
        }];
        

    var Movies = function (TVShows) {

        var $moviePics = $('.series'),
            $ul,$img,$h3,$h4,$h5;   

        if ( TVShows.length ) {

            $ul = $('<ul>'); 
            TVShows.forEach(function (show, index) {
                
                $h3 = $('<h3>');
                $h5 = $('<h5>');
                $h4 = $('<h4>');
                $img = $('<img>').attr("src",show.thumb);

                ( show.name ) ? $h3.text( show.name ) : $h3.text('Movie Name ');
                ( show.year ) ? $h5.text( show.year ) : $h5.text('Movie Year');
                ( show.IMDB ) ? $h4.text( 'IMDB Ranking : '+show.IMDB ) : $h4.text('Movie IMDB');
                ( show.thumb ) ? $img : $img.text('Movie Text');

                $ul.append( $img );
                $ul.append( $h3 );
                $h3.append( $h5 );
                $h5.append( $h4 );
            });
        }
        $moviePics.append( $ul );    
    
    }(TVShows);

    
});