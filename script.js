function playVideo(elem){
    const media = document.querySelector('#myVideo');
    if(media.paused){
        document.querySelector('.content').style.cursor = 'grabbing';
        media.play();
    }else{
        document.querySelector('.content').style.cursor = 'grab';
        media.pause();
    }
}

