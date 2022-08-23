function playVideo(){
    const media = document.querySelector('#myVideo');
    if(media.paused){
        media.play();
    }else{
        media.pause();
    }
}

