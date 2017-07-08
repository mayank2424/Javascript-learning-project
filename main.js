
            function fancyTimeFormat(time)
            {   
                // Hours, minutes and seconds
                var hrs = ~~(time / 3600);
                var mins = ~~((time % 3600) / 60);
                var secs = time % 60;

                // Output like "1:01" or "4:03:59" or "123:03:59"
                var ret = "";

                if (hrs > 0) {
                    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
                }

                ret += "" + mins + ":" + (secs < 10 ? "0" : "");
                ret += "" + secs;
                return ret;
            }



        //we made the function togglesong() jiske andar song play and pause ka role hain
     function togglesong() {
          var song = document.querySelector('audio');
        if (song.paused == true) {
            //console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        } else {
           // console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
     }    
     function changeCurrentSongDetails(songObj) {
                $('.current-song-image').attr('src','img/' + songObj.image)
                $('.current-song-name').text(songObj.name)
                $('.current-song-album').text(songObj.album)
            }
     
     // in this here we have given another function for current time and song duration
     function updateCurrentTime() {
         // below line means we have selected the audio file
        var song = document.querySelector('audio');
       // console.log(song.currentTime);
        //console.log(song.duration);
        var currentTime = Math.floor(song.currentTime);// Math.floor removes the decimal value and gives only integer value
        currentTime= fancyTimeFormat(currentTime);// fancyTimeFormat shows the time in fancy way:(matlab sundar tarike se dikhatta hain)
        var duration =Math.floor(song.duration);
        duration= fancyTimeFormat(duration);
        $('.time-elapsed').text(currentTime);
        $('.song-duration').text(duration);
        }
        //addSongNameClickEvent(fileName[0]);
        // addSongNameClickEvent(fileNames[0],1);
        // function addSongNameClickEvent(songName ,position) {
        //     var id= "#song" + position; //this line means adding string and another string(it will gove #song1 if we put position as 1)
        //     $(id).click(function() {
        //               var audio =document.querySelector('audio');
        //              var currentSong= audio.src;
        //              if(currentSong.search(songName) !=-1) {
        //                  togglesong();
        //              }
        //              else {
        //                  audio.src= songName;
        //                  togglesong();
        //                 }
        //           });
        // }
        var currentSongNumber=1;
        var willLoop=0;
        var willShuffle=0;
                 var songNumber =1;
            function addSongNameClickEvent(songObj,position) {
                                var songName= songObj.fileNames
                                var id="#song" + position;
                                $(id).click(function() {
                                    var audio= document.querySelector('audio')
                                    var currentSong= audio.src;
                                    if(songNumber!= position) {
                                        // idhar humne audio,srcko equal diya hain song name ke yeh work kkarega jab if statement work  karegi
                                        audio.src= songName;
                                        songNumber=position;
                                        changeCurrentSongDetails(songObj);
                                    }
                                        togglesong();
                                });
                 }
                 
                        function timeJump() {
                         var  song=document.querySelector('audio');
                         song.currentTime = song.duration-5;

                        }
                 var songs =[{   //basically here we have stored objects in array 
                           'name': 'Tamma Tamma song',
                            'artist' : 'Neha kakkar, Monali Thakur , Ikka Singh' ,
                            'album': 'Badrinath Ki Dulhania',
                            'duration': '2:56',
                            'fileNames': 'song1.mp3',
                            'image': 'song1.jpg'
                       },
                        {
                           'name': 'Humma Humma song',
                            'artist' : 'Badshah ,Jubin nautiyal, shasha tripathi' ,
                            'album': 'ok Jannu',
                            'duration': '3:15' ,
                             'fileNames': 'song2.mp3',
                             'image': 'song 2.jpg'
                       },
                        {
                           'name': 'Nashe Si Chad Gayi',
                            'artist' : 'Arijit singh' ,
                            'album': 'Befikre',
                            'duration': '2:34' ,
                             'fileNames': 'song3.mp3',
                             'image': 'song 3.jpg'
                       },
                        
                        
                       {
                           'name': 'Patola',  
                            'artist' : 'Bohemia' ,
                            'album': 'Patola',
                            'duration': '3:28' ,
                             'fileNames': 'song5.mp3',
                             'image': 'song5.jpg'
                       },
                       {
                           'name': 'The Breakup Song',
                            'artist' : 'Nakash Aziz,Arijit singh,Badshah ,jonita gandhi' ,
                            'album': 'Ae dil hain mushkil',
                            'duration': '2:29' ,
                             'fileNames': 'song4.mp3',
                             'image': 'song 4.jpg'
                       },
                       {
                           'name': 'Without You',
                            'artist' : 'David Guetta' ,
                            'album': 'Befikre',
                            'duration': '2:34' ,
                             'fileNames': 'song6.mp3',
                             'image': 'song 3.jpg'
                       },
                       {
                           'name': 'Right Now',
                            'artist' : 'Akon ' ,
                            'album': 'Befikre',
                            'duration': '3:12' ,
                             'fileNames': 'song7.mp3',
                             'image': 'song 3.jpg'
                       }]                       
      // window load matlab jab hamara web page load ho jab function call karna
            window.onload = function() {
                changeCurrentSongDetails(songs[0]);
            //    $(document).ready(function() {
                //function2
                //jab window.load run karega jab hi vo current time show karega
                     
                    updateCurrentTime();
                    // here we set the intervals for  song when it will play
                    setInterval(function() {
                        updateCurrentTime();
                        // here we have given the time intervak for 1 sec :(1sec=1000milisecond)
                    },1000);
                  
                 
                    // var songName1= 'Tamma Tamma song';
                    // var songName2= 'Humma song';
                    // var songName3= 'Nashe si chad gayi';
                    // var songName4= 'The breakup song';
                // var songList= ['Tamma Tamma song','Humma song' ,'Nashe si chad gayi' ,'The breakup song' ]; // idhar humne a array use kara hain kyunki array which stores multiple elements( basically to store multiple files in onr single array)   
                    // $('#song1 .song-name').text(songList[0]);
                    // $('#song2 .song-name').text(songList[1]);
                    // $('#song3 .song-name').text(songList[2]);
                    // $('#song4 .song-name').text(songList[3]);
          
                    // var artistList= ["artist #1", "artist #2" ,"artist #3" ,"artist #4"]; //
                    // $('#song1 .song-artist').text(artistList[0]);
                    // $('#song2 .song-artist').text(artistList[1]);
                    // $('#song3 .song-artist').text(artistList[2]);
                    // $('#song4 .song-artist').text(artistList[3]);
                    //METHOD 1
                    // var albumList=["Badrinath ki dulhania" , "Ok jaanu" , "Befikre" , "Ae dil hain mushkil"]
                    //    var duration=["2:56" , "3:15" ,"2:34" ,"2:29"]
                       
                    for(var i=0; i< songs.length; i++) {
                        var obj= songs[i]; //idhar humne ek variable bana diya 'obj' naam ka usme humne songs wali array file ko store kar diya
                       var name="#song" + (i+1);
                       // is method me humne directly jquery ko kha tun name wale varaible ko select karo or usse song-name and song-artist find karo or display karo
                       $(name).find('.song-name').text(obj.name)
                       $(name).find('.song-artist').text(obj.artist)
                       $(name).find('.song-album').text(obj.album)
                       $(name).find('.song-length').text(obj.duration)
                       addSongNameClickEvent(obj ,i+1)
                    }
                    //METHOD 2 iss methos humne jquery ko kaha tun name wale varaible ko store karke rakho
                    // for(var i=0; i< songList.length; i++) {
                    //    var name="#song" + (i+1);
                    //    var song =$(name); // yeh variable isliye banaya hain to store whole id of #song1 so that usko alag alag nahisearch karna padega
                    //     song.find('.song-name').text(songList[i])
                    //    song.find('.song-artist').text(artistList[i])
                    // }
                // var fileNames=['song1.mp3' ,'song2.mp3' ,'song3.mp3' , 'song4.mp3'];// here also we had use array to store multiple audio files in one single element
                  // in below line we again used 'jquery' for click function 
                //   addSongNameClickEvent(fileNames[0],1);
                //   addSongNameClickEvent(fileNames[1],2);
                //   addSongNameClickEvent(fileNames[2],3);
                //   addSongNameClickEvent(fileNames[3],4);
               
            //     for( var i=0; i< fileNames.length ; i++) {
            //  addSongNameClickEvent(fileNames[i] ,i+1)
            //  }
                //   $('#song1').click(function() {
                //       var audio =document.querySelector('audio'); //Isme humne audio file selext kari hain
                //      var currentSong= audio.src; //humne ek variable banaya or usko audion src de diya
                //      // if condition is searching file name[0] which is song1.mp3 and then it will execute togglesong()
                //      if(currentSong.search(fileNames[0])!=-1) { //if song was already playing dont change it just pause it
                //         // if source of audio element is same it  means song was already present
                //          //-1 ka matlab hain yeh song nahi mila mjhe use file mein
                //          togglesong();
                //      }
                //      else {
                //          audio.src= fileNames[0];
                //          togglesong();
                //       }
                //   });
                //   // jis song par click kare vo song chale isliye humne jquery ka use kara hain click function use karne ke liye
                //   $('#song2').click(function() {
                //       //idhar humne javascript ka use kara hain
                //       var audio =document.querySelector('audio');
                //        var currentSong= audio.src;
                //      if(currentSong.search(fileNames[1])!=-1) {
                //          togglesong();
                //      }
                //      else {
                //          audio.src= fileNames[1];
                //          togglesong();
                //       }
                //   });
                //   $('#song3').click(function() {
                //       var audio =document.querySelector('audio');
                //      var currentSong= audio.src;
                //      if(currentSong.search(fileNames[2])!=-1) {
                //          togglesong();
                //      }
                //      else {
                //          audio.src= fileNames[2];
                //          togglesong();
                //       }
                //   });
                //   $('#song4').click(function() {
                //       var audio =document.querySelector('audio');
                //      var currentSong= audio.src;
                //      if(currentSong.search(fileNames[3])!=-1) {
                //          togglesong();
                //      }
                //      else {
                //          audio.src= fileNames[3];
                //          togglesong();
                //       }
                //   });
                $('#songs').DataTable({
                         paging: false
                     });

                    $('audio').on('ended',function() {
                            var audio = document.querySelector('audio');
                            if(currentSongNumber < 7) {
                                // Play the next song 
                            var nextSongObj = songs[currentSongNumber];
                            audio.src = nextSongObj.fileNames; // Change Soure
                            togglesong(); // Play Next Song
                            changeCurrentSongDetails(nextSongObj); // Update Image
                            currentSongNumber = currentSongNumber + 1; // Change state
                            }
                            else {
                                // Stop Playing
                                $('.play-icon').removeClass('fa-pause').addClass('fa-play')
                                audio.currentTime=0;
                            }
                        });
                     $('.fa-repeat').on('click' ,function() {
                         $('.fa-repeat').toggleClass('disabled');
                        //    $('.fa-random').toggleClass('disabled');
                         willLoop= 1-willLoop;
                        //  willShuffle= 1-willShuffle; 
                     });
                    //  var  song= $('audio');
                    //  if(currentSongNumber < 4) {
                    //      var audio=document.querySelector('audio');
                    //      song.currentTime=song.duration;
                    //  }
                    //      else {

                    //      }
                         
                     

            }
           
           
            
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    $('.play-icon').on('click', function() {
        //function calling
       togglesong();
    });
    $('body').on('keypress', function(event) { //Here we have made object like thing(curly brackets hain na )
        console.log(event);
                 var target=event.target; // idhar humne target tag ki value ko store kara diya
                if (event.keyCode == 32 && target.tagName!= "INPUT") { //here && means and (means both statement should be right)
                    //function call karo
                   togglesong();
                }
            });
           
        //  $('.input').on('click' , function(event) {
        //      if(event.keycode== 32){

        //      }

        //  });