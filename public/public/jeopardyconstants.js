// These constants are PULLED from the Internet - the reason is that for testing and playing it is
//difficult to create the categories and games all by oneself
//by using these set games, the user can either choose a default category to build a new game, or
//a default game to play
//default categories can be added to new games created by the user and stored in Mongo


const DOUBLE_JEOPARDY = {
    "title": "double-jeopardy",
    "categories": [
        {
            "name": "NINTENDO",
            "questions": [
                {
                    "answer": "What is Game Boy?",
                    "question": "VARIANTS OF THIS HANDHELD INCLUDE COLOR, POCKET, ADVANCE, AND MICRO",
                    "value": 200
                },
                {
                    "answer": "Who is Mike Tyson?",
                    "question": "ORIGINALLY, THE NES VERSION OF PUNCH-OUT!! FEATURED THIS REAL-LIFE BOXER AS THE END BOSS",
                    "value": 400
                },
                {
                    "answer": "What is tennis?",
                    "question": "MARIO PLAYS THIS SPORT IN THE NORTH AMERICAN PACK-IN GAME FOR THE VIRTUAL BOY",
                    "value": 600
                },
                {
                    "answer": "What is hanafuda?",
                    "question": "NINTENDO STARTED OUT MAKING DECKS FOR THIS GAME, THE NAME OF WHICH TRANSLATES TO \"FLOWER CARDS\"",
                    "value": 800
                },
                {
                    "answer": "What is the PlayChoice-10?",
                    "question": "NINTENDO'S COIN-OPERATED MULTI-GAME NES SYSTEM WAS KNOWN BY THIS NAME IN ARCADES",
                    "value": 1000
                }
            ]
        },
        {
            "name": "ALLITERATION",
            "questions": [
                {
                    "answer": "What is Breaking Bad?",
                    "question": "WALTER WHITE AND JESSE PINKMAN MAKE METH IN AN RV IN THIS AWARD-WINNING TV DRAMA",
                    "value": 200
                },
                {
                    "answer": "What is Castle Crashers?",
                    "question": "THE BEHEMOTH RELEASED THIS MEDIEVAL CO-OP BEAT-EM-UP ON XBOX LIVE ARCADE IN AUGUST 2008",
                    "value": 400
                },
                {
                    "answer": "Who is Pepper Potts?",
                    "question": "SHE'S NOT JUST TONY STARK'S ASSISTANT - SHE ALSO SUITS UP AS THE ARMORED HERO CALLED RESCUE",
                    "value": 600
                },
                {
                    "answer": "Who is Guy Gardner?",
                    "question": "THIS EGOTIST WOULD HAVE BEEN GREEN LANTERN IF THE RING HADN'T CHOSEN HAL JORDAN FIRST",
                    "value": 800
                },
                {
                    "answer": "What is Gentle Giant?",
                    "question": "THIS VISUAL EFFECTS COMPANY CREATES 3D BODY SCANS FOR MOVIES AS WELL AS JUMBO STAR WARS ACTION FIGURES",
                    "value": 1000
                }
            ]
        },
        {
            "name": "COMIC ICONS",
            "questions": [
                {
                    "answer": "What is the Flash?",
                    "image": "flash.png",
                    "question": "Art courtesy http://kalangozilla.deviantart.com/",
                    "value": 200
                },
                {
                    "answer": "What is S.H.I.E.L.D.?",
                    "image": "shield.png",
                    "question": "Art courtesy http://kalangozilla.deviantart.com/",
                    "value": 400
                },
                {
                    "answer": "What is Deadpool?",
                    "image": "deadpool.png",
                    "question": "Art courtesy http://kalangozilla.deviantart.com/",
                    "value": 600,
                    "daily-double": true
                },
                {
                    "answer": "What is Spawn?",
                    "image": "spawn.png",
                    "question": "Art courtesy http://kalangozilla.deviantart.com/",
                    "value": 800
                },
                {
                    "answer": "What is The Red Mist?",
                    "image": "redmist.png",
                    "question": "Art courtesy http://kalangozilla.deviantart.com/",
                    "value": 1000
                }
            ]
        },
        {
            "name": "BRUCE CAMPBELL",
            "questions": [
                {
                    "answer": "Who is Sam Raimi?",
                    "question": "BRUCE'S FIRST FILM WITH THIS DIRECTOR WAS THE 1977 SHORT \"IT'S MURDER\"",
                    "value": 200
                },
                {
                    "answer": "Who is Elvis Presley?",
                    "question": "IN BUBBA HO-TEP, CAMPBELL FIGHTS A MUMMY AS A GERIATRIC VERSION OF THIS ROCK MUSIC LEGEND",
                    "value": 400
                },
                {
                    "answer": "Who is Autolycus?",
                    "question": "BRUCE PLAYED THIS \"KING OF THIEVES\" ON BOTH THE HERCULES & XENA SYNDICATED SERIES",
                    "value": 600
                },
                {
                    "answer": "What is The Adventures of Brisco County Jr.??",
                    "question": "BRUCE STARRED IN JUST 27 EPISODES OF THIS SCI-FI WESTERN SERIES BEFORE FOX CANCELLED IT",
                    "value": 800
                },
                {
                    "answer": "What is The Daring Dragoon?",
                    "question": "ON JACK OF ALL TRADES, CAMPBELL PLAYED AMERICAN SPY JACK STILES AND THIS MASKED ALTER EGO",
                    "value": 1000
                }
            ]
        },
        {
            "name": "FOUR-LETTER WORDS",
            "questions": [
                {
                    "answer": "What is Duff?",
                    "question": "IT'S HOMER SIMPSON'S FAVORITE BEER",
                    "value": 200
                },
                {
                    "answer": "What is LEGO?",
                    "question": "THE NAME OF THIS INTERLOCKING TOY COMES FROM THE DANISH PHRASE FOR \"PLAY WELL\"",
                    "value": 400
                },
                {
                    "answer": "What is Cube?",
                    "question": "THIS 1997 SCI-FI/HORROR FILM ABOUT A MAZE OF MOVING ROOMS WOULD HAVE MADE ERNO RUBIK PROUD",
                    "value": 600
                },
                {
                    "answer": "What is Rust?",
                    "question": "FACEPUNCH STUDIOS RELEASED AN ALPHA OF THIS MULTIPLAYER SURVIVAL GAME IN DECEMBER 2013",
                    "value": 800
                },
                {
                    "answer": "What is Pure?",
                    "question": "IN 2008, BLACK ROCK STUDIOS CREATED THIS ATV RACING/STUNT GAME FOR DISNEY INTERACTIVE",
                    "value": 1000
                }
            ]
        },
        {
            "name": "POTPOURRI",
            "questions": [
                {
                    "answer": "What is Modern Warfare 2?",
                    "question": "CONTRARY TO REPORTS, THIS 2009 INFINITY WARD SHOOTER WAS NOT BANNED IN RUSSIA - BUT THE AIRPORT LEVEL WAS REMOVED",
                    "value": 200
                },
                {
                    "answer": "What is Assassin's Creed III?",
                    "question": "DESMOND EXPERIENCES THE MEMORIES OF CONNOR IN THIS REVOLUTIONARY TITLE FROM UBISOFT",
                    "value": 400
                },
                {
                    "answer": "Who is Jimmy Olson?",
                    "question": "AS \"SUPERMAN'S PAL,\" THIS DC COMICS PHOTOJOURNALIST HAD HIS OWN COMIC FROM 1954 TO 1974",
                    "value": 600
                },
                {
                    "answer": "What is Adventure Time?",
                    "question": "THE 3DS GAME BASED ON THIS ANIMATED SERIES IS SUBTITLED \"HEY ICE KING! WHY'D YOU STEAL OUR GARBAGE?!\"",
                    "value": 800,
                    "daily-double": true
                },
                {
                    "answer": "What is Pac-Man Fever?",
                    "question": "OTHER SONGS ON THIS BUCKNER & GARCIA ALBUM INCLUDE \"ODE TO A CENTIPEDE\" AND \"DO THE DONKEY KONG\"",
                    "value": 1000
                }
            ]
        }
    ]
  };

  const SINGLE_JEOPARDY = {
      "title": "jeopardy",
      "categories": [
        {
            "name": "ROBOTS",
            "questions": [
                {
                    "answer": "Who is Optimus Prime?",
                    "question": "SPOILER ALERT: HIS DYING WORDS IN THE ANIMATED TRANSFORMERS MOVIE ARE \"TIL ALL ARE ONE\"",
                    "value": 100
                },
                {
                    "answer": "Who is IG-88 or 4-LOM?",
                    "question": "THIS ROBOT BOUNTY HUNTER WAS HIRED TO FIND THE MILLENNIUM FALCON IN THE EMPIRE STRIKES BACK",
                    "value": 200
                },
                {
                    "answer": "What is The Black Hole?",
                    "question": "ROBOTS B.O.B. AND V.I.N.C.E.N.T. PROVIDED SOME COMIC RELIEF IN THIS DARK 1979 DISNEY SCI-FI FILM",
                    "value": 300
                },
                {
                    "answer": "What is Robot Combat League?",
                    "question": "CHRIS JERICHO HOSTED THIS AUTOMATON FIGHTING COMPETITION ON SYFY IN EARLY 2013",
                    "value": 400
                },
                {
                    "answer": "Who is Johnny 5/Number 5?",
                    "question": "HE'S THE ROBOT WHO GETS ELECTROCUTED AND COMES TO LIFE IN 1986'S SHORT CIRCUIT",
                    "value": 500
                }
            ]
        },
        {
            "name": "NICKNAMES",
            "questions": [
                {
                    "answer": "What is Notch?",
                    "question": "MINECRAFT CREATOR MARKUS PERSSON IS BETTER KNOWN BY THIS MONOSYLLABIC NICKNAME",
                    "value": 100
                },
                {
                    "answer": "What is Gabe?",
                    "question": "IT'S THE ALTER EGO OF PENNY ARCADE'S MIKE KRAHULIK - AND THE NAME OF MIKE'S SON",
                    "value": 200
                },
                {
                    "answer": "What is Fwiz?",
                    "question": "ESPORTSCASTER AND MACHINIMA PERSONALITY RYAN WYATT IS BEST KNOWN BY THIS SHORT NICKNAME",
                    "value": 300
                },
                {
                    "answer": "What is Dude Huge?",
                    "question": "IN ADDITION TO \"CLIFFYB\", CLIFF BLESZINSKI IS SOMETIMES KNOWN BY THIS LARGE NICKNAME, BRO",
                    "value": 400
                },
                {
                    "answer": "What is I Dream of Jeannie?",
                    "question": "LARRY HRYB BORROWED HIS GAMERTAG, \"MAJOR NELSON\", FROM THIS 1960S SITCOM",
                    "value": 500
                }
            ]
        },
        {
            "name": "FAMOUS FIRST WORDS",
            "questions": [
                {
                    "answer": "Who is Bender?",
                    "question": "\"BITE MY SHINY METAL ASS\"",
                    "value": 100
                },
                {
                    "answer": "Who is Lando Calrissian?",
                    "question": "\"WHY, YOU SLIMY, DOUBLE-CROSSING, NO-GOOD SWINDLER. YOU GOT A LOT OF GUTS COMING HERE, AFTER WHAT YOU PULLED\"",
                    "value": 200
                },
                {
                    "answer": "Who is Tidus?",
                    "question": "\"LISTEN TO MY STORY. THIS MAY BE OUR LAST CHANCE.\"",
                    "value": 300,
                    "daily-double": true
                },
                {
                    "answer": "Who is Princess Buttercup?",
                    "question": "\"FARMBOY, POLISH MY HORSE'S SADDLE. I WANT TO SEE MY FACE SHINING IN IT BY MORNING\"",
                    "value": 400
                },
                {
                    "answer": "Who is Indiana Jones?",
                    "question": "\"THIS IS IT. THIS IS WHERE FORRESTAL CASHED IN HIS CHIPS\"",
                    "value": 500
                }
            ]
        },
        {
            "name": "GOING \"DARK\"",
            "questions": [
                {
                    "answer": "What is Dark Souls?",
                    "question": "THIS UNFORGIVING ACTION/RPG FROM FROM SOFTWARE TAKES PLACE IN THE KINGDOM OF LORDRAN",
                    "value": 100
                },
                {
                    "answer": "What is Dark Shadows?",
                    "question": "TIM BURTON AND JOHNNY DEPP RESURRECTED THIS LATE-60S VAMPIRE SOAP OPERA AS A COMEDY FILM IN 2012",
                    "value": 200
                },
                {
                    "answer": "What is The Dark Knight Returns?",
                    "question": "THIS CLASSIC FRANK MILLER GRAPHIC NOVEL FEATURES A BITTER, AGING BATMAN AND A FEMALE ROBIN",
                    "value": 300
                },
                {
                    "answer": "What is The Dark Crystal?",
                    "question": "GELFLINGS KIRA AND JEN ESCAPE THE SKEKSIS IN THIS 1982 JIM HENSON CULT FANTASY FAVORITE",
                    "value": 400
                },
                {
                    "answer": "What is Turn Off the Dark?",
                    "question": "THE SPIDER-MAN STAGE MUSICAL, NOW PLAYING ON BROADWAY, FEATURES THIS UNUSUAL SUBTITLE",
                    "value": 500
                }
            ]
        },
        {
            "name": "FICTIONAL COMPANIES",
            "questions": [
                {
                    "answer": "What is Umbrella?",
                    "question": "YOU CAN BLAME THIS FICTIONAL COMPANY FOR RESIDENT EVIL'S T-VIRUS",
                    "value": 100
                },
                {
                    "answer": "What is Tyrell Corporation?",
                    "question": "\"MORE HUMAN THAN HUMAN\" IS THE MOTTO OF THIS REPLICANT MANUFACTURER FROM BLADE RUNNER",
                    "value": 200
                },
                {
                    "answer": "What is Cyberdyne Systems?",
                    "question": "MILES DYSON CREATED NEURAL-NET PROCESSORS FOR THIS COMPANY, WHICH ULTIMATELY BUILDS SKYNET",
                    "value": 300
                },
                {
                    "answer": "What is Omni Consumer Products/OCP?",
                    "question": "THEY OWN ROBOCOP, ED-209, AND THE ENTIRE DETROIT POLICE FORCE",
                    "value": 400
                },
                {
                    "answer": "What is Encom?",
                    "question": "IN TRON, KEVIN FLYNN HACKS HIS WAY INTO THE NETWORK OF THIS FICTIONAL GAME PUBLISHER",
                    "value": 500
                }
            ]
        },
        {
            "name": "PAINFULLY OBVIOUS",
            "questions": [
                {
                    "answer": "Who is Zelda?",
                    "question": "SHE'S THE PRINCESS IN THE CLASSIC RPG THE LEGEND OF ZELDA",
                    "value": 100
                },
                {
                    "answer": "What is Oni?",
                    "question": "BUNGIE'S WORKING TITLE FOR MARATHON WAS MARATHON, BUT ONI'S WORKING TITLE WAS THIS",
                    "value": 200
                },
                {
                    "answer": "What is Divekick?",
                    "question": "THIS TWO-BUTTON FIGHTING GAME STARS TWO GUYS NAMED KICK AND DIVE",
                    "value": 300
                },
                {
                    "answer": "What is Wolfenstein 3D?",
                    "question": "BRODERBUND'S CASTLE WOLFENSTEIN WAS AN INSPIRATION FOR THIS 1992 FIRST-PERSON SHOOTER FROM ID SOFTWARE",
                    "value": 400
                },
                {
                    "answer": "What is Sonic/Dankey Kang?",
                    "question": "THIS VIDEO GAME CHARACTER IS BLUE, COLLECTS RINGS, AND GOES FAST",
                    "value": 500
                }
            ]
        }
    ]
  };
