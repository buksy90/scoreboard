angular.module("app", ["app.scoreTable", "app.matchesTable", "app.matchesService", "app.playersService"])
.run(["MatchesService", "PlayersService", function(MatchesService, PlayersService){

    var playersConfig = [
        {
            name: "FC Barca",
            logo: "https://d2r1vs3d9006ap.cloudfront.net/s3_images/1476506/d64fac82-f1a1-4c24-9ced-909aae625fa1_inline.png?1472651093"
        },
        {
            name: "Real Madrid",
            logo: "https://1.bp.blogspot.com/-6qo74ufJB24/WOotJzgaFCI/AAAAAAAAMA8/Sn-OnC8uMJ8nfkDaNn7G7ttmAgdSDda9wCLcB/s1600/02_fc-real-madrid-logo.png"
        },
        {
            name: "PSG",
            logo: "https://cdn.images.express.co.uk/img/static/football_widget/146.png"
        },
        {
            name: "Chelsea",
            logo: "http://soccerlogo.net/uploads/posts/2014-09/1410462243_fc-chelsea.png"
        },
        {
            name: "Juventus",
            logo: "https://3.bp.blogspot.com/-G-LaINOS_LU/Wce9xRE8WII/AAAAAAAABDE/PtHrPPFDSZ4XfrL8XuHYgKmurQPOd1W9wCEwYBhgL/s1600/45.png"
        },
    ];


    playersConfig.forEach(function(player){
        let p = PlayersService.create(player.name);
        p.logo = player.logo;
        PlayersService.register(p);
    });

    var players = PlayersService.getPlayers();
    for(let i = 0; i < players.length; i++) {
        let p1 = players[i];

        for (let j = 0; j < players.length; j++) {
            if (i === j) continue;
            let p2 = players[j];

            let m1 = MatchesService.create(p1, p2);
            MatchesService.register(m1);
        }
    }


    var matches = MatchesService.getMatches();
    for(let j = 0; j < matches.length; j++) {
        if(Math.random() > 0.5) {
            var match = matches[j];
            let s1 = Math.round(Math.random() * 2);
            let s2 = Math.round(Math.random() * 2);
            match.setHomeScore(s1);
            match.setAwayScore(s2);

            PlayersService.incrementPauseExcept([match.getHomePlayer(), match.getAwayPlayer()]);
        }
    }

    /*
    //
    // Test initialization
    //
    var playersCount = 4;
    for(let i = 0; i < playersCount; i++) {
        let p       = Player.new();
        p.name      = "Player "+i;
        players.push(p);
    }

    for(let i = 0; i < players.length; i++) {
        let p1 = players[i];

        for(let j = 0; j < players.length; j++) {
            if(i === j) continue;
            let p2 = players[j];

            let m1 = Match.new(p1, p2);

            let s1 = Math.round(Math.random()*2);
            let s2 = Math.round(Math.random()*2);
            m1.setHomeScore(s1);
            m1.setAwayScore(s2);
            console.log(p1.name, s1, s2, p2.name);

            p1.matches.push(m1);
            p2.matches.push(m1);
        }
    }
    window.players = players;
    */

}]);